// src/lib/fetchGoldPrices.js

export async function fetchGoldPrices(diff22, diff24) {
  const API_KEY = "2e28b5dd263a68221d7c2700dc93c845";
  const API_URL = `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=XAU&currencies=INR`;

  try {
    const res = await fetch(API_URL);
    // const data = await res.json();
    const data = {"success":true,"base":"XAU","timestamp":1754092799,"rates":{"INR":287642.9945633824,"XAUINR":0.0000034765}}

    if (!data.success || !data.rates?.INR) {
      throw new Error("Failed to fetch gold price");
    }

    // Step 1: Calculate price per gram
    const inrPerOunce = data.rates.INR;
    const gramsPerOunce = 31.1035;
    const basePricePerGram = inrPerOunce / gramsPerOunce; // 24K base price

    // Step 2: Generate 12-hour time series (mocked with fluctuation)
    const hours = [...Array(12)].map((_, i) => {
      const hour = new Date();
      hour.setHours(hour.getHours() - (11 - i));
      return hour.toLocaleTimeString('en-IN', { hour: 'numeric', hour12: true });
    });

    const fluctuations = hours.map((h, i) => {
      const fluctuation = Math.floor(Math.random() * 40 - 20); // ±20 rupees
      const price24 = Math.round(basePricePerGram + fluctuation - diff24);
      const price22 = Math.round(price24 - diff22);
      return {
        time: h,
        price24,
        price22,
      };
    });

    const latest = fluctuations[fluctuations.length - 1];

    return {
      chartData: fluctuations,
      currentPrices: {
        price24: latest.price24,
        price22: latest.price22,
      },
    };
  } catch (error) {
    return {
      chartData: [],
      currentPrices: {
        price24: 0,
        price22: 0,
      },
    };
  }
}
