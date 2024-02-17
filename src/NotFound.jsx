import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <h2 className="notFound">Page Not Found !</h2>
      <p className="backHome">
        Go to the <Link to="/">Home</Link>.
      </p>
    </div>
  );
}
