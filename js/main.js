$( document ).ready(function() {


	// $("*").css("border","3px solid red");

	function setGridHeight () {
		var body = $("body");
		var wrapper = $("#wrapper");
		var main = $("#wrapper main");
		var grid = $("#wrapper main .grid");
		

		var wrapperWidth = wrapper.width();
		var mainTagHeight = wrapperWidth / 1.5;

		//add keyboard since it s in the main, because we will make it disappear to display wikipedia
		
		$(".grid").height(mainTagHeight);

		mainTagHeight += $("#keyboard").height();

		main.height(mainTagHeight);

		var gridTilesLetterSize = wrapperWidth / 7.6;
		var gridTilesLetter = $(".grid > div label");
		gridTilesLetter.css("font-size", gridTilesLetterSize+"px");

		/************ round end *****************/
		$("main h2, main p").hide();
		function roundEnd () {
			$("main h2, main p").show();
			body.addClass("word-letters-amount-6 round-end round-end-won");



			$('.round-end .pyramid').on('webkitAnimationEnd animationEnd', function (e) {
			    $("#wikipedia").css("display","block");
			    $("#btn-next-round").css("display","block");
			});

			//when keyboard disappeared, need to display none it to use its space
			$('.round-end #keyboard').on('webkitTransitionEnd transitionEnd', function (e) {
			    $(this).css("display","none");
			});

			// $("footer ul li").css("border","3px solid red");


			// $('footer ul li').css("border","1px solid red !important");




			// var currentTileInRoundId = 

			// $("footer ul li.empty").addClass("");


		}
		setTimeout(roundEnd, 2000);
		/*****************************/




		$("#btn-menu-open").click(function() {
		  	$("#menu").removeClass().addClass("open");
		});

		$("#btn-menu-close").click(function() {
			$("#menu").removeClass().addClass("close");
		});
		

	}



	setGridHeight();
	window.resize = function() {
		setGridHeight();
	}




});