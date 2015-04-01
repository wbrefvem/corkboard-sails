/**
* Address.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        firstLine: {
            type: 'string',
            required: true
        },
        secondLine: {
            type: 'string',
        },
        city: {
            type: 'string',
            required: true
        },
        state: {
            type: 'string',
            required: true
        },
        zipCode: {
            type: 'string',
            required: true
        },
        contact: {
            model: 'contact'
        },
        organization: {
            model: 'organization'
        }
    }
};

