var f = function(n){
	var l = 1;
	var s = function(){
		var h = l.toString(16);
		n.style.backgroundColor = '#ffff'+h+h;
		if(l < 15){
			l+=1;
			setTimeout(s,100);
		}
	};
	setTimeout(s,100);
}

f(document.body);
