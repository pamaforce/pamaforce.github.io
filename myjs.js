window.onbeforeunload = function () {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}
var mysystem = {};
var p = navigator.platform;
var f = document.getElementsByClassName('fonts');
var as = document.getElementsByClassName('asize');
var c7 = document.getElementById('cable7');
var c7s = document.getElementById('cable7s');
var ws = document.getElementById('wechatcodes');
var codeb = document.getElementById('codebox');
mysystem.win = p.indexOf("Win") == 0;
mysystem.mac = p.indexOf("Mac") == 0;
mysystem.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
if (mysystem.win || mysystem.mac || mysystem.xll) {

}
else {
    c7.style.display = 'none';
    c7s.style.display = 'block';
    ws.style.left = '12%';
    for (var i = 1; i <= 10; i++) {
        var e = document.getElementById('e' + i);
        e.style.fontSize = '10px';
    }
    for (var i = 0; i <= 23; i++) {
        f[i].style.fontSize = '9px';
    }
    for (var i = 0; i <= 15; i++) {
        as[i].style.fontSize = '6px';
    }
    codeb.style.left = '38%';
    codeb.style.width = '125px';
    codeb.style.height = '132px';
    alert("您好！由于网页形式限制及我的技术有限，移动端设备的显示比例无法调至最佳，(删减部分信息，若需获得更佳体验可以前往电脑端^_^)对不起啦！还请您理解哦O(∩_∩)O");
}
var now = new Date();
var hour = now.getHours();
var t1 = document.getElementById('t1');
if (hour < 6) {
    t1.innerText = 'Hello,凌晨好！';
}
else if (hour < 9) {
    t1.innerText = 'Hello,早上好！';
}
else if (hour < 11) {
    t1.innerText = 'Hello,上午好！';
}
else if (hour < 13) {
    t1.innerText = 'Hello,中午好！';
}
else if (hour < 17) {
    t1.innerText = 'Hello,下午好！';
}
else if (hour < 19) {
    t1.innerText = 'Hello,傍晚好！';
}
else if (hour < 25) {
    t1.innerText = 'Hello,晚上好！';
}
var cl = document.getElementById('classlogo');
var cb = document.getElementById('codebox');
cl.onmouseover = function () {
    cb.style.display = 'block';
}
cl.onmouseout = function () {
    cb.style.display = 'none';
}
var cable = [];
var sun = [];
var things0 = [];
var abc = ['a', 'b', 'c', 'd', 'e', 'f'];
var num = 1;
for (var i = 0; i <= 23; i++) {
    var x = Math.floor(i / 4);
    var y = i % 4 + 1;
    things0[i + 1] = document.getElementById('thing' + abc[x] + y);
}
for (var i = 1; i <= 7; i++) {
    cable[i] = document.getElementById('cable' + i);
    sun[i] = document.getElementById('sun' + i);
}
var x = cable[1].getBoundingClientRect().top + 120;
var prx = x;
var refreshs = function (agopage, nowpage, nowthing) {
    var minpage = agopage;
    if (nowpage < agopage) minpage = nowpage;
    sun[minpage].style.top = "0px";
    for (var i = 1; i <= 7; i++) {
        var tt = i * 4 - 3;
        if (i < minpage) {
            sun[i].style.top = "0px";
            sun[i].style.height = "0px";
        }
        else if (i > minpage + 1) {
            sun[i].style.top = "800px";
            sun[i].style.height = "0px";
        }
        if (tt < nowthing && i != 7) {
            things0[tt].style.left = "-46%";
            things0[tt + 1].style.left = "100%";
            things0[tt + 2].style.left = "-46%";
            things0[tt + 3].style.left = "100%"
        }
        else if (tt > nowthing && i != 7) {
            things0[tt].style.left = "0px";
            things0[tt + 1].style.left = "54%";
            things0[tt + 2].style.left = "0px";
            things0[tt + 3].style.left = "54%"
        }
    }
}
var c1 = 28 * 800 / 9 + 820;
var c2 = 28 * 800 / 19 + 820;
window.onscroll = function () {
    x = cable[1].getBoundingClientRect().top + 120;
    var tr = num;
    if (x >= 0 && x <= 800) num = 1;
    else if (x >= -800 && x < 0) num = 2;
    else if (x >= -1600 && x < -800) num = 3;
    else if (x >= -2400 && x < -1600) num = 4;
    else if (x >= -3200 && x < -2400) num = 5;
    else if (x >= -4000 && x < -3200) num = 6;
    var td = num * 4 - 3;
    if (num != tr) refreshs(tr, num, td);
    prx = x - 800 + 800 * num;
    sun[num].style.height = prx + "px";
    sun[num + 1].style.top = prx + "px";
    sun[num + 1].style.height = 800 - prx + "px";
    if (prx >= 700 && prx <= 800) {
        things0[td].style.left = (7 * prx - 5600) / 15.2 + "%";
    }
    if (prx >= 575 && prx <= 800) {
        things0[td + 1].style.left = (c1 - 28 * prx / 9) / 15.2 + "%";
    }
    if (prx >= 450 && prx <= 800) {
        things0[td + 2].style.left = (2 * prx - 1600) / 15.2 + "%";
    }
    if (prx >= 325 && prx <= 800) {
        things0[td + 3].style.left = (c2 - 28 * prx / 19) / 15.2 + "%";
    }
}
