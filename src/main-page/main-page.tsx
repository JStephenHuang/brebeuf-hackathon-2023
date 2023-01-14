import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAPIClient } from "../hooks/api-client";
import { useEffect } from "react";

const MainPage = () => {
  const client = useAPIClient();

  useEffect(() => {
    client
      .get("https://dog.ceo/api/breeds/image/random")
      .then((value) => console.log(value));
  }, []);

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
            className="py-3 px-7 bg-blue-600 text-white font-bold hover:bg-blue-700 rounded-lg text-[20px]"
            to="/form"
          >
            Commencez a répondre
          </Link>
        </div>
        <div className="h-[80%] w-1/2 bg-black rounded-l-lg"></div>
      </div>
    </motion.div>
  );
};

export default MainPage;
