import { Link } from "react-router-dom";

const Menu = () => (
  <div
    style={{ width: "200px", padding: "20px", borderRight: "1px solid #ddd" }}
  >
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
