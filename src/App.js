import "./App.css";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { Appbar } from "./components/app-bar";

const theme = createTheme({
  typography: {
    fontFamily: 'Gilroy'
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Appbar />
    </ThemeProvider>
  );
}

export default App;
