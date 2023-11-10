import { useState, useEffect } from 'react'
import axios from 'axios'
import SelectedAppDialog from './components/SelectedAppDialog'
import AppCard from './components/AppCard'
import Navbar from './components/Navbar'
import Background from './components/Background'
import DrawerContainer from './components/DrawerContainer'

export interface AppData {
  id: number
  name: string
  url: string
  logo: string
}


function App() {
  const [apps, setApps] = useState<AppData[]>([])
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('https://api.camdenwithrow.com/apps')
        setApps(resp.data)
      } catch (error) {
        console.log("ERROR", error)
      }
    }
    fetchData()
  }, [])

  return (
    <Background>
      <Navbar />
      <DrawerContainer>
        {apps.map((app) => (
          <AppCard key={app.id} appData={app} setSelectedApp={setSelectedApp} />
        ))}
      </DrawerContainer>
      <SelectedAppDialog selectedApp={selectedApp} setSelectedApp={setSelectedApp} />
    </Background>
  )
}

export default App
