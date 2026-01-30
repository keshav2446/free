import { useLocation } from "react-router-dom";
import PhotographerCard from "./PhotographerCard";
import "./DiscoverPhotographers.css";

const ALL_PHOTOGRAPHERS = [
  {
    username: "vishu",
    name: "Vishu",
    city: "Lahore",
    rating: 4.2,
    tags: ["Wedding", "Portrait"],
    image: "/images/vishu.jpeg",
  },
  {
    username: "vaibhav-gupta",
    name: "Vaibhav Gupta",
    city: "Delhi",
    rating: 4.8,
    tags: ["Architecture", "Real Estate"],
    image: "/images/vaibhav.jpeg",
  },
  {
    username: "mika",
    name: "Mika",
    city: "Rampur",
    rating: 4.7,
    tags: ["Street", "Documentary"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
    {
    username: "Keshav Singh",
    name: "Keshav Singh", 
    city: "Moradabad",
    rating: 4.9,
    tags: ["Street", "Documentary", "Nature", "Weeding"],
    image: "/images/ks.jpg",
  },
  {
    username: "arjun-verma",
    name: "Arjun Verma",
    city: "Moradabad",
    rating: 4.6,
    tags: ["Wedding"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
];

const DiscoverPhotographers = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const city = params.get("city");

  const filtered = city
    ? ALL_PHOTOGRAPHERS.filter(
        (p) => p.city.toLowerCase() === city.toLowerCase()
      )
    : ALL_PHOTOGRAPHERS;

  return (
    <section className="discover-page">
      <h2>
        {city ? `Photographers in ${city}` : "All Photographers"}
      </h2>

      <div className="photographers-grid">
        {filtered.map((p) => (
          <PhotographerCard key={p.username} photographer={p} />
        ))}
      </div>
    </section>
  );
};

export default DiscoverPhotographers;
