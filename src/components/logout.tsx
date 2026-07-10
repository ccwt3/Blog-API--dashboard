import { post } from "../../services/fetcher";
import { useNavigate } from "react-router-dom";

export function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await post({}, "/auth/logout");

    if (response.status === 200) {
      return navigate("/login");
    } else {
      console.log(response.status, response.message);
      return navigate("/register");
    }
  };

  return (
    <button className="btn btn-ghost" onClick={handleLogout}>
      Logout
    </button>
  );
}
