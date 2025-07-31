// database.js
const booksDB = [
  {
    id: 'book_whisp_kothi_001',
    title: 'The Whispering Kothi',
    author: 'Sandeep Biswal', // Or the actual author
    coverUrl: 'assets/covers/the_whispering_kothi_cover.jpg', 
    fileUrl: 'assets/books/the_whispering_kothi.pdf',
    language: 'English', // The language the book is written in
    category: 'Horror',
    description: 'In the heart of a forgotten town stands a dilapidated mansion, the Kothi, which holds a chilling secret. Locals speak of whispers that echo through its empty halls at night, luring the curious to their doom. When a group of paranormal investigators decides to uncover the truth, they find themselves trapped in a nightmare woven from the mansion\'s dark past.',
    isFeaturedInSlider: true,
    isBestSeller: true,
    readCount: 0, // Starts at 0
    createdAt: '2023-10-28T10:00:00Z', // Use current date when you add a new book
  },
  // When you have a new book, you will add its details here.
  // For example:
  // {
  //   id: 'book_new_002',
  //   title: 'Another Book Title',
  //   ...
  // },
];

const languagesDB = [...new Set(booksDB.map(book => book.language))];
const categoriesDB = [...new Set(booksDB.map(book => book.category))];