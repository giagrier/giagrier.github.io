function show(id) { $('#' + id.substr(0, id.length - 3) + 'Modal').css('display', 'block'); }
function hide(id) { $('#' + id.substr(0, id.length - 5) + 'Modal').css('display', 'none'); }

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
