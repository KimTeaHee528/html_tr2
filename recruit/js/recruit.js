function pop(){
	window.open("pop.html","확인창","width=260,height=100");
}
function selectAll(selectAll)  {
	const checkboxes 
		= document.querySelectorAll('input[type="checkbox"]');
	checkboxes.forEach((checkbox) => {
	checkbox.checked = selectAll.checked
	})
}
