import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import LoginProvider from "./contexts/LoginContextProvider";import { loginContext } from "./contexts/LoginContextProvider";


function RootLayout() {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "90vh" }}>
        
          <Outlet  />
       
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
