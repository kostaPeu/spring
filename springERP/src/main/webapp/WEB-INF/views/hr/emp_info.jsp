<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="_csrf" content="${_csrf.token}" />
<meta name="_csrf_header" content="${_csrf.headerName}" />
<script src="/resources/common/js/csrf.js" type="text/javascript"></script>
<!-- 커스텀 -->
<link rel="stylesheet" href="/resources/hr/css/emp.css">
<script src="/resources/hr/js/hr.js" type="text/javascript"></script>
<script type="text/javascript">
	function fn_insert_emp(){
		location.href="/hr/emp/insert";
	}
</script>
<script type="text/javascript">
	$(function(){
		$('#empSearch').on('click', function(event){
			self.location = "emp"
				+ '${pageMaker.makeQuery(1)}'
				+ "&searchType=null"
				+ "&keyword=" + $('#emp_name_input').val();
		});
	});
	$(function(){
    	$('#checkAll').click(function(){
    		if(this.checked){
    			$('input[name=id_box]').each(function(){
    				$(this).prop('checked',true);
    			});
    		}else{
    			$('input[name=id_box]').each(function(){
    				$(this).prop('checked',false);
    			});
    		}        	
    	});
    	
    	$('#delete_emp_btn').on('click', function(){
			var array = [];
			$("input[name=id_box]:checked").each(function() {
				array.push($(this).val());	
			});
			//array="+array+"&"
			var url = "/hr/emp/emp_delete${pageMaker.makeSearch(pageMaker.cri.page)}&array="+array;
			if(array == ""){
				alert("삭제할 목록을 체크하시오.");
			}else{
				$(location).attr('href',url);
			}		
		});
		
    	$('#update_emp_btn').click(function(){
    		var val = '';
    		$("input[name=id_box]:checked").each(function() {
				val = $(this).val();
			});
    		var url = "/hr/emp/emp_update${pageMaker.makeSearch(pageMaker.cri.page)}&emp_id="+val;
    		if(val == ""){
    			alert("수정할 것을 체크하시오.");
    		}
    		else{
    			$(location).attr('href',url);
    		}
    	});
    });
</script>
<style type="text/css">
ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
</style>
</head>
<body>

	<h2 class="page_title">직원조회</h2>

	<div class="hr_body">
		<div class="pull-right">
			<div class="form-group">
				<label for="search_employee">이름</label> 
				<input type="text" class="form-control input-sm" id="emp_name_input" name="emp_name">
				<button id='empSearch' class="btn btn-sm">직원검색</button>
			</div>
		</div>
		<div class="container-fluid">
			<table class="table table-condensed table table-bordered">
				<thead>
					<tr class="emp_info_head">
						<th><input type="checkbox" id="checkAll"></th>
						<th>사번</th>
						<th>이름</th>
						<th>나이</th>
						<th>입사일</th>
						<th>부서명</th>
						<th>연봉</th>
						<th>주소</th>
						<th>이메일</th>
						<th>전화번호</th>
						<th>직급명</th>
						<th>직무명</th>
						<th>직책명</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${list }" var="empViewVO">
						<tr class="emp_info_body">
							<td><input type="checkbox" class="upSelect check_id" name="id_box" value="${empViewVO.emp_id }"></td>
							<td>${empViewVO.emp_id }</td>
							<td>${empViewVO.e_name }</td>
							<td>${empViewVO.e_age }</td>
							<td>${empViewVO.e_hiredate }</td>
							<td>${empViewVO.dept_name }</td>
							<td>${empViewVO.e_sal }</td>
							<td>${empViewVO.e_address }</td>
							<td>${empViewVO.e_email }</td>
							<td>${empViewVO.phone_number }</td>
							<td>${empViewVO.position_name }</td>
							<td>${empViewVO.job_name }</td>
							<td>${empViewVO.duty_name }</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<div class="text-center">
				<ul class="pagination">

					<c:if test="${pageMaker.prev}">
						<li><a
							href="emp${pageMaker.makeSearch(pageMaker.startPage - 1) }">&laquo;</a></li>
					</c:if>

					<c:forEach begin="${pageMaker.startPage }"
						end="${pageMaker.endPage }" var="idx">
						<li
							<c:out value="${pageMaker.cri.page == idx?'class =active':''}"/>>
							<a href="emp${pageMaker.makeSearch(idx)}">${idx}</a>
						</li>
					</c:forEach>

					<c:if test="${pageMaker.next && pageMaker.endPage > 0}">
						<li><a
							href="emp${pageMaker.makeSearch(pageMaker.endPage +1) }">&raquo;</a></li>
					</c:if>

				</ul>
			</div>
		</div>
		<button type="button" class="btn btn-default" id="insert_emp_btn"
			onclick="fn_insert_emp()">신규등록</button>
		<button type="button" class="btn btn-default" id="update_emp_btn">수정</button>
		<button type="button" class="btn btn-default" id="delete_emp_btn">삭제</button>
	</div>
</body>
</html>