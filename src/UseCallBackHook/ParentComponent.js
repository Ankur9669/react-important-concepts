import React, { useState, useCallback } from "react";
import Button from "./Button";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(1000);

  // This increases the performace as when the age will change than only callback would return new value
  const incrementAge = useCallback(() => {
    setAge((age) => age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((salary) => salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title title={`Age ${age}`} />
      <Button buttonText="Increment Age" clickFunction={incrementAge} />

      <Title title={`Salary ${salary}`} />
      <Button buttonText="Increment Salary" clickFunction={incrementSalary} />
    </div>
  );
}

export { ParentComponent };
