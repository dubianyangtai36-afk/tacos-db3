(function(){
  'use strict';

  // Seeded random number generator for consistent, reproducible positioning
  function seededRandom(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  // Add small random offset based on store ID to prevent marker stacking
  function addOffset(lat, lng, storeId) {
    var offsetRange = 0.002;
    var seed1 = storeId * 2;
    var seed2 = storeId * 3;
    var latOffset = (seededRandom(seed1) - 0.5) * offsetRange;
    var lngOffset = (seededRandom(seed2) - 0.5) * offsetRange;
    return [lat + latOffset, lng + lngOffset];
  }

  // Comprehensive prefecture-level coordinates
  var prefectures = {
    '東京': [35.6762, 139.6503],
    '北海道': [43.2642, 141.3469],
    '青森': [40.8244, 140.7404],
    '岩手': [39.7045, 141.1528],
    '宮城': [38.2688, 140.8721],
    '秋田': [39.5186, 140.1126],
    '山形': [38.2405, 140.3633],
    '福島': [37.7500, 140.4667],
    '茨城': [36.3426, 140.4470],
    '栃木': [36.5653, 139.8804],
    '群馬': [36.3908, 139.0608],
    '埼玉': [35.8617, 139.6455],
    '千葉': [35.6050, 140.1233],
    '神奈川': [35.4437, 139.6380],
    '新潟': [37.9250, 139.0329],
    '富山': [36.6955, 137.2113],
    '石川': [36.5944, 136.6256],
    '福井': [36.0644, 136.2202],
    '山梨': [35.6640, 138.5674],
    '長野': [36.6816, 138.1821],
    '岐阜': [35.4437, 136.7613],
    '静岡': [34.9949, 138.3830],
    '愛知': [35.1815, 136.9066],
    '三重': [34.5904, 136.2088],
    '滋賀': [35.0081, 135.8677],
    '京都': [35.0116, 135.7681],
    '大阪': [34.6937, 135.5023],
    '兵庫': [34.6901, 135.1955],
    '奈良': [34.3488, 135.8048],
    '和歌山': [34.2265, 135.1670],
    '鳥取': [35.4437, 134.2387],
    '島根': [35.4728, 132.5501],
    '岡山': [34.6550, 133.9199],
    '広島': [34.3853, 132.4553],
    '山口': [34.1858, 131.4709],
    '徳島': [34.0659, 134.5596],
    '香川': [34.3397, 134.0432],
    '愛媛': [33.8406, 132.7654],
    '高知': [33.5904, 133.3331],
    '福岡': [33.5904, 130.4017],
    '佐賀': [33.2490, 130.2996],
    '長崎': [32.7503, 129.8785],
    '熊本': [32.7898, 130.7418],
    '大分': [33.2381, 131.6126],
    '宮崎': [31.9111, 131.4239],
    '鹿児島': [31.5969, 130.5579],
    '沖縄': [26.2128, 127.6798]
  };

  // Tokyo wards (23 special wards)
  var tokyoWards = {
    '世田谷区': [35.6461, 139.6532],
    '品川区': [35.6090, 139.7300],
    '中野区': [35.7050, 139.6658],
    '千代田区': [35.6895, 139.7514],
    '渋谷区': [35.6595, 139.7004],
    '新宿区': [35.6895, 139.7033],
    '港区': [35.6261, 139.7383],
    '目黒区': [35.6450, 139.7159],
    '杉並区': [35.7000, 139.6278],
    '豊島区': [35.7368, 139.7406],
    '文京区': [35.7127, 139.7641],
    '台東区': [35.7150, 139.7769],
    '墨田区': [35.7298, 139.8087],
    '江東区': [35.6684, 139.8082],
    '練馬区': [35.7378, 139.5839],
    '板橋区': [35.7736, 139.7072],
    '足立区': [35.7807, 139.8133],
    '中央区': [35.6711, 139.7756],
    '北区': [35.7639, 139.7298],
    '荒川区': [35.7496, 139.8056],
    '大田区': [35.5686, 139.7311],
    '葛飾区': [35.7423, 139.8546],
    '江戸川区': [35.7305, 139.8964]
  };

  // Tokyo neighborhoods and landmarks
  var tokyoNeighborhoods = {
    '三軒茶屋': [35.6437, 139.6715],
    '池袋': [35.7295, 139.7109],
    '新宿': [35.6895, 139.7033],
    '渋谷': [35.6595, 139.7004],
    '下北沢': [35.6593, 139.6685],
    '吉祥寺': [35.7014, 139.5754],
    '恵比寿': [35.6461, 139.7193],
    '六本木': [35.6627, 139.7299],
    '銀座': [35.6724, 139.7706],
    '秋葉原': [35.6981, 139.7714],
    '浅草': [35.7149, 139.7960],
    '上野': [35.7149, 139.7744],
    '原宿': [35.6705, 139.7010],
    '表参道': [35.6650, 139.7242],
    '代官山': [35.6483, 139.6979],
    '中目黒': [35.6451, 139.7097],
    '自由が丘': [35.6269, 139.6904],
    '二子玉川': [35.6113, 139.6209],
    '赤坂': [35.6748, 139.7347],
    '丸の内': [35.6787, 139.7671],
    '大手町': [35.6852, 139.7728],
    '品川': [35.6286, 139.7393],
    '高輪': [35.6277, 139.7436],
    '歌舞伎町': [35.6929, 139.7045],
    '四谷': [35.6868, 139.7253],
    '新宿御苑': [35.6829, 139.7107],
    '北千住': [35.7480, 139.8114],
    '上板橋': [35.7723, 139.6988],
    '志村坂上': [35.7755, 139.7053],
    '田原町': [35.7156, 139.8022]
  };

  // Osaka wards
  var osakaWards = {
    '中央区': [34.6765, 135.5048],
    '北区': [34.6920, 135.5069],
    '浪速区': [34.6576, 135.4960],
    '天王寺区': [34.6473, 135.5122],
    '西区': [34.6735, 135.4896],
    '福島区': [34.7009, 135.4807],
    '阿倍野区': [34.6052, 135.5152],
    '住吉区': [34.5803, 135.5327],
    '東成区': [34.6741, 135.5517],
    '生野区': [34.6833, 135.5634],
    '旭区': [34.6975, 135.5752],
    '城東区': [34.6903, 135.5765],
    '都島区': [34.7126, 135.5289],
    '鶴見区': [34.7055, 135.5516],
    '住之江区': [34.5996, 135.4758],
    '平野区': [34.5576, 135.5355],
    '西成区': [34.6327, 135.4674]
  };

  // Osaka neighborhoods
  var osakaNeighborhoods = {
    '梅田': [34.7024, 135.4955],
    '難波': [34.6654, 135.5009],
    '心斎橋': [34.6705, 135.4971],
    '淀屋橋': [34.6800, 135.5027],
    '北浜': [34.6825, 135.5097],
    '天王寺': [34.6473, 135.5122],
    '阿倍野': [34.6052, 135.5152],
    '長堀橋': [34.6627, 135.5038],
    '鶴橋': [34.6741, 135.5368],
    '京橋': [34.6829, 135.5448],
    '野田': [34.7062, 135.4737],
    'ユニバーサルシティ': [34.6643, 135.4339],
    '三国': [34.7332, 135.5147],
    '江坂': [34.7403, 135.5127]
  };

  // Fukuoka neighborhoods
  var fukuokaNeighborhoods = {
    '天神': [33.5904, 130.4017],
    '博多': [33.5904, 130.4202],
    'キャナルシティ': [33.5931, 130.4101],
    '大濠': [33.5902, 130.3830],
    '薬院': [33.5775, 130.3926],
    '平尾': [33.5649, 130.3820],
    'サンプラザ': [33.5904, 130.4017],
    '西新': [33.5710, 130.3473]
  };

  // Kyoto neighborhoods
  var kyotoNeighborhoods = {
    '祇園': [35.0044, 135.7754],
    '四条河原町': [35.0057, 135.7681],
    '烏丸': [35.0116, 135.7681],
    '伏見稲荷': [34.8669, 135.7530],
    '清水寺': [34.9948, 135.7849],
    '南禅寺': [35.0115, 135.7903],
    '嵐山': [35.0160, 135.6760],
    '西院': [35.0192, 135.7223]
  };

  // Sapporo neighborhoods
  var sapporoNeighborhoods = {
    '大通': [43.0642, 141.3469],
    '札幌駅': [43.0689, 141.3503],
    'すすきの': [43.0273, 141.3546],
    '時計台': [43.0642, 141.3532],
    '円山': [43.0688, 141.2961],
    'マリーナ': [43.0547, 141.3713],
    '中の島': [43.0296, 141.3367]
  };

  // Naha neighborhoods
  var nahaNeighborhoods = {
    '那覇市': [26.2128, 127.6798],
    '久茂地': [26.2100, 127.6834],
    '牧志': [26.2134, 127.6874],
    '国際通り': [26.2085, 127.6806],
    '首里': [26.2166, 127.7181]
  };

  // Hiroshima neighborhoods
  var hiroshimaNeighborhoods = {
    '中区': [34.3853, 132.4553],
    '八丁堀': [34.3953, 132.4565],
    '広島駅': [34.3726, 132.4727],
    '胡町': [34.3920, 132.4610]
  };

  // Nagoya neighborhoods
  var nagoyaNeighborhoods = {
    '中村区': [35.1815, 136.8980],
    '中区': [35.1815, 136.9066],
    '栄': [35.1748, 136.9018],
    '金山': [35.1364, 136.9176],
    '名古屋駅': [35.1815, 136.8980]
  };

  // Yokohama neighborhoods
  var yokohamaNeighborhoods = {
    '西区': [35.4437, 139.6233],
    '中区': [35.4437, 139.6380],
    '横浜駅': [35.4437, 139.6233],
    'みなとみらい': [35.4472, 139.6301],
    '桜木町': [35.4467, 139.6331]
  };

  // Kobe neighborhoods
  var kobeNeighborhoods = {
    '中央区': [34.6901, 135.1955],
    'モトマチ': [34.6901, 135.1955],
    '元町': [34.6901, 135.1955],
    '三宮': [34.6905, 135.1909],
    '神戸駅': [34.6779, 135.1817]
  };

  // Sendai neighborhoods
  var sendaiNeighborhoods = {
    '青葉区': [38.2688, 140.8721],
    '仙台駅': [38.2700, 140.8726],
    '一番町': [38.2700, 140.8721],
    '定禅寺通': [38.2688, 140.8721]
  };

  // Complete coordinate lookup combining all sources
  function getCoordinates(store) {
    var address = store.address || '';
    var neighborhood = store.neighborhood || '';
    var area = store.area || '';

    // Check Tokyo ward coordinates (highest priority for Tokyo)
    if (area === '東京') {
      for (var ward in tokyoWards) {
        if (address.includes(ward) || neighborhood.includes(ward)) {
          return tokyoWards[ward];
        }
      }
      // Check Tokyo neighborhoods
      for (var tokyoNeighborhood in tokyoNeighborhoods) {
        if (address.includes(tokyoNeighborhood) || neighborhood.includes(tokyoNeighborhood)) {
          return tokyoNeighborhoods[tokyoNeighborhood];
        }
      }
    }

    // Check Osaka wards
    if (area === '大阪') {
      for (var osakaWard in osakaWards) {
        if (address.includes(osakaWard) || neighborhood.includes(osakaWard)) {
          return osakaWards[osakaWard];
        }
      }
      // Check Osaka neighborhoods
      for (var osakaNeighborhood in osakaNeighborhoods) {
        if (address.includes(osakaNeighborhood) || neighborhood.includes(osakaNeighborhood)) {
          return osakaNeighborhoods[osakaNeighborhood];
        }
      }
    }

    // Check Fukuoka neighborhoods
    if (area === '福岡') {
      for (var fukuokaNeighborhood in fukuokaNeighborhoods) {
        if (address.includes(fukuokaNeighborhood) || neighborhood.includes(fukuokaNeighborhood)) {
          return fukuokaNeighborhoods[fukuokaNeighborhood];
        }
      }
    }

    // Check Kyoto neighborhoods
    if (area === '京都') {
      for (var kyotoNeighborhood in kyotoNeighborhoods) {
        if (address.includes(kyotoNeighborhood) || neighborhood.includes(kyotoNeighborhood)) {
          return kyotoNeighborhoods[kyotoNeighborhood];
        }
      }
    }

    // Check Sapporo neighborhoods (北海道)
    if (area === '北海道') {
      for (var sapporoNeighborhood in sapporoNeighborhoods) {
        if (address.includes(sapporoNeighborhood) || neighborhood.includes(sapporoNeighborhood)) {
          return sapporoNeighborhoods[sapporoNeighborhood];
        }
      }
    }

    // Check Naha neighborhoods (沖縄)
    if (area === '沖縄') {
      for (var nahaNeighborhood in nahaNeighborhoods) {
        if (address.includes(nahaNeighborhood) || neighborhood.includes(nahaNeighborhood)) {
          return nahaNeighborhoods[nahaNeighborhood];
        }
      }
    }

    // Check Hiroshima neighborhoods
    if (area === '広島') {
      for (var hiroshimaNeighborhood in hiroshimaNeighborhoods) {
        if (address.includes(hiroshimaNeighborhood) || neighborhood.includes(hiroshimaNeighborhood)) {
          return hiroshimaNeighborhoods[hiroshimaNeighborhood];
        }
      }
    }

    // Check Nagoya neighborhoods (愛知)
    if (area === '愛知' || area === '名古屋') {
      for (var nagoyaNeighborhood in nagoyaNeighborhoods) {
        if (address.includes(nagoyaNeighborhood) || neighborhood.includes(nagoyaNeighborhood)) {
          return nagoyaNeighborhoods[nagoyaNeighborhood];
        }
      }
    }

    // Check Yokohama neighborhoods (神奈川)
    if (area === '神奈川') {
      for (var yokohamaNeighborhood in yokohamaNeighborhoods) {
        if (address.includes(yokohamaNeighborhood) || neighborhood.includes(yokohamaNeighborhood)) {
          return yokohamaNeighborhoods[yokohamaNeighborhood];
        }
      }
    }

    // Check Kobe neighborhoods (兵庫)
    if (area === '兵庫') {
      for (var kobeNeighborhood in kobeNeighborhoods) {
        if (address.includes(kobeNeighborhood) || neighborhood.includes(kobeNeighborhood)) {
          return kobeNeighborhoods[kobeNeighborhood];
        }
      }
    }

    // Check Sendai neighborhoods (宮城)
    if (area === '宮城') {
      for (var sendaiNeighborhood in sendaiNeighborhoods) {
        if (address.includes(sendaiNeighborhood) || neighborhood.includes(sendaiNeighborhood)) {
          return sendaiNeighborhoods[sendaiNeighborhood];
        }
      }
    }

    // Fallback to prefecture-level coordinates
    if (prefectures[area]) {
      return prefectures[area];
    }

    // Final fallback to Tokyo center if all else fails
    return [35.6762, 139.6503];
  }

  // Apply coordinates to all stores
  if (window.stores && Array.isArray(window.stores)) {
    window.stores.forEach(function(store) {
      var baseCoords = getCoordinates(store);
      var offsetCoords = addOffset(baseCoords[0], baseCoords[1], store.id || 0);
      store.lat = offsetCoords[0];
      store.lng = offsetCoords[1];
    });
  }

  // Signal completion
  window.storesCoordsReady = true;
  if (typeof window.onCoordsReady === 'function') {
    window.onCoordsReady();
  }

})();
