
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import ProductList from "./components/ProductList";
import AddForm from "./components/AddForm";
import StartPage from "./components/StartPage";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<StartPage />} />
        <Route path="products-list" element={<ProductList/>} />
        <Route path="add-product" element={<AddForm />} />
      </Route>
    )
  )
  return (
    <div className="App container px-5 d-flex flex-column align-items-center mt-5">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
