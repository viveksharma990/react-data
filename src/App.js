import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((receiveddata) => {
        console.log(receiveddata);
        setData(receiveddata.results);
      });
  };

  return (
    <div className="App">
      <p> Name and Email</p>
      {data.map((user) => (
        <div key={user.id.value}>
          {user.name.first} {user.name.last}, {user.email}
        </div>
      ))}
    </div>
  );
}

export default App;
