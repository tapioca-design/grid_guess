$( document ).ready(function() {

			function setGridHeight () {
				var wrapper = $("#wrapper");
				var grid = $("#grid");
				// var grid6TilesContainer = $("#grid.grid-6-tiles");
				var grid4Tiles = $("#grid.grid-4-tiles > div .tile img");
				var grid6Tiles = $("#grid.grid-6-tiles > div .tile img");
				var grid8Tiles = $("#grid.grid-8-tiles > div .tile img");
				var grid9Tiles = $("#grid.grid-9-tiles > div .tile img");
				var grid10Tiles = $("#grid.grid-10-tiles > div .tile img");
				var grid12Tiles = $("#grid.grid-12-tiles > div .tile img");


				var wrapperWidth = wrapper.width();
				var gridHeight = wrapperWidth / 1.5;
				console.log("gridHeight",gridHeight);

				grid.height(gridHeight);

				// set tiles height when 6 or 8 tiles
				grid4Tiles.height(gridHeight / 2);
				grid6Tiles.height(gridHeight / 3);
				grid8Tiles.height(gridHeight / 2);
				grid9Tiles.height(gridHeight / 3);
				grid10Tiles.height(gridHeight / 2);
				grid12Tiles.height(gridHeight / 3);


				// console.log("wrapperWidth", wrapperWidth);
			}
			setGridHeight();



		  	$( window ).resize(function() {
			  	setGridHeight();
			});




		});