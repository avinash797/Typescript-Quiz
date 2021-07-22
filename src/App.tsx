import React, { useState } from "react";
import List from "./components/List";
import "./App.css";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 32,
      note: "Allergic to something"
    }
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
