/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        name: {
            type: 'string',
            required: true
        },
        address: {
            model: 'address',
            required: true
        },
        telephone: {
            type: 'string',
            required: true
        },
        cell: {
            type: 'string',
            required: true
        },
        organizations: {
            collection: 'organization',
            via: 'contact'
        }
    }
};

