$( document ).ready(function() {

	function setGridHeight () {
		var body = $("body");
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




		/************ round end *****************/
		$("main h2, main p").hide();
		function roundEnd () {
			$("main h2, main p").show();
			body.addClass("round-end");

			$('.round-end .pyramid').on('webkitAnimationEnd animationEnd', function (e) {
			    // alert("animation ended")
			    console.log("round end on pyramid reached the end");
			});


			//when keyboard disappeared, need to display none it to use its space
			$('.round-end #keyboard').on('webkitTransitionEnd transitionEnd', function (e) {
			    // alert("animation ended")
			    console.log("round end on keyboard finished disappearing");
			    //remove keyboard and extend main to its space
			    // $(this).css("display","none");
			    // var currentMainHeight = $("main").height();
			    // console.log("currentMainHeight",currentMainHeight);
			    // $("main").css("height",currentMainHeight+88);
			});
		}
		// setTimeout(roundEnd, 2000);
		/*****************************/




		$("#btn-menu-open").click(function() {
		  	// alert( "Handler for .click() called." );
		  	$("#menu").removeClass().addClass("open");
		});

		$("#btn-menu-close").click(function() {
		  	// alert( "Handler for .click() called." );
			$("#menu").removeClass().addClass("close");
		});
		

	}



	setGridHeight();
	window.resize = function() {
		setGridHeight();
	}




});