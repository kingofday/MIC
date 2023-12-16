import { Outlet } from "react-router-dom";
import { Suspense, useContext } from "react";
import SharedContext from "../context/SharedContext";
import useFetcher from "../utils/useFetcher";
export default function Layout() {
  const { logout } = useContext(SharedContext);
  const fetcher = useFetcher()
  const handleLogout = async () => {
    const res = await fetcher({
      pathname: "Auth/Logout",
      method: "POST"
    })
    if (res)
      logout();
  }
  return (
    <>
      <header>MIC is great</header>
      <main>
      <Suspense fallback={<span>Loading...</span>}>
        <Outlet />
      </Suspense>

      </main>
      <footer>
        <p>Present by Shahrooz & Masood-1402-09</p>
        <button onClick={handleLogout}>Logout</button>
      </footer>
    </>
  );
}