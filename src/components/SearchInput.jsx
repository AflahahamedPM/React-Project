import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchInput = memo(() => {
  return (
    <form className='relative flex justify-between items-center'>
        <input type="text" name="search" id="" className='outline-none border rounded-xl text-myOrange border-gray-200 pl-4 py-2 pr-12 placeholder-myBlue'autoComplete='off' placeholder='Search Your Destination' />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-3 text-myOrange h-5'/>
    </form>
  )
})

export default SearchInput