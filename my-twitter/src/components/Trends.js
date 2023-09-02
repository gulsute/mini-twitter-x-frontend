import "./trends.css";

export default function Trends() {
  const topTweets = [
    {
      text: "#loveislove",
      rating: "2.74m tweets",
    },
    {
      text: "Filenin Sultanları",
      rating: "679.52k tweets",
    },
    {
      text: "#imamhatiplerazaltilsin",
      rating: "48.96k tweets",
    },
  ];

  const trendsArray = topTweets.map((topTweet, i) => (
    <div className="trend" key={i}>
      <span class="text-xl font-semibold ">{topTweet.text}</span>
      <br />
      <span>{topTweet.rating}</span>
    </div>
  ));
  return (
    <div className="trendsbox">
      <h2>Trends for you</h2>
      <div className="trends">{trendsArray}</div>
    </div>
  );
}
