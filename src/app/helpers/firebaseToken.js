import { google } from 'googleapis';

export default async () => {
  try {
    const scope = 'https://www.googleapis.com/auth/firebase.messaging';
    const jwtClient = new google.auth.JWT(
      process.env.FIREBASE_CLIENT_EMAIL,
      null,
      process.env.FIREBASE_PRIVATE_KEY.split(String.raw`\n`).join('\n'),
      scope,
      null
    );

    const authorize = await jwtClient.authorize();

    return authorize.access_token;
  } catch (error) {
    console.log('firebase get token error: ' + error);
    throw new Error('firebase get token error: ' + error);
  }
};
