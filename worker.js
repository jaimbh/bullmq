const {Worker} = require('bullmq');

const sendEmail = () => new Promise((res, rej) => setTimeout(() => res(), 5000));

const worker = new Worker('email-queue', async (job)=>{
	console.log(`message received id: ${job.id}`);
	console.log('processing message');
	console.log(`sending email to ${job.data.email}`);
	
	await sendEmail();
	console.log('email sent');
},
{
	connection: {
		host: '192.168.11.128',
		port: '6379'
	}
});