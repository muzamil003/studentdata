
var table = document.getElementById('tb')
var tbdata = []
var student1 = {
firstName : "",
lastName : " ", 
age: " ",
id: Math.floor(Math.random()*80000
)

};
// tbdata.push(student1)

function adddata(){
    var inp1 =document.getElementById('input1');
    var inp2 =document.getElementById('input2');
    var inp3 =document.getElementById('input3');
    var student1 = {
        firstName :inp1.value,
        lastName : inp2.value, 
        age: inp3.value,
        id: Math.floor(Math.random()*80000
        )
        };
    tbdata.push(student1)
    // console.log(tbdata)
    inp1.value = ""
    inp2.value = ""
    inp3.value = ""
    render()
}
function render(){
    table.innerHTML =  ` <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last name</th>
      <th scope="col">age</th>
      <th scope="col">id</th>
      <th scope="col">del</th>
    </tr>
  </thead>
  <tbody>
  </tbody>`
for (i=0;i<tbdata.length;i++){

    // console.log(tbdata[0])
    table.innerHTML += `<tr>
    <td>${i+1}</td>
    <td>${tbdata[i].firstName}</td>
    <td>${tbdata[i].lastName}</td>
    <td>${tbdata[i].age}</td>
    <td>${tbdata[i].id}</td>
    <td><button onclick="del(${[i]})">Delete</button></td>
    
    </tr>`
}
    
}
function del(i){
    tbdata.splice(i,1)
    render()
    }