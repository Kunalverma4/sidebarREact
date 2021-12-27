import React from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'
const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()
  // console.log(data)
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        show Modal
      </button>
    </main>
  )
}

export default Home
