import "./tweet.css";

export default function Tweet() {
  return (
    <div class="tweetbox">
      <div class="tweet">
        <img
          class="avatar"
          src="https://fastly.picsum.photos/id/935/600/800.jpg?hmac=sNtfBR4zSf-nfah-GkUQ46cfkoO2g3n09sRlaHwWZ2k"
        />
        <div class="text">
          <div class="name">
            <h3>Zeynep</h3>
            <p>@zeyno26</p>
          </div>
          <p class="content">
            Majör bir hata yaptığımızda çocuktuk o zamanlar bahanesine
            sığınamayacağımız yaşlardayız artık değil mi yani kesin olarak
          </p>
        </div>
      </div>
    </div>
  );
}
