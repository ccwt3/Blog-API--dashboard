import { useEffect } from "react";
import { get } from "../../services/fetcher";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//todo Change the route to posts later, /me is currently for testing

export function Home() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ username: "jose" });

  useEffect(() => {
    get("/users/me").then((res) => {
      if (res.status !== 200) {
        return navigate("/login");
      }

      setUserInfo({ username: res.message });
      console.log(userInfo);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>Welcome Back {userInfo.username}</h1>;
}
