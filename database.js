// Database containing all books and categories
const booksDB = [
  {
    id: 'whispering_kothi_001',
    title: 'The Whispering Kothi',
    author: 'Sandeep Biswal G',
    tagline: 'A haunting tale that will keep you awake',
    coverUrl: 'assets/covers/whispering_kothi_cover.jpg',
    sliderImageUrl: 'assets/covers/whispering_kothi_slider.jpg',
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
  },
  {
    id: 'space_odyssey_003',
    title: 'Cosmic Journey',
    author: 'Alex Johnson',
    tagline: 'Explore the infinite cosmos',
    coverUrl: 'assets/covers/cosmic_journey_cover.jpg',
    sliderImageUrl: 'assets/covers/cosmic_journey_slider.jpg',
    fileUrl: 'assets/books/cosmic_journey.pdf',
    category: 'Science fiction',
    isDownloadable: false,
    isFeaturedInSlider: false,
    listPrice: '149₹',
    yourPrice: '99₹',
    description: 'A thrilling adventure through space and time, where humanity discovers they are not alone in the universe. Join Captain Sarah Chen as she leads her crew on a mission that will change the fate of all mankind.'
  },
  {
    id: 'little_adventures_004',
    title: 'Little Adventures',
    author: 'Emma Wilson',
    tagline: 'Fun stories for curious minds',
    coverUrl: 'assets/covers/little_adventures_cover.jpg',
    sliderImageUrl: 'assets/covers/little_adventures_slider.jpg',
    fileUrl: 'assets/books/little_adventures.pdf',
    category: 'Kids',
    isDownloadable: true,
    isFeaturedInSlider: false,
    listPrice: '79₹',
    yourPrice: 'Free',
    description: 'A collection of delightful short stories perfect for young readers. Follow brave little heroes as they discover magic in everyday adventures and learn valuable lessons along the way.'
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
