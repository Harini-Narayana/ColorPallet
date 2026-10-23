import { useState } from 'react'
import {ColorPallet} from './ColorPallet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorPallet/>
    </>
  )
}

export default App
