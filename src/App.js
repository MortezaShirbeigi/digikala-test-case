import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./redux/cart/cart.actions";

function App() {
  const cartState = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{cartState.cartItems}</h1>
        <button onClick={() => addToCart(dispatch)}>`test plussss`</button>
        <button onClick={() => removeFromCart(dispatch)}>
          `test removeee`
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
