// =================================================================
// Mo Bahi - Database File
// Contains all book and category information for the app.
// =================================================================

const booksDB = [
    {
        id: 'whispering_kothi_001',
        title: 'The Whispering Kothi',
        author: 'Sandeep Biswal G',
        tagline: 'A haunting tale that will keep you awake',
        coverUrl: 'assets/covers/the_whispering_kothi_cover.jpg',       // IMPORTANT: Make sure this image exists
        sliderImageUrl: 'assets/covers/the_whispering_kothi_slider.jpg', // IMPORTANT: Make sure this image exists
        fileUrl: 'assets/books/the_whispering_kothi.pdf',                // IMPORTANT: Make sure this PDF exists
        category: 'Horror',
        isDownloadable: true,
        isFeaturedInSlider: true,
        listPrice: '₹99',
        yourPrice: 'Free',
        description: 'In the heart of a forgotten town stands a dilapidated mansion, the Kothi, which holds a chilling secret. Locals speak of whispers that echo through its empty halls at night, luring the curious to their doom.'
    }
    // You can add more books here later
];

const categoriesDB = [
    { name: 'Horror', iconUrl: 'assets/covers/category_horror_icon.jpg' }
    // You can add more categories here later
];
