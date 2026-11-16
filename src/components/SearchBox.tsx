interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: Readonly<SearchBoxProps>) {
  return (
    <div className="field search-box">
      <label htmlFor="search">Search by title or author</label>
      <input id="search" type="text" value={value} onChange={(event) => onChange(event.target.value)} />
      {value !== "" && (
        <button type="button" className="btn" onClick={() => onChange("")}>
          Clear search
        </button>
      )}
    </div>
  );
}
