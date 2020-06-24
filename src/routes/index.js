import { addViewToListingRoute } from './addViewToListing';
import { createNewListingRoute } from './createNewListing';
import { deleteListingRoute } from './deleteListing';
import { staticFilesRoute, filesRoutes } from './files';
import { getAllListingsRoute } from './getAllListings';
import { getListingRoute } from './getListing';
import { getUserListingsRoute } from './getUserListings';
import { updateListingRoute } from './updateListing';

export default [
    addViewToListingRoute,
    createNewListingRoute,
    deleteListingRoute,
    getAllListingsRoute,
    getListingRoute,
    getUserListingsRoute,
    updateListingRoute,
    staticFilesRoute,
    ...filesRoutes,
];