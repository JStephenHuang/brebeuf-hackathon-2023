import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <motion.div
      className="w-screen h-[90%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ delay: 0.2 }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-1/2 h-[80%] px-10">
          <p className="text-[70px] font-extrabold">
            Commencez en répondant à un formulaire.
          </p>
          <p className="text-[20px] w-full mb-10">
            Choisissez vos genres préfèrés et recevez des milliers de
            suggestions de nos meilleurs livres.
          </p>
          <Link
            className="py-3 px-7 bg-black text-white font-bold hover:opacity-60 rounded-lg text-[20px]"
            to="/form"
          >
            Commencez a répondre
          </Link>
        </div>
        <div className="h-[80%] w-1/2 bg-black rounded-l-lg bg-[url('https://i.pinimg.com/564x/87/92/8a/87928af9d10872e36f5f16f530484bc9.jpg')] bg-cover bg-center"></div>
      </div>
    </motion.div>
  );
};

export default MainPage;
