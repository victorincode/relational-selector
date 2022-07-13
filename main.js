
const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach",
    g: "gesdrwesf",
};
const keyId = "key-data";
const valueId = "value-id";

function loadSelectors(){
    const divContainer = document.createElement("div");
    document.body.append(divContainer);
    const keyData = createSelector(keyId);
    const valueData = createSelector(valueId);
    divContainer.append(keyData);
    divContainer.append(valueData);
}

function createSelector(name){
    const selector = document.createElement("select"); 
    selector.name = `${name}`;
    selector.id = `${name}`;
    selector.addEventListener("change", function(){
        const index = selector.selectedIndex;
        document.getElementById(keyId).selectedIndex = index;
        document.getElementById(valueId).selectedIndex = index;
    });
    pushContentData(selector);
    return selector;
}

function pushContentData(selector){
    for(const key in state){
        const option = document.createElement("option");
        option.text = (selector.name === keyId) ? key : state[key];
        option.value = (selector.name === keyId) ? key : state[key];
        selector.append(option);
    }
}

