import "./App.css";
import { ThemeProvider, createTheme, Box } from "@material-ui/core";
import { Appbar } from "./components/app-bar";
import { ImageSection } from "./components/image-section";

const theme = createTheme({
  typography: {
    fontFamily: "Gilroy",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box mx={5}>
        <Appbar />
        <Box mt={8}>
          <ImageSection />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
