import { Link, useLocation } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { motion } from "framer-motion";

import { useFilterBooks } from "../hooks/filter-books";

interface BookCardProps {
  img: string;
  title: string;
  link: string;
}

const BookCard = ({ img, title, link }: BookCardProps) => {
  console.log(img);
  return (
    <div className="flex flex-col">
      <img src={img} className="bg-black h-[25rem] mb-2 rounded-md" />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[24px] text-center">{title}</h1>
        <a href={link} className="font-light hover:underline">
          Visit
        </a>
      </div>
    </div>
  );
};

const BookPage = () => {
  const { state } = useLocation();
  const { genres } = state;

  const filteredBooks = useFilterBooks(genres);
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
        {filteredBooks.map((book: any, key: number) => (
          <BookCard
            key={key}
            img={book.book_image}
            title={book.book_title}
            link={book.book_link}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default BookPage;
