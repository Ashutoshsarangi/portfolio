import { Outlet } from "react-router-dom";
import Footer from "./portfolio/component/footer/footer";
import Header from "./portfolio/component/Header/header";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
