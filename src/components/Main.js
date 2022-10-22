import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Prep from './Prep'
import Vizio from './Vizio'
import Footer from './Footer'

import { useRef } from 'react'

function Main() {
  const top = useRef(null)
  const prep = useRef(null)
  const vizio = useRef(null)

  const ex_top = () => top.current.scrollIntoView({behavior: "smooth"})
  const ex_prep = () => prep.current.scrollIntoView({behavior: "smooth"})
  const ex_vizio = () => vizio.current.scrollIntoView({behavior: "smooth"})

  return (
    <div>
      <div ref={top} />
      <br />  
      <NavBar ex_top={ex_top} ex_prep={ex_prep} ex_vizio={ex_vizio}/>
      
      <Hero />

      <div ref={prep} />
      <br />
      <br />
      <br />
      <Prep  />

      <div ref={vizio} />
      <br />
      <br />
      <br />
      <Vizio />

      <Footer />
    </div>
  )
}

export default Main