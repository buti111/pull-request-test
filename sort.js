var sortNumber = function(number) {
	number.sort(function (a, b) {
		if (a === b) {
			return 0;
		}
		return a < b ? -1 : 1;
	});
};

var nums = [1,2,3,4,10,12,9,8];
sortNumber(nums);


console.log(nums);

