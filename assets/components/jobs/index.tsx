import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  ShowButton,
  EditButton,
  required, NumberField, NumberInput, ShowGuesser
} from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
import { SkillCreate, SkillEdit, SkillList } from '../skills';

const validateRequired = required();

export const JobList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <EmailField source="slug" />
      <EmailField source="name" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

export const JobCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm redirect="show">
      <NumberInput source="id" />
      <TextInput source="name" validate={validateRequired} />
      <TextInput source="slug" validate={validateRequired} />
    </SimpleForm>
  </Create>
);

export const JobEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm redirect="list">
      <NumberInput source="id" validate={validateRequired} />
      <TextInput source="name" validate={validateRequired} />
      <TextInput source="slug" validate={validateRequired} />
    </SimpleForm>
  </Edit>
);

export default {
  list: JobList,
  create: JobCreate,
  edit: JobEdit,
  show: ShowGuesser,
};
