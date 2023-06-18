import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const BillShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="exportBill" source="exportBill" />
        <TextField label="ID" source="id" />
        <TextField label="importBill" source="importBill" />
        <TextField label="month" source="month" />
        <TextField label="produce" source="produce" />
        <ReferenceField label="project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="referenceNumber" source="referenceNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
