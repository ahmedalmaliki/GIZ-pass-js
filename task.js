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

const unsortedNumbers = [...numbers];

console.log("copied numbers list: ", unsortedNumbers)

//Now we can mutate the sortedNumbers list while keeping the original one intact.

let shift; //This variable helps us stop excuting if the array is already sorted.


function ascendBubbleSort(unsortedNumbers){
	  do{
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
	  }while(shift)
	  return unsortedNumbers;
}




console.log("Numbers list After Ascend sorting: ",ascendBubbleSort(unsortedNumbers))



function descendBubbleSort(unsortedNumbers){
	  do {
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
	  }while(shift)
	  return unsortedNumbers;
}





console.log("Numbers list After Desc sorting: ", descendBubbleSort(unsortedNumbers))

function sortArrayFromFile(fileName){
	 var fs = require('fs')
	 var array = fs.readFileSync(fileName).toString().split(",")
	 .map(function(item) { return parseInt(item, 10)});
	 ascendBubbleSort(array);
	 console.log(array);
	 return array
}

//This function turns the data from the text file into an array

function outputFile(content){
	var fs = require('fs');
	 fs.writeFile("output.txt", content, function (err){
	 	 if (err) { console.log(err); 
	 	 }
	 	  else { console.log("File saved");
	 	   }
	 	    });
	}

//This function  outputs the sorted array.

outputFile(sortArrayFromFile('data.txt'));

