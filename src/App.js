import {useState} from 'react';
import productsData from './productsData.json';
import Product from "./Components/Product";

function App() {
  const [index, setIndex] = useState(1);

  function moveSlide(n) {
    let newIndex = index + n;
    console.log(newIndex)
    if(newIndex < 1 || newIndex >= productsData.length) return;
    setIndex(newIndex);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div className="slide-carousel">
          <div className="products">
            {productsData.map((productData, id) => <Product key={id}
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
