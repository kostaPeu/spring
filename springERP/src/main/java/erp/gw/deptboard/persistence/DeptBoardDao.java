package erp.gw.deptboard.persistence;

import java.util.List;
import java.util.Map;

import erp.common.domain.Criteria;
import erp.common.domain.SearchCriteria;
import erp.gw.deptboard.domain.DeptBoardVO;
import erp.hr.domain.EmployeeVO;

public interface DeptBoardDao {
	  public List<DeptBoardVO> listAll() throws Exception;
	  public List<DeptBoardVO> listCriteria(Criteria cri) throws Exception;
	  public int countPaging(Criteria cri)throws Exception;
	  public int listSearchCount(String dept_id)throws Exception;
/*	  public int listSearchCount(SearchCriteria cri)throws Exception;
*/	  public List<DeptBoardVO> listSearch(Map<String, Object> map)throws Exception;
	  public String enameGet(String emp_id) throws Exception;
	  public DeptBoardVO read(int dept_board_id) throws Exception;
	  public void write(DeptBoardVO dept)throws Exception;
	  public void updateDept(DeptBoardVO dept)throws Exception;
	  public void deleteDept(int dept_board_id)throws Exception;
	  public EmployeeVO getEmployee(String emp_id) throws Exception;
}