function mousemove(event){
     var x=event.clientX;
     var y=event.clientY;
(function () {
	var elem = document.createElement('div');
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(elem);

	elem.style.position = 'fixed';
	elem.style.top = '0px';
	elem.style.right = '0px';
	elem.style.margin = '10px';
	elem.style.paddingTop = '10px';
	elem.style.width = '200px';
	elem.style.height = '40px';
	elem.style.zIndex = 10000;
	elem.style.opacity = 0.9;
	elem.style.color = 'white';
	elem.style.backgroundColor = 'black';
	elem.style.border = '1px solid white';
	elem.style.textAlign = 'center';
	elem.style.cursor = 'pointer';
	elem.id = 'myTimer';
	elem.style.display = 'block';
	elem.innerText = 'hi';

}());
}

window.addEventListener('mousemove', mousemove);
