interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

import { useNavigate } from "react-router";
import { getPokemon } from "../api/pokemon";

export default function SearchBox({
  value,
  onChange,
}: Readonly<SearchBoxProps>) {
  const navigate = useNavigate();

  async function handleSubmit(value: string, event) {
    event.preventDefault();
    const controller = new AbortController();
    const response = await getPokemon(value, controller.signal);

    if (typeof response !== "undefined") {
      console.log(response);
      navigate(`/pokedex/${response.id}`);
    }
  }

  return (
    <form onSubmit={(event) => handleSubmit(value, event)}>
      <div className="field search-box">
        <label htmlFor="search">Search by pokemon</label>
        <input
          id="search"
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <button>Search</button>
        {value !== "" && (
          <button type="button" className="btn" onClick={() => onChange("")}>
            Clear search
          </button>
        )}
      </div>
    </form>
  );
}
