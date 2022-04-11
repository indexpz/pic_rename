import * as ReactDOMClient from 'react-dom/client'
import App from './Components/App'
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Context/Context";
import './index.css'

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)
root.render(
    <ContextProvider>
        <Router>
            <App/>
        </Router>
    </ContextProvider>
)




