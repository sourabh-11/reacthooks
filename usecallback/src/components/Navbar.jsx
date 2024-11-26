import React from 'react'
import { memo } from 'react'

const Navbar = ({adjectibve}) => {
    console.log("navbar is render")
  return (
    <div>
        i am a {adjectibve}  bar
    </div>
  )
}

export default memo(Navbar)