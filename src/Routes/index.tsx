import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppPages } from "./PageInfo";

export default function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        {AppPages.map((route) => (
          <Route key={route.name} element={route.element} path={route.path} />
        ))}
      </Routes>
    </Suspense>
  );
}
