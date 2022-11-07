import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext/UserContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { Profile } from "./pages/Profile";

export function Router() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}