package erp.gw.projectboard.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import erp.gw.projectboard.domain.Criteria;
import erp.gw.projectboard.domain.ProjectsVO;
import erp.gw.projectboard.domain.SearchCriteria;
import erp.gw.projectboard.persistence.ProjectBoardDao;

@Service
public class ProjectBoardServiceImpl implements ProjectBoardService{
	
	@Inject
	private ProjectBoardDao dao;

	@Override
	public List<ProjectsVO> listAll() throws Exception {
		return dao.listAll();
	}

	@Override
	public List<ProjectsVO> listCriteria(Criteria cri) throws Exception {
		return dao.listCriteria(cri);
	}

	@Override
	public int listCountCriteria(Criteria cri) throws Exception {
		return dao.countPaging(cri);
	}

	@Override
	public List<ProjectsVO> listSearchCriteria(SearchCriteria cri) throws Exception {
		return dao.listSearch(cri);
	}

	@Override
	public int listSearchCount(SearchCriteria cri) throws Exception {
		return dao.listSearchCount(cri);
	}
}
