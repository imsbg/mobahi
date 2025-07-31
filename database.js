// database.js
const booksDB = [
  {
    id: 'book_whisp_kothi_001',
    title: 'The Whispering Kothi',
    author: 'Sandeep Biswal G',
    tagline: 'They entered the house, but only fear came out...',
    coverUrl: 'assets/covers/whispering_kothi_cover.jpg', // Path to the book cover
    fileUrl: 'assets/books/whispering_kothi.pdf',       // Path to the PDF file
    language: 'English',
    category: 'Horror',
    listPrice: '99₹',   // The original price (string)
    yourPrice: 'Free',  // The current price (string)
    description: 'In the heart of a forgotten town stands a dilapidated mansion, the Kothi, which holds a chilling secret. Locals speak of whispers that echo through its empty halls at night, luring the curious to their doom. When a group of paranormal investigators decides to uncover the truth, they find themselves trapped in a nightmare woven from the mansion\'s dark past.',
    isFeaturedInSlider: true,
  },
  {
    id: 'book_unknown_camp_002',
    title: 'An Unknown Camp',
    author: 'Sandeep Biswal G',
    tagline: 'Some places are best left undiscovered.',
    coverUrl: 'assets/covers/unknown_camp_cover.png', // A different cover for the second book
    fileUrl: 'assets/books/unknown_camp.pdf',     // A different PDF
    language: 'English',
    category: 'Thriller',
    listPrice: '199₹',
    yourPrice: 'Free',
    description: 'A weekend camping trip turns into a desperate struggle for survival when a group of friends stumbles upon a deserted campsite with an unsettling history. As night falls, they realize they are not alone, and the camp\'s dark secrets are eager to claim new victims.',
    isFeaturedInSlider: false,
  },
  // Add more books here
];

// This will be used to generate the category circles on the homepage
const categoriesDB = [
    { name: 'Thriller', iconUrl: 'assets/covers/category_thriller.jpg' },
    { name: 'Science fiction', iconUrl: 'assets/covers/category_scifi.jpg' },
    { name: 'Horror', iconUrl: 'assets/covers/category_horror.jpg' },
    { name: 'Kids', iconUrl: 'assets/covers/category_kids.jpg' },
    { name: 'Romance', iconUrl: 'assets/covers/category_romance.jpg' }
];

const languagesDB = [...new Set(booksDB.map(book => book.language))];
