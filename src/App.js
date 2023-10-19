import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Registerbtn from "./components/Registerbtn";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/register" element={<Registerbtn />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
