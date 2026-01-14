const FilterBar = ({ setStatus, setPriority }) => {
  return (
    <div className="filter-bar">

      <select onChange={e => setStatus(e.target.value)}>
        <option>All</option>
        <option>Open</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>

      <select onChange={e => setPriority(e.target.value)}>
        <option>All</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
  );
};

export default FilterBar;
