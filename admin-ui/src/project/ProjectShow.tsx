import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PROJECT_TITLE_FIELD } from "./ProjectTitle";

export const ProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Bill" target="ProjectId" label="bills">
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="exportBill" source="exportBill" />
            <TextField label="ID" source="id" />
            <TextField label="importBill" source="importBill" />
            <TextField label="month" source="month" />
            <TextField label="produce" source="produce" />
            <ReferenceField
              label="project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="referenceNumber" source="referenceNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
