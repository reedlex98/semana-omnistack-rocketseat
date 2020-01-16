module.exports = function (latitude, longitude){
    return {
        type: 'Point',
        coordinates: [longitude, latitude]
    }
}