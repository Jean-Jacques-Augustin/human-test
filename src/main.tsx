import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import OrderHistory from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <OrderHistory
            symbol="BTCUSDT"
            apiKey='xydsCEs++yYYKLgIiuxAArSs2qV5MGP/sSwEu/E4fcF7xhAjTCwCjqDi'
            apiSecret='eyJpdiI6IkNVQ0JsS2JQSjRRVlNFVHl4WTVhOFE9PSIsInZhbHVlIjoiTVI3OCtxdCtRZnYvR29ockhYMFRpRlY3aFpsTnhXUmRpU1VTSXpIdnJ4VUd3cXVhQThDZjBIckJIamp5RnBqemdOT3dHeStQSFIwT0gzZEtQV3MvWm5LelJhRFRINDdYK3FZMGJXL2RQTWhLWFFlUm5PV3NJUkJ1Rk83Y2RVMDUiLCJtYWMiOiI5NTk5OGJjOWVjMTJkNjQ5YTI0NmFmODk3NzFkNzliZDk4YmUxMGNmMmQxYjNlZWI1ZjMzZGI5ZThhOWQxN2E1IiwidGFnIjoiIn0'
        />
    </React.StrictMode>,
)
