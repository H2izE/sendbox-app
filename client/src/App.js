import { createContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import EditProduct from "./pages/products/EditProduct";
import Landing from "./pages/Landing";
import NavigationBar from "./components/layout/NavigationBar";
import NewProduct from "./pages/products/NewProduct";
import { Product } from "./pages/products/Product";
import { Products } from "./pages/products/Products";
import useLocalStorage from "./utils/useLocalStorage";

export const UserContext = createContext();

function UserProvider(props) {
  const [user, setUser] = useLocalStorage('user');
  const value = [user, setUser];
  return <UserContext.Provider value={value} {...props} />
}

function App() {
  return (
    <UserProvider>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products/new' element={<NewProduct />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id/edit' element={<EditProduct />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
