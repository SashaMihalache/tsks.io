import React from 'react'
import type { NextPage } from 'next'
import { Button } from 'ui/Button'
import { CoolInterface } from 'server/src/lib/CoolInterface'
import HelloWorld from 'src/components/HelloWorld'

const coolKid: CoolInterface = {
  amICool: true,
}

const Home: NextPage = () => (
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    {coolKid.amICool ? 'I am cool' : 'I am not cool'}
    <Button />
    <div className=" bg-yellow-200">Next-app</div>
    <p>This is a component that uses both UI and Utils packages</p>
    <HelloWorld />
  </div>
)

export default Home
