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
    var userAgent = navigator.userAgent;
    var isIphone = navigator.userAgent.indexOf("iPhone") != -1 ;
  //alert("My user agent: "+ userAgent + " Is this an iphone? " + isIphone);  
    var userOS;    // will either be iOS, Android or unknown
    var userOSver; // this is a string, use Number(userOSver) to convert
 
    function getOS( )
    {
      var ua = navigator.userAgent;
      var uaindex;

      // determine OS
      if ( ua.match(/iPad/i) || ua.match(/iPhone/i) )
      {
        userOS = 'iOS';
        uaindex = ua.indexOf( 'OS ' );
      }
      else if ( ua.match(/Android/i) )
      {
        userOS = 'Android';
        uaindex = ua.indexOf( 'Android ' );
      }
      else
      {
        userOS = 'unknown';
      }
        
        

      // determine version
      if ( userOS === 'iOS'  &&  uaindex > -1 )
      {
        userOSver = ua.substr( uaindex + 3, 3 ).replace( '_', '.' );
      }
      else if ( userOS === 'Android'  &&  uaindex > -1 )
      {
        userOSver = ua.substr( uaindex + 8, 3 );
      }
      else
      {
        userOSver = 'unknown';
      }
        
    }
     getOS();
    
    document.getElementById('mobileos').innerHTML = userOS;
    document.getElementById('mobilevers').innerHTML = userOSver;
    
   
    
  

    
    
    
    
    var mailLink = 'mailto:russ.dahlberg@lbox.com?subject=Brad%20Paisley%20Cheeseburger%20Contest%20Entry&body=Selected concert city: ';
  


  $('a#mailLink').click(function(){
    var selectedCity = $('#tourcities').find(":selected").text();
    console.log("selectedCity: "+ selectedCity);
    mailLink += selectedCity;
    window.location.href = mailLink;
  });
  

})(jQuery);