import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const BillList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"bills"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
