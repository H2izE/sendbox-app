import { createContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import EditProduct from "./EditProduct";
import Landing from "./Landing";
import NavigationBar from "./NavigationBar";
import NewProduct from "./NewProduct";
import { Product } from "./Product";
import { Products } from "./Products";
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
