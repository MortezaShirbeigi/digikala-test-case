import "../../styles/App.scss";
import Layout from "../../components/layout";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../home";
import Cart from "../cart";
import ProductDetail from "../productDetail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProducts } from "../../redux/cart/cart.actions";
import { getItemLocalStorage } from "../../utilities";
import { constant } from "../../utilities/constant";
import Modal from "../../components/modal";
import CartTable from "../../components/cartTable";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const LSProduct = getItemLocalStorage(constant.localStorageName);

    if (LSProduct) {
      const LSData = JSON.parse(LSProduct);
      dispatch(loadProducts(LSData));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/product/:id" component={ProductDetail} />
            <Redirect from="*" to="/" />
          </Layout>
          <Modal>
            <CartTable />
          </Modal>
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
