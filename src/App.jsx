import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Login, Register, Home, Trains, Booking } from "./components/index";
import { loader as TrainInfo } from "./components/Trains";
import { loader as book } from "./components/Booking";

const router = createBrowserRouter([
  {
    path: "/",
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
      {
        path: "booking_details",
        element: <Booking />,
        loader: book,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
