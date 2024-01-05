import { useEffect, useState } from "react";

function App() {
  // generate a random hexcode
  const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  };
  randomHexColorCode();

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [status, setStatus] = useState("");
  const [reset, setReset] = useState(false);
  const generateColors = function (num) {
    const newColors = [];
    for (let i = 0; i < num; i++) {
      newColors.push(randomHexColorCode());
    }
    setColors(newColors);
    setSelectedColor(newColors[randomInt(0, num - 1)]);
  };

  useEffect(
    function () {
      generateColors(3);
    },
    [reset]
  );

  function handleClick(e) {
    const val = String(e.target.value);

    if (val === selectedColor) {
      setStatus("your are correct");
      setReset((d) => !d);
    } else {
      setStatus("wrong answer");
    }
  }
  console.log(colors);
  console.log(selectedColor);
  return (
    <div className="App">
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: selectedColor,
        }}
      ></div>
      {colors.map((c, i) => (
        <button onClick={(e) => handleClick(e)} key={i} value={c}>
          {c}
        </button>
      ))}
      <p>{status}</p>
    </div>
  );
}

export default App;
