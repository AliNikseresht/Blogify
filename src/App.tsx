import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import { mainRoutes, privateMainRoutes } from "./routes/router";
import PrivateRoutes from "./utils/PrivateRoutes";
import { Suspense } from "react";
import Loading from "./components/ui/Loading";
import { AuthProvider } from "./hooks/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              {mainRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
            <Route element={<PrivateRoutes />}>
              {privateMainRoutes.map((routeItem) => (
                <Route
                  key={routeItem.path}
                  path={routeItem.path}
                  element={routeItem.element}
                />
              ))}
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
