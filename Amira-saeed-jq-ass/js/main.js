/*==================   Start Details Secion  ====================*/
$("h4").click(function (e) {
  let notMe = $(e.target).next().toggle(500);
  $(".det-box").not(notMe).hide(500);
});
/*==================   End Details Secion  ====================*/

/*==================  Start of side navbar  ====================*/

// open Nav
$("#open-nav").click(function () {
  $(".side-nav").toggle();
});

//close nav
$("i").click(function () {
  $(".side-nav").toggle();
});

/*==================  End of side navbar  ====================*/

/*==================  Start of duration navbar  ====================*/

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = `
 
  <div class="col-md-3">
 <div class='dur-box'>${days}d</div>
</div>
<div class="col-md-3">
 <div class='dur-box'>${hours}h</div>
</div>
<div class="col-md-3">
 <div class='dur-box'>${minutes}m</div>
</div>
<div class="col-md-3">
 <div class='dur-box'> ${seconds}s</div>
</div>`;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

/*==================  End of duration navbar  ====================*/

/*==================  Start of Contact navbar  ====================*/
$("textarea").keyup(function () {

  const text = $("textarea").val();
  const changeNumber = 100 - text.length;

  $("#char").text(changeNumber);

  if (text.length > 100) {
    $(".char-rem").css("display", "none");
    $("#char").text("you have exceeded the number of allowed characters");
  } else {
    $(".char-rem").css("display", "inline-block");
  }
});

/*==================  End of Contact navbar  ====================*/
