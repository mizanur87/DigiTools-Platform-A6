import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Navbar/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import WorkFlow from "./Components/WorkFlow/WorkFlow";
import TransparentPrice from "./Components/Transparent pricing/TransparentPrice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        {/* {HeroBanner Section} */}
        {/* <Banner></Banner> */}

        {/* {Transparent Price section} */}
        <section className="bg-[#f9fafc]">
          <TransparentPrice></TransparentPrice>
        </section>

        {/* {WorkFlow} */}
        <section className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] ">
          <WorkFlow></WorkFlow>
        </section>
      </main>
      {/* {Footer} */}
      <footer className="bg-[#101727] ">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
