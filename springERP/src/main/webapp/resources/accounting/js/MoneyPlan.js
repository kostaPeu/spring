//현금 & 어음 체크하는 부분
function money() {
	document.moneyplan.action="/accounting/moneyPlan/MoneyPlan_Add";
	document.moneyplan.submit();
}

function promissory() {
	document.moneyplan.action="/accounting/moneyPlan/MoneyPlan_Add_promissory";
	document.moneyplan.submit();
}

//데이트 피커
$(function() {
	$("#datepicker").datepicker({
		 	dateFormat: 'yy-mm-dd',
		    prevText: '이전 달',
		    nextText: '다음 달',
		    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		    dayNames: ['일','월','화','수','목','금','토'],
		    dayNamesShort: ['일','월','화','수','목','금','토'],
		    dayNamesMin: ['일','월','화','수','목','금','토'],
		    showMonthAfterYear: true,
		    changeMonth: true,
		    changeYear: true,
		    yearSuffix: '년',
		    currentText: '오늘 날짜', 
			closeText: '닫기'
	});
});

$(function() {
	$("#datepicker2").datepicker({
		 	dateFormat: 'yy-mm-dd',
		    prevText: '이전 달',
		    nextText: '다음 달',
		    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		    dayNames: ['일','월','화','수','목','금','토'],
		    dayNamesShort: ['일','월','화','수','목','금','토'],
		    dayNamesMin: ['일','월','화','수','목','금','토'],
		    showMonthAfterYear: true,
		    changeMonth: true,
		    changeYear: true,
		    yearSuffix: '년',
		    currentText: '오늘 날짜', 
		    closeText: '닫기'
	});
});