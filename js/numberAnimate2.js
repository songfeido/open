var x1 = 9999999; //总目标
var y1 = 999999; //总人目标
var z1 = 999999; //总车模标
var zong = 1245862; //总
var zongmen = 338462; //日人
var zongcar = 271572; //日车
var oZong = zong.toString();
var oZongmen = zongmen.toString();
var oZongcar = zongcar.toString();
var oX = x1.toString();
var oY = y1.toString();
var oZ = z1.toString();
var oNum = [oX, oY, oZ];

for (var i = -1; i < oNum.length; i++) {
  var text = '';
  if (i == 0) {
    for (var index = 0; index < oNum[i].length; index++) {
      text += '<i>' + oZong[index] + '</i>'
    }
    $("#numberS1").html(text);
  }
  if (i == 1) {
    for (var index = 0; index < oNum[i].length; index++) {
      text += '<i>' + oZongmen[index] + '</i>'
    }
    $("#numberS2").html(text);
  }
  if (i == 2) {
    for (var index = 0; index < oNum[i].length; index++) {
      text += '<i>' + oZongcar[index] + '</i>'
    }
    $("#numberS3").html(text);
  }
}

function setNum(obj, num) {
  var n = new Array;
  var timer = new Object;
  var oString = num.toString();
  for (let i = 0; i < oString.length; i++) {
    n[i] = 0;
    timer[i] = setInterval(function() {
      n[i] = n[i] >= 9 ? 0 : n[i] + 1;
      $(obj).eq(i).html(n[i]); //
      var text = '';
      for (let k = 0; k < oString.length; k++) {
        text += $(obj).eq(k).html();
      }
      if (text == num) {
        for (var each in timer) {
          clearInterval(timer[each]);
        }
      }
    }, 30 * Math.pow(10, oString.length - 1 - i));
  }
}

setNum('#numberS1 i', x1);
setNum('#numberS2 i', y1);
setNum('#numberS3 i', z1);
