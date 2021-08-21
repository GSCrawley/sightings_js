/* eslint-disable import/no-anonymous-default-export */
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.default = (function (callback) {
    var frame = react_1.useRef();
    var last = react_1.useRef(performance.now());
    var init = react_1.useRef(performance.now());
    var animate = function () {
        var now = performance.now();
        var time = (now - init.current) / 1000;
        var delta = (now - last.current) / 1000;
        callback({ time: time, delta: delta });
        last.current = now;
        frame.current = requestAnimationFrame(animate);
    };
    react_1.useEffect(function () {
        frame.current = requestAnimationFrame(animate);
        return function () { return cancelAnimationFrame(frame.current); };
    });
});

