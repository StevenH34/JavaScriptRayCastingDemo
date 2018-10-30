// main JavaScript file

let mapWidth = map[0].length;
let mapHeight = map.length;
const miniMapScale = 8;

// var mapWidth = map[0].length;
// var mapHeight = map.length;
// var miniMapScale = 8;




function drawMiniMap() {
    // Need to access the canvas
    let minimapCanvas = document.getElementById('minimap');
    
    // resize the internal canvas dimensions 
    minimapCanvas.width = mapWidth * miniMapScale;	
    minimapCanvas.height = mapHeight * miniMapScale;

    // resize the canvas css?

    // Need the context so we can draw to the canvas
    let minimapContext = minimapCanvas.getContext('2d');

    // minimapContext.fillStyle = '#000';
    // minimapContext.fillRect(0, 0, minimapCanvas.width, minimapCanvas.height);

    for (var y=0;y<mapHeight;y++) {
		for (var x=0;x<mapWidth;x++) {

			var wall = map[y][x];

			if (wall > 0) { // if there is a wall block at this (x,y) ...

				minimapContext.fillStyle = "rgb(200,200,200)";
				minimapContext.fillRect(				// ... then draw a block on the minimap
					x * miniMapScale,
					y * miniMapScale,
					miniMapScale,miniMapScale
				);

			}
		}
	}

}
drawMiniMap();