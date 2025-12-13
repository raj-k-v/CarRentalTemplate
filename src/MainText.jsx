import './MainText.css';
import Navbar from './Navbar';
import Review from './Review.jsx';

function MainText() {
    return (
        <>
            <div className="bg-[#1b1b1b]">

                <div className="relative h-screen z-0 w-full bg-[url('https://images.pexels.com/photos/29057714/pexels-photo-29057714.jpeg')] bg-no-repeat bg-center bg-cover">

                    {/* Overlay */}
                    <div className="absolute inset-0 z-7 bg-black/50"></div>

                    <div className="grid grid-cols-[10%_37%_53%] relative z-10">

                        <h1 className="text-4xl"></h1>

                        <div className="mt-80 text-[#edaa3e]">

                            <h1 className="text-[85px] font-bold text-white">
                                Rental&nbsp;
                                <span
                                    className="
                                        relative inline-block text-transparent text-[90px] text-stroke-w font-bold 
                                        before:content-['Car'] before:absolute before:w-0 before:h-full before:overflow-hidden 
                                        before:transition-all before:duration-700 hover:before:w-full before:text-white
                                    "
                                >
                                    Car
                                </span>
                            </h1>

                            <div className="flex mt-10 gap-7">

                                <a href="#"
                                    className="
                                        hidden md:block font-light text-black transition duration-300 rounded-full 
                                        bg-[#f5b754] cursor-pointer hover:border px-10 py-4 border-[#f5b754] border 
                                        hover:border-white hover:text-black hover:bg-white group
                                    "
                                >
                                    <span className='group-hover:text-[#f5b754] duration-300'>R</span>ent R<span className='group-hover:text-[#f5b754] duration-300'>ide</span>&nbsp;&nbsp;&nbsp;
                                    <span className="inline-block duration-500 group-hover:rotate-45">
                                        &#8599;
                                    </span>
                                </a>

                                <div
                                    className="
                                        hidden md:block font-light text-white transition duration-300 rounded-full 
                                        cursor-pointer hover:border px-10 py-4 border-white border hover:border-[#f5b754] 
                                        hover:text-black hover:bg-[#f5b754] group
                                    "
                                >
                                    Get Details&nbsp;&nbsp;&nbsp;
                                    <span className="inline-block duration-500 group-hover:rotate-45">
                                        &#8599;
                                    </span>
                                </div>

                            </div>
                        </div>

                        <div></div>

                    </div>
                </div>

                <Review />
            </div>


        </>
    );
}

export default MainText;
