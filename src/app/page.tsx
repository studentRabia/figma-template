// import FutureProduct from "./components/futureProduct";
import ChairLayout from "./components/chairLayout";
import FutureProduct from "./components/futureProduct";
import Hero from "./components/hero";
import LogoSection from "./components/LogoSection";
import Products from "./components/products";
import Titlebar from "./components/titlebar";
import TopCategories from "./components/TopCategories";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoSection />
      <Titlebar title="Featured Products"/>
      <FutureProduct/>

      <Titlebar title="Top categories" />
      <TopCategories />
      <ChairLayout />
      <Titlebar title="Our Product" className="text-center" />
      <Products />
    </div>
  );
}
