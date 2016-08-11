$( document ).ready(function() {

	function setGridHeight () {
		var wrapper = $("#wrapper");
		var grid = $(".grid");

		var wrapperWidth = wrapper.width();
		var gridHeight = wrapperWidth / 1.5;

		console.log("wrapperWidth",wrapperWidth);
		console.log("gridHeight",gridHeight);

		grid.height(gridHeight);



		var gridTilesLetterSize = wrapperWidth / 7.6;
		var gridTilesLetter = $(".grid > div label");
		gridTilesLetter.css("font-size", gridTilesLetterSize+"px");

	}
	setGridHeight();


	window.resize = function() {
		setGridHeight();
	}




});