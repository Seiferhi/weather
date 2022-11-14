import { Stack } from "@mui/material";
import { appStyle } from "./style";
import ToastContainer from "./components/toast/toastContainer";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routing";

function App() {
  return (
    <Stack sx={appStyle} className="App">
      <ToastContainer />
      <AppRoutes />
    </Stack> 
  );
}

export default App;
