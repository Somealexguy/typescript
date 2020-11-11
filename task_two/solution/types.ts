enum CompanyType{
  Restaurant ="Restaurant",
  Hotel="Hotel"
}

function typesFinal():string {
  const num:number = 10;
  const text:string = '10';
  const bool:boolean = false;

  const numbers:Array<number> = [1,2,3];
  const tuple:[string,number] = ['black',0];
  const companyType:CompanyType = CompanyType.Restaurant;
  const anything:any = ['e',1,2,false];
  const obj:Object = {
    age:1,
    name:'Fred'
  };


  let stringResult:Array<string> =[`${num} is type of ${typeof num}`]; 
  stringResult.push(`${text} is type of ${typeof text}`);
  stringResult.push(`${numbers} is type of ${typeof numbers}`);
  stringResult.push(`${bool} is type of ${typeof bool}`);
  stringResult.push(`${tuple} is type of ${typeof tuple}`);
  stringResult.push(`${companyType} is type of ${typeof companyType}`);
  stringResult.push(`${anything} is type of ${typeof anything}`);
  stringResult.push(`${obj} is type of ${typeof obj}`);

  return stringResult.join('<br>');
}

function voidyFinal():void{
  //no return
}


document.body.innerHTML = typesFinal();