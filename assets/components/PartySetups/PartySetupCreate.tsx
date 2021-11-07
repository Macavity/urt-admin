import {
  Create,
  DateField,
  Edit,
  FormTab,
  NumberField,
  NumberInput,
  ReferenceInput,
  SelectInput,
  Show,
  TabbedForm,
  TabbedShowLayout,
  TextField,
} from 'react-admin';
import React from 'react';
import { sortByName, sortZone, validateRequired } from './index';
import { Grid } from '@mui/material';
import { ClassType } from '../../enums/ClassType';


const filterGladiator = { 'job.id': ClassType.Gladiator };
const filterWarrior = { 'job.id': ClassType.Warrior };
const filterDruid = { 'job.id': ClassType.Druid };
const filterShaman = { 'job.id': ClassType.Shaman };
const filterAssassin = { 'job.id': ClassType.Assassin };
const filterHunter = { 'job.id': ClassType.Hunter };
const filterMage = { 'job.id': ClassType.Mage };
const filterWarlock = { 'job.id': ClassType.Warlock };

const tabs = [
  {
    label: 'Tank', jobs: [
      { label: 'Gladiator', filter: filterGladiator, attrPrefix: 'gladiator' },
      { label: 'Warrior', filter: filterWarrior, attrPrefix: 'warrior' },
    ],
  },
  {
    label: 'heal', jobs: [
      { label: 'Druid', filter: filterDruid, attrPrefix: 'druid' },
      { label: 'Shaman', filter: filterShaman, attrPrefix: 'shaman' },
    ],
  },
  {
    label: 'Single Target', jobs: [
      { label: 'Assassin', filter: filterAssassin, attrPrefix: 'assassin' },
      { label: 'Warlock', filter: filterWarlock, attrPrefix: 'warlock' },
    ],
  },
  {
    label: 'Multi Target', jobs: [
      { label: 'Hunter', filter: filterHunter, attrPrefix: 'hunter' },
      { label: 'Mage', filter: filterMage, attrPrefix: 'mage' },
    ],
  },
];
//
// const PartySetupActions = ({ basePath, data, resource }: ToolbarProps) => (
//   <TopToolbar>
//     <ShowButton basePath={basePath} record={data} />
//     {/* Add your custom actions */}
//     <Button color="primary" onClick={customAction}>Custom Action</Button>
//   </TopToolbar>
// );

export const PartySetupShow = (props: any) => (
  <Show {...props}>
    <TabbedShowLayout>
      <NumberField source="id" />
      <TextField source="zone.name" />
      <NumberField source="level" />

      <NumberField source="gladiator.skill1" />
      <DateField source="warrior.skill1" />
      <DateField source="druid.skill1" />
      <NumberField source="shaman.skill1" />
      <NumberField source="assassin.skill1" />
      <NumberField source="hunter.skill1" />
      <DateField source="mage.skill1" />
      <DateField source="warlock.skill1" />
      <TextField source="boss.name" />
    </TabbedShowLayout>
  </Show>
);

export const PartySetupCreate = (props: any) => {
  return (
    <Create {...props}>
      <TabbedForm redirect="list">
        <FormTab label="Summary">
          <ReferenceInput label="Boss"
                          sort={sortByName}
                          source="boss"
                          reference="bosses"
                          perPage={100}
                          validate={validateRequired}>
            <SelectInput optionText="name" />
          </ReferenceInput>
          <ReferenceInput label="Zone" sort={sortZone} source="zone" reference="zones"
                          validate={validateRequired}>
            <SelectInput optionText="name" />
          </ReferenceInput>
          <NumberInput source="level" validate={validateRequired} />
        </FormTab>
        {tabs.map(({ label, jobs }) => (
          <FormTab label={label}>
            <Grid container spacing={2}>
              {jobs.map(({ label, attrPrefix, filter }) => (
                <Grid item xs={6}>
                  <h2>{label}</h2>
                  {[1, 2, 3, 4].map(value => (
                    <ReferenceInput label={`Skill ${value}`}
                                    source={`${attrPrefix}.skill${value}`}
                                    reference="skills"
                                    filter={filter}
                                    sort={sortByName}>
                      <SelectInput optionText="name" />
                    </ReferenceInput>
                  ))}
                </Grid>
              ))}
            </Grid>
          </FormTab>
        ))}
      </TabbedForm>
    </Create>
  );
};

export const PartySetupEdit = (props: any) => (
  <Edit {...props}>
    <TabbedForm redirect="list">
      <FormTab label="Summary">
        <ReferenceInput label="Boss"
                        sort={sortByName}
                        source="boss.id"
                        reference="bosses"
                        perPage={100}
                        validate={validateRequired}>
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Zone" sort={sortZone} source="zone.id" reference="zones"
                        validate={validateRequired}>
          <SelectInput optionText="name" />
        </ReferenceInput>
        <NumberInput source="level" validate={validateRequired} />
      </FormTab>
      {tabs.map(({ label, jobs }) => (
        <FormTab label={label}>
          <Grid container spacing={2}>
            {jobs.map(({ label, attrPrefix, filter }) => (
              <Grid item xs={6}>
                <h3>{label}</h3>
                {[1, 2, 3, 4].map(value => (
                  <span>
                  <ReferenceInput label={`Skill ${value}`}
                                  source={`${attrPrefix}.skill${value}`}
                                  reference="skills"
                                  filter={filter}
                                  sort={sortByName}>
                    <SelectInput optionText="name" />
                  </ReferenceInput>&nbsp;
                  </span>
                ))}
              </Grid>
            ))}
          </Grid>
        </FormTab>
      ))}
    </TabbedForm>
  </Edit>
);
