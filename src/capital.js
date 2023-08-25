import { useEffect, useState } from "react";

const Capitalcity = () => {
  const searchCC = "https://restcountries.com/v3.1/capital/";
  const api = "https://restcountries.com/v3.1/all";

  const [ccdisplay, setCcDisplay] = useState([]);
  const [ccSearch, setCcSearch] = useState("");
  const handleSearch = (e) => {
    setCcSearch(e.target.value);
  };

  const fetchdata = async (capitalCity) => {
    const response = await fetch(`${searchCC}${capitalCity}`);
    const datas = await response.json();
    setCcDisplay(datas);
    console.log(datas);
  };

  const searchButton = () => {
    fetchdata(ccSearch);
  };

  const fetchdatatwo = async () => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchdatatwo();
  }, []);

  return (
    <div>
      <p> Serach By Capital City</p>

      <input
        className="form-control"
        onChange={handleSearch}
        value={ccSearch}
      />

      <button onClick={searchButton} className="btn btn-dark p-3 fw-bold">
        {" "}
        Search{" "}
      </button>

      {ccdisplay.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name.official}</h1>
            <img src={item.flags.png} />
            <p> Population: {item.population} </p>
            <p>Region: {item.region} </p>
            <p> Car Side: {item.car.side} </p>
            <p> Area: {item.area} </p>
            <p> Sub Region: {item.subregion} </p>
            <p>Start of the week: {item.startOfWeek} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Capitalcity;
