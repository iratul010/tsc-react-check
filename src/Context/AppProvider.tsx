import React, { createContext, useEffect, useState } from "react";

interface AboutType {
  name: string;
  age: number;
}

interface AppValuesType {
  about: AboutType;
}

export const MyContext = createContext<AppValuesType | null>(null);

const AppProvider = ({ children }: any) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const about: AboutType = {
    name: "ratul",
    age: 23,
  };

  const appValues: AppValuesType = { about };
  console.log(appValues);
  return <MyContext.Provider value={appValues}>{children}</MyContext.Provider>;
};

export default AppProvider;
// import React, { createContext, useEffect, useState } from "react";

// // interface AppContextProps {
// //   data: string;
// // }

// // export const AppContext = createContext<AppContextProps | null>(null);
// // interface MyContextData {
// //   name: string;
// //   age: number;
// // }
// // interface AppValuesType {}
// export const MyContext: React.Context<any> = createContext(null);

// const AppProvider = ({ children }: any) => {
//   const [data, setData] = useState<any>([]);
//   const [loading, setLoading] = useState(true);
//   console.log("object");
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   interface AboutType {
//     name: string;
//     age: number;
//   }

//   interface AppValuesType {
//     about: AboutType;
//   }

//   const about: AboutType = {
//     name: "ratul",
//     age: 23,
//   };

//   const appValues: any = { about };

//   return <MyContext.Provider value={appValues}>{children}</MyContext.Provider>;
// };

// export default AppProvider;
