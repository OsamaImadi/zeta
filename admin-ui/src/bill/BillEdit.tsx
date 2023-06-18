import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProjectTitle } from "../project/ProjectTitle";

export const BillEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
