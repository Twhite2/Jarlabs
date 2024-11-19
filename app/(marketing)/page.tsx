import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Features from "@/features/marketing/components/Features";
import MarketingHomepage from "@/features/marketing/components/MarketingHomepage";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <MarketingHomepage />
      <Features />
      <Footer />
    </main>
  );
}
