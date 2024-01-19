var startbtn=document.getElementById("start");
var stopbtn=document.getElementById("stop");
var resetbtn=document.getElementById("reset");
var lapbtn=document.getElementById("lap");

var count=00;
var second=00;
var minute=00;
var hour=00;
var lapNo=0;

let sec1;
let min1;
let hour1;

startbtn.addEventListener('click',function(){
	timer=true;
	stopwatch();
});

stopbtn.addEventListener('click',function(){
	timer=false;
});



function stopwatch()
{
	
	if(timer)
	{
		count++;
		if(count==100)
		{
			second++;
			count=0;
		}
		if(second==60)
		{
			minute++;
			second=0;
		}
		if(minute==60)
		{
			hour++;
			minute=0;
		}
		let sec1=second;
		let min1=minute;
		let hour1=hour;
		if(second<10)
		{
			sec1="0"+second;
		}
		if(minute<10)
		{
			min1="0"+minute;
		}
		if(hour<10)
		{
			hour1="0"+hour;
		}
		document.getElementById("sec").innerHTML=sec1;
		document.getElementById("min").innerHTML=min1;
		document.getElementById("hr").innerHTML=hour1;
		setTimeout(stopwatch,9);
	}
}

resetbtn.addEventListener('click',function(){
	timer=false;
	count=00;
	second=00;
	minute=00;
	hour=00;
	document.getElementById("sec").innerHTML="00";
	document.getElementById("min").innerHTML="00";
	document.getElementById("hr").innerHTML="00";
	lapNo=0;
	document.getElementById("lap_div").innerHTML="";

});

lapbtn.addEventListener('click', function () 
{
    lapNo++;
	let sec1=second;
	let min1=minute;
	let hour1=hour;
	if(second<10)
	{
		sec1="0"+second;
	}
	if(minute<10)
	{
		min1="0"+minute;
	}
	if(hour<10)
	{
		hour1="0"+hour;
	}
	document.getElementById("lap_div").innerHTML+="Lap "+lapNo+" :: "+hour1+" :: "+min1+" :: "+sec1+"<br>";
});
