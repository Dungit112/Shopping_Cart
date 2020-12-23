
import './App.css';
import Header from './Components/Header';

import Messenger from './Components/Messenger';
import Carts from './Components/Carts';
import Footer from './Components/Footer';
import ProductsContainer from './Containers/ProductsContainer';
import CartContainer from './Containers/CartContainer';
import MessengerContainer from './Containers/MessengerContainer';

function App() {
  return (
    <div >
         <div>
        {/* Header */}
         <Header/>
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <ProductsContainer/>
       
            {/* Message */}
         <MessengerContainer/>
            {/* Cart */}
        
              <CartContainer/>
          </div>
        </main>
        {/* Footer */}
      <Footer/>
      </div>
    </div>
  );
}

export default App;
