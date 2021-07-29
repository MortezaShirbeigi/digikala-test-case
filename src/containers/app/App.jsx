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
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={ProductDetail} />
          {/* <Route component={NotFound} /> */}
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
