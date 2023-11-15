import styled from "styled-components";
import "./css/tickets.css";

function Ticket() {
  return (
    <Wrapper>
      <h3>Your seat has been booked!!</h3>
      <h1>Passenger details:</h1>
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
`;

export default Ticket;
