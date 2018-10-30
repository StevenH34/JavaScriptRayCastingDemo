// main JavaScript file

// Need to access the canvas
const canvas = document.getElementById('canvas');
// Need the context so we can draw to the canvas
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0, 0, canvas.width, canvas.height);

// var mapWidth = map[0].length;
// var mapHeight = map.length;
// var miniMapScale = 8;

// function init() {

// 	drawMiniMap();
// }