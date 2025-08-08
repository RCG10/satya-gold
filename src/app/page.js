import ContactSection from "./components/contactSection";
import Header from "./components/header";
import LandingHero from "./components/landing";
import LiveGoldPrices from "./components/livePrice";
import PolicySection from "./components/policySection";
import StepsSection from "./components/stepsSection";


export default function Home() {

  // your fetchGoldPrices logic inside useEffect

  return (
    <main>
      <Header />
      <LandingHero />
      <LiveGoldPrices />
      <StepsSection />
      <ContactSection />
      <PolicySection />
    </main>
  );
}
