import axios from "axios";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  let resp = await axios.get("http://localhost:5000/search");
  return resp;
};

const Trains = () => {
  const { data } = useLoaderData();
  const res = data.forEach((train) => {
    return <SingleTrain t={train} />;
  });

  return { res };
};

const SingleTrain = ({ train }) => {
  return (
    <div>
      <h2>Train: {train.Train}</h2>
      <h1>
        Train Name: {train.TrainName} Train Number: {train.trainNo}
      </h1>
      <p>Start: {train.Source}</p>
      <p>Destination: {train.Destination}</p>
      <h3>
        Arrival: {train.ArrivalTime} Departure: {train.DepartureTime}
      </h3>

      <h1>Seats: </h1>
      {train["3AC_Num"] === null ? <></> : <h2>3AC: {train["3AC_Num"]}</h2>}
      {train["3E_Num"] === null ? <></> : <h2>3E: {train["3E_Num"]}</h2>}
      {train["2AC_Num"] === null ? <></> : <h2>2AC: {train["2AC_Num"]}</h2>}
      {train["1AC_Num"] === null ? <></> : <h2>1AC: {train["1AC_Num"]}</h2>}
      {train["AC_CharCar_Num"] === null ? (
        <></>
      ) : (
        <h2>AC chair car: {train["AC_CharCar_Num"]}</h2>
      )}
      {train["ExechairCar_Num"] === null ? (
        <></>
      ) : (
        <h2>Executive Chair car: {train["ExechairCar_Num"]}</h2>
      )}
    </div>
  );
};

export default Trains;
