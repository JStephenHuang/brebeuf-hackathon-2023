import { Link, useLocation } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { motion } from "framer-motion";

interface BookCardProps {
  img: string;
  title: string;
  author: string;
  publisher: string;
}

const BookCard = ({ img, title, author, publisher }: BookCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-black h-[20rem] mb-2" />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[24px]">{title}</h1>
        <h2 className="font-light text-[12px] text-center">
          {author}, {publisher}
        </h2>
      </div>
    </div>
  );
};

const BookPage = () => {
  const { state } = useLocation();
  const { genres } = state;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ delay: 0.2 }}
      className="w-full h-[90%] flex flex-col items-center p-5"
    >
      <Link className="absolute left-[5%] flex items-center group" to="/form">
        <IoArrowBackCircle size={24} />
        <p className="text-[20px] font-semibold ml-3 transition-all group-hover:ml-1">
          Rechoisissez
        </p>
      </Link>
      <h1 className="font-bold text-[24px] mb-5">Vos genres:</h1>

      <div className="w-[60%] flex justify-center flex-wrap">
        {genres.map((genre: string, key: number) => (
          <div
            key={key}
            className="rounded-full text-white bg-black py-2 px-4 font-bold mx-1 mb-2"
          >
            {genre}
          </div>
        ))}
      </div>
      <h1 className="font-bold text-[24px] mt-3 mb-5">Vos livres:</h1>
      <div className="grid grid-cols-4 gap-5 w-[80%]">
        <BookCard
          img=""
          title="Art of war"
          author="Sun Tzu, Andrew Wilson"
          publisher="Simon & Schuster."
        />
      </div>
    </motion.div>
  );
};

export default BookPage;
