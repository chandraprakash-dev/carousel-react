import {useState} from 'react';
import productsData from './productsData.json';
import Product from "./Components/Product";

function App() {
  const [category, setCateogry] = useState('all');
  const [index, setIndex] = useState(1);
  const [bounds, setBounds] = useState([1, productsData.length]);

  let filteredProducts = productsData;

  if(category !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  console.log(filteredProducts, bounds);

  function moveSlide(n) {
    let newIndex = index + n;
    console.log(newIndex)
    if(newIndex < bounds[0] || newIndex >= bounds[1] - 1) return;
    setIndex(newIndex);
  }

  function handleChange(event) {
    const category = event.target.value;
    setCateogry(category);
    const lowerBound = productsData.map(prod => prod.category).indexOf(category) + 1;
    const upperBound = productsData.map(prod => prod.category).lastIndexOf(category) + 1;
    setBounds([lowerBound, upperBound]);
    setIndex(lowerBound);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Your basket</h3>
      </header>
      <main>
        <div className="filter">
          <label>Category</label>
          <select onChange={handleChange}>
            <option value="all">All</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="herbs and spices">Herbs and spices</option>
            <option value="leafy vegetables">Leafy vegetables</option>
          </select>
        </div>

        <div className="slide-carousel">
          <div className="products">
            {filteredProducts.map((productData, id) => <Product key={id}
                                                            data={productData}
                                                            index={index}
            />)}
          </div>
          <span onClick={() => moveSlide(-1)} id="prev">&#10094;</span>
          <span onClick={() => moveSlide(1)} id="next">&#10095;</span>
        </div>
      </main>
    </div>
  );
}

export default App;
