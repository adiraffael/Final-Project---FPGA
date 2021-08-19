// ----------------------------------------------------------- dark mode //

function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

// ----------------------------------------------------------- alert message //

function alertMessage() {
	alert("Messages Sent! Thanks from Rahmat Adi Wijaya");
}

// ----------------------------------------------------------- back to top //

mybutton = document.getElementById("BackToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
