function moveImageRight(elem){
	var pic = document.getElementById(elem); 
	var pos = 0;
	var up = 0; 
	var id = setInterval(fram, 5); 
	function fram(){
		if (pos == 10){
			clearInterval(id);
		}
		else{
			if (up < 5){
				up++;
			}
			pos += 10;
			pic.style.right = pos + "px"; 
			pic.style.bottom = up + "px";
		}
	}
}

function increaseHeight(){
	var pic = document.getElementById("pic");
	var height = 0; 
	var width = 0; 
	var id = setInterval(fram, 5);
	function fram(){
		if (width == 500){
			clearInterval(id);
		}
		else{
			width ++;
			if (height < 400){
				height++;
			}
			pic.style.height = height+"px";
			pic.style.width = width+"px";
		}
	}
}

function currentTab(id){
	var home = document.getElementById("home");
	var about = document.getElementById("about");
	var projects = document.getElementById("projects");
	var contact = document.getElementById("contact");
	home.style.backgroundColor = "black";
	home.style.textDecoration = "none";
	about.style.backgroundColor = "black";
	about.style.textDecoration = "none";
	projects.style.backgroundColor = "black";
	projects.style.textDecoration = "none";
	contact.style.backgroundColor = "black";
	contact.style.textDecoration = "none"; 
	var clicked = document.getElementById(id);
	clicked.style.backgroundColor = "gray";
	clicked.style.textDecoration = "none";
}

function arrowMotion(starting){
	var arrow = document.getElementsByClassName("downarrow"); 
	var pos = 0;
	var direction = 0;
	var id = setInterval(frame, 10); 
	function frame(){
		if (pos == 50){
			direction = 0; 
			pos --;
			arrow[0].style.bottom = starting+pos+"px"; 
		}	
		else if (pos > 0 && pos < 50 && direction == 0){ // if arrow is going down
			pos --; 
			arrow[0].style.bottom = starting+pos+"px"; 
		}
		else if (pos > 0 && pos < 50 && direction == 1){ //if arrow is going up
			pos ++;
			arrow[0].style.bottom = starting+pos+"px";
		}
		else if (pos == 0){
			direction = 1;
			pos ++; 
			arrow[0].style.bottom = starting+pos+"px"; 
		}
	}
}

function changeBottom(pos){
	var clickhere = document.getElementById("clickhere");
	clickhere.style.bottom = pos+"px";
}