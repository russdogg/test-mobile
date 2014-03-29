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
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}





(function($){
  // can do something like 
   var mailLink = 'mailto:russ.dahlberg@lbox.com?subject=mailto%20test&body=Thanks for using the mail to feature! Selected city: ';
  $('a#mailLink').click(function(){
    var selectedCity = $('#tourcities').find(":selected").text();
    console.log("selectedCity: "+ selectedCity);
    mailLink += selectedCity;
    window.location.href = mailLink;
  });
  

})(jQuery);