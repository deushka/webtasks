function change(event){
	console.log(" <img src="+event.currentTarget.src+"/>");
	let x = document.querySelector('#bigImage');
	x.innerHTML = " <img src="+event.currentTarget.src+">";
}