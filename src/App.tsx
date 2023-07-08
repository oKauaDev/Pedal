import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Bikes from "./pages/Bikes/Bikes";
import Bike from "./pages/Bike/Bike";
import { ContextProvider } from "./contexts/Context";
import Payment from "./pages/Payment/Payment";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="bikes" element={<Bikes />} />
          <Route path="bikes/:bike" element={<Bike />} />
          <Route path="payment/*" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
