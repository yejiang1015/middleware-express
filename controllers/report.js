/**
 * @file common
 * @Author: yejiang
 * @Date: 2018-10-23 22:37:16
 * @Last Modified by: yejiang
 * @Last Modified time: 2018-10-23 23:46:28
 */

"use strict";
const setRes = require("../utils/setRes");
const axios = require("../axios");
const generateEChartsOptData = require("../utils/generateEChartsOptData");
const lodash = require("lodash");

class Report {
  static pv(req, res, next) {
    const { query, method } = req;
    const url = req._parsedUrl.pathname;

    axios
      .get(url, { params: query })
      .then(async response => {
        setRes(
          res,
          response.data.errno,
          await generateEChartsOptData(response.data.data, "count"),
          response.data.errmsg
        );
      })
      .catch(error => {
        setRes(res, 500, null, error.message);
      });
  }

  static mtj(req, res, next) {
    const url = req._parsedUrl.pathname;
    const { query, method } = req;
    axios
      .get(url, { params: query })
      .then(response => {
        setRes(
          res,
          response.data.errno,
          generateEChartsOptData(response.data.data, "count"),
          response.data.errmsg
        );
      })
      .catch(error => {
        setRes(res, 500, null, error.message);
      });
  }

  static white(req, res, next) {
    const url = req._parsedUrl.pathname;
    const { query, method } = req;
    axios
      .get(url, { params: query })
      .then(response => {
        setRes(
          res,
          response.data.errno,
          generateEChartsOptData(response.data.data, "avg", true),
          response.data.errmsg
        );
      })
      .catch(error => {
        setRes(res, 500, null, error.message);
      });
  }

  static launch(req, res, next) {
    const url = req._parsedUrl.pathname;
    const { query, method } = req;

    const countOpt = {
      userName: query.userName,
      osName: "all",
      type: "all",
      stats: "count",
      period: query.period,
      startTime: query.startTime,
      endTime: query.endTime,
      id: query.id,
      swanjsVer: query.swanjsVer
    };
    const rateOpt = {
      userName: query.userName,
      osName: "all",
      type: "all",
      stats: "rate",
      period: query.period,
      startTime: query.startTime,
      endTime: query.endTime,
      id: query.id,
      swanjsVer: query.swanjsVer
    };
    Promise.all([
      axios.get(url, { params: countOpt }),
      axios.get(url, { params: rateOpt })
    ])
      .then(response => {
        let resData1 = generateEChartsOptData(response[0].data.data, "count");
        let resData2 = generateEChartsOptData(
          response[1].data.data,
          "rate",
          true
        );

        let result = {
          legend: lodash.concat(resData1.legend, resData2.legend),
          series: lodash.concat(resData1.series, resData2.series)
        };
        setRes(res, response[0].data.errno, result, response[0].data.errmsg);
      })
      .catch(error => {
        setRes(res, 500, null, error.message);
      });
  }
}

module.exports = Report;
