const youTubeKey = "AIzaSyCWBQyLAECpQ6IUQF_uVHLXXUWEjnypYWg";

const channelIdKenza = "UCPcx204312AHrBxgPSpFLmQ";

// Array with discussions id. The module ModuleGetUserDescussion uses this array.
const youTubeComments = [
  {
    authorImage: "#author-image",
    authorName: "#author-name",
    authorComment: "#author-comment",
  },
];



// A function for handling errors that is available for all modules and is called in them
let handleError = () => {
  $("#myModal").modal("show");
};



// A Module for loading the latest videos
let ModuleLatestVideos = (function() {
  let getTheLatestVideos = () => {
    // Code included inside $(document).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
    $(document).ready(() => {
      /* getJSON - jQuery-function than load JSON-encoded data from the server using a GET HTTP request.
      Link contains part, channel id, order (sort by date), type (video) and key.*/
      $.getJSON(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelIdKenza}&order=date&type=video&key=${youTubeKey}`)
        .done((response) => {
          $.each(response.items, function(i, item) {
            let html = `
            <div class="center">
              <p>${item.snippet.title}</p>
              <iframe class="embed-responsive-item" src='http://www.youtube.com/embed/${item.id.videoId}'></iframe>
            </div>
            `;
            $("#html-video").append(html);
          });
          _createLoadMoreButton(response.nextPageToken);
        })
        .fail(() => {
          handleError();
        });
    });
  };

  /* A function for loading next videos. Use value nextPagetoken than I get from API. The value nextPageToken must be taken from
  the response from the api and send to the api to load a new portion of the videos. */
  let getNextVideos = (nextPageToken) => {
    // Code included inside $(document).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
    $(document).ready(function() {
      /* getJSON - jQuery-function than load JSON-encoded data from the server using a GET HTTP request.
      Link contains part, channel id, order (sort by date), page token, type (video) and key.*/
      $.getJSON(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelIdKenza}&order=date&pageToken=${nextPageToken}&type=video&key=${youTubeKey}`)
        .done((response) => {
          $.each(response.items, function(i, item) {
            let html = `
            <div class="center">
              <p>${item.snippet.title}</p>
              <iframe class="embed-responsive-item" src='http://www.youtube.com/embed/${item.id.videoId}'></iframe>
              </div>
            `;
            $("#html-video").append(html);
          });
          _createLoadMoreButton(response.nextPageToken);
        })
        .fail(() => {
          handleError();
        });
    });
  };

  /* A privat function to create Load more button, because the button should be configured each time with the loading of the video.
  The value nextPageToken must be taken from the response from the api and send to the api to load a new portion of the videos. */
  let _createLoadMoreButton = (nextPageToken) => {
    let nextVideosHtml = `<button class="my-pagination" onclick="ModuleLatestVideos.getNextVideos(\'${nextPageToken}\')">Load more</button>`;
    // replace html with button
    $("#next-page").html(nextVideosHtml);
  };

  return {
    getTheLatestVideos:getTheLatestVideos,
    getNextVideos: getNextVideos
  };
})();

ModuleLatestVideos.getTheLatestVideos();



// A Module for loading user's playlists
let ModulePlaylists = (function() {
  let getPlaylists = () => {
    // Code included inside $(document).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
    $(document).ready(function() {
      /* getJSON - jQuery-function than load JSON-encoded data from the server using a GET HTTP request.
      Link contains part, play list id (got from playlists) and key.*/
      $.getJSON(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLwSs4SNEBpJn8hdlrNOyhmGS-eEHpzd8O&key=${youTubeKey}`)
        .done((response) => {
          $.each(response.items, function(i, item) {
            let html = `
            <div class="center">
              <p>${item.snippet.title}</p>
              <iframe class="embed-responsive-item" src='http://www.youtube.com/embed/${item.snippet.resourceId.videoId}'></iframe>
              </div>
            `;
            $("#html-playlists").append(html);
          });
        })
        .fail((error) => {
          handleError(error);
        });
    });
  };

  return {
    getPlaylists:getPlaylists,
  };
})();

ModulePlaylists.getPlaylists();



// A Module for loading descussions on user's channel
let ModuleUserDescussion = (function() {
  let getYouTubeUserDescussion = () => {
    youTubeComments.map(() => {
      // Code included inside $(document).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
      $(document).ready(function() {
        /* getJSON - jQuery-function than load JSON-encoded data from the server using a GET HTTP request.
        Link contains part, channel id and key.*/
        $.getJSON(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&channelId=${channelIdKenza}&key=${youTubeKey}`)
          .done((response) => {
            $.each(response.items, function(i, item) {
              // form each comment separately (one comment contains author image, author name and author comment)
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
              `;
              $("#html-discussion").append(html);
            });
          })
          .fail(() => {
            handleError();
          });
      });
    });
  };

  return {
    getYouTubeUserDescussion: getYouTubeUserDescussion,
  };
})();

ModuleUserDescussion.getYouTubeUserDescussion();
