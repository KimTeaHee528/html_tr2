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
$("#btnm").click(function(){
	if(confirm("정말 등록하시겠습니까 ?") == true){
		alert("등록되었습니다");
    }else{
		return ;
	}
})
