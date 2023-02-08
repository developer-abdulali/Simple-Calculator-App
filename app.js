var Value1 = +prompt('Enter your value');
var sign = prompt('Enter your sign', '+ - * / %');
var Value2 = +prompt('Enter your 2nd value');
if(sign == '+' ){
    document.write(Value1 + Value2);
} else if (sign === '-' ){
    document.write(Value1 - Value2);
} else if (sign ==='*' ){
    document.write(Value1 * Value2);
} else if (sign === '/' ){
    document.write(Value1 / Value2);
} else if (sign === '%' ){
    document.write(Value1/Value2*100+'%');
} else{
    alert('Not Found');
};