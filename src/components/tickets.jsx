import styled from "styled-components";
import "./css/tickets.css";

function Ticket() {
  return (
    <Wrapper>
      <h3>Your seat has been booked!!</h3>
      <h1>Ticket details:</h1>

      <div className="destination">
        <h2>From </h2>
        <p>Howrah</p>
        <h2>To </h2>
        <p>Puri</p>
      </div>
      <table>
        <tr>
          <th>Seat No.</th>
          <th>Departure</th>
          <th>Arrival</th>
          <th>Train Name</th>
          <th>Class</th>
        </tr>
        <tr>
          <td>22</td>
          <td>07:00</td>
          <td>14:00</td>
          <td>Vande Bharat</td>
          <td>2AC</td>
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
