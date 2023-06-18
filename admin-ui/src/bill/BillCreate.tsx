import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProjectTitle } from "../project/ProjectTitle";

export const BillCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amount" source="amount" />
        <TextInput label="exportBill" source="exportBill" />
        <TextInput label="importBill" source="importBill" />
        <TextInput label="month" source="month" />
        <TextInput label="produce" source="produce" />
        <ReferenceInput source="project.id" reference="Project" label="project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <TextInput label="referenceNumber" source="referenceNumber" />
      </SimpleForm>
    </Create>
  );
};
