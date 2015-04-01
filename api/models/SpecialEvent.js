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
            collection: 'eventType',
            via: 'specialEvents',
            required: true
        },
        participantTypes: {
            collection: 'participantType',
            via: 'specialEvents',
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
            collection: 'area',
            via: 'specialEvents',
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
        },
        holdHarmlessAgree: {
            type: 'boolean',
            required: true
        },
        seNotifReqsAgree: {
            type: 'boolean',
            required: true
        },
        legalAgree: {
            type: 'boolean',
            required: true
        },
        appFeeAgree: {
            type: 'boolean',
            required: true
        }
    }
};

