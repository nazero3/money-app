import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PaymentForm from "./components/PaymentForm";
import CreditForm from "./components/CreditForm";
import Home from "./components/Home";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/payment-form", element: <PaymentForm /> },
  { path: "/credit-form", element: <CreditForm /> },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
