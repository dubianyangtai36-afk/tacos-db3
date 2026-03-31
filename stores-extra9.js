// stores-extra9.js — 未カバー県＋低カバー県の新規店舗データ (2026-03)
// 石川・福井・滋賀・徳島・青森・秋田・群馬・岐阜・広島・香川・宮崎・鹿児島
(function(){
  var newStores = [
    // === 石川県 (0→2) ===
    {
      id:401, name:"マルガリータ", area:"石川", neighborhood:"金沢・武蔵",
      style:"メキシカンバル", price:"¥1,000〜3,000",
      address:"石川県金沢市武蔵町13-29 2F",
      hours:"17:00〜24:00", closed:"不定休",
      score:78, reviews:85,
      tags:["タコス","テキーラ","肉料理"],
      lat:36.5718, lng:136.6565,
      emoji:"🌮"
    },
    {
      id:402, name:"金沢タコス", area:"石川", neighborhood:"金沢・片町",
      style:"キッチンカー", price:"¥500〜1,000",
      address:"石川県金沢市柿木畠4-14 栗原ビル5F",
      hours:"不定（SNS確認）", closed:"不定休",
      score:0, reviews:0,
      tags:["タコス","テイクアウト","UberEats"],
      lat:36.5612, lng:136.6538,
      emoji:"🚚"
    },

    // === 福井県 (0→2) ===
    {
      id:403, name:"タコブリス TACO BRRISU", area:"福井", neighborhood:"福井・順化",
      style:"タコス専門店", price:"¥500〜1,500",
      address:"福井県福井市順化2-25-7",
      hours:"16:00〜23:00", closed:"不定休",
      score:72, reviews:30,
      tags:["タコス","ブリトー","UberEats"],
      lat:36.0631, lng:136.2168,
      emoji:"🌮"
    },
    {
      id:404, name:"カラベラタコス", area:"福井", neighborhood:"福井市",
      style:"本格メキシカン", price:"¥800〜1,500",
      address:"福井県福井市（ポップアップ出店）",
      hours:"イベント時", closed:"不定",
      score:0, reviews:0,
      tags:["タコス","ポップアップ","本格派"],
      lat:36.0652, lng:136.2230,
      emoji:"💀"
    },

    // === 滋賀県 (0→1) ===
    {
      id:405, name:"Taqueria Chara", area:"滋賀", neighborhood:"草津",
      style:"タコス専門店", price:"¥800〜1,500",
      address:"滋賀県草津市追分南4-2-3 かがやきテラス2F",
      hours:"11:30〜14:30 / 17:00〜21:30", closed:"日曜・月曜",
      score:75, reviews:20,
      tags:["タコス","ブリトー","メキシカン"],
      lat:35.0013, lng:135.9408,
      emoji:"🌮"
    },

    // === 徳島県 (0→1) ===
    {
      id:406, name:"Karlito's BB MEX", area:"徳島", neighborhood:"徳島市・秋田町",
      style:"メキシカンバー", price:"¥1,000〜3,000",
      address:"徳島県徳島市秋田町1丁目",
      hours:"18:00〜翌2:00", closed:"火曜",
      score:73, reviews:35,
      tags:["タコス","テキーラ","クラフトビール"],
      lat:34.0717, lng:134.5544,
      emoji:"🍺"
    },

    // === 青森県 (+2) ===
    {
      id:407, name:"CASAMASA", area:"青森", neighborhood:"青森市",
      style:"タコス専門店", price:"¥1,000〜1,500",
      address:"青森県青森市新町1丁目",
      hours:"11:00〜20:00", closed:"不定休",
      score:0, reviews:0,
      tags:["カルニタス","スアデロ","本格タコス"],
      lat:40.8244, lng:140.7390,
      emoji:"🌮"
    },
    {
      id:408, name:"メキシコ食堂 トレス", area:"青森", neighborhood:"青森市・新町",
      style:"創作メキシカン", price:"¥800〜2,000",
      address:"青森県青森市新町1-8-5",
      hours:"11:30〜14:00 / 17:00〜22:30", closed:"不定休",
      score:70, reviews:25,
      tags:["自家製サルサ","新鮮野菜","メキシコ料理"],
      lat:40.8251, lng:140.7380,
      emoji:"🇲🇽"
    },

    // === 秋田県 (+1) ===
    {
      id:409, name:"テキーラバー サントール", area:"秋田", neighborhood:"秋田市",
      style:"テクスメキス", price:"¥1,000〜3,000",
      address:"秋田県秋田市（有楽町エリア）",
      hours:"18:00〜翌1:00", closed:"不定休",
      score:72, reviews:20,
      tags:["テキーラ","タコス","テクスメキス"],
      lat:39.7200, lng:140.1024,
      emoji:"🥃"
    },

    // === 群馬県 (+2) ===
    {
      id:410, name:"Pitch ピッチ", area:"群馬", neighborhood:"高崎",
      style:"メキシカンビストロ", price:"¥1,000〜3,000",
      address:"群馬県高崎市旭町33 NODE33 2F",
      hours:"月-金17:00〜26:00 / 土12:00〜26:00 / 日12:00〜24:00", closed:"なし",
      score:74, reviews:40,
      tags:["タコス","ブリトー","オールユーキャンドリンク"],
      lat:36.3226, lng:139.0123,
      emoji:"🌮"
    },
    {
      id:411, name:"BORDE ボルデ", area:"群馬", neighborhood:"前橋",
      style:"中南米レストラン", price:"¥1,000〜2,500",
      address:"群馬県前橋市千代田町",
      hours:"11:30〜14:00 / 17:30〜22:00", closed:"月曜",
      score:71, reviews:15,
      tags:["中南米料理","タコス","ワイン"],
      lat:36.3893, lng:139.0631,
      emoji:"🇲🇽"
    },

    // === 岐阜県 (+2) ===
    {
      id:412, name:"GOLDEN CHICKEN", area:"岐阜", neighborhood:"岐阜市",
      style:"メキシカン酒場", price:"¥1,000〜2,500",
      address:"岐阜県岐阜市県町1-5-2",
      hours:"11:30〜22:00", closed:"火曜・第1/3月曜",
      score:76, reviews:50,
      tags:["ローストチキン","タコス","メキシカンビール"],
      lat:35.4218, lng:136.7603,
      emoji:"🍗"
    },
    {
      id:413, name:"ニューエルパソ", area:"岐阜", neighborhood:"岐阜市",
      style:"メキシカンダイニング", price:"¥1,000〜2,500",
      address:"岐阜県岐阜市神田町",
      hours:"17:00〜24:00", closed:"不定休",
      score:70, reviews:30,
      tags:["タコス","ダイニングバー","テキーラ"],
      lat:35.4194, lng:136.7565,
      emoji:"🌮"
    },

    // === 広島県 (+2) ===
    {
      id:414, name:"Comer Mucho", area:"広島", neighborhood:"広島市・宇品",
      style:"本格メキシカン", price:"¥1,000〜3,000",
      address:"広島眎広島市南区宇品西6-2-4",
      hours:"17:00〜22:00（日曜12:00〜14:30も）", closed:"木曜",
      score:88, reviews:120,
      tags:["全国3位","メキシコ大使館公認","本格タコス"],
      lat:34.3648, lng:132.4472,
      emoji:"🏆"
    },
    {
      id:415, name:"Cafe Latino カフェラティーノ", area:"広島", neighborhood:"広島市・流川",
      style:"メキシカンカフェ", price:"¥800〜2,000",
      address:"広島眎広島市中区流川町",
      hours:"18:00〜翌3:00", closed:"不定休",
      score:70, reviews:25,
      tags:["タコス","カフェ","ラテン"],
      lat:34.3918, lng:132.4630,
      emoji:"☕"
    },

    // === 香川県 (+2) ===
    {
      id:416, name:"HÉROES TACOS COCINA", area:"香川", neighborhood:"高松・仏生山",
      style:"タコス専門店", price:"¥800〜2,000",
      address:"香川県高松市出作町625-5",
      hours:"10:00〜22:00", closed:"不定休",
      score:77, reviews:30,
      tags:["本場メキシコ","骨付き鶏タコス","専門店"],
      lat:34.2896, lng:134.0208,
      emoji:"🌮"
    },
    {
      id:417, name:"トランキーロタコス 父母ヶ浜店", area:"香川", neighborhood:"三豊",
      style:"タコス専門店", price:"¥700〜1,500",
      address:"香川県三豊市仁尾町仁尾乙266-15",
      hours:"11:00〜日没", closed:"不定休",
      score:75, reviews:20,
      tags:["板前プロデュース","海辺","父母ヶ浜"],
      lat:34.1736, lng:133.6705,
      emoji:"🏖️"
    },

    // === 宮崎県 (+1) ===
    {
      id:418, name:"SANBARCO", area:"宮崎", neighborhood:"宮崎市・青島",
      style:"タコス＆ワイン", price:"¥1,000〜3,000",
      address:"宮崎県宮崎市青島2-8-11",
      hours:"12:00〜15:00 / 18:00〜21:00", closed:"水曜・木曜",
      score:85, reviews:90,
      tags:["本格タコス","ナチュラルワイン","中目黒進出"],
      lat:31.8017, lng:131.4697,
      emoji:"🌊"
    },

    // === 鹿児島県 (+1) ===
    {
      id:419, name:"La quinua ラ・キヌア", area:"鹿児島", neighborhood:"鹿児島市・天文館",
      style:"メキシコ＆ペルー", price:"¥800〜2,500",
      address:"鹿児島県鹿児島市中町8-9 サイノビル1F",
      hours:"11:30〜14:30 / 17:30〜21:30", closed:"月曜・火曜",
      score:76, reviews:45,
      tags:["キヌア","タコス","ペルー料理"],
      lat:31.5889, lng:130.5575,
      emoji:"🌿"
    }
  ];

  // Merge with existing stores
  if(!window.stores) window.stores = [];
  window.stores = window.stores.concat(newStores);
  console.log('stores-extra9: added ' + newStores.length + ' stores from underserved prefectures');
})();
