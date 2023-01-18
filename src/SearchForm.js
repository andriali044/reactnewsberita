import React, {useState} from 'react'

const SearchForm = ({SearchText}) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        SearchText(text)
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder='e.g politics' className='py-1 px-2 rounded-1-lg' onChange={(e) => setText(e.target.value)}/>
              <button type='submit' className='bg-green-400 py-1 px-2 rounded-r-lg text-white'>search</button>
          </form>
    </div>
  )
}

export default SearchForm