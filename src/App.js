import productsData from './productsData.json';
import Product from "./Components/Product";

function App() {
  const products = productsData.map((productData, id) => <Product key={id} data={productData}/>);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div className="slide-carousel">
          {products}
          <a id="prev">&#10094;</a>
          <a id="next">&#10095;</a>
        </div>
      </main>
    </div>
  );
}

export default App;
