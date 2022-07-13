
const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach",
    g: "gesdrwesf",
};

function loadSelectors() {
    const formId = "form-selector";
    let formBody = document.getElementById(formId);
    let keyData = `<select name="key-data" id="key-data" onchange="selectedItem('key')">`;
    let valueData = `<select name="value-data" id="value-data" onchange="selectedItem('value')">`;
    for(let key in state){
        keyData += `<option value="${key}">${key}</option>`;
        valueData += `<option value="${state[key]}">${state[key]}</option>`;
    }
    formBody.innerHTML += keyData;
    formBody.innerHTML += valueData;
    formBody.innerHTML += "</select>";
}

function selectedItem(value){
    const index = document.getElementById(`${value}-data`).selectedIndex;
    switch(value){
        case 'key':
            document.getElementById(`value-data`).selectedIndex = index;
            break;
        case 'value':
            document.getElementById(`key-data`).selectedIndex = index;
            break;
    }
}