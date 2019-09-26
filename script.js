// MODAL START HERE
var a_modal = document.getElementById("myAboutModal");

// Get the button that opens the modal
var a_btn = document.getElementById("myAboutBtn");

// Get the <span> element that closes the modal
var a_span = document.getElementsByClassName("a_close")[0];

// When the user clicks the button, open the modal
a_btn.onclick = function() {
	a_modal.style.display = "block";
}
// MODAL END HERE

// When the user clicks on <span> (x), close the modal
a_span.onclick = function() {
	a_modal.style.display = "none";
}

// Get the modal
var c_modal = document.getElementById("myContactModal");

// Get the button that opens the modal
var c_btn = document.getElementById("myContactBtn");

// Get the <span> element that closes the modal
var c_span = document.getElementsByClassName("c_close")[0];

// When the user clicks the button, open the modal
c_btn.onclick = function() {
	c_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
c_span.onclick = function() {
	c_modal.style.display = "none";
}

// Get the modal
var ep_modal = document.getElementById("myEPModal");

// Get the button that opens the modal
var ep_btn = document.getElementById("myEPBtn");

// Get the <span> element that closes the modal
var ep_span = document.getElementsByClassName("ep_close")[0];

// When the user clicks the button, open the modal
ep_btn.onclick = function() {
	ep_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ep_span.onclick = function() {
	ep_modal.style.display = "none";
}

// Get the modal
var w_modal = document.getElementById("myWModal");

// Get the button that opens the modal
var w_btn = document.getElementById("myWBtn");

// Get the <span> element that closes the modal
var w_span = document.getElementsByClassName("w_close")[0];

// When the user clicks the button, open the modal
w_btn.onclick = function() {
	w_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
w_span.onclick = function() {
	w_modal.style.display = "none";
}

// Get the modal
var cc_modal = document.getElementById("myCCModal");

// Get the button that opens the modal
var cc_btn = document.getElementById("myCCBtn");

// Get the <span> element that closes the modal
var cc_span = document.getElementsByClassName("cc_close")[0];

// When the user clicks the button, open the modal
cc_btn.onclick = function() {
	cc_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cc_span.onclick = function() {
	cc_modal.style.display = "none";
}
var art_modal = document.getElementById("myArtModal");

// Get the button that opens the modal
var art_btn = document.getElementById("myArtBtn");

// Get the <span> element that closes the modal
var art_span = document.getElementsByClassName("art_close")[0];

// When the user clicks the button, open the modal
art_btn.onclick = function() {
	art_modal.style.display = "block";
}

// disable white link popup in bottom left corner
var aTags = document.querySelectorAll('span[data-href]');

for(var i = 0; i < aTags.length; i++){
    var aTag = aTags[i];
    aTag.addEventListener('click', function(e){
        var ele = e.target;
        window.location.replace(ele.getAttribute('data-href'));
    });
}

function showDiv() {
	 document.getElementById('outer').style.display = "none";
	 document.getElementById('ENTER').style.display = "none";
	 document.getElementById('inner').style.display = "block";
	 document.getElementById('left').style.display = "block";
	 document.getElementById('right').style.display = "block";
}
