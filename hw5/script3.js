function add(){
	let name = document.querySelector("#name");
	let surname = document.querySelector("#surname");
	let students = document.querySelector("#students");
	let faculty = document.querySelector("#faculty");
	if (name.value === ""){
		name.classList.add("error");
	}else{
		name.classList.remove("error");
	}
	
	if (surname.value === ""){
		surname.classList.add("error");
	}else{
		surname.classList.remove("error");
	}
	if (surname.value !== "" && name.value !=="" && faculty.value!=="-1" ){
		
		let strongone = document.createElement("strong");
		let first = document.createElement("td");
		let second = document.createElement("td");
		let third =  document.createElement("td");

		third.appendChild( strongone );
		
		first.textContent = name.value;
		second.textContent = surname.value;
		strongone.textContent = faculty.value;

		let newSt = document.createElement("tr");
		newSt.appendChild(first);
		newSt.appendChild(second);
		newSt.appendChild(third);
		
		students.appendChild(newSt);
	}

}