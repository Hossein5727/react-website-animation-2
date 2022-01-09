import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from './layout/Layout'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
import AuthProvider from "./providers/AuthProvider";
AOS.init();


function App() {

  const [isHome, setIsHome] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") setIsHome(true)
    else setIsHome(false)
  }, [isHome, location])

  return (

    <AuthProvider>
      <Layout isHome={isHome}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
