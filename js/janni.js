const youTubeKey = "AIzaSyCWBQyLAECpQ6IUQF_uVHLXXUWEjnypYWg";

// A Module for loading descussions on user's channel
let ModuleGetUserDescussion = (function() {
  let getYouTubeUserDescussion = () => {
    // Code included inside $(document).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
    $(document).ready(function() {
      /* getJSON - jQuery-function than load JSON-encoded data from the server using a GET HTTP request.
      Link contains part, channel id and key.*/
      $.getJSON(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&channelId=UCdyTmTQTyGA2I7mMBODzqig&key=${youTubeKey}`, function(data) {
        $.each(data.items, function(i, item) {
          let authorProfileImage = "<img src='" + item.snippet.topLevelComment.snippet.authorProfileImageUrl + "' alt='Author image'>";
          $("#author-image").append(authorProfileImage);

          let authorName = item.snippet.topLevelComment.snippet.authorDisplayName;
          $("#author-name").append(authorName);

          let authorComment = item.snippet.topLevelComment.snippet.textDisplay;
          $("#author-comment").append(authorComment);
        });
      });
    });
};

  return {
    getYouTubeUserDescussion: getYouTubeUserDescussion,
  };
})();

ModuleGetUserDescussion.getYouTubeUserDescussion();
