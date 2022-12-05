import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import React, { useState, Suspense } from "react";
import Topbar from "./scenes/global/topbar";
import Sidebar from "./scenes/global/sidebar";
import Spinner from "./components/spinner";
import Footer from "./scenes/global/footer";
const Dashboard = React.lazy(() => import("./scenes/dashboard/grid"));
const Aide = React.lazy(() => import("./scenes/aide/index"));
const Parametre = React.lazy(() => import("./scenes/parametres/index"));

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" width="100%">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Dashboard />
                  </Suspense>
                }
              />
              <Route
                path="/Parametre"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Parametre />
                  </Suspense>
                }
              />
              <Route
                path="/Aide"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Aide />
                  </Suspense>
                }
              />
            </Routes>
            <Footer />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
