function backhome() {
    window.location.href = "index.html"
}

function authenticate() {
    var cred = document.getElementById("cred").value;
    var pword = document.getElementById("pword").value;

    if (cred == 'toast' && pword == '2186') {
        document.getElementById("blocked").style.display = 'none';
        document.getElementById("content").style.display = 'block';
        const stylesheet = document.getElementById("stylish");
        const fav = document.getElementById("favicon");
        const cred = document.getElementById("cred");
        const pword = document.getElementById("pword");
        stylesheet.setAttribute('href', "style.css");
        fav.setAttribute('href', "favicon.png");
        cred.value = "";
        pword.value = "";
    }
    else {
        document.getElementById("failed").innerHTML = "Incorrect Username or Password."
    }
}

function lock() {
    document.getElementById("blocked").style.display = 'block';
    document.getElementById("content").style.display = 'none';
    const stylesheet = document.getElementById("stylish");
    const fav = document.getElementById("favicon");
    stylesheet.setAttribute('href', "")
    fav.setAttribute('href', "locked.png")
}

function test() {
    document.getElementById("blocked").style.display = 'none';
    document.getElementById("content").style.display = 'block';
    const stylesheet = document.getElementById("stylish");
    const fav = document.getElementById("favicon");
    stylesheet.setAttribute('href', "style.css");
    fav.setAttribute('href', "favicon.png");
}

// Set the date we're counting down to
var countDownDate = new Date("Oct 10, 6000 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24)));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = years + "y " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);