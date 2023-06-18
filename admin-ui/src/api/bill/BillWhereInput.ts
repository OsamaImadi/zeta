import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type BillWhereInput = {
  amount?: StringNullableFilter;
  exportBill?: StringNullableFilter;
  id?: StringFilter;
  importBill?: StringNullableFilter;
  month?: StringNullableFilter;
  produce?: StringNullableFilter;
  project?: ProjectWhereUniqueInput;
  referenceNumber?: StringNullableFilter;
};
