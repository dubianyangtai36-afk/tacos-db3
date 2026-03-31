(function(){
if(!window.stores) return;

// stores-fixes2.js - Remove fake stores + fix verified store data

// 1. Remove fake/unverifiable store IDs
var removeIds = [
  58, 59, 61, 62,
  67, 68, 69, 70, 71, 72, 73, 74,
  76, 77, 78, 79, 80, 81, 82, 83, 84,
  87, 88, 89, 91, 92, 93, 94, 95,
  96, 97, 98, 99, 101, 102, 103, 104, 105, 106, 107, 108, 109,
  110, 111, 112, 113, 114,
  115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,
  131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,
  147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,
  163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,
  179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,
  195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,
  211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,
  227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,
  243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,
  259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,
  275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,
  291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,
  307,308,309,310,311,312,313,314,315,316,317,318,319,320,321
];

var removeSet = {};
removeIds.forEach(function(id){ removeSet[id] = true; });
window.stores = window.stores.filter(function(s){ return !removeSet[s.id]; });

// 2. Fix verified store data
var fixes = {
  60: {
    name: "琉球多幸寿 福岡店",
    address: "福岡県福岡市中央区舞鶴 1-2-33",
    hours: "12:00〜14:00 / 17:00〜22:00（L.O. 21:30）",
    closed: "月曜日"
  },
  63: {
    address: "兵庫県神戸市中央区元町通2-9-1 元町プラザビル1F"
  },
  64: {
    address: "宮城県仙台市青葉区木町通2-4-34 TKビル1F",
    hours: "11:00〜15:00 / 17:00〜22:00（L.O. 21:30）",
    closed: "月曜日"
  },
  65: {
    address: "東京都渋谷区道玄坂2-25-14 カネダイビル1F",
    hours: "平日 11:00〜23:00 / 土日祝 10:00〜23:00",
    closed: "年中無休"
  },
  75: {
    name: "EL PANCHO 心斉橋店",
    area: "大阪",
    neighborhood: "中央区心斉橋",
    address: "大阪府大阪市中央区心斉橋筋1-10-1 心斉橋タワービル8F",
    hours: "11:30〜23:00",
    closed: "年中無休"
  },
  85: {
    address: "愛知県名古屋市中区大須3-33-24",
    hours: "11:00〜23:00",
    closed: "年中無休"
  },
  86: {
    address: "愛知県名古屋市中区梄3-1-22 3F",
    hours: "11:00〜23:00",
    closed: "年中無休"
  }
};

window.stores.forEach(function(s){
  if(fixes[s.id]){
    var f = fixes[s.id];
    if(f.name) s.name = f.name;
    if(f.area) s.area = f.area;
    if(f.neighborhood) s.neighborhood = f.neighborhood;
    if(f.address) s.address = f.address;
    if(f.hours) s.hours = f.hours;
    if(f.closed) s.closed = f.closed;
  }
});

// 3. Remove duplicates (ID 100 = same as ID 60, ID 90 = same as ID 64)
window.stores = window.stores.filter(function(s){ return s.id !== 100 && s.id !== 90; });

})();
