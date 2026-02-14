import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShoppingCartPage from "./pages/ShoppingCartPage.jsx";
import { MyProvider } from "./context/MyContext.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/compras",
    element: <ShoppingCartPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <MyProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </MyProvider>,  
);
