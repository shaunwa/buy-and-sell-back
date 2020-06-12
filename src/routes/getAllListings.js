import { fakeListings } from './fake-data';

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: (req, h) => {
        return fakeListings;
    }
}