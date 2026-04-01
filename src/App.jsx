import { Suspense, useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Navbar/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import WorkFlow from "./Components/WorkFlow/WorkFlow";
import TransparentPrice from "./Components/Transparent pricing/TransparentPrice";
import ThreeSteps from "./Components/3 Steps/ThreeSteps";
import AllInfos from "./Components/Digital Tools/AllInfos";
import Stats from "./Stats/Stats";

const fetchData = async () => {
  let res = await fetch("/api.json");
  return res.json();
};

function App() {
  const [count, setCount] = useState(0);

  const PromiseData = fetchData();

  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        {/* {HeroBanner Section} */}

        <section className="py-10">
          <Banner></Banner>
        </section>

        {/* {Stats section} */}

        <section className="bg-linear-to-r from-[#4f39f6] to-[#9514fa]  text-white text-center py-[60px]">
          <Stats></Stats>
        </section>

        {/* {Digital Tools & card rendering} */}

        <section>
          <Suspense fallback={<p>Loading..</p>}>
            <AllInfos PromiseData={PromiseData}></AllInfos>
          </Suspense>
        </section>

        {/* {Three Steps} */}

        <section className="bg-[#f9fafc]">
          <ThreeSteps></ThreeSteps>
        </section>

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
