
function create_Array(start, end){
var number=[];
for (var i=start;i<=end;i++){
    number.push(i);
}
return number;
}
function shuffleArray(array) {
    var shuffledArray = array.slice();

        for (var i = shuffledArray.length - 1; i > 0; i--) {
            var randomIndex = Math.floor(Math.random() * (i + 1));
            var temp = shuffledArray[i];
            shuffledArray[i] = shuffledArray[randomIndex];
            shuffledArray[randomIndex] = temp;
        }

        return shuffledArray;
    }

    function sortDescending(array){
        return array.slice().sort(function(a,b){
            return b-a;
        })

    }
//------------------------------------------------------------------
function array_method_Button_one(){
 var start=Number(prompt("Enter The Start The Array :"));
 var end=Number(prompt("Enter The End The Array :"));
var number=create_Array(start,end);
var filteredNumber=number.filter(function(number){
return number%3 !==0;
});
document.getElementById("result").innerText="filteredNumber= "+filteredNumber;
}
//-----------------------------------------------------------------
function array_method_Button_Two() {
var start=Number(prompt("Enter The Start The Array :"));
 var end=Number(prompt("Enter The End The Array :"));
var number=create_Array(start,end); 
var extra_array=create_Array(100,150);
var combine_array=number.concat(extra_array);
document.getElementById("result").innerText="combine_array= "+combine_array;
}
//----------------------------------------------------------------------------------
function array_method_Button_Three() {
var start=Number(prompt("Enter The Start The Array :"));
 var end=Number(prompt("Enter The End The Array :"));
var number=create_Array(start,end);
var add_number=number.map(function(number){
    return number+3;
});
document.getElementById("result").innerText="add_number= "+add_number;
}
//-------------------------------------------------------------------------------
function array_method_Button_Four() {
var start=Number(prompt("Enter The Start The Array :"));
 var end=Number(prompt("Enter The End The Array :"));
var number=create_Array(start,end);
var indexed_number=number.slice(20,41);
document.getElementById("result").innerText="indexed_number= "+indexed_number;
}
//----------------------------------------------------------------------------
function array_method_Button_Five() {
var start=Number(prompt("Enter The Start The Array :"));
 var end=Number(prompt("Enter The End The Array :"));
var number=create_Array(start,end);
var shuffledNumbers = shuffleArray(number);
var sortedNumbers = sortDescending(shuffledNumbers);
document.getElementById("result").innerText="sortedNumbers= "+sortedNumbers;

}