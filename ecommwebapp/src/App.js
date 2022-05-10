import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
//Added 4 product images inside the images folder inside the public folder
//Created heading 1 to show featured products and div
//Also we created a JSX expression to map each product to a JSX expression to render products on the screen
//Part 2 - Defining routes
// For homescreen we need to define a component that responds to this path and we do that with *element* attribute
// CTRL+Space Then TAB to autoimport
//slug is our parameter
//We remove pagerefresh as there is no need for page refresh between pages for a single page application
//and for that we use *Link* instead of anchor
//And created a url slug
//We will use import instead of requite that's why we will set *type* to module to use ES6 module to import and export
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">ecommwebapp</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
