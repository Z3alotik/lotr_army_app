export default function Statistics({ totalPower, population }) {
  return (
    <div className="stats">
      <p>Total power: {totalPower}</p>
      {population < 100 ? (
        <p>Population: {population}/100</p>
      ) : (
        <p className="error">Population: {population}/100</p>
      )}
    </div>
  );
}
