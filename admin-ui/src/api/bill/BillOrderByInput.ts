import { SortOrder } from "../../util/SortOrder";

export type BillOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  exportBill?: SortOrder;
  id?: SortOrder;
  importBill?: SortOrder;
  month?: SortOrder;
  produce?: SortOrder;
  projectId?: SortOrder;
  referenceNumber?: SortOrder;
  updatedAt?: SortOrder;
};
