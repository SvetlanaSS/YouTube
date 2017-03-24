const youTubeKey = "AIzaSyCWBQyLAECpQ6IUQF_uVHLXXUWEjnypYWg";

// Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
$(document).ready(function() {
  /* jQuery - function than load JSON-encoded data from the server using a GET HTTP request.
  Link contains part, user id and key.
  JANNI*/
  $.getJSON("https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCdyTmTQTyGA2I7mMBODzqig&key=AIzaSyCWBQyLAECpQ6IUQF_uVHLXXUWEjnypYWg",
    // Function to handle json response data
    function(data) {
      $.each(data.items, function(i, item) {
        // build the DOM-document, photo for Janni
        let userPhotoJanni = "<div>";
        let userPhotoYouTubeJanni = item.snippet.thumbnails.medium.url;
        userPhotoJanni += "<div>"+userPhotoYouTubeJanni+"</div>"+"<iframe src='https://yt3.ggpht.com/-IC6K03zlONI/AAAAAAAAAAI/AAAAAAAAAAA/I89LtNXVCY4/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'></iframe>";
        userPhotoJanni += "</div>";
        $("#janni-photo").append(userPhotoJanni);

        // build the DOM-document, title for Janni
        let userNameJanni = "<div>";
        let userNameYouTubeJanni = item.snippet.title;
        userNameJanni += "<h3>"+userNameYouTubeJanni+"</h3>";
        userNameJanni += "</div>";
        $("#janni-name").append(userNameJanni);

        // build the DOM-document, description for Janni
        let userDescriptionJanni = "<div>";
        let userDescriptionYouTubeJanni = item.snippet.description;
        userDescriptionJanni += "<p>"+userDescriptionYouTubeJanni+"</p>";
        userDescriptionJanni += "</div>";
        $("#janni-description").append(userDescriptionJanni);
      });
  });

  // IDA, Link contains part, user name and key
  $.getJSON("https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=idasfitness&key=AIzaSyCWBQyLAECpQ6IUQF_uVHLXXUWEjnypYWg",
    // Function to handle json response data
    function(data) {
      $.each(data.items, function(i, item) {
        // build the DOM-document, photo for Ida
        let userPhotoIda = "<article>";
        let userPhotoYouTubeIda = item.snippet.thumbnails.medium.url;
        userPhotoIda += "<div>"+userPhotoYouTubeIda+"</div>"+"<iframe src='https://yt3.ggpht.com/-Z2WsylQId20/AAAAAAAAAAI/AAAAAAAAAAA/f5BUij7kpKg/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'></iframe>";
        userPhotoIda += "</article>";
        $("#ida-photo").append(userPhotoIda);

        // build the DOM-document, title for Ida
        let userNameIda = "<article>";
        let userNameYouTubeIda = item.snippet.title;
        userNameIda += "<h3>"+userNameYouTubeIda+"</h3>";
        userNameIda += "</article>";
        $("#ida-name").append(userNameIda);

        // build the DOM-document, description for Ida
        let userDescriptionIda = "<article>";
        let userDescriptionYouTubeIda = item.snippet.description;
        userDescriptionIda += "<p>"+userDescriptionYouTubeIda+"</p>";
        userDescriptionIda += "</article>";
        $("#ida-description").append(userDescriptionIda);
      });
  });

  // KENZA, Link contains part, user name and key
  $.getJSON("https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=KenzaZouitenOfficial&key=AIzaSyCWBQyLAECpQ6IUQF_uVHLXXUWEjnypYWg",
    // Function to handle json response data
    function(data) {
      $.each(data.items, function(i, item) {
        // build the DOM-document, photo for Kenza
        let userPhotoKenza = "<article>";
        let userPhotoYouTubeKenza = item.snippet.thumbnails.medium.url;
        userPhotoKenza += "<div>"+userPhotoYouTubeKenza+"</div>"+"<iframe src='https://yt3.ggpht.com/-QlPM7k67in8/AAAAAAAAAAI/AAAAAAAAAAA/85HIlh0Ousk/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'></iframe>";
        userPhotoKenza += "</article>";
        $("#kenza-photo").append(userPhotoKenza);

        // build the DOM-document, title for Kenza
        let userNameKenza = "<article>";
        let userNameYouTubeKenza = item.snippet.title;
        userNameKenza += "<h3>"+userNameYouTubeKenza+"</h3>";
        userNameKenza += "</article>";
        $("#kenza-name").append(userNameKenza);

        // build the DOM-document, description for Kenza
        let userDescriptionKenza = "<article>";
        let userDescriptionYouTubeKenza = item.snippet.description;
        userDescriptionKenza += "<p>"+userDescriptionYouTubeKenza+"</p>";
        userDescriptionKenza += "</article>";
        $("#kenza-description").append(userDescriptionKenza);
      });
  });
});
