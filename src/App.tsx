import { FC } from 'react';
import { Home } from './pages/index';
import { Box } from '@mui/material';
import 'antd/dist/antd.css';
const App:FC = (props) => {
  
  return (
    <Box flex={1}>
      <Home />
    </Box>
  )
}

export default App;