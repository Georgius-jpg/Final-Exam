import { Routes as RoutesList, Route } from "react-router-dom";
import { ROUTES_CONFIG } from "./config/routes";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import ROUTES from "./config/routes";
function Routes(posts) {
  return (
    <RoutesList>
      {ROUTES_CONFIG.map((route) => {
        const Guard = route.guard;
        const Page = route.page;

        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Guard>
                <Page />
              </Guard>
            }
          />
        );
      })}
      <Route path={ROUTES.DASHBOARD} element={<Dashboard posts={posts} />} />
      <Route path={ROUTES.DASHBOARDD} element={<Dashboard posts={posts} />} />
      <Route path="*" element={<ErrorPage />} />
    </RoutesList>
  );
}

export default Routes;
