'use client';
import { useState, useEffect } from "react";
import GoldPriceChart from "./goldPriceChart";
import { fetchGoldPrices } from "../lib/fetchGoldPrice";
import "./liveGoldPrices.css";

const LiveGoldPrices = () => {
  const [chartData, setChartData] = useState([]);
  const [currentPrices, setCurrentPrices] = useState({ price24: 0, price22: 0 });
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const loadGoldPrices = async () => {
      setLoading(true);
      const { chartData, currentPrices, lastUpdated } = await fetchGoldPrices(200,150);
      setChartData(chartData);
      setCurrentPrices(currentPrices);
      setLastUpdated(lastUpdated);
      setLoading(false);
    };

    loadGoldPrices();
    
    // Update prices every 5 minutes
    const interval = setInterval(loadGoldPrices, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatLastUpdated = (timestamp) => {
    if (!timestamp) return '';
    return new Date(timestamp).toLocaleString('en-IN', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  return (
    <section id="price-chart" className="gold-prices-section">
      <div className="gold-prices-container">
        <div className="section-header">
          <h2 className="section-title">Live Gold Prices</h2>
          <p className="section-subtitle">Real-time gold rates updated every 5 minutes</p>
          {lastUpdated && (
            <span className="last-updated">
              Last updated: {formatLastUpdated(lastUpdated)}
            </span>
          )}
        </div>

        <div className="price-cards">
          <div className="price-card gold-24k">
            <div className="price-card-header">
              <div className="price-icon">
                <div className="gold-bar"></div>
              </div>
              <h3>24K Gold</h3>
              <span className="purity">99.9% Pure</span>
            </div>
            <div className="price-value">
              {loading ? (
                <div className="price-skeleton"></div>
              ) : (
                <span className="price">{formatPrice(currentPrices.price24)}</span>
              )}
              <span className="price-unit">per gram</span>
            </div>
          </div>

          <div className="price-card gold-22k">
            <div className="price-card-header">
              <div className="price-icon">
                <div className="gold-bar"></div>
              </div>
              <h3>22K Gold</h3>
              <span className="purity">91.6% Pure</span>
            </div>
            <div className="price-value">
              {loading ? (
                <div className="price-skeleton"></div>
              ) : (
                <span className="price">{formatPrice(currentPrices.price22)}</span>
              )}
              <span className="price-unit">per gram</span>
            </div>
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header">
            <h3>Price Trend (Last 12 Hours)</h3>
          </div>
          <div className="chart-wrapper">
            {loading ? (
              <div className="chart-skeleton">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
              </div>
            ) : (
              <GoldPriceChart chartData={chartData} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveGoldPrices;
