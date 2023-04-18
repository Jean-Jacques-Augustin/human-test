import axios from 'axios';
import HmacSHA256 from 'crypto-js/hmac-sha256';

export interface Order {
	orderId: number;
	symbol: string;
	side: string;
	price: string;
	executedQty: string;
	cummulativeQuoteQty: string;
	status: string;
	timeInForce: string;
	type: string;
	updateTime: number;
}

export async function getOrderHistory(symbol: string, apiKey: string, apiSecret: string): Promise<Order[]> {
	const baseUrl = 'https://api.binance.com';
	const path = '/api/v3/allOrders';
	const url = `${baseUrl}${path}?symbol=${symbol}&limit=10`;
	const timestamp = Date.now();
	
	const signature = HmacSHA256(`symbol=${symbol}&timestamp=${timestamp}`, apiSecret).toString();
	
	const response = await axios.get(url, {
		headers: {
			'X-MBX-APIKEY': apiKey,
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
			'Access-Control-Allow-Origin': '*',
		},
		params: {
			signature,
			timestamp,
		},
	});
	console.log(response.data);
	
	return response.data as Order[];
}
