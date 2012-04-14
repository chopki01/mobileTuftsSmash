function checkin (form)
{
  //Make call to service here that updates where you are. 
  console.log("Writing from form");
  window.location.hash = "#map"
};
$(function(){
  $("#map").bingmaps({height: "400px"});
});