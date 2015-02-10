var memoizer = function(memo, formula){
	var recur = function(n){
		var result = memo[n];
		if(typeof result !== 'number'){
			result = formula(recur,n);
			memo[n] = result;
		}
		return result;
	};
	return recur;
};


// fabionacci

var fabionacci = memoizer([0,1], function (recur,n){
	return recur(n-1) + recur(n-2);
});

// fabionacci(7);

// factorial

var factorial = memoizer([1,1], function (recur, n){
	return n * recur(n-1);
});

// factorial(7);
