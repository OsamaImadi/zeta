import { Bill as TBill } from "../api/bill/Bill";

export const BILL_TITLE_FIELD = "amount";

export const BillTitle = (record: TBill): string => {
  return record.amount || String(record.id);
};
