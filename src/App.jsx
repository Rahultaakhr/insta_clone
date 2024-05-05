import MyState from "./context/MyState";
import React, { Suspense } from "react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Lazy-loaded components
const Home = React.lazy(() => import('./pages/Home/Home'));
const Login = React.lazy(() => import('./pages/Registration/Login'));
const NoPage = React.lazy(() => import('./pages/NoPage/NoPage'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage/ProfilePage'));
const ProfilePageForUser = React.lazy(() => import('./pages/ProfilePage/ProfilePageForUser'));
const ProtectedRoutesForHome = React.lazy(() => import('./ProtectedRoutes/ProtectedRoutesForHome'));
const ProtectedRoutesForProfile = React.lazy(() => import('./ProtectedRoutes/ProtectedRoutesForProfile'));
const Signup = React.lazy(() => import('./pages/Registration/Signup'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <MyState>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProtectedRoutesForHome><Home /></ProtectedRoutesForHome>} />
            <Route path="profile/:id" element={<ProfilePageForUser />} />
            <Route path="/profile" element={<ProtectedRoutesForProfile><ProfilePage /></ProtectedRoutesForProfile>} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
        <Toaster />
      </BrowserRouter>
    </MyState>
  );
}

export default App;
