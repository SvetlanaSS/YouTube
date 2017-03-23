const youTubeKey = "AIzaSyCWBQyLAECpQ6IUQF_uVHLXXUWEjnypYWg";

// Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
$(document).ready(function() {
  /* jQuery - function than load JSON-encoded data from the server using a GET HTTP request
  Link contains part, user id and key*/
  $.getJSON("https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCdyTmTQTyGA2I7mMBODzqig&key=AIzaSyCWBQyLAECpQ6IUQF_uVHLXXUWEjnypYWg",
    // Function to handle json response data
    function(data) {
      $.each(data.items, function(i, item) {
        // build the DOM-document, photo
        let userPhoto = "<article>";
        userPhotoYouTube = item.snippet.thumbnails.medium.url;
        userPhoto += "<img src=\'   \>"+userPhotoYouTube
        "<p>"+videoTitle+"</p>"+'<iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe>';
        userPhoto += "</article>";
        $("#janni-photo").append(userPhoto);

        // build the DOM-document, title
        let userName = "<article>";
        userNameYouTube = item.snippet.title;
        userName += "</article>";
        $("#janni-name").append(userName);

        // build the DOM-document, description
        let userDescription = "<article>";
        userDescriptionYouTube = item.snippet.description;
        userDescription += "</article>";
        $("#janni-description").append(userDescription);
      });
  });
});
