import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  appInstalled?: SortOrder;
  appName?: SortOrder;
  appPassword?: SortOrder;
  appUsername?: SortOrder;
  clientAddress?: SortOrder;
  clientCnic?: SortOrder;
  clientContactNumber?: SortOrder;
  clientName?: SortOrder;
  completionDate?: SortOrder;
  createdAt?: SortOrder;
  electricityBillDetails?: SortOrder;
  greenMeterInstalled?: SortOrder;
  id?: SortOrder;
  installationTeamContactNumber?: SortOrder;
  installationTeamName?: SortOrder;
  inverterCapacity?: SortOrder;
  inverterCompany?: SortOrder;
  inverterSerialNumber?: SortOrder;
  inverterSupplierDetails?: SortOrder;
  invoiceOfPanelPurchase?: SortOrder;
  netMeteringLicense?: SortOrder;
  netMeteringLicenseCopyAvailable?: SortOrder;
  numberOfPanels?: SortOrder;
  panelsCompany?: SortOrder;
  profit?: SortOrder;
  projectSize?: SortOrder;
  serialNumberOfPanles?: SortOrder;
  startDate?: SortOrder;
  structureType?: SortOrder;
  totalQuotationAgreed?: SortOrder;
  updatedAt?: SortOrder;
  wifiDongleSerialNumber?: SortOrder;
};
