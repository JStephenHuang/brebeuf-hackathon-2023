import { useState } from "react";
import { genres } from "../doc/genres";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface GenreProps {
  genre: string;
  onCheckChange: (genre: string) => void;
}
const Genre = ({ genre, onCheckChange }: GenreProps) => {
  return (
    <label
      htmlFor={`${genre}-checkbox`}
      className="rounded-lg flex items-center w-full p-6 border border-black mb-5"
    >
      <input
        className="appearance-none border-black border bg-gray-100 w-5 h-5 checked:bg-blue-500 rounded"
        id={`${genre}-checkbox`}
        type="checkbox"
        onChange={() => onCheckChange(genre)}
      />
      <p className="text-[20px] font-extrabold ml-2">{genre}</p>
    </label>
  );
};

const FormPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<boolean>(false);

  const [checkedGenres, setCheckedGenres] = useState<string[]>([]);

  const onCheckChange = (genre: string) => {
    console.log(genre);
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
      <h1 className="font-bold text-[24px]">Pour trouver vos livres...</h1>
      <h2 className="text-[20px]">
        Parmi les genres en-dessous, selectionnez vos preferes.
      </h2>
      <div className="w-[50%] h-[80%] overflow-hidden overflow-y-auto flex flex-col items-center p-5 rounded mt-5">
        {genres.map((genre: string, key: number) => (
          <Genre key={key} genre={genre} onCheckChange={onCheckChange} />
        ))}
        {error ? (
          <h1 className="text-red-500 mb-5 font-bold">
            Vous devez au moins en selectionnez un genre
          </h1>
        ) : null}
        <button
          className="rounded-lg px-5 py-2 text-[20px] bg-blue-600 text-white font-bold hover:bg-blue-700"
          onClick={onSumbit}
        >
          Soumettre
        </button>
      </div>
    </motion.div>
  );
};

export default FormPage;
