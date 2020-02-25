import React from 'react'
import { inject, observer } from 'mobx-react'
import SearchResults from './SearchResults';

const SearchModal = inject("usersStore")(observer(({ usersStore }) => {
    return (
        <div className={`modal ${!usersStore.searchModalStatus ? 'hidden' : ''}`}>
            <span className="close-icon" onClick={() => usersStore.toggleSearchModalStatus()}>&times;</span>
            <h1 className="title">Search Users</h1>
            <input type="search" className="search-input" placeholder="Search: " value={usersStore.searchQuery} onChange={(e: React.ChangeEvent<HTMLInputElement>) => usersStore.setSearchQuery(e.target.value)} />

            <SearchResults />


        </div>
    )
}))

export default SearchModal
