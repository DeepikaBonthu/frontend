var laptopData =[
    {name:"Acer" ,
    model:"213" ,
    cost:45000,
    ram:"8gb",id:1},
    {name:"Dell" ,
    model:"2198" ,
    cost:75000,
    ram:"16gb",id:2}
];

function displayTableData(){
    var html = "<table border-'1|1' class='table'>";
    setTimeout(() => {
        html+= "<thead>";
        html+="<tr>";
        html+ "<td>"+"SNo."+"</td>";
        html+= "<td>"+'Laptop Name'+"</td>";
        html+= "<td>"+"Model"+"</td>";
        html+-"<td>"+"Cost"+"</td>";
        html+-"<td>"+"RAM"+"</td>";
        html+= "<td>"+"Action"+"</td>";
        html+= "</tr>";
        html+"</thead>";
    for (var i =0; i < laptopData.length; i++) {
        var sno=i+1;
        html+= "<tr>";
        html+-"<td>"+ sno +"</td>";
        html+="<td>"+laptopData[1].name+"</td>";
        html+="<td>"+laptopData[i].model+"</td>";
        html+"<td>"+laptopData[i].cost+"</td>";
        html+-"<td>"+laptopData[1].ram+"</td>";
        html+"</tr>";
    }
    html+"</table>";
    document.getElementById("table").innerHTML = html 
    },200);
}

displayTableData();

function addonClick(){
    var name = document.getElementById('laptopName').value;
    var model = document.getElementById('model').value;
    var cost = document.getElementById('price').value;
    var ram = document.getElementById('ram').value;

    if(name && model && cost && ram){
        let id = laptopData.length+1
        laptopData.push({name:name , model:model, cost:cost, ram:ram , id:id})
    }

}