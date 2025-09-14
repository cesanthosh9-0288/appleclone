import { FaApple, FaSearch, FaShoppingBag } from "react-icons/fa";

function Navbar() {
    const navItems = [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "Entertainment",
        "Accessories",
        "Support"
    ];

    return (
        <nav className="bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <ul className="flex flex-col md:flex-row justify-between items-center h-auto md:h-12 text-sm font-light gap-4 md:gap-6">
                    {/* Apple Logo */}
                    <li className="hover:text-gray-400">
                        <a href="#">
                            <FaApple size={18} />
                        </a>
                    </li>

                    {/* Navigation Items */}
                    {navItems.map((item, index) => (
                        <li key={index} className="hover:text-gray-400">
                            <a href="#">{item}</a>
                        </li>
                    ))}

                    {/* Search Icon */}
                    <li className="hover:text-gray-400">
                        <a href="#">
                            <FaSearch size={16} />
                        </a>
                    </li>

                    {/* Shopping Bag Icon */}
                    <li className="hover:text-gray-400">
                        <a href="#">
                            <FaShoppingBag size={16} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;