import "./App.css";
import { ThemeProvider, createTheme, Box } from "@material-ui/core";
import { Appbar } from "./components/app-bar";
import { ImageSection } from "./components/image-section";
import { Footer } from "./components/footer";

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
        <Box mt={7} mb={11}>
          <ImageSection />
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
