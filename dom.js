document.getElementById("heading1").innerHTML="DOM IS AWESOME";

let p=document.getElementById("paragraph1");
p.innerHTML="DOM is easy to learn."

function addRow()
{
    let table=document.getElementById("table1");
    let newrow=table.insertRow();

    let cell1=newrow.insertCell(0);
    let cell2=newrow.insertCell(1);
    let cell3=newrow.insertCell(2);
    cell1.innerHTML="24K61A42I9";
    cell2.innerHTML="Nikshi";
    cell3.innerHTML="CSM";
}
addRow();
console.log(document)


