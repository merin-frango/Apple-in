import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>

            <div className="fixed top-0 z-50 left-0 w-full">
                <navbar className="container flex justify-center items-center gap-9 mt-0 p-2 bg-white">
                    <div>
                        <a href="https://www.apple.com/in" className="hidden text-xl justify-start md:flex  "><FaApple /></a>
                    </div>
                    <div className="hidden md:flex gap-9 text-xs hover:cursor-pointer ">
                        <p>Store</p>
                        <p>Mac</p>
                        <p>iPad</p>
                        <p>iPhone</p>
                        <p>Watch</p>
                        <p>AirPods</p>
                        <p>TV & Home</p>
                        <p>Entertainment</p>
                        <p>Accessories</p>
                        <p>Support</p>
                    </div>

                    <div className="hidden md:flex gap-9 hover:cursor-pointer text-xl drop-shadow-2xl">
                        <p><FiSearch /></p>
                        <p><FiShoppingBag /></p>
                    </div>

                    {/* Mobile View */}

                    <div className="container flex justify-between items-center  p-1 text-2xl md:hidden">
                        <div><p><a href="https://www.apple.com/in"><FaApple /></a></p></div>
                        <div className="flex gap-5">
                            <p><FiSearch /></p>
                            <p><FiShoppingBag /></p>
                            <button className="md:hidden" onClick={() => setMenuOpen(true)}>
                                <FiMenu className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </navbar>
            </div>

            {/* Mobile View */}

            {menuOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 px-6 py-8">
                    <div className="flex justify-between items-center mb-8">
                        <FaApple className="text-black text-xl" />
                        <button onClick={() => setMenuOpen(false)}>
                            <FiX className="text-2xl" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 text-xl">
                        <p>Store</p>
                        <p>Mac</p>
                        <p>iPad</p>
                        <p>iPhone</p>
                        <p>Watch</p>
                        <p>AirPods</p>
                        <p>TV & Home</p>
                        <p>Entertainment</p>
                        <p>Accessories</p>
                        <p>Support</p>
                    </div>
                </div>)}
        </>
    )
}

export default Navbar