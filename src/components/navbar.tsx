import { GiOpenBook } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="w-full h-[10%] shadow-md flex justify-center">
      <Link to="/" className="flex items-center">
        <p className="font-extrabold text-[24px] mr-2">Bookapedia</p>
        <GiOpenBook size={24} />
      </Link>
    </div>
  );
};

export default Navbar;
