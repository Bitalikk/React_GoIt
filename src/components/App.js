import React from 'react';
import Panel from './Panel';
import ProfileDetails from './ProfileDetails';
import TechList from './TechList';

const tech = [
    { id: 'id-1', name: 'JS'},
    { id: 'id-2', name: 'React'},
    { id: 'id-3', name: 'React Router'},
    { id: 'id-4', name: 'Redux'}
]

const App = () => (
<div>
    <TechList items={tech} />
</div>
);

export default App