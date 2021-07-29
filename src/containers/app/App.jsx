import "../../styles/App.scss";
import Layout from "../../components/layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../home";
import Cart from "../cart";
import ProductDetail from "../productDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={ProductDetail} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
