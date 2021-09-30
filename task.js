const numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];

console.log("Original numbers list: ", numbers)

//To keep the original array immutable we have to create a new one and copy the items of the original array to it.

const sortedNumbers = [...numbers];

console.log("copied numbers list: ", sortedNumbers)

//Now we can mutate the sortedNumbers list while keeping the original one intact.

let shift; //This variable helps us stop excuting if the array is already sorted.


function AscendBubbleSort(unsortedNumbers){
	  shift = false;
	  let endOfArray = unsortedNumbers.length - 1; //This variable stops the loop before the last item, since the code is always looking at the item on the left.
	  
	  for (let i = 0; i < endOfArray; i++){
	  	    if(unsortedNumbers[i] > unsortedNumbers[i+1]){
	  	    	  shift = true; 
	  	    	  let temp = unsortedNumbers[i];
	  	    	  unsortedNumbers[i] = unsortedNumbers[i+1];
	  	    	  unsortedNumbers[i+1] = temp;
	  	    	  
	  	    }
	  }
	  endOfArray --;
}

do {
	 AscendBubbleSort(sortedNumbers);
}while(shift);


console.log("Numbers list After Ascend sorting: ", sortedNumbers)



function DescendBubbleSort(unsortedNumbers){
	  shift = false;
	  let endOfArray = unsortedNumbers.length - 1;
	  for (let i = 0; i < endOfArray; i++){
	  	    if(unsortedNumbers[i] < unsortedNumbers[i+1]){
	  	    	  shift = true; 
	  	    	  let temp = unsortedNumbers[i];
	  	    	  unsortedNumbers[i] = unsortedNumbers[i+1];
	  	    	  unsortedNumbers[i+1] = temp;
	  	    	  
	  	    }
	  }
	  endOfArray --;
}


do {
	 DescendBubbleSort(sortedNumbers);
}while(shift);


console.log("Numbers list After Desc sorting: ", sortedNumbers)

function readFileIntoArray(fileName){
	 var fs = require('fs')
	 var array = fs.readFileSync(fileName).toString().split(",");
	 return array;
}

console.log(readFileIntoArray('data.txt'));


