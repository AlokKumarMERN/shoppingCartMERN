// import { createContext, useContext, useState } from "react";

// const CounterContext = createContext();

// export const CounterProvider = ({children}) => {
//     const [index, setIndex] = useState(0);
  
//     return (
//         <CounterContext.Provider value={{index, setIndex}}>
//             {children}
//         </CounterContext.Provider>
//     );
// };

// export const useCounter = () => useContext(CounterContext);