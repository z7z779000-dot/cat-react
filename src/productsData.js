// src/data.js
export const productsData = [
  {
    id: 1,
    title: "Hamlet",
    author: "William Shakespeare",
    price: "$19.99",
    originalPrice: "$24.99",
    img: "/imagg/imag1.jpg",
    rating: 4.8,
    reviews: 1250,
    description: "The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet, is a tragedy written by William Shakespeare.",
    genre: "Tragedy",
    pages: 320,
    language: "English",
    published: 1603,
    isbn: "978-0141396501",
    inStock: true,
    bestseller: true,
    featured: true,
    excerpt: "To be, or not to be: that is the question..."
  },
  {
    id: 2,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "$16.99",
    originalPrice: "$20.99",
    img: "public/image2/imagee.jpg",
    rating: 4.9,
    reviews: 2150,
    description: "Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813.",
    genre: "Romance",
    pages: 432,
    language: "English",
    published: 1813,
    isbn: "978-0141439518",
    inStock: true,
    bestseller: true,
    featured: true
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: "$14.99",
    originalPrice: "$18.99",
    img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=500&fit=crop",
    rating: 4.7,
    reviews: 1850,
    description: "Nineteen Eighty-Four is a dystopian social science fiction novel and cautionary tale by English writer George Orwell.",
    genre: "Dystopian",
    pages: 328,
    language: "English",
    published: 1949,
    isbn: "978-0451524935",
    inStock: true,
    bestseller: true,
    featured: true
  },
  {
    id: 4,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: "$21.99",
    originalPrice: "$26.99",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=500&fit=crop",
    rating: 4.9,
    reviews: 950,
    description: "Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky.",
    genre: "Philosophical Fiction",
    pages: 671,
    language: "Russian",
    published: 1866,
    isbn: "978-0143058144",
    inStock: true,
    bestseller: true,
    featured: true
  },
  {
    id: 5,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$17.99",
    originalPrice: "$22.99",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
    rating: 4.5,
    reviews: 1650,
    description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald.",
    genre: "Tragedy",
    pages: 180,
    language: "English",
    published: 1925,
    isbn: "978-0743273565",
    inStock: true,
    bestseller: true,
    featured: true
  },
  {
    id: 6,
    title: "Moby Dick",
    author: "Herman Melville",
    price: "$22.99",
    originalPrice: "$27.99",
    img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop",
    rating: 4.3,
    reviews: 850,
    description: "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville.",
    genre: "Adventure",
    pages: 635,
    language: "English",
    published: 1851,
    isbn: "978-0142437247",
    inStock: true,
    bestseller: true,
    featured: false
  },
  {
    id: 7,
    title: "War and Peace",
    author: "Leo Tolstoy",
    price: "$24.99",
    originalPrice: "$29.99",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    rating: 4.6,
    reviews: 750,
    description: "War and Peace is a literary work mixed with chapters on history and philosophy by the Russian author Leo Tolstoy.",
    genre: "Historical Fiction",
    pages: 1225,
    language: "Russian",
    published: 1869,
    isbn: "978-1400079988",
    inStock: true,
    bestseller: true,
    featured: false
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: "$18.99",
    originalPrice: "$23.99",
    img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=500&fit=crop",
    rating: 4.8,
    reviews: 1950,
    description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien.",
    genre: "Fantasy",
    pages: 310,
    language: "English",
    published: 1937,
    isbn: "978-0547928227",
    inStock: true,
    bestseller: true,
    featured: true
  },
  {
    id: 9,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    price: "$25.22",
    originalPrice: "$29.99",
    img: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?w=400&h=500&fit=crop",
    rating: 4.9,
    reviews: 5000,
    description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling.",
    genre: "Fantasy",
    pages: 223,
    language: "English",
    published: 1997,
    isbn: "978-0747532743",
    inStock: true,
    bestseller: true,
    featured: true
  }
];

// بيانات المؤلفين للقسم السريع
export const featuredAuthors = [
  {
    id: 1,
    name: "William Shakespeare",
    image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?w=400&h=500&fit=crop",
    description: "English playwright and poet, widely regarded as the greatest writer in the English language.",
    nationality: "British",
    famousWorks: "Hamlet, Romeo & Juliet, Macbeth"
  },
  {
    id: 2,
    name: "Jane Austen",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop",
    description: "English novelist known for her six major novels which interpret the British landed gentry.",
    nationality: "British",
    famousWorks: "Pride & Prejudice, Emma, Sense and Sensibility"
  },
  {
    id: 3,
    name: "Charles Dickens",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop",
    description: "English writer and social critic, regarded as the greatest novelist of the Victorian era.",
    nationality: "British",
    famousWorks: "Oliver Twist, Great Expectations, A Christmas Carol"
  },
  {
    id: 4,
    name: "George Orwell",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=500&fit=crop",
    description: "English novelist, essayist, journalist and critic, known for his dystopian novels.",
    nationality: "British",
    famousWorks: "1984, Animal Farm, Homage to Catalonia"
  },
  {
    id: 5,
    name: "Agatha Christie",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=500&fit=crop",
    description: "English writer known for her detective novels and short story collections.",
    nationality: "British",
    famousWorks: "Murder on the Orient Express, And Then There Were None"
  },
  {
    id: 6,
    name: "Fyodor Dostoevsky",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
    description: "Russian novelist, short story writer, essayist, and journalist.",
    nationality: "Russian",
    famousWorks: "Crime and Punishment, The Brothers Karamazov"
  }
];

// أنواع الكتب للتصفية
export const genres = [
  "All", "Classic", "Fantasy", "Romance", "Dystopian", 
  "Tragedy", "Adventure", "Historical Fiction", "Philosophical Fiction"
];

// إحصائيات الموقع
export const siteStats = {
  totalBooks: 500,
  totalAuthors: 50,
  totalGenres: 15,
  happyCustomers: 10000
};