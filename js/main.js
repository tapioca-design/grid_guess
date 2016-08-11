$( document ).ready(function() {

	function setGridHeight () {
		var wrapper = $("#wrapper");
		var main = $("#wrapper main");
		var grid = $("#wrapper main .grid");
		

		var wrapperWidth = wrapper.width();
		var mainTagHeight = wrapperWidth / 1.5;

		console.log("wrapperWidth",wrapperWidth);
		console.log("mainTagHeight",mainTagHeight);

		main.height(mainTagHeight);
		// grid.height(mainTagHeight);


		var gridTilesLetterSize = wrapperWidth / 7.6;
		var gridTilesLetter = $(".grid > div label");
		gridTilesLetter.css("font-size", gridTilesLetterSize+"px");

	}
	setGridHeight();


	window.resize = function() {
		setGridHeight();
	}




});