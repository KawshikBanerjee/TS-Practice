"use strict";
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["sun"] = 0] = "sun";
    daysOfWeek[daysOfWeek["mon"] = 1] = "mon";
    daysOfWeek[daysOfWeek["tue"] = 2] = "tue";
    daysOfWeek[daysOfWeek["wed"] = 3] = "wed";
    daysOfWeek[daysOfWeek["thu"] = 4] = "thu";
})(daysOfWeek || (daysOfWeek = {}));
let day = daysOfWeek.mon;
// day = daysOfWeek.mon;
console.log(day);
