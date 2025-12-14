import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';  
import { useEffect } from 'react'; 

export default function Layout() {
 
    
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}