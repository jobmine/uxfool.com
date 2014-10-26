$(document).ready(function(){
  var a = ["269C5C", "CCC75A", "1B9AF7", "7B72E9", "FF667A"];
  var i = 0; var c; function letsroll() { c = a[i]; $(".ribbon").css("background-color","#" + c); i = (i + 1) % a.length; }
  setInterval(letsroll, 4000);
});