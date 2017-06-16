
'use strict'
let linkedListFactory = function linkedListFactory(){
let list = {};

//private variables 
let head = undefined; 

//private functions 
let push = function push(val){
	let node = { value : val , next : undefined } ; 
	if (typeof(head) === 'undefined'){
		head = node;
	}else{
		let current = head; 
		while ( typeof(current.next) !== 'undefined'){
			current = current.next
		}
		current.next = node;
	}
	list.head = head;
}

let push2 = function push2(val){
	if (typeof(head) === 'undefined'){
		head = { value : val , next : undefined };
	}else{
		
		

	}
	
	
	list.head = head	
	

	
}


//public properties 
list.head = head;

// public methods 
list.push = push; 

return list; 

}


let l = linkedListFactory();
l.push(1);
l.push(2);
l.push(3);
console.log (l.head);
console.log (l.head.next);
