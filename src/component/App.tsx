import { Box } from "@mui/material";

import { RouterProvider } from "react-router-dom";
import router from "../Routes/Routes/Routes";

const App = () => {
  return (
    <Box style={{ width: "1440px", margin: "0 auto" }}>
      <RouterProvider router={router}></RouterProvider>
    </Box>
  );
};

export default App;
