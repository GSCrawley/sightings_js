Object.defineProperty(exports, "__esModule", { value: true });

import React, { useState, useEffect, useRef } from 'react'

exports.default = (function (callback) {
    var frame = useRef();
    var last = useRef(performance.now());
    var init = useRef(performance.now());
    var animate = function () {
        var now = performance.now();
        var time = (now - init.current) / 1000;
        var delta = (now - last.current) / 1000;
        callback({ time: time, delta: delta });
        last.current = now;
        frame.current = requestAnimationFrame(animate);
    };
    useEffect(function () {
        frame.current = requestAnimationFrame(animate);
        return function () { return cancelAnimationFrame(frame.current); };
    });
});

