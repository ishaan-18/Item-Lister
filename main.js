let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');


form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);


//Add Item
function addItem(e){
    e.preventDefault();
    //Storing input
    let newInput = document.getElementById('item').value;
    
    //Create a li
    let li = document.createElement('li');

    //Add Class
    li.className = 'list-group-item';

    //Updating new li
    li.appendChild(document.createTextNode(newInput));

    //Create a button
    let deleteBtn = document.createElement('button');

    //Add Class
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append Text `X`
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn);

    //Append it to ul
    itemList.appendChild(li);
}

//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li = e.target.parentNode;
            itemList.removeChild(li);
        }
    }
}

//Fliter Items
function filterItems(e){
    //Converting text into lowercase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    })
}