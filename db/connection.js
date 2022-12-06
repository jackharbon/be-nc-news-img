const { Pool } = require('pg');
const ENV = process.env.NODE_ENV || 'development';
const pathToEnvFile = `${__dirname}/../.env.${ENV}`;

require('dotenv').config({
	path: pathToEnvFile,
});

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
	throw new Error('PGDATABASE or DATABASE_URL not set');
}

const config = ENV === 'production' ? { connectionString: process.env.DATABASE_URL } : {};

module.exports = new Pool(config);