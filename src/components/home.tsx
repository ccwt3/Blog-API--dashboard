import { useEffect } from "react";
import { get, post } from "../../services/fetcher";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CreatePost } from "./createPost";
import { PostsFeed } from "./postsFeed";
import { Logout } from "./logout";

//todo Change the route to posts later, /me is currently for testing

export function Home() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ username: "jose" });
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    get("/users/me").then(async (res) => {
      if (!(res.status === 200 || res.status === 201)) {
        const refreshResponse = await post({}, "/auth/refresh");
        console.log(refreshResponse.status, refreshResponse.message);

        if (refreshResponse.status !== 200) {
          return navigate("/login");
        }

        const retryResponse = await get("/users/me");
        res = retryResponse;
      }

      setUserInfo({ username: res.resBody.user.username });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="page">
      <div className="topbar">
        <h1 className="topbar__greeting">Welcome back, {userInfo.username}</h1>
        <div className="topbar__actions">
          <CreatePost onCreated={() => setRefreshKey((k) => k + 1)} />
          <Logout />
        </div>
      </div>

      <PostsFeed key={refreshKey} />
    </main>
  );
}
