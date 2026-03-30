(function(){
if(!window.stores) return;
var removeIds = [397, 398, 452, 459, 462];
var fixes = {
  408: { neighborhood: "各務原市" },
  415: { area: "島根", neighborhood: "松江市殿町" },
  455: { area: "大阪", neighborhood: "中央区心斉橋" },
  458: { area: "東京", neighborhood: "日野市" },
  460: { area: "大分", neighborhood: "大分市府内町" },
  461: { area: "高知", neighborhood: "高知市はりまや町" }
};
window.stores = window.stores.filter(function(s) {
  return removeIds.indexOf(s.id) === -1;
});
window.stores.forEach(function(s) {
  if (fixes[s.id]) {
    var f = fixes[s.id];
    if (f.area) s.area = f.area;
    if (f.neighborhood) s.neighborhood = f.neighborhood;
  }
});
})();
