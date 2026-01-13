// ملف بيانات المنتجات فقط (8-9 منتجات)
export const productsData = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
    price: "$999",
    description: "Latest Apple smartphone with advanced camera"
  },
  {
    id: 2,
    name: "MacBook Air M2",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
    price: "$1199",
    description: "Thin and powerful Apple laptop"
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
    price: "$849",
    description: "Android flagship smartphone"
  },
  {
    id: 4,
    name: "Sony Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    price: "$299",
    description: "Noise cancelling wireless headphones"
  },
  {
    id: 5,
    name: "Apple Watch Series 8",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    price: "$399",
    description: "Smartwatch with health features"
  },
  {
    id: 6,
    name: "iPad Pro",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    price: "$1099",
    description: "Professional tablet for creative work"
  },
  {
    id: 7,
    name: "Dell XPS 13",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop",
    price: "$999",
    description: "Premium Windows laptop"
  },
  {
    id: 8,
    name: "AirPods Pro",
    image: "https://images.unsplash.com/photo-1590658165737-15a047b9e6a5?w=400&h=300&fit=crop",
    price: "$249",
    description: "Wireless earbuds with noise cancellation"
  },
  {
    id: 9,
    name: "Canon EOS R5",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    price: "$3899",
    description: "Professional mirrorless camera"
  }
];

// دالة لترتيب المنتجات
export const sortProducts = (products, order = 'asc') => {
  return [...products].sort((a, b) => {
    const priceA = parseFloat(a.price.replace('$', ''));
    const priceB = parseFloat(b.price.replace('$', ''));
    return order === 'asc' ? priceA - priceB : priceB - priceA;
  });
};

// دالة لفلترة حسب السعر
export const filterByPrice = (products, min, max) => {
  return products.filter(product => {
    const price = parseFloat(product.price.replace('$', ''));
    return price >= min && price <= max;
  });
};

// دالة لحساب المجموع
export const calculateTotalPrice = (products) => {
  return products.reduce((total, product) => {
    return total + parseFloat(product.price.replace('$', ''));
  }, 0);
};

// دالة للبحث عن منتج
export const searchProducts = (products, keyword) => {
  return products.filter(product => 
    product.name.toLowerCase().includes(keyword.toLowerCase()) ||
    product.description.toLowerCase().includes(keyword.toLowerCase())
  );
};

// دالة لاضافة منتج جديد
export const addNewProduct = (products, newProduct) => {
  return [...products, { id: products.length + 1, ...newProduct }];
};