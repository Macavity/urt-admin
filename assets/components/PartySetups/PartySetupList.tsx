import { Datagrid, EditButton, List, ReferenceInput, SelectInput, ShowButton, TextField } from 'react-admin';
import React from 'react';
// @ts-ignore
import { ListGuesser } from '@api-platform/admin';


const filters = [
  <ReferenceInput label="Zone" source="zone.id" reference="zones" sort={{field: 'name', order:'ASC'}} alwaysOn>
    <SelectInput optionText="name" />
  </ReferenceInput>,
  <ReferenceInput label="Boss" source="boss.id" reference="bosses" sort={{field: 'name', order:'ASC'}} alwaysOn>
    <SelectInput optionText="name" />
  </ReferenceInput>
];

export const PartySetupList = (props:any) => (
  <List {...props} filters={filters} sort={{field:'level', order: 'ASC'}}>
    <Datagrid rowClick="edit">
      <TextField label="Zone" source="zone.name" />
      <TextField label="Level" source="level" />
      <TextField label="Boss" source="boss.name" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);
