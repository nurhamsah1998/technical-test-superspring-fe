import {BrowserRouter} from "react-router";
import Routes from "./Routes";
import {SnackbarProvider} from "notistack";

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
