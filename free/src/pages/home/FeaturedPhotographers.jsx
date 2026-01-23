import PhotographerCard from "./PhotographerCard";

import "./FeaturedPhotographers.css";


const photographers = [
  {
    name: "Vishu",
    city: "Lahore",
    rating: 4.9,
    tags: ["Wedding", "Portrait"],
    image: "/images/vishu.jpeg",
  },
  {
    name: "Vaibhav Gupta",
    city: "Delhi",
    rating: 4.8,
    tags: ["Architecture", "Real Estate"],
    image: "/images/vaibhav.jpeg",
  },
  {
    name: "Keshav Singh",
    city: "Japan",
    rating: 4.9,
    tags: ["Wildlife", "Nature"],
    image: "/images/ks.jpg",
  },
  {
    name: "Rukmani Rani",
    city: "Rampur",
    rating: 4.7,
    tags: ["Street", "Documentary"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
];

const FeaturedPhotographers = () => {
  return (
    <section className="featured-section">
      <h2>Featured Photographers</h2>

      <div className="photographers-grid">
        {photographers.map((p, index) => (
          <PhotographerCard key={index} photographer={p} />
        ))}
      </div>

      <div className="discover-btn">
        <button>Discover More Photographers →</button>
      </div>
    </section>
  );
};

export default FeaturedPhotographers;
