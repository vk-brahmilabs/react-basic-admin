import React from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import ProjectList from './components/ProjectList';
import ProjectCreate from './components/ProjectCreate';
import ProjectEdit from './components/ProjectEdit';
import UserList from './components/UserList';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';

function App () {
  return (
    <Admin dataProvider={restProvider ('http://localhost:3000')}>
      <Resource
        name="projects"
        list={ProjectList}
        create={ProjectCreate}
        edit={ProjectEdit}
      />
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  );
}

export default App;
