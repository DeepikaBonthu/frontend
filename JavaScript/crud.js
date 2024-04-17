let data = [
    {id:1, name:"rani",email:"rani@gmail.com"},
    {id:2, name:"ram",email:"ram@gmail.com"}
]

function readAll(){
    localStorage.setItem("object",JSON.stringify(data));
    var tabledata =document.querySelector(".data_table");

    var object =localStorage.getItem('object');
    var objectdata = JSON.parse(object);
    var elements = " ";

    objectdata.map(record => (
                elements += `<tr>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td>
            <button>Edit</button>
            <button>Delete</button>
            </td>
        </tr>`
    ))
    tabledata.innerHTML = elements;

}
function create(){
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "block";
}

function add(){
     var name = document.querySelector(".name").value;
     var email = document.querySelector(".email").value;
}