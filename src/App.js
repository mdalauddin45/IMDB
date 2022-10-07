import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Popular from "./components/Popular/Popular";
import Toprated from "./components/Toprated/Toprated";
import Upcoming from "./components/Upcoming/Upcoming";
import Home from "./components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () =>
            fetch(
              "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
            ),
        },
        { path: "/popular", element: <Popular></Popular> },
        { path: "/top-rated", element: <Toprated></Toprated> },
        { path: "/upcoming", element: <Upcoming></Upcoming> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
