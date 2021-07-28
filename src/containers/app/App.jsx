import "../../styles/generals/App.scss";
import Layout from "../../components/layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../home";
import Cart from "../cart";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          {/* <Route component={NotFound} /> */}
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
