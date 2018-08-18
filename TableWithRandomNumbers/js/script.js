window.onload =function(){
	var sum=0;
	var n = randomInteger(3,10);
	
	var table = createDomElement('table','tableSum')
	var res = createDomElement('div','','');
	res.id="show";
	
	
	for(var i = 0;i<n;i++){
		var tr = createDomElement('tr');
			for(var j = 0;j<n;j++){
				var td = createDomElement('td',"",randomInteger(-20,20));
				td.addEventListener('click',checkTd);
				tr.appendChild(td);
			}
			
		table.appendChild(tr);	
		
	}
	
	document.body.appendChild(table);
	document.body.appendChild(res);
	
	var btn = document.body.createElement("BUTTON"); 
	
	//ДЗ  Формы в хтмл, дж эс, создание элементов в доме, 
	
	function createDomElement(elem,className="",text=""){
		var newElem = document.createElement(elem);
		if(className!=""){
			newElem.className = className;
		}
		
		newElem.innerHTML = text;
		
		return newElem;
	}
	
	function randomInteger(min, max) {
		var rand = min + Math.random() * (max + 1 - min);
		rand = Math.floor(rand);
		return rand;
	}
	
	function checkTd() {
		if(!this.hasAttribute('class')) {
			this.className="active";
			sum+=+this.innerHTML;		
			show.innerHTML = `Сумма ${sum}`
		}
		
		else {
			this.removeAttribute('class');
			sum-=+this.innerHTML;
			show.innerHTML = `Сумма ${sum}`;
		}
		
	}
	
}





	
