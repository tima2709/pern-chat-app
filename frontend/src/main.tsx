import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext";
import SocketContextProvider from "./context/SocketContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <AuthContextProvider>
            <SocketContextProvider>
                <App/>
            </SocketContextProvider>
        </AuthContextProvider>
    </BrowserRouter>,
)
