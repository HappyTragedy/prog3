function mobile(){
	if(screen.width <= 720){
		hamburguesa();
	}
}

var burger = 1;

function hamburguesa(){
	var menu = document.getElementById('menumobile');
	if(burger == 0){
		menu.style.display = "block";
		burger++;
	}
	else{
		burger = 0;
		menu.style.display = "none";
	}
}