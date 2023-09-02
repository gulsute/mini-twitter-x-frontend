import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <a>Home</a>
        <a>Explore</a>
        <a>Notifications</a>
        <a>Messages</a>
        <a>Bookmarks</a>
        <a>Lists</a>
        <a>Profile</a>
        <a>More</a>
        <button> Tweet</button>
      </div>
    </nav>
  );
}
