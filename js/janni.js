// A Module for loading descussions on user's channel
let ModuleGetUserDescussion = (function() {
  let getYouTubeUserDescussion = () => {
    // Code included inside $(document).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
    $(document).ready(function() {
      /* getJSON - jQuery-function than load JSON-encoded data from the server using a GET HTTP request.
      Link contains part, user id and key.*/
      $.getJSON(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCdyTmTQTyGA2I7mMBODzqig&key=${youTubeKey}`, function(response) {
        $.each(response.items, function(i, item) {
          let authorProfileImageYouTube = item.snippet.snippet.authorProfileImageUrl;
          let authorProfileImage = "<img src=" + authorProfileImageYouTube + "alt='Author image'>";
          $("#author-image").append(authorProfileImage);


        });
      });
    });
};

  return {
    getYouTubeUsersData: getYouTubeUsersData,
  };
})();

ModuleGetUserDescussion.getYouTubeUsersData();
