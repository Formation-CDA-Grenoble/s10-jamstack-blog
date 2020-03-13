import Pusher from 'pusher';
require('dotenv').config();

const {
  REACT_APP_APP_ID,
  REACT_APP_KEY,
  REACT_APP_SECRET,
  REACT_APP_CLUSTER,
} = process.env;

const pusher = new Pusher({
  appId: REACT_APP_APP_ID,
  key: REACT_APP_KEY,
  secret: REACT_APP_SECRET,
  cluster: REACT_APP_CLUSTER,
  encrypted: true,
});

export async function handler (event, context, callback) {
  const { httpMethod, body } = event;

  const payload = JSON.parse(body);

  if (httpMethod === 'POST') {
    pusher.trigger('blog', 'postComment', payload);
  }

  return {
    statusCode: 201,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }
}
