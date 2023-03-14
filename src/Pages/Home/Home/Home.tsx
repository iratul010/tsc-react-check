import React, { useContext } from "react";
import { MyContext } from "../../../Context/AppProvider";

const Home = () => {
  const { about } = useContext(MyContext) ?? {};
  console.log(about);
  return (
    <div>
      <h2>This is Home</h2>
      {/* {data.map((item: any) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Home;
