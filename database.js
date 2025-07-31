// database.js
const booksDB = [
  {
    id: 'book_whisp_kothi_001',
    title: 'The Whispering Kothi',
    author: 'Sandeep Biswal',
    coverUrl: 'assets/covers/the_whispering_kothi_cover.jpg', 
    fileUrl: 'assets/books/the_whispering_kothi.pdf',
    language: 'English',
    category: 'Horror',
    description: 'In the heart of a forgotten town stands a dilapidated mansion, the Kothi, which holds a chilling secret. Locals speak of whispers that echo through its empty halls at night, luring the curious to their doom. When a group of paranormal investigators decides to uncover the truth, they find themselves trapped in a nightmare woven from the mansion\'s dark past.',
    isFeaturedInSlider: true,
    isBestSeller: true,
    readCount: 157, // I've added a number to demonstrate the trending sort
    createdAt: '2023-10-28T10:00:00Z',
  },
  // To add a new book, copy the object above, change the details, and place it here.
  // Make sure the `id` is unique.
];

const languagesDB = [...new Set(booksDB.map(book => book.language))];
