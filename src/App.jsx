import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Navbar/Banner/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div>
        {/* {HeroBanner Section} */}
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
