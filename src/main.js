/*
Author: Carlo Cervellin
About QuickSettings: https://github.com/bit101/quicksettings
*/

//canvas initialization
var canvas = document.getElementById("koch-snowflake-canvas"),
	context = canvas.getContext("2d");

// canvas variables
var canvas_top = canvas.getBoundingClientRect().top;

var backgroundColor = "#f2f2f2";
var lineColor = "#1abc9c";
document.body.style.backgroundColor = backgroundColor;

var body = document.getElementsByTagName("body")[0];
var width = body.clientWidth - 20,
	height = body.clientHeight - 20;
canvas.setAttribute("width", width - 10);
canvas.setAttribute("height", height);

//quicksetting panels
var panel = QuickSettings.create(10, 10 + canvas_top, "Paramethers", null)
	.addRange("Polygon Edges", 3, 12, 3, 1, update)
	.addRange("Iterations", 0, 6, 0, 1, update)
	.addRange("Spike Elevation", -4, 4, 1, 0.01, update)
	.addRange("Spike Base Width", -3, 3, 1, 0.01, update)
	.addRange("Spike Rotation", -180, 180, 0, 1, update)
	.addRange("Rotation", -180, 180, 0, 1, update)
	.addRange("ShiftX", -300, 300, 0, 1, update)
	.addRange("ShiftY", -300, 300, 0, 1, update)
	.addRange("Zoom", 0, 2, 1, 0.01, update)
	.addRange("Edge Thickness", 0, 10, 1, 0.1, draw)
	.addRange("Dot Thickness", 0, 10, 0, 0.1, draw)
	.addButton("Info", toggleInfoPanel)
	.addButton("Color", toggleColorPanel);

var infoPanel = QuickSettings.create(
	10 + 200 + 10,
	10 + canvas_top,
	"Info",
	null
)
	.addHTML(
		"ABOUT THIS",
		'This script is made for playing around with the Koch curve. You can find more informations about it <a href="https://en.wikipedia.org/wiki/Koch_snowflake" target="_blank">here</a>.'
	)
	.addHTML("AUTHOR", "Carlo Cervellin")
	.addHTML(
		"WARNING",
		"A high number of interations might slow your browser down depending on your processor speed and dedicated power for JavaScript engine."
	);
toggleInfoPanel();

var colorPanel = QuickSettings.create(
	width / 2 - 100,
	height / 3 + canvas_top,
	"Color",
	null
)
	.addColor("Background Color", backgroundColor, changeBackgroundColor)
	.addColor("Line Color", lineColor, changeLineColor)
	.addButton("Close", toggleColorPanel);
toggleColorPanel();

function changeBackgroundColor() {
	document.body.style.backgroundColor = colorPanel.getValue("Background Color");
}
function changeLineColor() {
	lineColor = colorPanel.getValue("Line Color");
	draw();
}

function toggleInfoPanel() {
	infoPanel.toggleVisibility();
}

function toggleColorPanel() {
	colorPanel.toggleVisibility();
}

//global variables
var centerX = width * 4 / 7,
	centerY = height / 2;

var centerDX = 0;
var centerDY = 0;
var edge = width / 6;
var edgeScale = 1;
var globalRotation = 0;

var elevation;
var spikeBaseWidth;
var rotation;

var edgeThickness = 1;

var points = [];

update();

function update() {
	elevation = panel.getValue("Spike Elevation");
	spikeBaseWidth = panel.getValue("Spike Base Width");
	rotation = panel.getValue("Spike Rotation");
	var it = panel.getValue("Iterations");
	centerDX = panel.getValue("ShiftX");
	centerDY = panel.getValue("ShiftY");
	edgeScale = panel.getValue("Zoom");
	globalRotation = panel.getValue("Rotation");
	initialize(panel.getValue("Polygon Edges"));
	for (var i = 0; i < it; i++) {
		iterationCicle();
	}
	draw();
}

function initialize(vert) {
	_edge = edge * edgeScale;
	alpha = 2 * Math.PI / vert;
	rot = globalRotation * Math.PI / 180;
	xc = centerX + centerDX;
	yc = centerY + centerDY;
	_points = [];
	for (var i = 0; i < vert; i++) {
		_points.push({
			x: xc + Math.cos(i * alpha + rot) * _edge,
			y: yc + Math.sin(i * alpha + rot) * _edge
		});
	}
	_points.push(_points[0]);
	points = _points;
}

function iterationCicle() {
	var iter = points.length - 2;
	for (var j = iter; j >= 0; j--) {
		singleIteration(j);
	}
}

function singleIteration(index) {
	var l =
		Math.sqrt(
			(points[index + 1].x - points[index].x) *
				(points[index + 1].x - points[index].x) +
				(points[index + 1].y - points[index].y) *
					(points[index + 1].y - points[index].y)
		) / 3;
	//divide in 3
	var dx = (points[index + 1].x - points[index].x) * (3 - spikeBaseWidth) / 6;
	var dy = (points[index + 1].y - points[index].y) * (3 - spikeBaseWidth) / 6;
	var mid1 = {
		x: points[index].x + dx,
		y: points[index].y + dy
	};
	var mid2 = {
		x: points[index + 1].x - dx,
		y: points[index + 1].y - dy
	};
	points.splice(index + 1, 0, mid2);
	points.splice(index + 1, 0, mid1);
	//divide central in half
	var cen1 = points[index + 1];
	var cen2 = points[index + 2];
	var mid = {
		x: (cen1.x + cen2.x) / 2,
		y: (cen1.y + cen2.y) / 2
	};
	//shift central point
	var l = l * elevation * Math.sqrt(3) / 2;
	var a = Math.atan((cen2.y - cen1.y) / (cen2.x - cen1.x));
	var angle = a + Math.PI / 2 + rotation * Math.PI / 180;
	var mid_s = {
		x: mid.x - Math.cos(angle) * l,
		y: mid.y - Math.sin(angle) * l
	};
	if (cen2.x < cen1.x)
		mid_s = {
			x: mid.x + Math.cos(angle) * l,
			y: mid.y + Math.sin(angle) * l
		};
	points.splice(index + 2, 0, mid_s);
}

/**
 * Draws 'points' list as segments
 * and dots as circles
 */
function draw() {
	edgeThickness = panel.getValue("Edge Thickness");
	dotThickness = panel.getValue("Dot Thickness");
	context.clearRect(0, 0, width, height);
	context.strokeStyle = lineColor;
	context.fillStyle = lineColor;
	context.lineWidth = edgeThickness;
	for (var i = 0; i < points.length - 1; i++) {
		if (edgeThickness > 0) {
			context.beginPath();
			context.moveTo(points[i].x, points[i].y);
			context.lineTo(points[i + 1].x, points[i + 1].y);
			context.stroke();
		}
	}
	for (var i = 0; i < points.length - 1; i++) {
		if (dotThickness > 0) {
			if (i === 0) {
				context.beginPath();
				context.arc(points[i].x, points[i].y, dotThickness, 0, Math.PI * 2, true);
				context.fill();
			}
			context.beginPath();
			context.arc(points[i + 1].x, points[i + 1].y, dotThickness, 0, Math.PI * 2, true);
			context.fill();
		}
	}
}
