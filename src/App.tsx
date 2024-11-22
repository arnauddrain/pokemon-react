import { useState } from "react";
import "./App.css";

interface Card {
  id: string;
  name: string;
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
