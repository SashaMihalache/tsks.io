import React from 'react'
import type { NextPage } from 'next'
import { Button } from 'ui/Button'
import { CoolInterface } from 'server/src/lib/CoolInterface'

const coolKid: CoolInterface = {
  amICool: false,
}

const Home: NextPage = () => (
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    {coolKid.amICool ? 'I am cool' : 'I am not cool'}
    <Button />
  </div>
)

export default Home
