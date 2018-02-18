function dop_task1() {

var str = "";
for ( i =1; i<10;i++){
str +=i;
}
	document.write(str);
}
function dop_task2() {

var str = "";
for ( i = 9; i>0; i--){
	str +=i;
}
document.write(str);
}
function dop_task3() {

	var str = "-";
	for ( i = 0; i<10; i++){
		str +=i + "-";
	}
	document.write(str);
}
function dop_task4() {
	var str = "";
	for (i=0; i<=19;i++)
	{
		str += 'x';
		document.write(str+'<br>');
	}

}
function dop_task5() {

	for ( i = 1; i <= 9; i++) {
		for ( j = 1; j <= i; j++) {
			document.write(i);
		}
		document.write('<br>');
	}
}
function dop_task6() {
	var str = '';
	for(var i=0; i<=19;i++)
	{
		str += 'xx';
		document.write(str + '<br>');
	}

}