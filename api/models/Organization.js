/**
* Organization.js
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
    type: {
      type: 'string',
      enum: ['For Profit', 'Not for Profit'],
      required: true
    },
    contact: {
      model: 'contact',
      required: true
    },
    specialEvents: {
      collection: 'specialEvent',
      via: 'organizations'
    }
  }
};