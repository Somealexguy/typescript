function getLabel(labeledObj) {
    return labeledObj.label;
}
var myObj = { size: 10, label: "Size 10 Object" };
var myObj2 = { label: "label2" };
document.body.textContent = getLabel(myObj) + ' ' + getLabel(myObj2);
