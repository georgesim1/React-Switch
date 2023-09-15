import React, { useState } from 'react';
import Switch from './Switch';

const App = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedChange = (newState) => {
    console.log("Value :", newState);
    setIsSelected(newState);
  };

  return (
    <div>
      <Switch selected={isSelected} handleSelected={handleSelectedChange} />
    </div>
  );
};

export default App;
