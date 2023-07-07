import React from 'react'
import Header from "../../components/Header/header"
import Error from '../../components/ErrorPageNotFound'


function PageError404 () {
  return (
    <>
      <Header/>
      <Error/>
    </>
  )
}

export default PageError404