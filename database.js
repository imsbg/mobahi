// Database containing all books and categories
const booksDB = [
  {
    id: 'whispering_kothi_001',
    title: 'The Whispering Kothi',
    author: 'Sandeep Biswal G',
    tagline: 'A haunting tale that will keep you awake',
    coverUrl: 'assets/covers/the_whispering_kothi_cover.jpg',
    sliderImageUrl: 'assets/covers/the_whispering_kothi_slider.jpg',
    fileUrl: 'assets/books/the_whispering_kothi.pdf',
    category: 'Horror',
    isDownloadable: true,
    isFeaturedInSlider: true,
    listPrice: '99₹',
    yourPrice: 'Free',
    description: 'In the heart of a forgotten town stands a dilapidated mansion, the Kothi, which holds a chilling secret. Locals speak of whispers that echo through its empty halls at night, luring the curious to their doom. When a group of paranormal investigators decides to uncover the truth, they find themselves trapped in a nightmare woven from the mansion\'s dark past.'
  },
  {
    id: 'unknown_camp_002',
    title: 'An Unknown Camp',
    author: 'Sandeep Biswal G',
    tagline: 'Mystery awaits in the wilderness',
    coverUrl: 'assets/covers/unknown_camp_cover.jpg',
    sliderImageUrl: 'assets/covers/unknown_camp_slider.jpg',
    fileUrl: 'assets/books/an_unknown_camp.pdf',
    category: 'Thriller',
    isDownloadable: true,
    isFeaturedInSlider: true,
    listPrice: '109₹',
    yourPrice: 'Free',
    description: 'Deep in the wilderness, a group of hikers stumbles upon an abandoned campsite that shouldn\'t exist on any map. As they investigate, they realize they\'ve walked into something far more sinister than they could have imagined. Time is running out, and escape seems impossible.'
  }
];

const categoriesDB = [
  {
    name: 'Thriller',
    iconUrl: 'assets/covers/category_thriller_icon.jpg'
  },
  {
    name: 'Science fiction',
    iconUrl: 'assets/covers/category_scifi_icon.jpg'
  },
  {
    name: 'Horror',
    iconUrl: 'assets/covers/category_horror_icon.jpg'
  },
  {
    name: 'Kids',
    iconUrl: 'assets/covers/category_kids_icon.jpg'
  },
  {
    name: 'Romance',
    iconUrl: 'assets/covers/category_romance_icon.jpg'
  }
];
