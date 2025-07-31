// database.js
const booksDB = [
  {
    id: 'book_whisp_kothi_001',
    title: 'The Whispering Kothi',
    author: 'Sandeep Biswal G',
    tagline: 'They entered the house, but only fear came out...',
    coverUrl: 'assets/covers/the_whispering_kothi_cover.jpg',
    sliderImageUrl: 'assets/covers/the_whispering_kothi_slider.jpg',
    fileUrl: 'assets/books/the_whispering_kothi.pdf',
    language: 'English',
    category: 'Horror',
    isDownloadable: true,
    listPrice: '99₹',
    yourPrice: 'Free',
    description: 'In the heart of a forgotten town stands a dilapidated mansion, the Kothi, which holds a chilling secret...',
  },
  {
    id: 'book_unknown_camp_002',
    title: 'An Unknown Camp',
    author: 'Sandeep Biswal G',
    tagline: 'Some places are best left undiscovered.',
    coverUrl: 'assets/covers/unknown_camp_cover.jpg',
    sliderImageUrl: 'assets/covers/unknown_camp_slider.jpg',
    fileUrl: 'assets/books/unknown_camp.pdf',
    language: 'English',
    category: 'Thriller',
    isDownloadable: false,
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
