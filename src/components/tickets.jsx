import styled from "styled-components";
import "./css/tickets.css";

function Ticket() {
  return (
    <Wrapper>
      <h3>Your seat has been booked!!</h3>
      <h1>Passenger details:</h1>

      <div className="destination">
        <h2>From </h2>
        <p>Howrah</p>
        <h2>To </h2>
        <p>Puri</p>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Seat No.</th>
          <th>Train Name</th>
          <th>Class</th>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>12A</td>
          <td>Express 123</td>
          <td>First Class</td>
        </tr>
      </table>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  table {
    min-width: 50rem;
  }

  th {
    color: red;
  }

  td {
    text-align: center;
    padding: 0 1.5rem;
  }

  .destination {
    /* border: 2px solid white; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 25rem;
    h2 {
      font-size: 2rem;
      color: red;
    }
    p {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`;

export default Ticket;
