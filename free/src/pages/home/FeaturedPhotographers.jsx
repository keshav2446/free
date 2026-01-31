import { useNavigate } from "react-router-dom";
import PhotographerCard from "./PhotographerCard";
import "./FeaturedPhotographers.css";

/* TEMP DATA (API LATER) */
const photographers = [
  {
    username: "vishu",
    name: "Vishu",
    city: "Lahore",
    rating: 4.9,
    tags: ["Wedding", "Portrait"],
    image: "/images/vishu.jpeg",
    featured: true,
  },
  {
    username: "vaibhav-gupta",
    name: "Vaibhav Gupta",
    city: "Delhi",
    rating: 4.8,
    tags: ["Architecture", "Real Estate"],
    image: "/images/vaibhav.jpeg",
    featured: true,
  },
  {
    username: "keshav-singh",
    name: "Keshav Singh",
    city: "Japan",
    rating: 4.9,
    tags: ["Wildlife", "Nature"],
    image: "/images/ks.jpg",
    featured: true,
  },
  {
    username: "mika",
    name: "Mika",
    city: "Rampur",
    rating: 4.7,
    tags: ["Street", "Documentary"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    featured: true,
  },
];

const FeaturedPhotographers = ({ selectedState, selectedCity }) => {
  const navigate = useNavigate();

  const filteredPhotographers = selectedCity
    ? photographers.filter(
        (p) =>
          p.featured &&
          p.city.toLowerCase() === selectedCity.toLowerCase()
      )
    : photographers.filter((p) => p.featured);

  return (
    <section className="featured-section">
      <h2>
        {selectedCity
          ? `Featured Photographers in ${selectedCity}`
          : "Featured Photographers"}
      </h2>

      <div className="photographers-grid">
        {filteredPhotographers.slice(0, 4).map((p) => (
          <PhotographerCard
            key={p.username}
            photographer={p}
          />
        ))}
      </div>

      <div className="discover-btn">
        <button
          onClick={() =>
            navigate(
              `/photographers?state=${encodeURIComponent(
                selectedState || ""
              )}&city=${encodeURIComponent(selectedCity || "")}`
            )
          }
        >
          Discover More Photographers →
        </button>
      </div>
    </section>
  );
};

export default FeaturedPhotographers;
