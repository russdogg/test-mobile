var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "minimal-ui, width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1, maximum-scale=1";
    }
  }
}


(function($){

    var mailLink = 'mailto:russ.dahlberg@lbox.com?subject=Brad%20Paisley%20Cheeseburger%20Contest%20Entry&body=Selected concert city: ';
  


  $('a#mailLink').click(function(){
    var selectedCity = $('#tourcities').find(":selected").text();
    console.log("selectedCity: "+ selectedCity);
    mailLink += selectedCity;
    window.location.href = mailLink;
  });
  

})(jQuery);