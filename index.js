/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API

*/

document.querySelector("button").addEventListener("mouseup", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("h4").textContent = data.activity;
      document.getElementById("main-title").textContent = "🦾 HappyBot🦿";
      const keywords = data.activity.split(" ");
      let searchStr = "";
      for (let word of keywords) {
        if (word.length >= 3) {
          searchStr += word + ",";
        }
      }
      searchStr = searchStr.slice(0, -1);
      document.getElementById(
        "activity-img"
      ).src = `https://source.unsplash.com/daily?${searchStr}`;
      document.getElementById(
        "activity-img-1"
      ).src = `https://source.unsplash.com/weekly?${searchStr}`;
      document.getElementById(
        "activity-img-2"
      ).src = `https://source.unsplash.com/featured/?${searchStr}`;
    });
});
