"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requesterror = {
    error: "Could not decode request: JSON parsing failed"
};
exports.concatedaddress = function (address) {
    var lat = '';
    var lon = '';
    if (address.lat != undefined)
        lat = address.lat.toString();
    if (address.lon != undefined)
        lon = address.lon.toString();
    return address.buildingNumber + ' ' + lat + ' ' + lon + ' ' + address.postcode + ' ' + address.state + ' ' + address.street + ' ' + address.suburb + ' ' + address.unitNumber;
};
exports.response = function (request) {
    var response = request.payload.map(function (requestItem) {
        var resp = {
            concataddress: exports.concatedaddress(requestItem.address),
            type: requestItem.type,
            workflow: requestItem.workflow
        };
        return resp;
    });
    return response;
};
