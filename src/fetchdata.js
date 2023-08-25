import { useEffect, useState } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const api = "https://restcountries.com/v3.1/all";
// const apitwo = 'https://dummyjson.com/products';
const searchc = "https://restcountries.com/v3.1/name/";

const Fetchdata = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const [onedata, setOnedata] = useState([]);

  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const response = await fetch(api); //await simply says you should continue the process while i fetch this data
    const data = await response.json(); //the .json() will get the info from the backend in json format
    setData(data); //updated the array
    console.log(data);
  };

  const fetchdataone = async (countryName) => {
    const response = await fetch(`${searchc}${countryName}`);
    const datas = await response.json();
    setOnedata(datas)
    console.log(datas);
  };

  const searchButton = () => {
    fetchdataone(search);
  };

  // useEffect(() => {

  // }) //dont use this because it runs on every render

  useEffect(() => {
    fetchdata();
    // fetchdatatwo()
  }, []); //use this, it will only run once

  // useEffect(() => {

  // }, [value]) //use this too, it will run only when the value changes


  
  return (
    <div className="Pplace">
      <div className="inputsection">
        {/* <h3> {search} </h3>     */}
        <input
          className="form-control"
          onChange={handleSearch}
          value={search}
        />
        <button onClick={searchButton} className="btn btn-dark p-3 fw-bold">
         Search
        </button>
      </div>

        <Onedata data={onedata} /> 
        {/* the 'data' here can be any name, we made use of props */}
      

     <div className="countriesdisplay">
     {data.map((item, index) => {
        return (
          <div className="place" key={index}>
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
    </div>
  );
};

const Onedata = ({data}) => {
    return (
        <div > 
        {data.map((item, index) => {
           return (
            <div key={index}>
            <img src={item.flags.png} />
         </div>
          )
        })}
      </div> 
    )
}

//population, nmae, image, car side with icon, region. area, official name, subregion, startofweek
// function list({list}) {
//     return (
//         <div className="container">
//             {list.map((item, index) => {
//                 return (
//                     <div key={index}>
//                         {/* <h1> {item.name.common} </h1> */}

//                     </div>
//                 )
//             })}
//         </div>
//     )
// }


// currency capitalcity language
export default Fetchdata;
