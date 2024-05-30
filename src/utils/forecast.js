const request = require(`postman-request`)

const forecast = (longitude, latitude, callback) => {
    //const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGV4dGVyMjVjYSIsImEiOiJjbHQ1dmtwYzkwNThrMmttaWEybjVwaHcwIn0.kQkACONqat251gaS4MRhOg'
    const url = 'http://api.weatherstack.com/current?access_key=e7bd26b1981003ef62bb23c3b9ae489c&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, response) => {
        const { length, temperature, feelslike, weather_descriptions } = response.body.current
        if (error) {
            callback('Unable to connect to forecast services!', undefined)
        } else if (length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                temperature,
                feelslike,
                description: weather_descriptions[0]
            })
        }
    })
}

module.exports = forecast