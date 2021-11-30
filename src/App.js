import { Route, Routes } from "react-router";
import EditProduct from "./EditProduct";
import NewProduct from "./NewProduct";
import { Product } from "./Product";
import { Products } from "./Products";


function App() {
  return (
    <Routes>
      <Route path='/' element={<div>hello</div>} />
      <Route path='/products/new' component={NewProduct} />
      <Route path='/products' component={Products} />
      <Route path='/products/:id/edit' component={EditProduct} />
      <Route path='/products/:id' component={Product} />

    </Routes>
  );
}

export default App;
