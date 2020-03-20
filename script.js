var c_modal = document.getElementById("myContactModal");
var c_btn = document.getElementById("myContactBtn");
var c_span = document.getElementsByClassName("c_close")[0];
c_btn.onclick = function() { c_modal.style.display = "block"; }
c_span.onclick = function() { c_modal.style.display = "none"; }

var ep_modal = document.getElementById("myEPModal");
var ep_btn = document.getElementById("myEPBtn");
var ep_span = document.getElementsByClassName("ep_close")[0];
ep_btn.onclick = function() { ep_modal.style.display = "block"; }
ep_span.onclick = function() { ep_modal.style.display = "none"; }

var f_modal = document.getElementById("myFModal");
var f_btn = document.getElementById("myFBtn");
var f_span = document.getElementsByClassName("f_close")[0];
f_btn.onclick = function() { f_modal.style.display = "block"; }
f_span.onclick = function() { f_modal.style.display = "none"; }

var art_modal = document.getElementById("myArtModal");
var art_btn = document.getElementById("myArtBtn");
var art_span = document.getElementsByClassName("art_close")[0];
art_btn.onclick = function() { art_modal.style.display = "block"; }
art_span.onclick = function() { art_modal.style.display = "none"; }
