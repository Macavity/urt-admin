import {
  Datagrid,
  EditButton,
  EditButtonProps,
  List,
  ReferenceInput,
  SearchInput,
  SelectInput,
  TextField,
} from 'react-admin';
import React from 'react';
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const zoneFilters = [
  <SearchInput source="name" alwaysOn />,
  <ReferenceInput label="Continent" source="continent.id" reference="continents" alwaysOn>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];
const stopPropagation = (e: any) => e.stopPropagation();

const FrontendDetailPageButton = ({ record }: EditButtonProps) => {
  if (!record) {
    console.log('Empty Record');
    return null;
  }
  console.log('record', record);
  return (
    <Button href={record.detailUrl || '#'}
            onClick={stopPropagation}
            variant="text"
            startIcon={<VisibilityIcon />}>Show</Button>
  );
  // return (
  //   <Button href={''} variant="text" startIcon={VisibilityIcon}>Show</Button>
  // );
};

export const ZoneList = (props: any) => (
  <List {...props} filters={zoneFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="position" />
      <TextField source="slug" />
      <TextField source="name" />
      <TextField label="Continent" source="continent.name" />
      <FrontendDetailPageButton {...props} />
      <EditButton />
    </Datagrid>
  </List>
);
