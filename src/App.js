import './App.css';
import productsData from './productsData.json';
import Product from "./Components/Product";

function App() {
  const products = productsData.map(productData => <Product data={productData}/>);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        {products}
      </main>
    </div>
  );
}

export default App;
