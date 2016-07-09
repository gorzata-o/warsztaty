document.addEventListener("DOMContentLoaded", function(){


	var arrowElements = document.getElementsByClassName("list_arrow");
	

	for (var i = 0; i < arrowElements.length; i++) {
		arrowElements[i].addEventListener("click", function(event){
			//console.log("klikłam");
			var listPanel = this.nextElementSibling;
			//console.log(listPanelElements);
			listPanel.setAttribute("style", "display:list-item");
		});
		/*Nie potrafię założyć warunku pozwalającego na powtórzenie czynności "click" ale połączenie jej z innym eventem.*/
		arrowElements[i].addEventListener("dblclick", function(event){
			var listPanel = this.nextElementSibling;
			listPanel.setAttribute("style","display:none");
		});
	}

/*Pomimo dokłądnego przypisania zmiennych, wybrana opcja zawsze wpisuje się w zmiennej pattern. WYjątkowo zmienna transport trafia na swoje miejsce. Co robię nie tak?*/

	var listPanelElements = document.querySelectorAll(".list_panel li");
	
	var leftPanel = document.querySelector(".panel_left");
	var leftPanelElements = leftPanel.children;
	var chairType = leftPanelElements[0];
	var color = leftPanelElements[1];
	var pattern = leftPanelElements[2];
	var transport = leftPanelElements[3];
	//console.log(pattern);
	var rightPanel = document.querySelector(".panel_right");
	var rightPanelElements = rightPanel.children;
	var chairTypeValue = rightPanelElements[0];
	var colorValue = rightPanelElements[1];
	var patternValue = rightPanelElements[2];
	var transportValue = rightPanelElements[3];
	var defaultPrice = 0;
	

	for (var i = 0; i < listPanelElements.length; i++) {
		listPanelElements[i].addEventListener("click", function(event){
			if ( i >= 0 && i <=2) {
				chairType.innerHTML = this.innerHTML;
				chairTypeValue = 200;
			} else if ( i > 2 && i < 6) {
				color.innerHTML = this.innerHTML;
				colorValue = defaultPrice;
			} else {
				pattern.innerHTML = this.innerHTML;
				patternValue.innerHTML = defaultPrice;
			}

		});
	}

	var checkbox = document.querySelector("#transport");

	checkbox.addEventListener("click", function(event){

		if (checkbox.checked === true) {
			transport.innerHTML = "Transport";
			transportValue.innerHTML = 80;
		} else {
			transport.innerHTML = "";
			transportValue.innerHTML = "";
		}
	});

	var sumValue = document.querySelector(".sum");

	 function sumUp(chairTypeValue,colorValue,patternValue,transportValue) {
		var sum = (chairTypeValue + colorValue + patternValue + transportValue);
		return sum;

	} 
	//console.log(sumUp(20, 20, 0, 80));
	sumValue = ;




});