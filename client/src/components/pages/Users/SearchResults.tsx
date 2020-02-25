import React from 'react'
import { observer, inject } from 'mobx-react'
import { Iuser } from '../../../types';
import Spinner from '../../Spinner';
import ResultItem from './ResultItem';

const SearchResults = inject("usersStore", "authStore")(observer(({ usersStore, authStore }) => {

    const results: Iuser[] | null = usersStore.users && usersStore.searchQuery.startsWith('@') ? usersStore.users.filter((user: Iuser) => user.username.startsWith(usersStore.searchQuery)) : usersStore.users ? usersStore.users.filter((user: Iuser) => user.firstname.startsWith(usersStore.searchQuery)) : null;

    return (
        <div className="results">
            <h1 className="title">Results</h1>
            {results ? results.map(result => {
                return <ResultItem result={result} />
            }) : <Spinner />}
        </div>
    )
}));

export default SearchResults
