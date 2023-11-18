import { useLoaderData, useNavigation } from "react-router-dom";

function Trans() {
  let data = useLoaderData();
  let nav = useNavigation();

  if (nav.state === "loading") {
    return <h1>Loading...</h1>;
  }

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
