$('#myContactBtn').on('click', function() { $('#myContactModal').css('display', 'block'); });
$('.c_close').first().on('click', function() { $('#myContactModal').css('display', 'none'); });

$('#myEPBtn').on('click', function() { $('#myEPModal').css('display', 'block'); });
$('.ep_close').first().on('click', function() { $('#myEPModal').css('display', 'none'); });

$('#myFBtn').on('click', function() { $('#myFModal').css('display', 'block'); });
$('.f_close').first().on('click', function() { $('#myFModal').css('display', 'none'); });

$('#myArtBtn').on('click', function() { $('#myArtModal').css('display', 'block'); });
$('.art_close').first().on('click', function() { $('#myArtModal').css('display', 'none'); });

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

$(async function() {
  var l = ['peaceful', 'grateful', 'truthful', 'thoughtful', 'mindful', 'beautiful', 'powerful', 'GIA'];
  var r = ['innovator', 'creator', 'friend', 'thinker', 'writer', 'citizen', 'ideator', 'GRIER'];
  var i = 0;

  while (true) {
    i = i % 8;
    await sleep(2000);
    $('#gia').html(l[i]);
    await sleep(2000);
    $('#grier').html(r[i]);
    i++;
  }
})
