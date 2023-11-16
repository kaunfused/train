import { useLoaderData } from "react-router-dom";

function Trans() {
  let data = useLoaderData();

  let t = data.map((item, index) => {
    return (
      <div key={index}>
        Train name: {item.trainName}
        Train number: {item.train}
        source: {item.source}
        destination: {item.destination}
        seat: {item.seatno} -- {item.coach}
        date: {item.date}
      </div>
    );
  });

  return <section>{t}</section>;
}

export default Trans;
