import React from 'react';
import { Resource } from 'react-admin';
// @ts-ignore
import { HydraAdmin, ResourceGuesser } from '@api-platform/admin';
import continents from './components/Continents';
import partySetups from './components/PartySetups';
import zones from './components/Zones';
import bosses from './components/Bosses';
import stages from './components/stages';
import jobs from './components/jobs';
import skills from './components/skills';

// Replace with your own API entrypoint
// For instance if https://example.com/api/books is the path to the collection of book resources, then the entrypoint is https://example.com/api
export default () => (
    <HydraAdmin entrypoint="http://localhost:8000/api">
        <ResourceGuesser name="continents" {...continents} />
        <ResourceGuesser name="zones" {...zones} />
        <ResourceGuesser name="bosses" {...bosses} />
        <ResourceGuesser name="stages" {...stages} />

        <ResourceGuesser name="jobs" {...jobs} />
        <ResourceGuesser name="skills" {...skills}/>
        <ResourceGuesser name="party_setups" {...partySetups} />
    </HydraAdmin>
);
