import { Client } from 'pg';

export const client = new Client({
	user: 'dbuser',
	host: 'database.server.com',
	database: 'mydb',
	password: 'secretpassword',
	port: 3211,
});