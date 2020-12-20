import {useState} from 'react';
import productsData from './productsData.json';
import Product from "./Components/Product";

function App() {
  const [index, setIndex] = useState(1);

  function moveSlide(n) {
    let newIndex = index + n;
    console.log(newIndex)
    if(newIndex < 1) newIndex = productsData.length;
    else if(newIndex >= productsData.length) newIndex = 1;
    setIndex(newIndex);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div className="slide-carousel">
          {productsData.map((productData, id) => <Product key={id}
                                                          data={productData}
                                                          index={index}
          />)}
          <span onClick={() => moveSlide(-1)} id="prev">&#10094;</span>
          <span onClick={() => moveSlide(1)} id="next">&#10095;</span>
        </div>
      </main>
    </div>
  );
}

export default App;
