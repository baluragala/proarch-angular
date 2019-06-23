console.log("hello");
var username = 10;
var Status;
(function (Status) {
    Status[Status["OK"] = 0] = "OK";
    Status[Status["ERR"] = 1] = "ERR";
    Status[Status["WARN"] = 2] = "WARN";
})(Status || (Status = {}));




tsc --init 