import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children, anonymous = false }) {
  if (!isLoggedIn) {
    const location = useLocation();
    const from = location.state?.from || "/";

    if (anonymous && isLoggedIn) {
      return <Navigate to={from} />;
    }

    if (!anonymous && !isLoggedIn) {
      return <Navigate to="/" replace state={{ from: location }} />;
    }
  }

  return children;
}

export default ProtectedRoute;
