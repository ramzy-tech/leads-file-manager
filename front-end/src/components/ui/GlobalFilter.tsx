type Props = { filter: string; setFilter: (string) => void };

const GlobalFilter = ({ filter = "", setFilter }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-lg italic">Search</span>
      <input
        type="search"
        title="search value"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        className="grow rounded-lg border border-sky-500 p-2 outline-none"
      />
    </div>
  );
};

export default GlobalFilter;
