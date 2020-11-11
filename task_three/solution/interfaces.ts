interface LabeledValue {
  label: string;
}

function getLabel(labeledObj: LabeledValue): string {
  return labeledObj.label;
}

let myObj = { size: 10, label: "Size 10 Object" };
let myObj2 = { label: "label2" };


document.body.textContent = getLabel(myObj)+' ' +getLabel(myObj2);