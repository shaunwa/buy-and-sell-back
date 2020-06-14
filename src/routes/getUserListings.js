import * as admin from 'firebase-admin';
import { db } from '../database';
import Boom from '@hapi/boom';

export const getUserListingsRoute = {
    method: 'GET',
    path: '/api/users/{userId}/listings',
    handler: async (req, h) => {
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId = req.params.userId;

        if (user.user_id !== userId) throw Boom.unauthorized('Users can only access their own listings!');

        const { results } = await db.query(
            'SELECT * FROM listings WHERE user_id=?',
            [userId],
        );

        return results;
    }
}