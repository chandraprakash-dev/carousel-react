import {useState} from 'react';
import productsData from './productsData.json';
import Product from "./Components/Product";

function App() {
  const [category, setCateogry] = useState('all');
  const [index, setIndex] = useState(1);

  let filteredProducts = productsData;

  if(category !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  function moveSlide(n) {
    let newIndex = index + n;
    console.log(newIndex)
    if(newIndex < index || newIndex >= index + filteredProducts.length) return;
    setIndex(newIndex);
  }

  function handleChange(event) {
    const category = event.target.value;
    setCateogry(category);
    setIndex(productsData.map(prod => prod.category).indexOf(category) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div className="filter">
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
