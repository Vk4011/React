import React from "react";
import  { useState } from "react";
import "../Styles/Home.css";
import axios from "axios";
import Card from "./Card";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handler = (e) => {
    setSearch(e.target.value);
  };
  React.useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=25")
      .then((res) => setData(res.data.coins));//setData
  }, []);

  return (
    <>
      <div className="container">
        <div className="header">
          <input
            value={search}
            onChange={handler}
            className="in"
            placeholder="search for crypto"
          />
        </div>
        {data.length > 0 && (
          <div className="grid-container">
            {data
              .filter((crypto) =>
                crypto.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((crypto) => (
                <div>
                  <Card
                    name={crypto.name}
                    rank={crypto.price}
                    price={crypto.price}
                    marketCap={crypto.marketCap}
                    key={crypto.id}
                    url={crypto.icon}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
