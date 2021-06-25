function lang(myParam) {
  var lng = {};

  switch (myParam) {
    case "tr":
      lng = {
        home: "Ana Sayfa",
        lang: "tr",
        aboutUs: "Hakkında",
        start: '<span style="text-align: center; ">PSO\'yu<br>Başlat</span>',
        upload: "Yükle",
        text1:
          "Parçacık sürü optimizasyonu ile özellik seçimi.<br/>Veri kümesini seçin.",
        //text2:
        //  "PSO'da, çözüm arayan her bireye <b style='font-weight: 900'>parçacık</b>, partikülleri içeren popülasyona ise <b style='font-weight: 900'>sürü</b> adı verilir. <br /><b style='font-weight: 900'>Fitness fonksiyonu</b> , bir bireyin çözüme ne kadar yakın olduğunu anlamak için kullanılır.<br />Bir parçacığın bir çözüm aradığı süre boyunca, çözüme en yakın olduğu zaman en iyi durumuna <b style='font-weight: 900'>pbest</b> denir. Sürüdeki bütün arama sırasında, çözüme en yakın partikülün mevcut durumuna <b style='font-weight: 900'>gbest</b> denir.",
        //text3:
        //  "Sınıflandırma performansını en üst düzeye çıkarmak ve özelliklerin sayısını en aza indirmek gibi birbiriyle çelişen iki ana hedefi vardır.<br />",
        title: "Parçacık Sürüsü Optimizasyonu ile Özellik Seçimi",
        featureSelection: "Özellik Seçimi",
        terminology: "Terminoloji",
        datasetDesct: "Veri Kümesi Açıklaması",
        datasetName: "Veri Kümesi Adı",
        datasetSize: "Veri Kümesi Boyutu",
        psoForSetting: "PSO Ayarları",
        particleNum: "Parçacık Sayısı",
        psoIteartion: "Tekrar Sayısı",
        classfier: "Sınıflandırıcı Seçimi",
        runPso: "Optimizasyona Başla",
        featureBar: "Özellik Çubuğu",
        download: "İndir",
        title: "Parçacık Sürüsü Optimizasyonu İle Özellik Seçimi",
        text2:
          "Parçacık Sürü Optimizasyonu, sürüdeki bazı hareketli hayvanların yiyecek bulma gibi eylemlerinin sürüdeki diğer bireyleri etkilediği ve sürünün amacına daha kolay ulaştığı gözleminden ilham almıştır. Kennedy ve Dr. 1995 yılında Eberhart tarafından geliştirilen bir optimizasyon algoritmasıdır.",
        text3:
          "Sınıflandırma problemleri genellikle veri setlerinde çok sayıda özelliğe sahiptir, ancak bunların hepsi sınıflandırma için kullanışlı değildir. Alakasız ve gereksiz özellikler performansı bile düşürebilir. Özellik seçimi, tüm özellikleri kullanmak yerine benzer veya daha iyi sınıflandırma performansı elde etmek için az sayıda ilgili özellik seçmeyi amaçlar.",
      };
      break;

    default:
      lng = {
        home: "Home",
        lang: "en",
        aboutUs: "About",
        start: '<span style="text-align: center; ">Start<br>PSO</span>',
        upload: "Upload",
        text1:
          "Feature selection with particle swarm optimization.<br/>Upload the dataset.",
        //text2:
        //  "In PSO, each individual looking for a solution is called a <b style='font-weight: 900'>particle</b>, and the population containing the particles is called a <b style='font-weight: 900'>swarm</b>.<br />The <b style='font-weight: 900'>fitness function</b> is used to understand how close an individual is to the solution.<br />Duringthe time a particle is looking for a solution, its best statewhen it is closest to the solution is called<b style='font-weight: 900'>pbest</b>. During the whole searchin the whole flock, the current state of the particle closestto the solution is called<b style='font-weight: 900'>gbest</b>.",
        //text3:
        //  "It has two main conflicting objectives of maximizing the classification performance and minimizing the number of features.<br />",
        title: "Particle Swarm Optimization Feature Selection",
        featureSelection: "Feature Selection",
        terminology: "Terminology",
        datasetDesct: "Dataset Description",
        datasetName: "Dataset Name",
        datasetSize: "Dataset Size",
        psoForSetting: "PSO For Settings",
        particleNum: "Particle Number",
        psoIteartion: "Iteration Number",
        classfier: "Classfier Select",
        runPso: "START PSO",
        featureBar: "Feature Bar",
        download: "Download",
        title: "Particle Swarm Optimization Feature Selection",
        text2:
          "Particle Swarm Optimization was inspired by the observation that the actions of some moving animals in the herd, such as finding food, affect other individuals in the herd, and the herd more easily achieves its purpose. Kennedy and Dr. It is an optimization algorithm developed by Eberhart in 1995.",
        text3:
          "Classification problems often have a large number of features in the data sets, but not all of them are useful for classification. Irrelevant and redundant features may even reduce the performance. Feature selection aims to choose a small number of relevant features to achieve similar or even better classification performance than using all features.",
      };
      break;
  }

  return lng;
}

function langChange(params) {
  if (params == "en") {
    document.getElementById(params).style.pointerEvents = "none";
    document.getElementById(params).style.opacity = "0.4";
    document.getElementById("tr").style.pointerEvents = "auto";
    document.getElementById("tr").style.opacity = "1";
  } else {
    document.getElementById(params).style.pointerEvents = "none";
    document.getElementById(params).style.opacity = "0.4";
    document.getElementById("en").style.pointerEvents = "auto";
    document.getElementById("en").style.opacity = "1";
  }

  // document.getElementById(lang().lang + "Mobile").style.pointerEvents = "none";
  // document.getElementById(lang().lang + "Mobile").style.opacity = "0.4";
  document.getElementById("homeMenu").innerHTML = lang(params).home;
  document.getElementById("aboutMenu").innerHTML = lang(params).aboutUs;
  document.getElementById("text1").innerHTML = lang(params).text1;
  document.getElementById("upload").innerHTML = lang(params).upload;
  document.getElementById("start").innerHTML = lang(params).start;
  //document.getElementById("text2").innerHTML = lang().text2;
  //document.getElementById("text3").innerHTML = lang().text3;
  //document.getElementById("terminology").innerHTML = lang().terminology;
  //document.getElementById("terminology2").innerHTML = lang().terminology;
  //document.getElementById("featureSelection").innerHTML = lang().featureSelection;
  //document.getElementById("title").innerHTML = lang().title;
  document.getElementById("datasetDesct").innerHTML = lang(params).datasetDesct;
  document.getElementById("datasetName").innerHTML = lang(params).datasetName;
  document.getElementById("datasetSize").innerHTML = lang(params).datasetSize;
  document.getElementById("psoForSetting").innerHTML =
    lang(params).psoForSetting;
  document.getElementById("particleNum").innerHTML = lang(params).particleNum;
  document.getElementById("psoIteartion").innerHTML = lang(params).psoIteartion;
  document.getElementById("classfier").innerHTML = lang(params).classfier;
  document.getElementById("runPso").innerHTML = lang(params).runPso;
  document.getElementById("featureBar").innerHTML = lang(params).featureBar;
  document.getElementById("download").innerHTML = lang(params).download;
  document.getElementById("title").innerHTML = lang(params).title;
  document.getElementById("text2").innerHTML = lang(params).text2;
  document.getElementById("text3").innerHTML = lang(params).text3;
}

langChange("en");
