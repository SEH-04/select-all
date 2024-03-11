import { useEffect, useState } from "react"

const data = [
  { name: 'India', selected: false },
  { name: 'US', selected: false },
  { name: 'Francia', selected: false },
];

function App() {
  const [countries, setCountries] = useState(data);
  const [selectAll, setSelectAll] = useState(false);

  const toggleCountry = (i: number) => {
    const updatedCountries = [...countries];
    updatedCountries[i].selected = !updatedCountries[i].selected;
    setCountries(updatedCountries);
    selectAll && setSelectAll(false);
  };

  const toggleSelectAll = () => {
    const updatedCountries = countries.map(c => ({
      ...c,
      selected: !selectAll,
    }));
    setCountries(updatedCountries);
    setSelectAll(!selectAll);
  };

  useEffect(() => {
    const allSelected = countries.every(country => country.selected);
    setSelectAll(allSelected);
  }, [countries]);
  
  return (
    <form>
    <input type="checkbox" checked={selectAll} onChange={toggleSelectAll} id="all" />
    <label htmlFor="all">Select all</label>

    {countries.map((country, i) => (
      <>
        <input
            type="checkbox"
            checked={country.selected}
            onChange={() => toggleCountry(i)}
            />
          <label>{country.name}</label>
      </>

      ))}
  </form>
  )
}

export default App
