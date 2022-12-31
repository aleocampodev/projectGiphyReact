import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import GifExpertApp from './GifExpertApp'
import SearchAdvanced from './pages/SearchAdvanced';

const router = createBrowserRouter([
  {
    path: "/",
    element: <GifExpertApp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search-advanced",
    element: <SearchAdvanced />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

