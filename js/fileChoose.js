var fileObject = { name: "", byte: 0 };

function uploadFile() {
  var file = document.getElementById("file1").files[0];
  //alert(file.name + " | " + file.size + " | " + file.type);
  document.getElementById("progressBar").style.width = "100%";
  document.getElementById("status").innerHTML = "100%";
  fileObject.name = file.name;
  fileObject.byte = file.size;

  document.getElementById("file1").style.display = "none";
  document.getElementById("upload").style.display = "none";
  document.getElementById("files").style.backgroundImage =
    "url(../img/rocketWhite.png)";

  document.getElementById("start").style.display = "flex";
}

function startPSO() {
  document.getElementById("psoMenu").click();
  document.getElementById("datasetName").innerHTML =
    'Dataset Name: <b style="color: white;">' + fileObject.name + "</b>";
  document.getElementById("datasetSize").innerHTML =
    'Dataset Size: <b style="color: white;">' + fileObject.byte + "  bytes</b>";
}

function csvJSON(csv) {
  var lines = csv.split("\n");

  var result = [];

  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  return JSON.stringify(result); //JSON
}

function select() {
  console.log(document.getElementById("files").style.backgroundImage);
  if (document.getElementById("file1").files[0]) {
    console.log("deneme");
    document.getElementById("files").onclick = startPSO();
  } else {
    document.getElementById("file1").click();
  }
}

function homeMenu() {
  document.getElementById("home").style.display = "flex";
  document.getElementById("pso").style.display = "none";
  document.getElementById("about").style.display = "none";
}

function psoMenu() {
  document.getElementById("pso").style.display = "flex";
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
}

function aboutMenu() {
  document.getElementById("about").style.display = "flex";
  document.getElementById("pso").style.display = "none";
  document.getElementById("home").style.display = "none";
}
