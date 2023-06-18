import { Bill } from "../bill/Bill";
import { JsonValue } from "type-fest";

export type Project = {
  appInstalled: boolean | null;
  appName: string | null;
  appPassword: string | null;
  appUsername: string | null;
  bills?: Array<Bill>;
  clientAddress: string | null;
  clientCnic: string | null;
  clientContactNumber: string | null;
  clientName: string | null;
  completionDate: Date | null;
  createdAt: Date;
  greenMeterInstalled: boolean | null;
  id: string;
  installationTeamContactNumber: string | null;
  installationTeamName: string | null;
  inverterCapacity: string | null;
  inverterCompany: string | null;
  inverterSerialNumber: string | null;
  inverterSupplierDetails: string | null;
  invoiceOfPanelPurchase: string | null;
  netMeteringLicense: string | null;
  netMeteringLicenseCopyAvailable: boolean | null;
  numberOfPanels: string | null;
  panelsCompany: string | null;
  profit: string | null;
  projectSize: string | null;
  serialNumberOfPanles: JsonValue;
  startDate: Date | null;
  structureType: string | null;
  totalQuotationAgreed: string | null;
  updatedAt: Date;
  wifiDongleSerialNumber: string | null;
};
