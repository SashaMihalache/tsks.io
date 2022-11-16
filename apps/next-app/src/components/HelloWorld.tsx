import React from 'react'
import { Button } from 'ui'
import { toSlug } from 'utils'

const HelloWorld = () => {
  const slug = toSlug('Hello World')

  return (
    <>
      <h1>Helllo {slug}</h1>
      <label htmlFor="name">
        <input id="name" name="name" type="text" />
      </label>
      <Button />
    </>
  )
}
export default HelloWorld
