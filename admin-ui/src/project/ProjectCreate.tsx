import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateInput,
} from "react-admin";

import { BillTitle } from "../bill/BillTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="appInstalled" source="appInstalled" />
        <TextInput label="appName" source="appName" />
        <TextInput label="appPassword" source="appPassword" />
        <TextInput label="appUsername" source="appUsername" />
        <ReferenceArrayInput
          source="bills"
          reference="Bill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BillTitle} />
        </ReferenceArrayInput>
        <TextInput label="clientAddress" source="clientAddress" />
        <TextInput label="clientCNIC" source="clientCnic" />
        <TextInput label="clientContactNumber" source="clientContactNumber" />
        <TextInput label="clientName" source="clientName" />
        <DateInput label="completionDate" source="completionDate" />
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
    </Create>
  );
};
