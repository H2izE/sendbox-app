import { Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import EditProduct from "./EditProduct";
import Landing from "./Landing";
import NavigationBar from "./NavigationBar";
import NewProduct from "./NewProduct";
import { Product } from "./Product";
import { Products } from "./Products";
import useLocalStorage from "./utils/useLocalStorage";


function App() {
  const [user, setUser] = useLocalStorage('user');

  return (
    <>
      <NavigationBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Landing user={user} />} />
        <Route path='/dashboard' element={<Dashboard user={user} />} />
        <Route path='/products/new' element={<NewProduct />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id/edit' element={<EditProduct />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
