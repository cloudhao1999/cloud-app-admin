export const tinyOptions = {
  legend: {
    orient: "horizontal",
    left: "center",
    top: "10%",
    textStyle: {
      color: "#8f8f8f"
    }
  },
  center: ["50%", "50%"]
};

export const normalOptions = {
  legend: {
    orient: "vertical",
    left: "15%",
    top: "center",
    textStyle: {
      color: "#8f8f8f"
    }
  },
  center: ["60%", "50%"]
};

export const pieOptions = {
  legend: normalOptions.legend,
  tooltip: {
    trigger: "item",
    formatter: "{b} : {c} ({d}%)"
  },
  series: [
    {
      type: "pie",
      radius: [10, 100],
      roseType: "area",
      center: normalOptions.center,
      itemStyle: {
        borderRadius: 8
      },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: false
        }
      },
      data: [
        { value: 40, name: "雷电系" },
        { value: 38, name: "水系" },
        { value: 32, name: "草系" },
        { value: 30, name: "精神系" },
        { value: 28, name: "水系" },
        { value: 26, name: "火系" },
        { value: 22, name: "控制系" },
        { value: 18, name: "岩石系" }
      ]
    }
  ]
};
