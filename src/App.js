import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

const cards = data.map((item) => {

    return <Card {...item}/>
})

function App() {

  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}

export default App;
