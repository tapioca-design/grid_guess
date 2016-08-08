$( document ).ready(function() {

			function setGridHeight () {
				var wrapper = $("#wrapper");
				var grid = $("#grid");
				// var grid6TilesContainer = $("#grid.grid-6-tiles");
				var grid4Tiles = $("#grid.grid-4-tiles > div .tile .pyramid, #grid.grid-4-tiles > div .tile .picture, #grid.grid-4-tiles > div .tile label");
				var grid6Tiles = $("#grid.grid-6-tiles > div .tile .pyramid, #grid.grid-6-tiles > div .tile .picture, #grid.grid-6-tiles > div .tile label");
				var grid8Tiles = $("#grid.grid-8-tiles > div .tile .pyramid, #grid.grid-6-tiles > div .tile .picture, #grid.grid-8-tiles > div .tile label");
				var grid9Tiles = $("#grid.grid-9-tiles > div .tile .pyramid, #grid.grid-6-tiles > div .tile .picture, #grid.grid-9-tiles > div .tile label");
				var grid10Tiles = $("#grid.grid-10-tiles > div .tile .pyramid, #grid.grid-6-tiles > div .tile .picture, #grid.grid-10-tiles > div .tile label");
				var grid12Tiles = $("#grid.grid-12-tiles > div .tile .pyramid, #grid.grid-6-tiles > div .tile .picture, #grid.grid-12-tiles > div .tile label");


				var wrapperWidth = wrapper.width();
				var gridHeight = wrapperWidth / 1.5;

				console.log("wrapperWidth",wrapperWidth);
				console.log("gridHeight",gridHeight);

				grid.height(gridHeight);

				// set tiles height when 6 or 8 tiles
				grid4Tiles.height(gridHeight / 2);
				grid6Tiles.height(gridHeight / 3);
				grid8Tiles.height(gridHeight / 2);
				grid9Tiles.height(gridHeight / 3);
				grid10Tiles.height(gridHeight / 2);
				grid12Tiles.height(gridHeight / 3);

				var gridTilesLetterSize = wrapperWidth / 7.6;
				var gridTilesLetter = $("#grid > div .tile label");
				gridTilesLetter.css("font-size", gridTilesLetterSize+"px");

				// console.log("wrapperWidth", wrapperWidth);
			}
			setGridHeight();



		  	$( window ).resize(function() {
			  	setGridHeight();
			});




		});