import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ProjectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"projects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="appInstalled" source="appInstalled" />
        <TextField label="appName" source="appName" />
        <TextField label="appPassword" source="appPassword" />
        <TextField label="appUsername" source="appUsername" />
        <TextField label="clientAddress" source="clientAddress" />
        <TextField label="clientCNIC" source="clientCnic" />
        <TextField label="clientContactNumber" source="clientContactNumber" />
        <TextField label="clientName" source="clientName" />
        <TextField label="completionDate" source="completionDate" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField
          label="greenMeterInstalled"
          source="greenMeterInstalled"
        />
        <TextField label="ID" source="id" />
        <TextField
          label="installationTeamContactNumber"
          source="installationTeamContactNumber"
        />
        <TextField label="installationTeamName" source="installationTeamName" />
        <TextField label="inverterCapacity" source="inverterCapacity" />
        <TextField label="inverterCompany" source="inverterCompany" />
        <TextField label="inverterSerialNumber" source="inverterSerialNumber" />
        <TextField
          label="inverterSupplierDetails"
          source="inverterSupplierDetails"
        />
        <TextField
          label="invoiceOfPanelPurchase"
          source="invoiceOfPanelPurchase"
        />
        <TextField label="netMeteringLicense" source="netMeteringLicense" />
        <BooleanField
          label="netMeteringLicenseCopyAvailable"
          source="netMeteringLicenseCopyAvailable"
        />
        <TextField label="numberOfPanels" source="numberOfPanels" />
        <TextField label="panelsCompany" source="panelsCompany" />
        <TextField label="profit" source="profit" />
        <TextField label="projectSize" source="projectSize" />
        <TextField label="serialNumberOfPanles" source="serialNumberOfPanles" />
        <TextField label="startDate" source="startDate" />
        <TextField label="structureType" source="structureType" />
        <TextField label="totalQuotationAgreed" source="totalQuotationAgreed" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField
          label="wifiDongleSerialNumber"
          source="wifiDongleSerialNumber"
        />
      </Datagrid>
    </List>
  );
};
