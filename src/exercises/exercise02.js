// useState: greeting

import React, { useState, useEffect } from "react";

function Greeting({ initialName = "" }) {
  // default value incase not passed in
  // 💣 delete this variable declaration and replace it with a React.useState call
  // const name = ''
  const [name, setName] = useState(
    window.localStorage.getItem("name") || initialName
  );

  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  function handleChange(e) {
    // 🐨 update the name here based on event.target.value
    setName(e.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

function ExerciseOne() {
  return <Greeting initialName="Cody the Koala" />;
}

export default ExerciseOne;
