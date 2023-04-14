import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import OrderHistory from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <OrderHistory
            symbol="BTCUSDT"
            apiKey='ff9041688155fe2746bd63756dc12f02136db50a3bf6e5c21d02531f92c0d899'
            apiSecret='d65b1fce2a3a1a2e55e130bb417fe2604fe2fa770438a2d10106bc33ae29119e'
        />
    </React.StrictMode>,
)
