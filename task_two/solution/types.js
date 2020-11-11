function typesFinal() {
    var num = 10;
    var text = '10';
    var bool = false;
    var numbers = [1, 2, 3];
    var tuple = ['black', 0];
    var companyType = CompanyType.Restaurant;
    var anything = ['e', 1, 2, false];
    var obj = {
        age: 1,
        name: 'Fred'
    };
    var stringResult = [num + " is type of " + typeof num];
    stringResult.push(text + " is type of " + typeof text);
    stringResult.push(numbers + " is type of " + typeof numbers);
    stringResult.push(bool + " is type of " + typeof bool);
    stringResult.push(tuple + " is type of " + typeof tuple);
    stringResult.push(companyType + " is type of " + typeof companyType);
    stringResult.push(anything + " is type of " + typeof anything);
    stringResult.push(obj + " is type of " + typeof obj);
    return stringResult.join('<br>');
}
function voidyFinal() {
    //no return
}
var CompanyType;
(function (CompanyType) {
    CompanyType["Restaurant"] = "Restaurant";
    CompanyType["Hotel"] = "Hotel";
})(CompanyType || (CompanyType = {}));
document.body.innerHTML = typesFinal();
