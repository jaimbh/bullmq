const {Queue} = require('bullmq');

const notificationQueue = new Queue('email-queue', {
	connection: {
		host: '192.168.11.128',
		port: '6379'
	}
});

async function init(){
	const res = await notificationQueue.add('email to piyush', {
		email: 'piyushgarg.dev',
		subject: 'Welcome message',
		body: 'Hey piyush welcome'
	});
	
	console.log('job added to queue ', res.id);
}

init();