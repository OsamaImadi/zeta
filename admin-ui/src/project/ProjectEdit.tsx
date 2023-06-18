import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  DateInput,
} from "react-admin";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="appInstalled" source="appInstalled" />
        <TextInput label="appName" source="appName" />
        <TextInput label="appPassword" source="appPassword" />
        <TextInput label="appUsername" source="appUsername" />
        <TextInput label="clientAddress" source="clientAddress" />
        <TextInput label="clientCNIC" source="clientCnic" />
        <TextInput label="clientContactNumber" source="clientContactNumber" />
        <TextInput label="clientName" source="clientName" />
        <DateInput label="completionDate" source="completionDate" />
        <div />
        <BooleanInput
          label="greenMeterInstalled"
          source="greenMeterInstalled"
        />
        <TextInput
          label="installationTeamContactNumber"
          source="installationTeamContactNumber"
        />
        <TextInput label="installationTeamName" source="installationTeamName" />
        <TextInput label="inverterCapacity" source="inverterCapacity" />
        <TextInput label="inverterCompany" source="inverterCompany" />
        <TextInput label="inverterSerialNumber" source="inverterSerialNumber" />
        <TextInput
          label="inverterSupplierDetails"
          source="inverterSupplierDetails"
        />
        <TextInput
          label="invoiceOfPanelPurchase"
          source="invoiceOfPanelPurchase"
        />
        <TextInput label="netMeteringLicense" source="netMeteringLicense" />
        <BooleanInput
          label="netMeteringLicenseCopyAvailable"
          source="netMeteringLicenseCopyAvailable"
        />
        <TextInput label="numberOfPanels" source="numberOfPanels" />
        <TextInput label="panelsCompany" source="panelsCompany" />
        <TextInput label="profit" source="profit" />
        <TextInput label="projectSize" source="projectSize" />
        <div />
        <DateInput label="startDate" source="startDate" />
        <TextInput label="structureType" source="structureType" />
        <TextInput label="totalQuotationAgreed" source="totalQuotationAgreed" />
        <TextInput
          label="wifiDongleSerialNumber"
          source="wifiDongleSerialNumber"
        />
      </SimpleForm>
    </Edit>
  );
};
