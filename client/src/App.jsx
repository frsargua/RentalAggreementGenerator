import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import MainPage from "./assets/pages/mainPage";

function App() {
  return (
    <>
      <Typography
        variant="h2"
        fontWeight={500}
        textAlign={"center"}
        gutterBottom
      >
        Create your Rental Agreement Here
      </Typography>
      <Container maxWidth="lg">
        <MainPage />
      </Container>
    </>
  );
}

export default App;
