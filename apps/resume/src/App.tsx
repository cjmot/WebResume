import {BrowserRouter} from "react-router-dom"
import ResumeRoutes from './ResumeRoutes.tsx'


function App() {

  return (
    <>
      <BrowserRouter>
          <ResumeRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
