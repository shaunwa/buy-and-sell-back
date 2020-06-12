import Boom from '@hapi/boom';
import { fakeListings } from './fake-data';

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: (req, h) => {
        const id = req.params.id;
        const listing = fakeListings.find(listing => listing.id === id);
        if (!listing) throw Boom.notFound(`Listing does not exist with id ${id}`);
        return listing;
    }
}