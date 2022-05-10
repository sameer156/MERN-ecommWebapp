const data = {
  products: [
    //Adding 4 products and Each product is an object
    // We will use data.js in server.js
    {
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'Nice Quality shirt',
    },
    {
      name: 'Adidas Fit shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 200,
      countInStock: 25,
      brand: 'Adidas',
      rating: 4.3,
      numReviews: 15,
      description: 'High Quality shirt',
    },
    {
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 220,
      countInStock: 18,
      brand: 'Nike',
      rating: 4.1,
      numReviews: 13,
      description: 'High Quality product',
    },
    {
      name: 'Adidas Fit Pant',
      slug: 'adidas-fir-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 100,
      countInStock: 14,
      brand: 'Adidas',
      rating: 4.7,
      numReviews: 21,
      description: 'High Quality product',
    },
  ],
};

export default data;
