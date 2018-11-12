	$(document).ready(function() {
	    $('#fullpage').fullpage();
	    menu: '#navigation'
	});

  $("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // эта строка ▼ предотвращает прокрутку содержимого
    $("body").toggleClass("locked");
});

  timeend= new Date();

  timeend= new Date(2018, 10, 20, 23, 59);

  function times() {
      today = new Date();
      today = Math.floor((timeend-today)/1000);
      tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
      tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
      thour=today%24; today=Math.floor(today/24);
      timestr=today +" ";
      document.getElementById('t').innerHTML=timestr;
      window.setTimeout("time()",1000);
  }

  timeend= new Date();

  timeend= new Date(2018, 10, 20, 23, 59);

  function time() {
      today = new Date();
      today = Math.floor((timeend-today)/1000);
      tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
      tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
      thour=today%24; today=Math.floor(today/24);
      timestr=" "+ thour+":"+tmin+":"+tsec+"";
      document.getElementById('tt').innerHTML=timestr;
      window.setTimeout("time()",1000);
  }


  timeend= new Date();

  timeend= new Date(2018, 10, 20, 23, 59);

  function timess() {
      today = new Date();
      today = Math.floor((timeend-today)/1000);
      tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
      tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
      thour=today%24; today=Math.floor(today/24);
      timestr=today + " дней и " + thour + " часов ";
      document.getElementById('ttt').innerHTML=timestr;
      window.setTimeout("time()",1000);
  }  

  timeend= new Date();

  timeend= new Date(2018, 10, 20, 23, 59);

  function timesss() {
      today = new Date();
      today = Math.floor((timeend-today)/1000);
      tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
      tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
      thour=today%24; today=Math.floor(today/24);
      timestr=today + " дней и " + thour + " часов ";
      document.getElementById('tttt').innerHTML=timestr;
      window.setTimeout("time()",1000);
  }  