/**
* SpecialEvent.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    location: {
      type: 'string',
      required: true
    },

    organizations: {
      collection: 'organization',
      via: 'specialEvents',
      required: true
    },

    dateSubmitted: {
      type: 'datetime',
      required: true
    },

    website: {
      type: 'string',
      required: true
    },

    purpose: {
      type: 'string',
      required: true
    },

    beneficiaries: {
      collection: 'beneficiary',
      via: 'specialEvents',
      required: true
    },

    date: {
      type: 'date',
      columnName: 'waterline_date',
      required: true
    },

    altDates: {
      type: 'array',
    },

    contact: {
      model: 'contact',
      required: true 
    },
    startTime: {
      type: 'datetime',
      required: true
    },

    endTime: {
      type: 'datetime',
      required: true
    },

    setUpTime: {
      type: 'datetime',
      required: true
    },

    tearDownTime: {
      type: 'datetime',
      required: true
    },

    route: {
      model: 'route',
      required: true
    },

    comments: {
      type: 'string'
    },

    eventTypes: {
      type: 'string',
      required: true
    },

    participantTypes: {
      type: 'string',
      required: true
    },

    annualEvent: {
      type: 'boolean'
    },

    estimatedAttendance: {
      type: 'integer',
      required: true
    },

    previousAttendance: {
      type: 'integer',
    },

    areas: {
      type: 'array',
      enum: [
        "North Hills", 
        "None of the above areas", 
        "City Greenways", 
        "Hillsborough Street", 
        "Wakefield", 
        "Other Downtown Locations", 
        "Cameron Village / Cameron Park area", 
        "Boylan Heights", 
        "City Plaza", 
        "City Plaza AstroTurf", 
        "Moore Square", 
        "Oakwood / Mordecai"
      ],
      required: true
    },

    closures: {
      type: 'string',
      required: true
    },

    trashRemovalPlan: {
      type: 'string',
      required: true
    },

    emergencyActionPlan: {
      type: 'string',
      required: true
    },

    alcohol: {
      type: 'boolean'
    },

    food: {
      type: 'boolean'
    },

    largeTentsOrInflatables: {
      type: 'boolena'
    },

    busImpact: {
      type:'boolean'
    },

    amplifiedMusic: {
      type: 'boolean'
    },

    openFlames: {
      type: 'boolean'
    }
  }
};

