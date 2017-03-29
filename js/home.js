const youTubeKey = "AIzaSyCWBQyLAECpQ6IUQF_uVHLXXUWEjnypYWg";

// Predifined data as array of objects
const youTubeUsers = [
  {
    id: "UCdyTmTQTyGA2I7mMBODzqig",
    userName: "#janni-name",
    userDescription: "#janni-description",
    userPhoto: "#janni-photo",
    userFollowers: "#janni-followers",
    alt: "Jannis photo"
  },
  {
    id: "UCZJr-W6Z40wfVnritqnp9kQ",
    userName: "#ida-name",
    userDescription: "#ida-description",
    userPhoto: "#ida-photo",
    userFollowers: "#ida-followers",
    alt: "Idas photo"
  },
  {
    id: "UCPcx204312AHrBxgPSpFLmQ",
    userName: "#kenza-name",
    userDescription: "#kenza-description",
    userPhoto: "#kenza-photo",
    userFollowers: "#kenza-followers",
    alt: "Kenzas photo"
  },
];



// A function for handling errors that is available for all modules and is called in them
let handleError = () => {
  $("#myModal").modal("show");
};



// A module to show information about users
let ModuleGetUsersData = (function() {
  let getYouTubeUsersData = () => {
    youTubeUsers.map((user) => {
      // Code included inside $(document).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
      $(document).ready(function() {
        // progress bar
        $.LoadingOverlay("show");
        /* getJSON - jQuery-function than load JSON-encoded data from the server using a GET HTTP request.
        Link contains part, user id and key.*/
        $.getJSON(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${user.id}&key=${youTubeKey}`)
          .done((response) => {
            // progress bar
            $.LoadingOverlay("hide");
            $.each(response.items, function(i, item) {
              $(user.userPhoto).append(`<img src=${item.snippet.thumbnails.medium.url} alt=${user.alt}>`);
              $(user.userName).append(item.snippet.title);
              $(user.userFollowers).append(item.statistics.subscriberCount);
              $(user.userDescription).append(item.snippet.description);
            });
          })
          .fail(() => {
            $.LoadingOverlay("hide");
            handleError();
          });
      });
    });
  };

  return {
    getYouTubeUsersData: getYouTubeUsersData,
  };
})();

ModuleGetUsersData.getYouTubeUsersData();



/* If I have only one user, this is the function I would use. I wrote this function first. Then I realized that I would have three users.
And I would repeat the same functions three times. I made an array of users and minimized lines of code.

$(document).ready(function() {
  $.getJSON("https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCdyTmTQTyGA2I7mMBODzqig&key=AIzaSyCWBQyLAECpQ6IUQF_uVHLXXUWEjnypYWg",
    function(data) {
      $.each(data.items, function(i, item) {
        let userPhotoYouTubeJanni = item.snippet.thumbnails.medium.url;
        let userPhotoJanni = "<img src=" + userPhotoYouTubeJanni + "alt='Jannis photo'>";
        $("#janni-photo").append(userPhotoJanni);

        let userNameYouTubeJanni = item.snippet.title;
        let userNameJanni = userNameYouTubeJanni;
        $("#janni-name").append(userNameJanni);

        let userFollowersYouTube = item.statistics.subscriberCount;
        let userFollowers = userFollowersYouTube;
        $("#janni-followers").append(userFollowers);

        let userDescriptionYouTubeJanni = item.snippet.description;
        let userDescriptionJanni = userDescriptionYouTubeJanni;
        $("#janni-description").append(userDescriptionJanni);
      });
  });
});

*/
