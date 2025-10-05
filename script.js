function insert_Row() {
    //Write your code here
	let table=document.getElementById("sampleTable");
  let tr=document.createElement("tr");
   let td1=document.createElement("td");
	td1.textContent="Row2 cell1";
	let td2=document.createElement("td");
	td2.textContent="Row2 cell2";
	tr.appendChild(td1);
	tr.appendChild(td2);
	table.appendChild(tr);
  
}
