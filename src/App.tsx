import { useState } from "react";
import "./App.css";

interface Card {
  id: string;
  name: string;
  images: {
    small: string;
  };
}

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  async function search(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(
      `https://api.pokemontcg.io/v2/cards?q=name:${query}&pageSize=10`
    );
    const data = await res.json();
    setCards(data.data);
    setLoading(false);
  }

  return (
    <>
      <form onSubmit={search}>
        <input onChange={(e) => setQuery(e.target.value)} />
        <button>{loading ? "..." : "Rechercher"}</button>
      </form>
      <div>
        {cards.map((card: Card) => (
          <div key={card.id} className="card">
            <img src={card.images.small} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
