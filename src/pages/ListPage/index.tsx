import React from 'react';
import List from './components/List';
import Filter from './components/Filter';

type Props = {
}

type Item = {
    title: string
}

type State = {
    list: Array<Item>
}

const ListPage: React.FC =  () => {
    return <div>
        <h1>Test Page</h1>
        <Filter />
        <List />
    </div>
}


export default ListPage;
