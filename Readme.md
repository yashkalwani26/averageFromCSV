**How to start?**

 `node app.js <mandatory-csv_file_path> <optional-MonitoringLocationID> <optional-CharacteristicName>`

**For example,**

 - MonitoringLocationID is passed, characteristicName is defaulted to "Temperature, water"

    `node app.js ./Indian_Bay_Ecosystem_Corporation.csv WS`

	*output:*

> Average ResultValue for WS: 9.491

 - MonitoringLocationID is passed, characteristicName is passed.

    `node app.js ./Indian_Bay_Ecosystem_Corporation.csv WS "Temperature, water"`

	*output:*

> Average ResultValue for WS: 9.491


 - MonitoringLocationID is not passed,

`node app.js ./Indian_Bay_Ecosystem_Corporation.csv WS`
*output:*
> {
  WS: { ResultValueSum: 208.80000000000007, count: 22, ResultValueAverage: '9.491'},
  IBS: { ResultValueSum: 132.6, count: 22, ResultValueAverage: '6.027' },
  ISB: { ResultValueSum: 62.699999999999996, count: 11, ResultValueAverage: '5.700' },
  IBP1: { ResultValueSum: 166.3, count: 9, ResultValueAverage: '18.48' },
  JS2: { ResultValueSum: 78.7, count: 5, ResultValueAverage: '15.74' },
  JS1: { ResultValueSum: 79.4, count: 6, ResultValueAverage: '13.23' },
  BB1: {
    ResultValueSum: 89.60000000000001,
    count: 6,
    ResultValueAverage: '14.93'
  },
  DB1: { ResultValueSum: 14.9, count: 1, ResultValueAverage: '14.90' },
  MPB1: { ResultValueSum: 26.5, count: 1, ResultValueAverage: '26.50' },
  MPB2: { ResultValueSum: 23.5, count: 1, ResultValueAverage: '23.50' },
  IBR3: {
    ResultValueSum: 128.39999999999998,
    count: 6,
    ResultValueAverage: '21.40'
  },
  IBR1: { ResultValueSum: 295.2, count: 17, ResultValueAverage: '17.36' },
  IBR2: {
    ResultValueSum: 217.00000000000003,
    count: 11,
    ResultValueAverage: '19.73'
  },
  IBR6: {
    ResultValueSum: 260.40000000000003,
    count: 13,
    ResultValueAverage: '20.03'
  },
  IBR4: {
    ResultValueSum: 221.00000000000003,
    count: 11,
    ResultValueAverage: '20.09'
  },
  IBR5: {
    ResultValueSum: 219.99999999999994,
    count: 11,
    ResultValueAverage: '20.00'
  },
  SWP1: {
    ResultValueSum: 337.6000000000001,
    count: 19,
    ResultValueAverage: '17.77'
  },
  SWP2: { ResultValueSum: 241.9, count: 17, ResultValueAverage: '14.23' },
  SWP4: {
    ResultValueSum: 72.89999999999999,
    count: 7,
    ResultValueAverage: '10.41'
  },
  SWP3: {
    ResultValueSum: 231.70000000000002,
    count: 16,
    ResultValueAverage: '14.48'
  },
  NWB1: {
    ResultValueSum: 275.79999999999995,
    count: 23,
    ResultValueAverage: '11.99'
  },
  NWB2: { ResultValueSum: 280.78, count: 23, ResultValueAverage: '12.21' },
  NWB3: { ResultValueSum: 219.6, count: 20, ResultValueAverage: '10.98' },
  IBPB1: {
    ResultValueSum: 270.49999999999994,
    count: 16,
    ResultValueAverage: '16.91'
  },
  IBPB2: { ResultValueSum: 374.5, count: 27, ResultValueAverage: '13.87' },
  IBPB3: {
    ResultValueSum: 299.79999999999995,
    count: 23,
    ResultValueAverage: '13.03'
  },
  IBPB4: {
    ResultValueSum: 263.90000000000003,
    count: 15,
    ResultValueAverage: '17.59'
  },
  IBPB5: {
    ResultValueSum: 255.50000000000003,
    count: 17,
    ResultValueAverage: '15.03'
  },
  NC2: {
    ResultValueSum: 157.29999999999998,
    count: 14,
    ResultValueAverage: '11.24'
  },
  NC1: {
    ResultValueSum: 157.20000000000002,
    count: 15,
    ResultValueAverage: '10.48'
  },
  N2E: { ResultValueSum: 31.2, count: 2, ResultValueAverage: '15.60' },
  },
  Skip1up: { ResultValueSum: 20.1, count: 1, ResultValueAverage: '20.10' },
  skip1d: { ResultValueSum: 20.1, count: 1, ResultValueAverage: '20.10' },
  WB: { ResultValueSum: 21, count: 1, ResultValueAverage: '21.00' },
  JS3: { ResultValueSum: 0.3, count: 1, ResultValueAverage: '0.3000' },
  ADB01: { ResultValueSum: 0.83, count: 1, ResultValueAverage: '0.8300' },
  ADB02: { ResultValueSum: 2.5, count: 1, ResultValueAverage: '2.500' }
}
