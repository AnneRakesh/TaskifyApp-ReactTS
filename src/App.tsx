import React from "react";
import "./App.css";

function App() {
  type Address = {
    hno: string;
    street: string;
    pinCode: number;
    test: [number, string];
  };
  type Person = {
    personName: string;
    age: number;
    hobbies: string[];
    address: Address;
  };

  let testAddress: Person = {
    personName: "test",
    age: 19,
    hobbies: ["Cricket", "stockMarket"],
    address: {
      hno: " Colony",
      street: "old Colony Street",
      pinCode: 15,
      test: [123, "Test"],


      
    },
  };

  testAddress.personName = "John";

  let isStudent: boolean;

  isStudent = testAddress.age === 19;
  console.log(isStudent);

  return (
    <div className="App">
      <h1> Hello TypeScript</h1>
    </div>
  );
}

export default App;
