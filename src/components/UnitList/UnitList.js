import AddUnitForm from "../AddUnitForm/AddUnitForm";
import Unit from "../Unit/Unit";
import { useState } from "react";
import Button from "../general/Button/Button";

export default function UnitList({
  onAddUnit,
  availableUnits,
  onSetAvailableUnits,
}) {
  const [showCreateUnit, setShowCreateUnit] = useState(false);

  const handleShowCreateUnit = () => {
    setShowCreateUnit((show) => !show);
  };

  const handleCreateUnit = (newUnit) => {
    onSetAvailableUnits((availableUnits) => [...availableUnits, newUnit]);
    setShowCreateUnit(false);
  };

  return (
    <div className="card_2">
      <div className="card_3">
        {showCreateUnit && <AddUnitForm onCreateUnit={handleCreateUnit} />}
        <Button onClick={handleShowCreateUnit}>
          {showCreateUnit ? "Close" : "Create unit"}
        </Button>
      </div>
      <ul className="ul">
        {availableUnits.map((unit) => (
          <Unit unit={unit} key={unit.id} onAddUnit={onAddUnit} />
        ))}
      </ul>
    </div>
  );
}
