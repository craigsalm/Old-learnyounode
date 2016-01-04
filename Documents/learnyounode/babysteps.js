
var arrSum = function(arr){
	var total = 0
	for(i=0;i<arr.length;i++){
		total+=Number(arr[i])
	}
	return total;
}

console.log(arrSum(process.argv.slice(2)))