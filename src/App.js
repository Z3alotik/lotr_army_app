import { useState } from "react";
import UnitList from "./components/UnitList/UnitList";
import UserArmy from "./components/UserArmy/UserArmy";
import Statistics from "./components/Statistics/Statistics";

function App() {
  const [userArmy, setUserArmy] = useState([]);
  const [population, setPopulation] = useState(0);
  const [totalPower, setTotalPower] = useState(0);
  const [availableUnits, setAvailableUnits] = useState([
    {
      name: "Elven Archer",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39a6a2f8-b90e-4072-bc16-48ecc52921e6/dav0y6w-691e9ef4-919f-46f3-925e-cec743f80ede.jpg/v1/fill/w_1024,h_1163,q_75,strp/elven_archer_by_anna_lakisova_dav0y6w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE2MyIsInBhdGgiOiJcL2ZcLzM5YTZhMmY4LWI5MGUtNDA3Mi1iYzE2LTQ4ZWNjNTI5MjFlNlwvZGF2MHk2dy02OTFlOWVmNC05MTlmLTQ2ZjMtOTI1ZS1jZWM3NDNmODBlZGUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yVyHyebipXu9TcjEsKef07uF-_6TDkt_dne1HfFd1YA",
      popCap: 3,
      power: 10,
      quantity: 1,
      id: 0,
    },
    {
      name: "Rohan Horseman",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a8fd609b-daf2-4dbb-84bf-a881e5c98834/dahsmcr-31abf0a8-7024-4f56-9635-cdfa13b6c97e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4ZmQ2MDliLWRhZjItNGRiYi04NGJmLWE4ODFlNWM5ODgzNFwvZGFoc21jci0zMWFiZjBhOC03MDI0LTRmNTYtOTYzNS1jZGZhMTNiNmM5N2UuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LpspD4mBdadIQZqd1ahc54R-dUHQZdxRcxk1Dfrg3W4",
      popCap: 5,
      power: 25,
      quantity: 1,
      id: 1,
    },
    {
      name: "War Troll",
      img: "https://i.ebayimg.com/images/g/H14AAOSwAoViVd-c/s-l400.jpg",
      popCap: 10,
      power: 50,
      quantity: 1,
      id: 2,
    },
    {
      name: "Orc Assassin",
      img: "https://cdnb.artstation.com/p/assets/images/images/041/988/333/large/alexandre-remy-10.jpg?1633282792",
      popCap: 4,
      power: 15,
      quantity: 1,
      id: 3,
    },
  ]);

  const handleAddUnit = (selectedUnit) => {
    setUserArmy((prevUserArmy) => [...prevUserArmy, selectedUnit]);
    setAvailableUnits((prevAvailableUnits) =>
      prevAvailableUnits.filter((unit) => unit.id !== selectedUnit.id)
    );
  };

  const handleRemoveUnit = (selectedUnit) => {
    setUserArmy((prevUserArmy) =>
      prevUserArmy.filter((unit) => unit.id !== selectedUnit.id)
    );
    setAvailableUnits((availableUnits) => [...availableUnits, selectedUnit]);
  };

  const handleUpdateQuantity = (selectedUnit, newQuantity) => {
    setUserArmy((prevUserArmy) =>
      prevUserArmy.map((unit) =>
        unit.id === selectedUnit.id ? { ...unit, quantity: newQuantity } : unit
      )
    );
  };

  return (
    <div>
      <div className="header">
        <h1>Lotr Army Creator</h1>
      </div>
      <Statistics population={population} totalPower={totalPower} />
      <div className="row">
        <div className="column">
          <UnitList
            onAddUnit={handleAddUnit}
            availableUnits={availableUnits}
            onSetAvailableUnits={setAvailableUnits}
          />
        </div>
        <div className="column">
          <UserArmy
            userArmy={userArmy}
            onRemoveUnit={handleRemoveUnit}
            onSetPopulation={setPopulation}
            onSetTotalPower={setTotalPower}
            onUpdateQuantity={handleUpdateQuantity}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
