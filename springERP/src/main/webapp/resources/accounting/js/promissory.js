// 데이트 피커
$(function() {
	$("#datepicker").datepicker(
			{
				dateFormat : 'yy-mm-dd',
				prevText : '이전 달',
				nextText : '다음 달',
				monthNames : [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월',
						'9월', '10월', '11월', '12월' ],
				monthNamesShort : [ '1월', '2월', '3월', '4월', '5월', '6월', '7월',
						'8월', '9월', '10월', '11월', '12월' ],
				dayNames : [ '일', '월', '화', '수', '목', '금', '토' ],
				dayNamesShort : [ '일', '월', '화', '수', '목', '금', '토' ],
				dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
				showMonthAfterYear : true,
				changeMonth : true,
				changeYear : true,
				yearSuffix : '년'
			});
});

$(function() {
	$("#datepicker2").datepicker(
			{
				dateFormat : 'yy-mm-dd',
				prevText : '이전 달',
				nextText : '다음 달',
				monthNames : [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월',
						'9월', '10월', '11월', '12월' ],
				monthNamesShort : [ '1월', '2월', '3월', '4월', '5월', '6월', '7월',
						'8월', '9월', '10월', '11월', '12월' ],
				dayNames : [ '일', '월', '화', '수', '목', '금', '토' ],
				dayNamesShort : [ '일', '월', '화', '수', '목', '금', '토' ],
				dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
				showMonthAfterYear : true,
				changeMonth : true,
				changeYear : true,
				yearSuffix : '년'
			});
});

// 만기일자 계산
$(function() {
	var reddate = '';
	$('#datepicker').change(function() {
		reddate = new Date($('input[name=red_date]').val());
		$('#ex_date30').on("click", function() {			
			if (reddate != null) {
				reddate.setDate(reddate.getDate() + 30);
				var year = reddate.getFullYear();
				var month = reddate.getMonth() + 1;
				var day = reddate.getDate();
				if (("" + month).length == 1) {
					month = "0" + month;
				}
				if (("" + day).length == 1) {
					day = "0" + day;
				}				
			}
			var exdate = new Date($('input[name=ex_date]'));
			var exdates = year + "-" + month + "-"+day;
			$('input[name=ex_date]').val(exdates)
			$('#ex_date30').off();			
		});
		$('#ex_date60').on("click",function() {			
			if (reddate != null) {
				reddate.setDate(reddate.getDate() + 60);
				var year = reddate.getFullYear();
				var month = reddate.getMonth() + 1;
				var day = reddate.getDate();
				if (("" + month).length == 1) {
					month = "0" + month;
				}
				if (("" + day).length == 1) {
					day = "0" + day;
				}
			}
			var exdate = new Date($('input[name=ex_date]'));
			var exdates = year + "-" + month + "-"+day;
			$('input[name=ex_date]').val(exdates)
			$('#ex_date60').off();
		})
		$('#ex_date90').on("click",function() {			
			if (reddate != null) {
				reddate.setDate(reddate.getDate() + 90);
				var year = reddate.getFullYear();
				var month = reddate.getMonth() + 1;
				var day = reddate.getDate();
				if (("" + month).length == 1) {
					month = "0" + month;
				}
				if (("" + day).length == 1) {
					day = "0" + day;
				}			
			}
			var exdate = new Date($('input[name=ex_date]'));
			var exdates = year + "-" + month + "-"+day;
			$('input[name=ex_date]').val(exdates)
			$('#ex_date90').off();
		})
		
	})
});
