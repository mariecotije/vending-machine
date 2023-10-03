import { useState } from "react";

export const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  return (
    <div>
      {greeting === "" ? (
        <h1>Please provide us information so we can sell it to advertisers</h1>
      ) : (
        <h1>{greeting}</h1>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setName("");
          setAge(0);

          if (gender === `male`) {
            setGreeting(`Hello, Mr. ${name}`);
          } else if (gender === "female") {
            if (age > 25) {
              setGreeting(`Hello, Mrs. ${name}`);
            } else {
              setGreeting(`Hello, Miss ${name}`);
            }
          } else {
            setGreeting(`Hello, ${name}`);
          }
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        <button type="submit">Greet!</button>
      </form>
    </div>
  );
};
