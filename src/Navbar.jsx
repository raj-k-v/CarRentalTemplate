import './Navbar.css'
import { useState } from 'react';

function Navbar() {
    // change nav color when scrolling
    const [navBackground, setNavBackground] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavBackground(true);
        } else {
            setNavBackground(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <div>
                <div className={`bar transition duration-500 ${navBackground ? 'pointer-events-none -translate-y-full opacity-0' : "opacity-100 translate-y-0"}`}>
                    <nav className="px-2 w-full flex items-center justify-between">

                        {/* Logo */}
                        <div
                            className={`
                                text-[#edaa3e] font-extrabold text-3xl transition-all duration-400 
                                font-stretch-70% group p-2 hover:scale-90 tracking-widest cursor-pointer
                            `}
                        >
                            <span className="transition duration-300 group-hover:text-white">R</span>
                            <span className="text-white">entR</span>
                            <span className="transition duration-300 group-hover:text-white">ide</span>
                        </div>

                        {/* Menu */}
                        <ul className="md:flex hidden gap-1 text-white">
                            <li className="transition duration-300 hover:cursor-pointer hover:text-white rounded-xl py-2 px-3 text-[#edaa3e] hover:scale-95">
                                Home
                            </li>
                            <a href="#end"><li className="transition duration-300 hover:cursor-pointer hover:text-[#edaa3e] rounded-xl py-2 px-3 hover:scale-95">
                                About us
                            </li></a>
                            <a href="#end"><li className="transition duration-300 hover:cursor-pointer hover:text-[#edaa3e] rounded-xl py-2 px-3 hover:scale-95">
                                Contact
                            </li></a>
                            <li className="transition duration-300 hover:cursor-pointer hover:text-[#edaa3e] rounded-xl py-2 px-3 hover:scale-95">
                                Services
                            </li>

                            <a href=""><div
                                className={`

                                    hidden md:block text-white transition duration-300 
                                    rounded-3xl cursor-pointer hover:border px-4 py-2 
                                    border-white border hover:border-[#f5b754] 
                                    hover:text-black hover:bg-[#f5b754]
                                `}
                            >
                                <div >Login / Signup</div>
                            </div></a>
                        </ul>

                        {/* Mobile Menu Icon */}
                        <div className="md:hidden text-white text-3xl">
                            <a href="#">&#8801;</a>
                        </div>
                    </nav>
                </div>

            {/* On scroll bar */}
            <div className={` glass-nav transition duration-500 ${navBackground ? "opacity-100 translate-y-0" :"-translate-y-full opacity-0" }`}>
                <ul className="md:flex bg-[rgba(44,37,37,0.12)] backdrop-blur-[7px] px-4 py-2 rounded-full hidden gap-5 text-white">
                    <li className="transition duration-300 hover:cursor-pointer hover:text-white rounded-xl py-2 px-3 text-[#edaa3e] hover:scale-95">
                        Home
                    </li>

                    <li className="transition duration-300 hover:cursor-pointer hover:text-[#edaa3e] rounded-xl py-2 px-3 hover:scale-95">
                        About us
                    </li>

                    <li className="transition duration-300 hover:cursor-pointer hover:text-[#edaa3e] rounded-xl py-2 px-3 hover:scale-95">
                        Contact
                    </li>

                    <li className="transition duration-300 hover:cursor-pointer hover:text-[#edaa3e] rounded-xl py-2 px-3 hover:scale-95">
                        Services
                    </li>
                    <li className="group  transition duration-300 hover:cursor-pointer hover:text-[#edaa3e] rounded-xl py-2 px-3 hover:scale-95">
                        Listings&nbsp;&nbsp;
                        <span className='inline-block duration-500 group-hover:-rotate-180 text-[15px]'>&#x25BC;</span>
                    </li>
                </ul>
            </div>

            </div>   
            


        </>
    );
}

export default Navbar;
