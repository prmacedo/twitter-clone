import { DarkModeContextProvider } from './context/DarkModeContext/DarkModeContext'
import { DataContextProvider } from './context/DataContext/DataContext'
import { FeedContextProvider } from './context/FeedContext/FeedContext'
import { Router } from './routes'
import './styles/global.css'

function App() {
  return (
    <DarkModeContextProvider>
      <DataContextProvider>
        <FeedContextProvider>
          <Router />
        </FeedContextProvider>
      </DataContextProvider>
    </DarkModeContextProvider>
  )
}

export { App }
