
export default {
	// host: 'http://ec2-18-219-180-211.us-east-2.compute.amazonaws.com',
	host: process.env.host ? process.env.host : 'http://localhost',
	basePath: 'api',
	port: 3001
};