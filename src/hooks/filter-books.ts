import listOfBooks from "../doc/list-of-books.json";

export const useFilterBooks = (selectedGenres: string[]) => {
  console.log(listOfBooks);

  let key: keyof typeof listOfBooks;

  const filteredBooks: Array<{
    book_title: string;
    book_image: string;
    book_link: string;
  }> = [];
  for (const genre of selectedGenres) {
    for (key in listOfBooks) {
      if (
        listOfBooks[key].genres.includes(genre) &&
        filteredBooks.indexOf(listOfBooks[key]) === -1
      ) {
        filteredBooks.push(listOfBooks[key]);
      }
    }
  }
  return filteredBooks;
};
