import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [serverResponse, setServerResponse] = useState('')

  useEffect(() => {
    const fetchServer = async () => {
      const data = await axios.get('/api')
      setServerResponse(data.data)
    }
    fetchServer()
  }, [])

  return (
    <>
      <header>
        Header
      </header>
      <main>
        <h1>Main</h1>
        <p>Server say { serverResponse }</p>
      </main>
      <footer>
        Footer
      </footer>
    </>
  )
}

export default App
