// Pavel Silber ( HW 1-2)

var lettersArray = ['A','B','C','D','E','F','G','H'];
var numbersArray = ['1','2','3','4','5','6','7','8'];
var count = 0;
var cell = 1;

function createMatrix() {

	var matrix = document.getElementById('matrix');
	var n = 8 * 8;	
	
	
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {

			if((i+j) % 2 ) {
				var div = document.createElement('div');
				div.className = 'cell';
				matrix.appendChild(div).style.backgroundColor = 'LightGrey';
				matrix.lastChild.innerHTML = numbersArray[j] + lettersArray[i];
				div.id = cell;
				cell++;
			}

			else {
				var div = document.createElement('div');
				div.className = 'cell';
				matrix.appendChild(div).style.backgroundColor = 'White';
				matrix.lastChild.innerHTML = numbersArray[j] + lettersArray[i];	
				div.id = cell;
				cell++;
			}			

		}
		
	}

}
			

 

window.onload = function() {

	createMatrix();	



	// document.addEventListener('click', function(e) {
	// 	var adr = e.target.id;
	// 	console.log(e.target);
 //    	//cellAdress.lastChild.innerText = '(e.target)';
 //    	document.getElementById('cellAdress').innerHTML = <div>(e.target)</div>;

   //  	function myFunction() {
   //  		document.addEventListener('click', function(e) {
			// var adr = e.target.id;
			// console.log(e.target.id);
	  //   	//cellAdress.lastChild.innerText = '(e.target)';
	  //   	document.getElementById('cellAdress').innerText = e.target.id;

   //  			}
   //  		);
   //  	}	

   document.addEventListener('click', function(e) {
   		var adr = e.target;
   		console.log(adr);

   		document.getElementById('cellAdress').innerHTML = '<div>adr2</div>';	

  		}
    );


}





		