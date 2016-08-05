$( document ).ready(function() {

			function setGridHeight () {
				var wrapper = $("#wrapper");
				var grid = $("#grid");
				// var grid6TilesContainer = $("#grid.grid-6-tiles");
				var grid6Tiles = $("#grid.grid-6-tiles > div .tile img");


				var wrapperWidth = wrapper.width();
				var gridHeight = wrapperWidth / 1.5
				grid.height(gridHeight);

				// set tiles height when 6 or 8 tiles
				grid6Tiles.height(gridHeight / 3);


				// console.log("wrapperWidth", wrapperWidth);
			}
			setGridHeight();



		  	$( window ).resize(function() {
			  	setGridHeight();
			});




		});