window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	document.getElementById("dodajGumb").addEventListener("click", function(){
		var naziv = document.getElementById("naziv_opomnika").value;
		var cas = document.getElementById("cas_opomnika").value;
		document.getElementById("naziv_opomnika").value="";
		document.getElementById("cas_opomnika").value="";
		document.getElementById("opomniki").innerHTML+="<div class='opomnik'> <div class='naziv_opomnika'>"+naziv+"</div> <div class='cas_opomnika'> Opomnik čez <span>"+cas+"</span> sekund.</div></div>";
		console.log(cas+" : "+naziv);
	});
	document.getElementById("prijavniGumb").addEventListener("click", function(){
		var ime = document.getElementById("uporabnisko_ime").value;
		console.log(ime);
		document.getElementById("uporabnik").innerHTML=ime;
		document.querySelector(".pokrivalo").style.display="none";
	});
	
});
