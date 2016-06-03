package erp.pch.persistence;


import java.util.List;

import erp.basic.domain.Product;
import erp.common.domain.Criteria;
import erp.common.domain.SearchCriteria;
import erp.pch.domain.Customer;
import erp.pch.domain.GetWareHouse;
import erp.pch.domain.PurchaseListView;
import erp.pch.domain.PurchaseSearch;
import erp.pch.domain.PurchaseSearchTimeSet;
import erp.pch.domain.PurchaseVO;
import erp.sale.domain.SaleListView;

public interface PurchaseDAO {
	public void addPch(PurchaseVO vo)throws Exception;
	public List<PurchaseListView> readPch()throws Exception;
	public void removePch(String buy_id)throws Exception;
	public List<Customer> customerList(String customer_id)throws Exception;
	public List<Product> productList(String product_id)throws Exception;
	public List<GetWareHouse> warehouseList(String warehouse_id)throws Exception;
	public List<PurchaseListView> purchaseSearch(PurchaseSearchTimeSet ps)throws Exception;
	public void updatePurchase(PurchaseVO vo)throws Exception;
	public List<PurchaseListView> listAll() throws Exception;
	public List<PurchaseListView> listCriteria(Criteria cri) throws Exception;
	public int countPaging(Criteria cri) throws Exception;
	public int listSearchCount(SearchCriteria cri)throws Exception;
	public List<PurchaseListView> listSearch(SearchCriteria cri)throws Exception;
}
