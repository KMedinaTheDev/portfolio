alert("hi")
$(document).ready(function(){
  $("#aboutMeContain").hover(function(){
    $(".hidden").toggleClass("hidden_result");
  })
  // $("#aboutMeContain").on("mouseout", function(){
  //   $(".hidden").remove();
  // })
});
