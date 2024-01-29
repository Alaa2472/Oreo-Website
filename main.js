document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("contento").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 2000); // 3000 milliseconds (3 seconds)
});

// بفرق واربط ال array
var wlc = ["Welcome", "to", "oreo", "world!"];

let wlcresult = wlc.join(" ");
let res = wlcresult.split(" ");
console.log(wlc);
console.log(wlcresult + " " + typeof wlcresult);
console.log(res);
console.log(wlcresult + " " + res);

// تطبيق.. اكتب فالكونسول oreo is true 1
const info = [[1, 2, 3], [4, 5, 6], "is", [7, 8, 9], true, "oreo"];
// بظبط اللي عايز اكتبه ب 2d array
let easyinfo = [info[5], info[2], info[4], info[0][0]];
// بفرق الكلام عشان هيطلع سترنج فانا عايز افرقه اخليه array
let easyinforesult = easyinfo.join(" ");
// بطبع الكلام الحلو دا
console.log(easyinfo);
console.log(easyinforesult);
// يعني حاجه زياده كدا
console.log(info[4]);

var devteam = ["farghaly", "niro", "turbo", "ashmawy"];
var frontDev = "oreo";
devteam[1] = "3abet";
devteam.unshift("oreo");
devteam.push("devM7md");
devteam.shift("ashmawy");

console.log(devteam);
console.log(devteam + " " + frontDev);
console.log("turbo word length = " + devteam[2].length);
console.log(frontDev.includes("yassin"));
console.log(typeof frontDev);


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById ("loader").style.display = "none";
    document.getElementById("contentoz").style.display = "block";
  }, 1500); // 3000 milliseconds (3 seconds)
});
