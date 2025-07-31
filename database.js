// database.js
const booksDB = [
  {
    id: 'book_whisp_kothi_001',
    title: 'The Whispering Kothi',
    author: 'Sandeep Biswal G',
    tagline: 'They entered the house, but only fear came out...',
    // CRITICAL: Make sure these paths are correct.
    coverUrl: 'assets/covers/whispering_kothi_cover.jpg',  // For the book card
    sliderImageUrl: 'assets/covers/whispering_kothi_slider.jpg', // For the top slider (16:9 ratio)
    fileUrl: 'assets/books/whispering_kothi.pdf',
    language: 'English',
    category: 'Horror',
    isDownloadable: true, // Set to `false` to hide the download button
    listPrice: '99₹',
    yourPrice: 'Free',
    description: 'In the heart of a forgotten town stands a dilapidated mansion, the Kothi, which holds a chilling secret...', // Shortened for brevity
  },
  {
    id: 'book_unknown_camp_002',
    title: 'An Unknown Camp',
    author: 'Sandeep Biswal G',
    tagline: 'Some places are best left undiscovered.',
    coverUrl: 'assets/covers/unknown_camp_cover.jpg',
    sliderImageUrl: 'assets/covers/unknown_camp_slider.jpg', // Use a different, wide image
    fileUrl: 'assets/books/unknown_camp.pdf',
    language: 'English',
    category: 'Thriller',
    isDownloadable: false, // This book's download button will be hidden
    listPrice: '199₹',
    yourPrice: 'Free',
    description: 'A weekend camping trip turns into a desperate struggle for survival when friends stumble upon a deserted campsite...',
  },
];

const categoriesDB = [
    { name: 'Thriller', iconUrl: 'assets/covers/category_thriller.jpg' },
    { name: 'Science fiction', iconUrl: 'assets/covers/category_scifi.jpg' },
    { name: 'Horror', iconUrl: 'assets/covers/category_horror.jpg' },
    { name: 'Kids', iconUrl: 'assets/covers/category_kids.jpg' },
    { name: 'Romance', iconUrl: 'assets/covers/category_romance.jpg' }
];

const languagesDB = [...new Set(booksDB.map(book => book.language))];
