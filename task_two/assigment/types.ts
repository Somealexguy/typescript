function types():string {
  const num:number = 10;



  let stringResult:Array<string> =[`${num} is type of ${typeof num}`]; 

  return stringResult.join('<br>');
}

function voidy():void{
  //no return
}

document.body.innerHTML = types();