import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Components/Spinner"
import Card from "./Components/Card"

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsulYD2akz.json"
      )
      .then((res) => {
        !search
          ? setData(res.data)
          : setData(res.data.filter((songs) => songs.singer === search));
      });
  }, [search]);
  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
  };
  return
  <>
  <div>
    <nav className="nav">
      <div className="container">
        <h3 className="brand">Music App</h3>
        <form className="d flex" onSubmit={onSubmit}>
          <input className=""  type="text"  onChange={(e) => setSearch(e.target)} />
          <input className="btn"  type="submit"  value="Searcch"/>
        </form>
      </div>
    </nav>

  {data.length >=1 ?
  <center>
    <Card songs = {data}/>
  </center>
  :
  <Spinner/>
  }

    </div>

  
  
  </>
  
  
};

export default App;
