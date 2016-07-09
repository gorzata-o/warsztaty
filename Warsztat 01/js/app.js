document.addEventListener("DOMContentLoaded", function(){


//Zadanie z dropboxem
//Opcja zakomentowana - podmenu znika natychmiast po zjechaniu kursora z elementu głównego menu. Druga opcja - podmenu wyświetla się i znika dopiero, gdy zjedzie się myszką z niego.
	var dropList = document.querySelectorAll(".drop");

	//console.log(dropList);

	for (var i = 0; i < dropList.length; i++) {

		dropList[i].addEventListener("mouseover", function(event){
			//console.log("najechała");
			var dropListElements = this.querySelector("ul");
			//console.log(dropListElements);

			if (dropListElements != null) {
				dropListElements.setAttribute("style", "display: list-item");
			} else {
				event.preventDefault();
			}

		});

	
		/*dropList[i].addEventListener("mouseout", function(event){
			//console.log("zjechała");
			var dropListElements = this.querySelector("ul");

			if (dropListElements != null){
				dropListElements.setAttribute("style", "display: none");
			} else {
				event.preventDefault();
			}
		});*/

	}

	var dropListElements = document.querySelector(".drop ul");
	console.log(dropListElements);
	dropListElements.addEventListener("mouseout", function(event){
		dropListElements.setAttribute("style", "display: none");
	});







// Zadanie ze sliderem
/*Nie mam pojęcia co stało się z obrazkami. Niby są, ale ich nie widać. Nie zagłębialam się jeszcze w odpowiednie animowanie zmieniających się obrazków, bo ich po prostu nie widzę :p */

	var nextButton = document.querySelector("#arrowR");
	var prevButton = document.querySelector("#arrowL");
	var sliderImages = document.querySelectorAll("#chair-slider img");
	console.log(sliderImages.length);
	var imgIndex = 0

	sliderImages[imgIndex].classList.add("chairs");

	prevButton.addEventListener("click", function(event){
		console.log("klikłam");
		imgIndex = imgIndex - 1;

		for (var i = 0; i < sliderImages.length; i ++) {
			sliderImages[i].classList.remove("chairs");
		}
		if (imgIndex < 0) {
			imgIndex = sliderImages.length - 1;
		}
		sliderImages[imgIndex].classList.add("chairs");
	});


	nextButton.addEventListener("click", function(event){
		console.log("znowu klikłam");
		imgIndex = imgIndex +1;

		for (var i = 0; i < sliderImages.length; i++) {
			sliderImages[i].classList.remove("chairs");
		}
		if (imgIndex > sliderImages.length - 1) {
			imgIndex = 0;
		}
		sliderImages[imgIndex].classList.add("chairs");
	});


//Zadanie ze znikającym tekstem na obrazku

	var picFrame = document.getElementsByClassName("content");
	
	console.log(picFrame);


	for (var i = 0; i < picFrame.length; i++) {
		picFrame[i].addEventListener("mouseover", function(event){
			//console.log("najechała");
			var picTitleFrame = this.querySelector("div");
			picTitleFrame.setAttribute("style", "z-index: -10");
		});
		picFrame[i].addEventListener("mouseout", function(event){
			var picTitleFrame = this.querySelector("div");
			picTitleFrame.removeAttribute("style");
		});
	}















});