let menu = document.querySelector('.Text');
let Sidebar = document.querySelector('.hidden');

menu.onmouseover = function(){
	Sidebar.classList.toggle('active');
};

menu.onmouseout = function(){
	Sidebar.classList.toggle('active');
};

// JavaScript Document