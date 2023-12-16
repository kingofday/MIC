import { useContext } from "react";
import SharedContext from "../context/SharedContext";
const handleError = (err) => {
  if (err.status === 401) {

  }
  return null;
}
const useFetcher = () => {
  const { logout } = useContext(SharedContext);
  return async ({ pathname, method = "GET", body }) => {
    try {
      const call = await fetch(`https://localhost:7032/${pathname}`, {
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include",
        method,
        body
      });
      if (call.ok)
        return await call.json();
      else if (call.status === 401) {
        logout();
        return null;
      }
    }
    catch (err) {
      console.log(err);
      return null;
    }
  }

}
export default useFetcher;