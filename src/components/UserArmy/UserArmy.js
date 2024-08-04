import { useEffect } from "react";
import Unit from "../Unit/Unit";

export default function UserArmy({
  userArmy,
  onRemoveUnit,
  onSetPopulation,
  onSetTotalPower,
  onUpdateQuantity,
}) {
  useEffect(() => {
    handlePopulation();
    handleTotalPower();
  }, [userArmy]);

  const handlePopulation = () => {
    onSetPopulation(
      userArmy.reduce((acc, unit) => acc + unit.popCap * unit.quantity, 0)
    );
  };

  const handleTotalPower = () => {
    onSetTotalPower(
      userArmy.reduce((acc, unit) => acc + unit.power * unit.quantity, 0)
    );
  };

  return (
    <div className="card_2">
      <ul className="ul">
        {userArmy.map((userUnit) => (
          <Unit
            unit={userUnit}
            key={userUnit.id}
            userArmy={userArmy}
            onRemoveUnit={onRemoveUnit}
            onUpdateQuantity={onUpdateQuantity}
          />
        ))}
      </ul>
    </div>
  );
}
