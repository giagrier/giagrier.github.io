// remove 'Btn' from end of id
function show(id) { $('#' + id.substr(0, id.length - 3) + 'Modal').css('display', 'block'); }
// remove 'close' from end of id
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

function mus(y, h) {
  var ht = h.substr(h.length - 1);
  var d, x;
  if (ht == '+') {
    d = 'block';
    x = ' -';
  }
  else if (ht == '-') {
    d = 'none';
    x = ' +';
  }
  if (y > 0) {
    $('#_' + y).html('&nbsp; ' + y + x);
    $('#w' + y).css('display', d);
  }
  else {
    var hf = h.split(' ')[0];
    $('#' + hf[0]).html(h.substr(0, h.length - 1) + x);
    $('#' + hf).css('display', d);
  }
}
