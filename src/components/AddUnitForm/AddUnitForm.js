import { useState } from "react";
import Button from "../general/Button/Button";

export default function AddUnitForm({ onCreateUnit }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [popCap, setPopCap] = useState("");
  const [power, setPower] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !img) return;

    const id = crypto.randomUUID();
    const newUnit = {
      name,
      img: `${img}?=${id}`,
      popCap: popCap,
      power: power,
      id,
    };

    onCreateUnit(newUnit);

    setName("");
    setImg("");
    setPopCap("");
    setPower("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form_div">
        <label className="label">Unit's name:</label>
        <input
          placeholder="Name.."
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form_div">
        <label className="label">Image:</label>
        <input
          placeholder="Image URL.."
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
      </div>
      <div className="form_div">
        <label className="label">Unit's population capacity:</label>
        <input
          placeholder="Population capacity.."
          type="text"
          value={popCap}
          onChange={(e) => setPopCap(Number(e.target.value))}
        />
      </div>
      <div className="form_div">
        <label className="label">Unit's power:</label>
        <input
          placeholder="Unit's power.."
          type="text"
          value={power}
          onChange={(e) => setPower(Number(e.target.value))}
        />
      </div>

      <Button className="button">Add unit</Button>
    </form>
  );
}
