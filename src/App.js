
import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
import Messenger from './Components/Messenger';
import Carts from './Components/Carts';
import Footer from './Components/Footer';

function App() {
  return (
    <div >
         <div>
        {/* Header */}
         <Header/>
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <Products/>
       
            {/* Message */}
          <Messenger/>
            {/* Cart */}
        
              <Carts/>
          </div>
        </main>
        {/* Footer */}
      <Footer/>
      </div>
    </div>
  );
}

export default App;
