import listOfBooks from "../doc/list-of-books.json";

export const useFilterBooks = (selectedGenres: string[]) => {
  console.log(listOfBooks);

  let key: keyof typeof listOfBooks;

  const filteredBooks = [];
  for (const genre of selectedGenres) {
    for (key in listOfBooks) {
      if (listOfBooks[key].genres.includes(genre)) {
        filteredBooks.push(listOfBooks[key]);
      }
    }
  }
  return filteredBooks;
};
