import { BrowserRouter, Route, Routes } from "react-router-dom"
import { 
  Container, 
  createTheme,
  CssBaseline, 
  Paper, 
  ThemeProvider 
} from "@material-ui/core"

import myTheme from './utils/myTheme'
import Choose from "./screens/Choose"
import Home from './screens/Home'
import Order from "./screens/Order"
import Review from "./screens/Review"
import PaymentScreen from "./screens/PaymentScreen"
import CompleteOrder from "./screens/CompleteOrder"

import './utils/styles/globals.css'

const theme = createTheme(myTheme)

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='sm' style={{ padding: 0 }}>
          <Paper>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/choose' element={<Choose choice='order' />} />
              <Route path='/order' element={<Order />} />
              <Route path='/review' element={<Review />} />
              <Route path='/select-payment' element={<Choose choice='payment' />} />
              <Route path='/payment' element={<PaymentScreen/>} />
              <Route path='/complete' element={<CompleteOrder/>} />
            </Routes>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
