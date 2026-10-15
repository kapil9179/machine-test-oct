import React, { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  const [columns, setColumns] = useState([]);

  const handleSubmit = () => {
    if (!selected) {
      return;
    }

    setColumns((prev) => {
      const updated = [...prev];
      if (updated.length === 0) {
        return [{ type: selected, count: 1 }];
      }
      console.log("this is update",updated);

      const lastColumn = updated[updated.length - 1];
      if (lastColumn.type === selected) {
        updated[updated.length - 1] = {
          ...lastColumn,
          count: lastColumn.count + 1,
        };
      } else {
        updated.push({
          type: selected,
          count: 1,
        });
      }

      return updated;
    });
  };

  return (
    <div>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}

      >
        <option value="">Select Option</option>
        <option value="Head">Head</option>
        <option value="Tail">Tail</option>
      </select>

      <button onClick={handleSubmit}>Submit</button>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
          alignItems: "flex-start",
        }}
      >
        {columns.map((column, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              padding: "15px",
              minWidth: "80px",
              textAlign: "center",
            }}
          >
            <h4>Column {index + 1}</h4>

            {Array.from({ length: column.count }).map((_, i) => (
              <p key={i}>{column.type}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

