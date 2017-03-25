const youTubeKey = "AIzaSyCWBQyLAECpQ6IUQF_uVHLXXUWEjnypYWg";

const channelIdIda= "UCZJr-W6Z40wfVnritqnp9kQ";

// Array with discussions id. The module ModuleGetUserDescussion uses this array.
const youTubeComments = [
  {
    authorImage: "#author-image",
    authorName: "#author-name",
    authorComment: "#author-comment",
  },
];



// A Module for loading the latest videos
let ModuleLatestVideos = (function() {
  let getTheLatestVideos = () => {
    // Code included inside $(document).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
    $(document).ready(function() {
      /* getJSON - jQuery-function than load JSON-encoded data from the server using a GET HTTP request.
      Link contains part, channel id and key.*/
      $.getJSON(``, function(response) {
        $.each(response.items, function(i, item) {

        });
      });
    });
  };

  return {
    getTheLatestVideos:getTheLatestVideos,
  }
})();

ModuleLatestVideos.getTheLatestVideos();



// A Module for loading user's playlists
let ModulePlaylists = (function() {
  let getPlaylists = () => {
    // Code included inside $(document).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
    $(document).ready(function() {
      /* getJSON - jQuery-function than load JSON-encoded data from the server using a GET HTTP request.
      Link contains part, play list id (got from playlists) and key.*/
      $.getJSON(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL4nEz_ACMgWUUN5AAR7tWNWbiipW3N2yH&key=${youTubeKey}`, function(response) {
        $.each(response.items, function(i, item) {
          let html = `
          <div class="center">
            <p>${item.snippet.title}</p>
            <iframe class="embed-responsive-item" src='http://www.youtube.com/embed/${item.snippet.resourceId.videoId}'></iframe>
          </div>
          `
          $("#html-playlists").append(html);
        });
      });
    });
  };


  return {
    getPlaylists:getPlaylists,
  }
})();

ModulePlaylists.getPlaylists();



// A Module for loading descussions on user's channel
let ModuleUserDescussion = (function() {
  let getYouTubeUserDescussion = () => {
    youTubeComments.map((author) => {
      // Code included inside $(document).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
      $(document).ready(function() {
        /* getJSON - jQuery-function than load JSON-encoded data from the server using a GET HTTP request.
        Link contains part, channel id and key.*/
        $.getJSON(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&channelId=${channelIdIda}&key=${youTubeKey}`, function(response) {
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
            $("#html-discussion").append(html);
          });
        });
      });
    });
  };

  return {
    getYouTubeUserDescussion: getYouTubeUserDescussion,
  };
})();

ModuleUserDescussion.getYouTubeUserDescussion();
