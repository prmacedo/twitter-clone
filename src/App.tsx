import { DarkModeContextProvider } from './context/DarkModeContext/DarkModeContext'
import { FeedContextProvider } from './context/FeedContext/FeedContext'
import { Router } from './routes'
import './styles/global.css'

function App() {
  return (
    <DarkModeContextProvider>
      <FeedContextProvider>
        <Router />
      </FeedContextProvider>
    </DarkModeContextProvider>
  )
}

export { App }
