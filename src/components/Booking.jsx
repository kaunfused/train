import axios from "axios";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  let data = await axios.get("/booking");
  return data;
};

function Booking() {
  //t will have the data returned to it from the above loader function
  let t = useLoaderData();

  return <h1>booking details here</h1>;
}

export default Booking;
