$( document ).ready(function() {




	/************ round beginning *****************/
	function roundBegin () {
		console.log("roundBegin");
		$("body").addClass("word-letters-amount-6 round-begin");
		$("main h2").text("6 letters:").show();
		// $("main p").show();
		// $('.round-begin .pyramid').on('webkitAnimationEnd animationEnd', function (e) {
		// 	$("#wikipedia").css("display","block");
		// 	$("#btn-next-round").css("display","block");
		// });
			//when keyboard disappeared, need to display none it to use its space
			// $('.round-begin #keyboard').on('webkitTransitionEnd transitionEnd', function (e) {
			// 	$(this).css("display","none");
			// });
		
	}
	setTimeout(roundBegin, 0);
	// roundBegin();
	/*****************************/

	/************ round playing *****************/
	function roundPlaying () {
		console.log("roundPlaying");
		// $("main h2").show();
		$("body").removeClass("round-begin").addClass("round-playing");
	}
	setTimeout(roundPlaying, 2000);
	/*****************************/

	/************ round end *****************/
	function roundEnd () {
		console.log("roundEnd");
		$("main h2").text("You win ! Answer is:").show();
		$("body").addClass(" round-end round-end-won");
		// $("body").removeClass("round-begin round-playing").addClass(" round-end round-end-won");
		$('.round-end .pyramid').on('webkitAnimationEnd animationEnd', function (e) {
			$("#wikipedia").css("display","block");
			$("#btn-next-round").css("display","block");
		});
			//when keyboard disappeared, need to display none it to use its space
			$('.round-end #keyboard').on('webkitTransitionEnd transitionEnd', function (e) {
				$(this).css("display","none");
			});
		}
		setTimeout(roundEnd, 4000);
		/*****************************/






	function setGridHeight () {
		var body = $("body");
		var wrapper = $("#wrapper");
		var main = $("#wrapper main");
		var grid = $("#wrapper main .grid");
		
		var wrapperWidth = wrapper.width();
		var mainTagHeight = wrapperWidth / 1.5;
		console.log("mainTagHeight",mainTagHeight);
		//add keyboard since it s in the main, because we will make it disappear to display wikipedia
		
		$(".grid").height(mainTagHeight);

		// var keyboardHeight = $("#keyboard").height();
		var keyboardHeight = 88;
		console.log("keyboardHeight",keyboardHeight);

		mainTagAndKeyboardHeight = mainTagHeight + keyboardHeight;

		main.height(mainTagAndKeyboardHeight);

		var gridTilesLetterSize = wrapperWidth / 7.6;
		var gridTilesLetter = $(".grid > div label");
		gridTilesLetter.css("font-size", gridTilesLetterSize+"px");

		// $("main h2, main p").hide();

	}
	setGridHeight();
		window.resize = function() {
			setGridHeight();
		}

	

	$("#btn-menu-open").click(function() {
		$("#menu").removeClass().addClass("open");
	});

	$("#btn-menu-close").click(function() {
		$("#menu").removeClass().addClass("close");
	});

	


	});