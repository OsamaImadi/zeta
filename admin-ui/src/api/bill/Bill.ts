import { Project } from "../project/Project";

export type Bill = {
  amount: string | null;
  createdAt: Date;
  exportBill: string | null;
  id: string;
  importBill: string | null;
  month: string | null;
  produce: string | null;
  project?: Project | null;
  referenceNumber: string | null;
  updatedAt: Date;
};
