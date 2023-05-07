import { MantineProvider } from '@mantine/core';

import './App.css'
import FeaturesCard from './Cards';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }}>
      <FeaturesCard />
    </MantineProvider>
  )
}

export default App
