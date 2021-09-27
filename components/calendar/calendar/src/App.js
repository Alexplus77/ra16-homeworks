import React from "react";

import Calendar from "./calendar";

function App() {

  const now = new Date()

  return (
        <Calendar  date={now}/>
  );
}

export default App;
