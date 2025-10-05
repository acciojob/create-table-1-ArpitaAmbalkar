
function insert_Row() {
    //Write your code here
	let table=document.getElementById("sampleTable");
    /*let tr=document.createElement("tr");
   let td1=document.createElement("td");
	td1.textContent="New cell1";
	let td2=document.createElement("td");
	td2.textContent="New cell2";
	tr.appendChild(td1);
	tr.appendChild(td2);*/
	let row=table.insertRow(0);
	let cell1=row.insertCell(0);
	let cell2=row.insertCell(1);
	cell1.textContent="New Cell1";
	cell2.textContent="New Cell2";
	
  
}
