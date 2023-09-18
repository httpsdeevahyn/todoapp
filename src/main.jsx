import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Addition from './Addition.jsx'
import { TodoAppp } from './TodoAppp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Addition/> */}
    {/* <App /> */}
    {/* <ToDoApp/> */}
    <TodoAppp/>
  </React.StrictMode>,
)
