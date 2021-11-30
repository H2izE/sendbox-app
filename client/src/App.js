import { Route, Routes } from "react-router";
import EditProduct from "./EditProduct";
import Landing from "./Landing";
import NewProduct from "./NewProduct";
import { Product } from "./Product";
import { Products } from "./Products";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/products/new' element={<NewProduct />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id/edit' element={<EditProduct />} />
      <Route path='/products/:id' element={<Product />} />

    </Routes>
  );
}

export default App;
