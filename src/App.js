import { Route, Routes } from "react-router";
import { Product } from "./Product";
import { Products } from "./Products";


function App() {
  return (
    <Routes>
      <Route path='/' component={Products} />
      <Route path='/products/:id' component={Product} />
    </Routes>
  );
}

export default App;
