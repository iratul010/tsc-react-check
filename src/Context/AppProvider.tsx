import { CircularProgress } from "@mui/material";
import React, { useEffect, useContext, useReducer } from "react";
import { ActionType } from "../State/ActionTypes";
import { InitialState, initialState, mixerReducer } from "../State/Reducers/MixerReducer";

export interface ObjectData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface AppValuesType {
  state: InitialState;
}

export const MyContext = React.createContext<AppValuesType | null>(null);
interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  // const [data, setData] = useState<ObjectDT[]>([]);
  const [state, dispatch] = useReducer(mixerReducer, initialState);

  useEffect(() => {
    dispatch({ type: ActionType.FETCHING_REPOSITORIES });

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(typeof data, data);
        dispatch({ type: ActionType.FETCHING_REPOSITORIES_SUCCESS, payload: data });
      })
      .catch(() => {
        dispatch({ type: ActionType.FETCHING_REPOSITORIES_ERROR });
      });
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  if (state.loading) {
    return <CircularProgress variant="determinate" value={progress} />;
  }

  const appValues: AppValuesType = { state };

  return <MyContext.Provider value={appValues}>{children}</MyContext.Provider>;
};
export function UseContext() {
  const CONTEXT = useContext(MyContext);
  return CONTEXT;
}

export default AppProvider;
