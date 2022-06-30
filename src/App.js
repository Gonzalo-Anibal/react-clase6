import './App.css';
import { useEffect, useState } from 'react';
import Product from './components/Product';
import ErrorComponent from './components/ErrorComponent';

function App() {

  const url = 'https://pg-delsur.herokuapp.com/'

  const [products, setProducts] = useState([]);

  function getProductById() {
    fetch(url + 'products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.log('Hubo un problema con la petición Fetch:' + error.message));
  }

  useEffect(() => {
    getProductById()
  }, []);

  return (
    <>
      <div className="App">
      {
        products.length > 0
        ? products?.map(elem => {
          return(
            <div className='item-details'>
              <Product
                id={elem.id}
                name={elem.name}
                stock={elem.stock}
                cost={elem.cost}
                description={elem.description}
                capacity={elem.capacity}
                image={elem.image}
              />
            </div>
          );
        })
        : <ErrorComponent message="No results found :(" />
      }
      </div>
    </>
  );
}

export default App;
