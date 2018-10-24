module.exports = function generateEChartsOptData(originData, source, percent) {
  if (!originData) {
    return null;
  }

  let opt = {
    legend: [],
    series: []
  };

  originData.forEach(element => {
    opt.legend.push(element.metricName);
    let seriesItem = {
      name: element.metricName,
      keyName: element.metric,
      data: []
    };
    element.values.forEach(element1 => {
      seriesItem.data.push([
        element1.timestamp * 1000,
        percent ? element1[source] * 100 : element1[source]
      ]);
    });
    opt.series.push(seriesItem);
  });

  return opt;
};
