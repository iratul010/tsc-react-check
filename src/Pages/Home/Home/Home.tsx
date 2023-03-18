import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { AppValuesType, UseContext } from "../../../Context/AppProvider";

const Home: React.FC = () => {
  const { state } = UseContext() as AppValuesType;

  return (
    <Box bgcolor="GrayText" margin="0 auto" textAlign="center">
      <Typography component="h2" height="100px">
        This is Home
      </Typography>

      <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center">
        {state.data.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={4}
            xl={4}
            key={i}
            style={{ backgroundColor: "bisque", width: "100px", height: "250px", padding: "0px", margin: "0px" }}
          >
            <Typography variant="body1">{item.id}</Typography>

            <Typography variant="body1">{item.userId}</Typography>
            <h3>{item.title}</h3>
            <Typography variant="body1">completed: {`${item.completed}`}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
