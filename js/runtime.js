<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>// Create a new Date object
var now = new Date;

// Define a function that updates the time every second
function createtime() {
  // Add 1000 milliseconds to the current date
  now.setTime(now.getTime() + 1000);

  // Define two dates for calculations
  var e = new Date("08/01/2022 00:00:00");
  var o = new Date("08/09/2022 00:00:00");

  // Calculate the distance between two dates in kilometers and astronomical units
  var t = Math.trunc(234e8 + (now - e) / 1e3 * 17);
  var a = (t / 1496e5).toFixed(6);

  // Calculate the number of days, hours, minutes, and seconds between two dates
  var n = (now - o) / 1e3 / 60 / 60 / 24;
  var r = Math.floor(n);
  var i = (now - o) / 1e3 / 60 / 60 - 24 * r;
  var s = Math.floor(i);
  if (String(s).length == 1) {
    s = "0" + s;
  }
  var d = (now - o) / 1e3 / 60 - 1440 * r - 60 * s;
  var l = Math.floor(d);
  if (String(l).length == 1) {
    l = "0" + l;
  }
  var g = (now - o) / 1e3 - 86400 * r - 3600 * s - 60 * l;
  var b = Math.round(g);
  if (String(b).length == 1) {
    b = "0" + b;
  }

  // Create HTML content based on the time and distance calculations
  let c = s < 18 && s >=9 ? 
  `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-科研摸鱼中.svg' 
  title='什么时候能够实现财富自由呀~'><br> 
  <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>` : `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;
  font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`;
  
  // Update the HTML content of an element with ID "workboard"
  if (document.getElementById("workboard")) {
    document.getElementById("workboard").innerHTML = c;
  }
}

// Call the createtime function every second using setInterval
setInterval(() => {
    createtime()
}, 1000);
