'use strict'

const fs = require("fs");
const csv = require("csv-parser");

var aggregatedData = {};

const initiate = (_path, _locationId, _characteristicsName) => {
    let characteristicsName = _characteristicsName || "Temperature, water"
    if (_path) {
        try {
            fs.createReadStream(_path)
                .on("error", errorLog)
                .pipe(csv())
                .on("data", (_row) => aggregate(_row, characteristicsName))
                .on("end", () => calculateAverage(_locationId))
                .on("error", errorLog);
        } catch (e) {
            errorLog(e);
        }
    } else {
        console.log("Please specify the location to csv as arguement: node app.js <csv_file_path>")
    }
}

const aggregate = (_row, _characteristicsName) => {
    if (_row['CharacteristicName'] === _characteristicsName) {
        if (aggregatedData.hasOwnProperty(_row['MonitoringLocationID'])) {
            aggregatedData[_row['MonitoringLocationID']]["ResultValueSum"] += parseFloat(_row["ResultValue"]);
            aggregatedData[_row['MonitoringLocationID']]["count"] += 1;
        } else {
            aggregatedData[_row['MonitoringLocationID']] = {};
            aggregatedData[_row['MonitoringLocationID']]["ResultValueSum"] = parseFloat(_row["ResultValue"]);
            aggregatedData[_row['MonitoringLocationID']]["count"] = 1;
        }
    }
}

const calculateAverage = (_locationId) => {
    Object.keys(aggregatedData).map(e => {
        aggregatedData[e]["ResultValueAverage"] = (aggregatedData[e]["ResultValueSum"] / aggregatedData[e]["count"]).toPrecision(4);
    })
    displayResult(_locationId);
}

const errorLog = (_error) => {
    console.error("Unexpected error occurred: ", _error.message);
}

const displayResult = (_locationId) => {
    if (_locationId) {
        console.log(`Average ResultValue for ${_locationId}: ` + aggregatedData[_locationId]["ResultValueAverage"]);
    } else {
        console.log("Since no MonitoringLocationID was passed showing result for all!");
        console.log(aggregatedData)
    }
}

module.exports = {
    initiate
}
