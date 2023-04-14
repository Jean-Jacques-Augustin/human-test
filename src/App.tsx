import {useState, useEffect} from 'react';
import {Order, getOrderHistory} from './api/getData';

function OrderHistory({symbol, apiKey, apiSecret}: { symbol: string; apiKey: string; apiSecret: string }) {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        async function fetchData() {
            const orders = await getOrderHistory(symbol, apiKey, apiSecret);
            setOrders(orders);
        }

        fetchData().then(r => console.log('done', r));
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>Order ID</th>
                <th>Symbol</th>
                <th>Side</th>
                <th>Price</th>
                <th>Executed Qty</th>
                <th>Cummulative Quote Qty</th>
                <th>Status</th>
                <th>Time in Force</th>
                <th>Type</th>
                <th>Update Time</th>
            </tr>
            </thead>
            <tbody>
            {orders.map((order) => (
                <tr key={order.orderId}>
                    <td>{order.orderId}</td>
                    <td>{order.symbol}</td>
                    <td>{order.side}</td>
                    <td>{order.price}</td>
                    <td>{order.executedQty}</td>
                    <td>{order.cummulativeQuoteQty}</td>
                    <td>{order.status}</td>
                    <td>{order.timeInForce}</td>
                    <td>{order.type}</td>
                    <td>{order.updateTime}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default OrderHistory;
