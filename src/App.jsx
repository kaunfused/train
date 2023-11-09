import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Login, Register, Home, Trains, Landing } from "./pages/index";
import { loader as TrainInfo } from "./pages/Trains";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <h1>There was an error...</h1>,
    children: [
      {
        element: <Register />,
        index: true,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "search",
        element: <Home />,
      },
      {
        path: "results",
        element: <Trains />,
        loader: TrainInfo,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
