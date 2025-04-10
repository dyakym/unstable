import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Generation } from "./components/Generation/Generation";
import { Soundscape } from "./components/Soundscape/Soundscape";
import { Enhance } from "./components/Enhance/Enhance";
import { Clouds } from "./components/Clouds/Clouds";
import { Hero } from "./components/Hero/Hero";
import { HoldUp } from "./components/HoldUp/HoldUp";
import { Category } from "./components/Category/Category";

function App() {
  return (
    <div className="app-container relative">
      <Header />

      <Hero />

      <main>
        <div className="relative">
          <div className="absolute top-[-17px] left-0 w-full h-px bg-white/40 z-20"></div>
          <Clouds />
        </div>

        <div className="relative">
          <div className="absolute top-[-17px] left-0 w-full h-px bg-white/40"></div>
          <Category />
        </div>

        <div className="absolute top-0 left-20 md:left-40 xl:left-60 bottom-0 w-px bg-white/40 z-10"></div>
        <div className="absolute top-0 right-20 md:right-40 xl:right-60 bottom-0 w-px bg-white/40 z-10"></div>

        <div className="relative">
          <div className="absolute top-[-17px] left-0 w-full h-px bg-white/40 z-20"></div>
          <Generation />
        </div>
        <div className="relative">
          <div className="absolute top-[-17px] left-0 w-full h-px bg-white/40 z-20"></div>
          <div className="relative bg-[url('/images/bg/8.png')] bg-no-repeat bg-cover">
            <Soundscape />
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-[-17px] left-0 w-full h-px bg-white/40 z-20"></div>
          <Enhance />
        </div>
        <div className="relative">
          <div className="absolute top-[-17px] left-0 w-full h-px bg-white/40 z-20"></div>
          <HoldUp />
        </div>
      </main>

      <div className="relative">
        <div className="absolute top-[-17px] left-0 w-full h-px bg-white/40 z-20"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
