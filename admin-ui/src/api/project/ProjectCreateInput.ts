import { InputJsonValue } from "../../types";

export type ProjectCreateInput = {
  appInstalled?: boolean | null;
  appName?: string | null;
  appPassword?: string | null;
  appUsername?: string | null;
  clientAddress?: string | null;
  clientCnic?: string | null;
  clientContactNumber?: string | null;
  clientName?: string | null;
  completionDate?: Date | null;
  electricityBillDetails?: InputJsonValue;
  greenMeterInstalled?: boolean | null;
  installationTeamContactNumber?: string | null;
  installationTeamName?: string | null;
  inverterCapacity?: string | null;
  inverterCompany?: string | null;
  inverterSerialNumber?: string | null;
  inverterSupplierDetails?: string | null;
  invoiceOfPanelPurchase?: string | null;
  netMeteringLicense?: string | null;
  netMeteringLicenseCopyAvailable?: boolean | null;
  numberOfPanels?: string | null;
  panelsCompany?: string | null;
  profit?: string | null;
  projectSize?: string | null;
  serialNumberOfPanles?: InputJsonValue;
  startDate?: Date | null;
  structureType?: string | null;
  totalQuotationAgreed?: string | null;
  wifiDongleSerialNumber?: string | null;
};
