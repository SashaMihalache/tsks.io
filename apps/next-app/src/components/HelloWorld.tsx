import React from 'react'
import { Button } from 'ui'

const HelloWorld = () => (
  <>
    <h1>Helllo there</h1>
    <label htmlFor="name">
      <input id="name" name="name" type="text" />
    </label>
    <Button />
  </>
)
export default HelloWorld
