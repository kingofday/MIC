import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SharedContext from './context/SharedContext';
import Login from './routes/login';
import Layout from './components/Layout';
import Posts from './routes/posts';
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("user");
  }, [])
  const router = createBrowserRouter([
    !!user ? {
      element: <Layout />,
      children: [
        { path: "/", element: <Posts /> },
        { path: "*", element: <Navigate to="/" replace /> },
      ],
    } : {},
    ...[
      { path: "/login", element: <Login /> },
      { path: "*", element: <Navigate to="/login" replace /> },
    ],
  ]);
  // Provide the router configuration using RouterProvider
  return (
    <SharedContext.Provider value={{ user, setUser, logout }}>
      <RouterProvider router={router} />
    </SharedContext.Provider>
  )
}

export default App
