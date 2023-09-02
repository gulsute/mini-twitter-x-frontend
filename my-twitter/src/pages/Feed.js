import Navbar from "../components/Navbar";
import Tweet from "../components/Tweet";
import Trends from "../components/Trends";

export default function Feed() {
  return (
    <div>
      <Navbar />
      <Tweet />
      <Tweet />
      <Tweet />
      <Trends />
    </div>
  );
}
