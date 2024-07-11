import { Header } from "./components/Header";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { AppContextProvider } from "./contexts/AppContext";
import "./App.css";

const App = () => {
  return (
    <div className="white">
      <Header />

      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </div>
  );
};

export default App;
