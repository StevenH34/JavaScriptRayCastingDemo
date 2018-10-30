// main JavaScript file

const minimapCanvas = document.getElementById('minimap');   // Need to access the canvas
const minimapContext = minimapCanvas.getContext('2d');      // Need to acces the context of the canvas

let mapWidth = map[0].length;
let mapHeight = map.length;
const miniMapScale = 8;

function drawMiniMap() {
    
    // resize the internal canvas dimensions to the map dimensions
    minimapCanvas.width = mapWidth * miniMapScale;	
    minimapCanvas.height = mapHeight * miniMapScale;

    for (let y = 0 ; y < mapHeight; y++) {
		for (let x = 0; x < mapWidth; x++) {

			let wall = map[y][x];

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