var goodinput = document.getElementById("good_input")
var goodbutton = document.getElementById('goodbutton')
var goodlist = document.getElementsByClassName('goodlist')[0]

var badinput = document.getElementById("bad_input")
var badbutton = document.getElementById('badbutton')
var badlist = document.getElementsByClassName('badlist')[0]

function inputLengthGood(input) {
    if (input.value.length>0) {
        return true
    }
}

function createListElement(input, list) {
    var li = document.createElement("li");
    // ternary operator syntax ----> condition ? val_if_true : val_if_false
    li.className = input.id==="good_input" ? "gooditem" : "baditem";
    // if (input.id==="good_input"){li.className="gooditem";}
    // if (input.id==="bad_input"){li.className="baditem";}
    li.appendChild(document.createTextNode(input.value));
    var container = document.createElement('label')
    container.className="container";
    var checkbox = document.createElement('input')
    checkbox.type = "checkbox";
    var checkmark = document.createElement('span')
    checkmark.className = "checkmark"
    container.appendChild(checkbox)
    container.appendChild(li)
    container.appendChild(checkmark)
    list.appendChild(container);
}

function addFromClick(input,list) {
    if (inputLengthGood(input)) {
        createListElement(input, list);
        input.value = '';
    }
}

function addFromEnter(input, list, event) {
    if (inputLengthGood(input) && event.which===13) { // 13 is the keypress for ENTER
        createListElement(input,list);
        input.value = ''
    }
}
goodbutton.addEventListener("click", function() {
    addFromClick(goodinput, goodlist)
})

badbutton.addEventListener("click", function() {
    addFromClick(badinput, badlist)
})

goodinput.addEventListener("keypress", function(event){
    addFromEnter(goodinput,goodlist,event) })

badinput.addEventListener("keypress", function(event){
    addFromEnter(badinput,badlist,event) })
