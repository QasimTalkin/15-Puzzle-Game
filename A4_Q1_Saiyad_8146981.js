
var table15 = document.getElementById("puzzle15");
var rowNumber = table15.rows;
var selectedTileValue;

var max = 16;
//creating random set of array
var randTileNum = [];
    for(var i = 0;i<max ; i++){
        var temp = Math.floor(Math.random()*max);//genrating list of randoms
        if(randTileNum.indexOf(temp) == -1){randTileNum.push(temp);} //making them uniq
        else
         i--;
    }

//making an empty tile
var myEmptyTyle = randTileNum.indexOf(0);
randTileNum[myEmptyTyle]=""; //tile wil value 0 is empty



function selectTile(){
		for(r = 0; r < rowNumber.length; ++r) {
			for(c = 0; c < rowNumber[r].cells.length; c++) {
			rowNumber[r].cells[c].onclick = function(){selectedTileValue=this.innerText;	
											var a = indexNum(randTileNum, selectedTileValue);
												if(	randTileNum[a+1] == "" || 
												randTileNum[a-1] == "" ||
												randTileNum[a+4] == "" ||
												randTileNum[a-4] == ""	){
												var b = indexNum(randTileNum,"");
												swap (randTileNum, a, b);
												initateTable();
												}
												else {
													alert("Wrong choice please select another tile.");
												}
									 		}

			}
		}
}


function initateTable(){
	//populate the Table
	var tileIndex=0;
	for(var i=0; i<rowNumber.length; i++){
		//for each row we will input values to the cell
		for(var j=0; j<rowNumber[i].cells.length; j++){			
		rowNumber[i].cells[j].innerHTML=randTileNum[tileIndex];
		tileIndex++;
		}

	}
selectTile();
}

function indexNum(array,element){
	var indexNum;
	for(var i = 0; i < array.length; i++){
		if(element == array[i]){
			indexNum = i;
		}
	}
	return indexNum;
}


function swap(arr, indexA, indexB){
									  var temp = arr[indexA];
									  arr[indexA] = arr[indexB];
									  arr[indexB] = temp;
									  return arr;
								}

initateTable();

//alert(document.getElementById('puzzle15').rows[0].cells[0].innerHTML);
