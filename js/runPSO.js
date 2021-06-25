newData = [];

document
  .getElementById("runPso")
  .addEventListener("click", () => runScript(), false);

function runScript() {
  var file = document.getElementById("file1").files[0];
  var name = file.name;
  var classfierNum = document.getElementById("classfierNum").value;
  var pacticleNum = document.getElementById("particleNumber").value;
  var iteartionNum = document.getElementById("psoIteartionNum").value;

  console.log(name, classfierNum, pacticleNum, iteartionNum);
  document.getElementById("progresss").style.display = "flex";
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function (e) {
    // The file's text will be printed here
    var reslt = e.target.result;
    var jsn = csvJSON(reslt);
    //Git change
    // console.log(jsn);

    axios
      .post(
        "http://127.0.0.1:5000/pso?name=" +
          name +
          "&iteration=" +
          iteartionNum +
          "&classifer=" +
          classfierNum +
          "&particle=" +
          pacticleNum,

        jsn,

        {
          headers: {
            "content-type": "text/json",
          },
        }
      )
      .then((response) => {
        console.log("Date created: ", response.status);
        console.log("run", response.data);
        document.getElementById("progresss").style.display = "none";
        document.getElementById("featureBar").innerText =
          "Feature Bar " +
          response.data.newFeature +
          " From " +
          response.data.oldFeature +
          "     Subset Performance: " +
          response.data.subsetPerformance;
        progressHandler(response.data.oldFeature, response.data.newFeature);
        document.getElementById("downFile").style.display = "flex";
        newData = response.data.newData;
      })
      .catch((error) => {
        document.getElementById("progresss").style.display = "none";
        window.alert("error");
      });
  };
}

function progressHandler(oldF, newF) {
  var percent = newF * 100;
  document.getElementById("progressBar2").style.width = percent / oldF + "%";
}

function csvJSON(csv) {
  var lines = csv.split("\n");

  var result = [];

  var headers = lines[0].split(",");

  var linesLength = 200;

  if (lines.length < 200) {
    var linesLength = lines.length;
  }
  for (var i = 1; i < linesLength - 1; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }

  console.log(headers.length, "-", lines.length);

  return JSON.stringify(result); //JSON
}

function ConvertToCSV(objArray) {
  var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
  var str = "";

  for (var i = 0; i < array.length; i++) {
    var line = "";
    for (var index in array[i]) {
      if (line != "") line += ",";

      line += array[i][index];
    }

    str += line + "\r\n";
  }

  return str;
}

function csvDownload() {
  var csv = ConvertToCSV(newData);
  var file = document.getElementById("file1").files[0];
  var name = file.name;
  var exportedFilenmae = "new" + name || "export.csv";

  var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, exportedFilenmae);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) {
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", exportedFilenmae);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
