import React from "react";

const Home = () => {
  return (
    <>
      <center>
        <h1 className="text-3xl mt-12">Home</h1>
      </center>
      <div className="flex flex-column justify-center items-center gap-4">
        <div className="flex justify-around items-center h-screen flex-column gap-4">
          <div className="w-80 h-80 bg-fuchsia-200 rounded-md hover:shadow-xl hover:shadow-sky-800 hover:bg-gradient-to-r hover:from-fuchsia-400 hover:from-fuchsia-600"></div>
          <Container />
        </div>
        <Btn />
      </div>
    </>
  );
};

const Container = () => {
  return (
    <>
      <div className="flex items-center justify-center w-72 h-72 rounded-2xl bg-blue-300 hover:bg-gradient-to-l hover:from-purple-200 hover:to-sky-500 hover:shadow-2xl hover:shadow-black"></div>
      <div className="w-64 h-64 rounded-lg bg-purple-400 hover:bg-blue-300 hover:shadow-md hover:bg-gradient-to-l hover:from-blue-300 hover:to-rose-300 hover:shadow-2xl hover:shadow-violet-500"></div>
      <div className=" w-36 h-36 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-black  "></div>
    </>
  );
};

const Btn = () => {
  return (
    <>
      <div className="flex justify-around items-center flex-row mb-12 gap-4">
        <button className="rounded-md bg-blue-500 p-2 px-6 hover:bg-gradient-to-l hover:from-blue-300 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500">
          save
        </button>
        <button className="bg-purple-300 rounded-md p-2 px-6 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-500 hover:shadow-lg hover:shadow-purple-500">
          change
        </button>
        <button className="bg-rose-200 rounded-md p-2 px-6 hover:bg-gradient-to-l hover:from-lime-400 hover:to-lime-600 hover:shadow-lime-500 hover:shadow-lg">
          click
        </button>
      </div>
    </>
  );
};

export default Home;
