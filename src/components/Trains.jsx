import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

export const loader = async () => {
  let resp = await axios.get("http://localhost:5000/search");
  return resp;
};

const seats = [
  { name: "3AC", count: 0 },
  { name: "3E", count: 0 },
  { name: "2AC", count: 0 },
  { name: "1AC", count: 0 },
  { name: "AC Chair", count: 0 },
  { name: "Executive Chair", count: 0 },
];

const Trains = () => {
  const { data } = useLoaderData();
  const [seatsInfo, setSeatsInfo] = useState([]);

  //function to add the number of which type of seats the customer needs
  function Add(seat_type) {
    let t = seats.map((s) => {
      if (s.name === seat_type) {
        s.count = s.count + 1;
      }
    });
    setSeatsInfo([...seatsInfo, t]);
  }

  // function to submit the customer requirements of seats
  async function Submit() {
    let res = await axios.post("http://localhost:5000/customer_req", seatsInfo);
    console.log(res);
  }

  // rendering the info of each and every availabe type of coach in which seats are available
  const res = data.map((train, index) => {
    return (
      <form>
        <Wrapper>
          <div key={index}>
            <h1>
              Train Name: {train.TrainName} Train Number: {train.trainNo}
            </h1>
            <p>Start: {train.Source}</p>
            <p>Destination: {train.Destination}</p>
            <h3>
              Arrival: {train.ArrivalTime} Departure: {train.DepartureTime}
            </h3>

            <h1>Seats: </h1>

            {train["3AC_Num"] === null ? (
              <></>
            ) : (
              <>
                <h2>3AC: {train["3AC_Num"]}</h2>
                <button
                  onClick={() => {
                    Add("3AC");
                  }}
                >
                  Add
                </button>
              </>
            )}
            {train["3E_Num"] === null ? (
              <></>
            ) : (
              <>
                <h2>3E: {train["3E_Num"]}</h2>
                <button
                  onClick={() => {
                    Add("3E");
                  }}
                >
                  Add
                </button>
              </>
            )}
            {train["2AC_Num"] === null ? (
              <></>
            ) : (
              <>
                <h2>2AC: {train["2AC_Num"]}</h2>
                <button
                  onClick={() => {
                    Add("2AC");
                  }}
                >
                  Add
                </button>
              </>
            )}
            {train["1AC_Num"] === null ? (
              <></>
            ) : (
              <>
                <h2>1AC: {train["1AC_Num"]}</h2>
                <button
                  onClick={() => {
                    Add("1AC");
                  }}
                >
                  Add
                </button>
              </>
            )}
            {train["AC_CharCar_Num"] === null ? (
              <></>
            ) : (
              <>
                <h2>AC chair car: {train["AC_CharCar_Num"]}</h2>
                <button
                  onClick={() => {
                    Add("AC Chair");
                  }}
                >
                  Add
                </button>
              </>
            )}
            {train["ExechairCar_Num"] === null ? (
              <></>
            ) : (
              <>
                <h2>Executive Chair car: {train["ExechairCar_Num"]}</h2>
                <button
                  onClick={() => {
                    Add("Executive Chair");
                  }}
                >
                  Add
                </button>
              </>
            )}
          </div>
        </Wrapper>
        <button type="submit" onClick={Submit}>
          Submit
        </button>
      </form>
    );
  });

  return res;
};

const Wrapper = styled.div`
  margin: 1rem;
  border: 1px solid grey;
`;

export default Trains;
