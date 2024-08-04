import Button from "../general/Button/Button";
import { useEffect, useState } from "react";

export default function Unit({
  unit,
  onAddUnit,
  onRemoveUnit,
  userArmy,
  onUpdateQuantity,
}) {
  const [quantity, setQuantity] = useState(1);

  const isSelectedIntoArmy = userArmy?.some(
    (armyUnit) => armyUnit.id === unit.id
  );

  useEffect(() => {
    if (isSelectedIntoArmy) {
      onUpdateQuantity(unit, quantity);
    }
  }, [quantity]);

  const handleSelectChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="card">
      <img className={"unit_Avatar"} src={unit.img} alt={unit.img} />
      <div class="container">
        <h3>
          <b>{unit.name}</b>
        </h3>
        <p>Unit's power: {unit.power}</p>
        <p>Capacity: {unit.popCap}</p>
      </div>
      <Button
        onClick={
          isSelectedIntoArmy ? () => onRemoveUnit(unit) : () => onAddUnit(unit)
        }
      >
        {isSelectedIntoArmy ? "Remove unit" : "Select unit"}
      </Button>
      {isSelectedIntoArmy && (
        <select
          style={{ fontSize: "large" }}
          value={quantity}
          onChange={handleSelectChange}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
