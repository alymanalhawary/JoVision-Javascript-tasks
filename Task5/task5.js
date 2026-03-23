
function create_Array(start, end){
var number=[];
for (var i=start;i<=end;i++){
    number.push(i);
}
return number;
}
function sum_Array(arr){
    var sum=0;
    for (var i=0;i<arr.length;i++){
        if(i%2==0){
sum=sum+arr[i];
        }
    }
    return sum;
}
function print(sum){
document.getElementById("result").innerText="Sum = "+sum;
}
function array_method(){
 var start=Number(prompt("Enter The Start The Array :"));
 var end=Number(prompt("Enter The End The Array :"));
var number=create_Array(start,end);
var sum= sum_Array(number);
print(sum);
}