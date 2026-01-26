import PhotographerCard from "./PhotographerCard";
import "./FeaturedPhotographers.css";

const photographers = [
  {
    username: "vishu",
    name: "Vishu",
    city: "Lahore",
    rating: 4.9,
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
    username: "keshav-singh",
    name: "Keshav Singh",
    city: "Japan",
    rating: 4.9,
    tags: ["Wildlife", "Nature"],
    image: "/images/ks.jpg",
  },
  {
    username: "mika",
    name: "Mika",
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
        {photographers.map((p) => (
          <PhotographerCard
            key={p.username}
            photographer={p}
          />
        ))}
      </div>

      <div className="discover-btn">
        <button>Discover More Photographers →</button>
      </div>
    </section>
  );
};

export default FeaturedPhotographers;
