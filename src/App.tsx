import { useState } from 'react'
import { MantineProvider, Text } from '@mantine/core';

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
