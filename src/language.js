import { useEffect, useState } from "react";

const api = "https://restcountries.com/v3.1/all";
const searchL = "https://restcountries.com/v3.1/lang/";

const Language = () => {
  const [languageD, setLanguageD] = useState([]);
  const [languageS, setLanguageS] = useState(""); //here, we are creating this variable to rep the value of the input so we can handle the inpyt details
  const handleSearch = (e) => {
    setLanguageS(e.target.value);
  };

  const fetchdata = async (languageName) => {
    const response = await fetch(`${searchL}${languageName}`);
    const datas = await response.json();
    setLanguageD(datas);
    console.log(datas);
  };

  const searchButton = () => {
    fetchdata(languageS);
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
      <p> Serach By Language </p>

      <input
        className="form-control"
        onChange={handleSearch}
        value={languageS}
      />

      <button onClick={searchButton} className="btn btn-dark p-3 fw-bold">
        {" "}
        Search{" "}
      </button>

      {languageD.map((item, id) => {
        return (
          <div key={id}>
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

export default Language;
