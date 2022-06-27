import Navbar from "./Components/Navbar";
import Aside from "./Components/Aside";
import Dashboard from "./Pages/Dashboard";
import FormsResponce from "./Pages/FormsResponce";
import DisplayCharts from "./Pages/DisplayCharts";
import Orders from "./Pages/Orders";
import MyProfile from "./Pages/MyProfile";
import BooksDetail from "./Pages/BooksDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Aside />
        <div className="Articals">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Forms" element={<FormsResponce />} />

            <Route path="/salles" element={<DisplayCharts />} />

            <Route path="/orders" element={<Orders />} />
            <Route path="/Profiles" element={<MyProfile />} />
            <Route path="/Books" element={<BooksDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
