window.onload=pagechargee;

//---Tout activer une fois la page est chargee---//
function pagechargee(){
	openNav();
	closeNav();
	change();
	changeV(amount);
	show(w);
	hide(w);
}
//--------------------------//

//---bouton pour fermer le menu---//
function openNav() {
	document.getElementById("open").style.width = "220px";
}

function closeNav() {
	document.getElementById("open").style.width = "0";
	document.getElementById("bar").style.display="none";
}
//--------------------------//

//---bouton pour arreter ou jouer la musique---//
function music() {
	var myAudio = document.getElementById("music");
	if (myAudio.paused) {
		myAudio.play();
		onclick= document.getElementById('play-pause').innerHTML = "&#10074;"+"&#10074;";
	}
	else {
		myAudio.pause();
		onclick= document.getElementById('play-pause').innerHTML = "&#9654;";
	}
}
//--------------------------//

//---faire apparaite le slider pour le volume---//
function volume(){
	var b= document.getElementById("bar")
	if (b.style.display=="none"){
		b.style.display="block";
	}
	else{
		b.style.display="none";
	}
}
//--------------------------//

//---Changer l'icone du volume---//
function change() {
	if(document.getElementById("bar").value == 0){
		document.getElementById("volume").innerHTML= "&#128263;";
	}
	if(document.getElementById("bar").value>0 && document.getElementById("bar").value<0.3){
		document.getElementById("volume").innerHTML= "&#128264;";
	}
	if(document.getElementById("bar").value>=0.3 && document.getElementById("bar").value<0.85){
		document.getElementById("volume").innerHTML= "&#128265;";
	}
	if(document.getElementById("bar").value>=0.85){
		document.getElementById("volume").innerHTML= "&#128266;";
	}
}
//--------------------------//

//---changer le volume---//
function changeV(amount) {
	document.getElementsByTagName("audio")[0].volume= amount;
}
//--------------------------//

//---Afficher les images des joueurs---//
function show(w){
	for(var i=1 ; i<24 ; i++){
		document.getElementsByTagName("img")[i].src= "../player_image/"+w+".jpg";
		document.getElementById("players").style.display="block";
	}
}

function hide(w){
	for(var i=1 ; i<24 ; i++){
		document.getElementsByTagName("img")[i].src= "../player_image/"+w+".jpg";
		document.getElementById("players").style.display="none";
	}
}
//--------------------------//

