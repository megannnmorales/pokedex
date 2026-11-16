interface ResultCountProps {
  count: number;
  label?: string;
}

export default function ResultCount({
  count,
  label = "books",
}: ResultCountProps) {
  return (
    <p className="result-count">
      {count} {label}
    </p>
  );
}
