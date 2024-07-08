import { RouterProvider } from "react-router-dom";
import { CSpinner, useColorModes } from "@coreui/react";
import router from "./router/router.jsx";
import { StateProvider } from "./context/ContextProvider.jsx";
import "./assets/scss/style.scss";

function App() {
  const { isColorModeSet, setColorMode } = useColorModes(
    "coreui-free-react-admin-template-theme"
  );

  return (
    <StateProvider
      fallback={
        <div className="pt-3 text-center">
          <CSpinner color="primary" variant="grow" />
        </div>
      }
    >
      <RouterProvider router={router}></RouterProvider>
    </StateProvider>
  );
}

export default App;
