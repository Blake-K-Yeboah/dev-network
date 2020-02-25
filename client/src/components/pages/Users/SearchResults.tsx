import React from 'react'
import { observer, inject } from 'mobx-react'
import { Iuser } from '../../../types';
import Spinner from '../../Spinner';
import ResultItem from './ResultItem';

const SearchResults = inject("usersStore", "authStore")(observer(({ usersStore, authStore }) => {

    const results: Iuser[] | null = usersStore.users && usersStore.searchQuery.startsWith('@') ? usersStore.users.filter((user: Iuser) => user.username.toLowerCase().startsWith(usersStore.searchQuery.toLowerCase())) : usersStore.users ? usersStore.users.filter((user: Iuser) => user.firstname.toLowerCase().startsWith(usersStore.searchQuery.toLowerCase())) : null;

    return (
        <div className="results">
            <h1 className="title">Results</h1>
            {results ? results.map(result => {
                if (result._id === authStore.user.id) return false
                return <ResultItem result={result} uid={authStore.user.id} key={result._id} />
            }) : <Spinner />}
        </div>
    )
}));

export default SearchResults
