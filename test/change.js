var C = module.export = {}
	var change = 0;
	var Money = {
		'US':100,
		'NT':2992,
		'CNY':673,
		'JPY':11652,
	}

C.change = function(Money_select){
	change = Money[Money_select] / Money[Money_select];
	return change;
}