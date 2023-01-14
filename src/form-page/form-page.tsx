import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { FlatTree, motion } from "framer-motion";
import { genres } from "../doc/genres";

interface GenreProps {
  genre: string;
  onCheckChange: (genre: string) => void;
}
const Genre = ({ genre, onCheckChange }: GenreProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const onClick = () => {
    onCheckChange(genre);
    setChecked(!checked);
  };

  return (
    <button
      onClick={onClick}
      className={
        checked
          ? "bg-black text-white rounded-full flex items-center border border-black py-2 px-4 mx-1 mb-2"
          : "rounded-full flex items-center border border-black  py-2 px-4 mx-1 mb-2"
      }
    >
      <p className="font-extrabold ml-2">{genre}</p>
    </button>
  );
};

const FormPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<boolean>(false);

  const [checkedGenres, setCheckedGenres] = useState<string[]>([]);

  const onCheckChange = (genre: string) => {
    const genreIndex = checkedGenres.indexOf(genre);
    const newCheckedGenres = [...checkedGenres];
    if (genreIndex === -1) {
      newCheckedGenres.push(genre);
    } else {
      newCheckedGenres.splice(genreIndex, 1);
    }
    setCheckedGenres(newCheckedGenres);
  };

  const onSumbit = () => {
    if (checkedGenres.length === 0) {
      setError(true);
    } else {
      navigate("/books", { state: { genres: checkedGenres } });
    }
  };

  return (
    <motion.div
      className="w-full h-[90%] flex flex-col items-center p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ delay: 0.2 }}
    >
      <Link className="absolute left-[5%] flex items-center group" to="/">
        <IoArrowBackCircle size={24} />
        <p className="text-[20px] font-semibold ml-3 transition-all group-hover:ml-1">
          Retourner
        </p>
      </Link>
      <h1 className="font-bold text-[24px]">Pour trouver vos livres...</h1>
      <h2 className="text-[20px]">
        Parmi les genres en-dessous, selectionnez vos préférés.
      </h2>
      <div className="w-[60%] h-[70%] overflow-hidden overflow-y-auto flex items-center p-5 rounded mt-5 flex-wrap">
        {genres.map((genre: string, key: number) => (
          <Genre key={key} genre={genre} onCheckChange={onCheckChange} />
        ))}
      </div>
      {error ? (
        <h1 className="text-red-500 font-bold mt-5">
          Vous devez au moins en selectionnez un genre
        </h1>
      ) : (
        <h1 className="mt-5"></h1>
      )}
      <button
        className="rounded-lg px-5 py-2 text-[20px] bg-black text-white font-bold hover:opacity-60 mt-5"
        onClick={onSumbit}
      >
        Soumettre
      </button>
    </motion.div>
  );
};

export default FormPage;
