function flashlightToggle()
{
	window.plugins.flashlight.toggle(success,fail,false);
	if(lightstate)
	{
		window.plugins.toast.show('light off','short','center',false);
		lightstate=false;
	}
	else
	{
		window.plugins.toast.show('light on','short','center',false);
		lightstate=true;
	}
}

function success()
{
	console.log("success");
}

function fail()
{
	console.log("fail");
}

var lightstate=false;