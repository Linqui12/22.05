//написать функцию, которая принимает строку и возвращает кол-во гласных(латиница)[a,o,u,i,e]. Учитывать и верхний регистр.
// function vowels (str){
//   const res =str.replace(/['a','e','i','o','u','y','A','E','I','O','U','Y']/gi,'');
//   return str.length-res.length;
//   }
let str='TEST testovich';
//onst test=vowels(str);
function  vowelsTwo (str){
  const test=['a','e','i','o','u','y','A','E','I','O','U','Y'];
  return 
}

//написать функцию нахождения степени числа, в том числе для отрицательной степени. Использовать рекурсию.
function powv(numb,deg){
  //   if(deg<=1){
  //     return numb;
  //   }
  //   else{
  //     return numb*powv(numb,deg-1);
  //   }
  return numb**deg;
  
};
console.log(powv(5,3));

//написать функцию, которая принимает число и возвращает вложенные пары круглых скобок, равные этому числу. Использовать рекурсию. Например,  pairBrackets(3), должна вывести:  ((())). Если число меньше 1 - выводим одну пару скобок.

function pairBrackets(numb){
  if(numb<=1){
    return '()'
  }
    return '('+pairBrackets(numb-1)+')';
};

console.log(pairBrackets(5));
//дан массив чисел. используя Math и спред оператор найдите минимальный и максимальный элементы массива.
function minMax(numbs){
  return [Math.min(...numbs),Math.max(...numbs)];
}
const arr=[5,4,8,3,12,55,-2,1];
console.log(minMax(arr));
//напишите функцию-стрелку, которая принимает неограниченное количество аргументов и возвращает их произведение.

let arrow=(numb1,numb2,...numbN)=>numb1*numb2*numbN.reduce((sum, current) => sum * current);
console.log(arrow(1,2,3,4,5,6));

function foo(str){
  const test=['a','e','i','o','u','y','A','E','I','O','U','Y'];
  let res=str.array.forEach(element => {
    
  });
}