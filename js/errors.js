// If for some reason a video can not load on the page, an error message will be displayed
$("iframe").error(function(){
  alert("A video can not load on the page");
});

// Configure the default error handler for all ajax requests:
$.ajaxSetup({
  error: function() {
    alert("Sorry, there was an error, please try to load the page later");
  }
});

// ?????????????????????????????????????
$.ajax({
  method: 'GET',
  url: 'http://localhost:3000',
  //When you send data
  contentType: 'application/json; charset=utf-8',
  dataType: 'json' //What you expect to get
  success: (response) => { return response; },
  error: (error) => { return error };
})

$.get('http://localhost:3000')
      .done((response) => response)
      .fail((error) => error)
      .always(()=> 'After all this time?')
