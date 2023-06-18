import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type BillUpdateInput = {
  amount?: string | null;
  exportBill?: string | null;
  importBill?: string | null;
  month?: string | null;
  produce?: string | null;
  project?: ProjectWhereUniqueInput | null;
  referenceNumber?: string | null;
};
