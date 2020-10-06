onADD = function(){
    let addData = document.getElementById('input').value;

    if(addData == "")
    {
        alert("Please Write Something in it!");
        return;
    }
    else{
        var myNewTODO = document.createElement('li');
        myNewTODO.classList.add('mycheck');


        var inside = document.createElement('input');
        inside.setAttribute("type","checkbox");
        inside.setAttribute("id","check");

        var written = document.createElement('label');
        written.textContent = addData;

        myNewTODO.appendChild(inside);
    myNewTODO.appendChild(written);

        console.log(myNewTODO);

        var addon = document.getElementById('list');
        addon.appendChild(myNewTODO);
        document.getElementById('input').value="";
	}
}
onREMOVE = function(){
    ul = document.querySelector('ul');
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while ( li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
} 