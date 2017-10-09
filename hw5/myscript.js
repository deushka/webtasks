function onClick(){
	let content = document.querySelector("#ans");
	content.textContent="Clicked";
	let firstsecond =parseInt(  document.querySelector("#firstsecond").value);
	let firstfirst = parseInt( document.querySelector("#firstfirst").value);
	let firstthird = parseInt( document.querySelector("#firstthird").value);
	let secondfirst =parseInt(  document.querySelector("#secondfirst").value);
	let secondsecond=parseInt(  document.querySelector("#secondsecond").value);
	let secondthird =parseInt(  document.querySelector("#secondthird").value);
	let thirdfirst = parseInt( document.querySelector("#thirdfirst").value);
	let thirdsecond =parseInt(  document.querySelector("#thirdsecond").value);
	let thirdthird = parseInt( document.querySelector("#thirdthird").value);
	let ans = firstfirst*secondsecond*thirdthird+firstsecond*secondthird*thirdfirst+secondfirst*thirdsecond*firstthird;
	ans = ans - firstthird*secondsecond*thirdfirst-firstsecond*secondfirst*thirdthird-secondthird*thirdsecond*firstfirst;
	content.textContent=ans;
}
let x = document.querySelector("#find");
x.addEventListener('click', onClick);
