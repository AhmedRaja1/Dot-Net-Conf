﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/*Functions*/
$(function () {
	var milliseconds = parseInt($('#originalCount').val()),
		delay = 60000;

	displayTimer(milliseconds);
	countDown(milliseconds, delay);
});

function displayTimer(milliseconds) {
	var days = Math.floor(milliseconds / (36e5 * 24)),
		hours = Math.floor((milliseconds - (days * 24 * 36e5)) / 36e5),
		minutes = Math.floor((milliseconds % 36e5) / 6e4);

	$('#days').text(days);
	$('#hours').text(hours);
	$('#minutes').text(minutes);
};

function countDown(time, delay) {
	var refreshIntervalId = setInterval(function () {
		time -= delay;
		if (time > 0)
			displayTimer(time);
		else {
			//displayMessage();
			clearInterval(refreshIntervalId);
		}
	}, delay);
};
