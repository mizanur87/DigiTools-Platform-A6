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
import Selectedcart from "./Components/Digital Tools/Selectedcart";
import Tab from "./Components/Digital Tools/Tab";
import { toast, ToastContainer } from "react-toastify";

const fetchData = async () => {
  let res = await fetch("/api.json");
  return res.json();
};

function App() {
  const PromiseData = fetchData();

  const [toggle, setToggle] = useState("available");

  const [selected, setSelected] = useState([]);
  const totalPrice = selected.reduce((sum, running) => sum + running.price, 0);
  function choose(obj) {
    setSelected((prev) => [...prev, obj]);

    toast.success("Added to cart");
    // console.log(selected);
  }

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

        <Tab selected={selected} toggle={toggle} setToggle={setToggle}></Tab>
        <section>
          {toggle === "available" ? (
            <Suspense fallback={<p>Loading..</p>}>
              <AllInfos
                choose={choose}
                toggle={toggle}
                PromiseData={PromiseData}
                setToggle={setToggle}
              ></AllInfos>
            </Suspense>
          ) : (
            <Selectedcart
              setSelected={setSelected}
              totalPrice={totalPrice}
              selected={selected}
            ></Selectedcart>
          )}
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

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
