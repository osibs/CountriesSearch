import { useEffect, useState } from "react";
const api = "https://restcountries.com/v3.1/all";
const searchC = "https://restcountries.com/v3.1/currency/";
const Currency = () => {

  const [Cdisplay, setCdisplay] = useState([]);
  const [currencyS, setcurrencyS] = useState("");
  const handleSearch = (e) => {
    setcurrencyS(e.target.value);
  };

  const fetchdata = async (currencyName) => {
    const response = await fetch(`${searchC}${currencyName}`);
    const datas = await response.json();
    setCdisplay(datas);
    console.log(datas);
  };

  const fetchdatatwo = async () => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
  };

  const searchButton = () => {
    fetchdata(currencyS);
  };

  useEffect(() => {
    fetchdatatwo();
  }, []);

  return (
    <div>

    <p> Search By Currency </p>

      <input
        className="form-control"
        onChange={handleSearch}
        value={currencyS}
      />

      <button onClick={searchButton} className="btn btn-dark p-3 fw-bold">
        Search
      </button>

      {Cdisplay.map((item, index) => {
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

export default Currency;
