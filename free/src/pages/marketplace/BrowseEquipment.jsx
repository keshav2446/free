import { useState } from "react";
import "./browseEquipment.css";

const dummyEquipment = [
  {
    id: 1,
    name: "Canon EOS R5",
    price: "₹2,45,000",
    condition: "Like New",
    city: "Mumbai",
    seller: "Amit Sharma",
  },
  {
    id: 2,
    name: "Sony A7 III",
    price: "₹1,25,000",
    condition: "Good",
    city: "Delhi",
    seller: "Rohit Verma",
  },
  {
    id: 3,
    name: "RF 24-70mm f/2.8",
    price: "₹1,60,000",
    condition: "Excellent",
    city: "Bangalore",
    seller: "Neha Kapoor",
  },
];

const BrowseEquipment = () => {
  const [search, setSearch] = useState("");

  const filteredEquipment = dummyEquipment.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="browse-equipment-page">
      <div className="browse-header">
        <h1>Browse Equipment</h1>
        <p>Camera gear listed by verified photographers</p>

        <input
          type="text"
          placeholder="Search camera, lens, accessory..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="equipment-grid">
        {filteredEquipment.map((item) => (
          <div key={item.id} className="equipment-card">
            <h3>{item.name}</h3>

            <div className="equipment-meta">
              <span>📍 {item.city}</span>
              <span>Condition: {item.condition}</span>
            </div>

            <div className="equipment-footer">
              <span className="price">{item.price}</span>
              <button className="contact-btn">Contact Seller</button>
            </div>

            <p className="seller">Seller: {item.seller}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseEquipment;
