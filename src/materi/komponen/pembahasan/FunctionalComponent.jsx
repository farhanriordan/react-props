import { useState } from "react";

const FunctionalComponent = ({ nama }) => {
  const [value, setValue] = useState(0);
  const handlePlus = () => {
    setValue(value + 1);
  };
  const handleMinus = () => {
    if (value > 0) setValue(value - 1);
  };
  return (
    <div>
      <h1>Membuat komponen dengan functional komponen</h1>
      <h2>Halo {nama}</h2>
      <button onClick={handleMinus}>-</button>
      <span> {value} </span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

// const Paragraf = () => {
//   return (
//     <div>
//       <h1>Ini adalah Paragraf</h1>
//       <p>mdqoiwmdoiwmoimweoidmweoiim</p>
//     </div>
//   );
// };

FunctionalComponent.defaultProps = { nama: "User" };
export default FunctionalComponent;
