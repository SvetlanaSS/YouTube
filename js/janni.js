const youTubeKey = "AIzaSyCWBQyLAECpQ6IUQF_uVHLXXUWEjnypYWg";

// Array with discussions id. The module ModuleGetUserDescussion uses this array.
const youTubeComments = [
  {
    authorImage: "#author-image",
    authorName: "#author-name",
    authorComment: "#author-comment",
  },
];

// A Module for loading descussions on user's channel
let ModuleGetUserDescussion = (function() {
  let getYouTubeUserDescussion = () => {
    youTubeComments.map((author) => {
      // Code included inside $(document).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
      $(document).ready(function() {
        /* getJSON - jQuery-function than load JSON-encoded data from the server using a GET HTTP request.
        Link contains part, channel id and key.*/
        $.getJSON(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&channelId=UCdyTmTQTyGA2I7mMBODzqig&key=${youTubeKey}`, function(response) {
          $.each(response.items, function(i, item) {
            let html = `
            <div class="media">
              <div class="media-left">
                <img class="media-object" src="${item.snippet.topLevelComment.snippet.authorProfileImageUrl}" alt="Author image">
              </div>
              <div class="media-body">
                <h4 class="media-heading">${item.snippet.topLevelComment.snippet.authorDisplayName}</h4>
                <p>${item.snippet.topLevelComment.snippet.textDisplay}</p>
              </div>
            </div>
            `
            $("#new-html").append(html);
          });
        });
      });
    });
  };

  return {
    getYouTubeUserDescussion: getYouTubeUserDescussion,
  };
})();

ModuleGetUserDescussion.getYouTubeUserDescussion();
