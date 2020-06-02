$('#myContactBtn').on('click', function() { $('#myContactModal').css('display', 'block'); });
$('#c_close').on('click', function() { $('#myContactModal').css('display', 'none'); });

$('#myPBtn').on('click', function() { $('#myPModal').css('display', 'block'); });
$('#p_close').on('click', function() { $('#myPModal').css('display', 'none'); });

$('#myFBtn').on('click', function() { $('#myFModal').css('display', 'block'); });
$('#f_close').on('click', function() { $('#myFModal').css('display', 'none'); });

$('#myArtBtn').on('click', function() { $('#myArtModal').css('display', 'block'); });
$('#art_close').on('click', function() { $('#myArtModal').css('display', 'none'); });

$('#myCampBtn').on('click', function() { $('#myCampModal').css('display', 'block'); });
$('#camp_close').on('click', function() { $('#myCampModal').css('display', 'none'); });

$('#myEPBtn').on('click', function() { $('#myEPModal').css('display', 'block'); });
$('#ep_close').on('click', function() { $('#myEPModal').css('display', 'none'); });

$('#mySisBtn').on('click', function() { $('#mySisModal').css('display', 'block'); });
$('#sis_close').on('click', function() { $('#mySisModal').css('display', 'none'); });

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

$(async function() {
  var l = ['peaceful', '&nbsp; grateful', '&nbsp; truthful', 'thoughtful', ' &nbsp; mindful', 'beautiful', 'powerful', '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; GIA'];
  var r = ['innovator', 'creator', 'friend', 'thinker', 'writer', 'citizen', 'ideator', 'GRIER'];
  var i = 0;
  await sleep(2000);

  while (true) {
    await sleep(2000);
    $('#gia').html(l[i]);
    await sleep(2000);
    $('#grier').html(r[i]);
    i = (i + 1) % 8;
  }
})
