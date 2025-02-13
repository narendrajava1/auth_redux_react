import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
const router = createBrowserRouter([
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
  {
    path: '/dashboard',
    element: <Dashboard />,
  }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
