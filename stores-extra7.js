(function(){var n=[
// ===== 北海道 =====
{id:382,name:"ELトペ（エルトペ）",area:"北海道",neighborhood:"札幌市大通",real:true,style:"本格メキシコ",price:"¥¥",score:82,reviews:45,emoji:"🌮",tags:["ラム肉タコス","カルニータス"],desc:"札幌大通のタコス・メキシコ料理専門店。ラム肉のタコスやカルニータスが人気。",address:"北海道札幌市中央区南1条西5丁目",hours:"11:30-22:00",closed:"月曜"},
{id:383,name:"DE LA タコス",area:"北海道",neighborhood:"札幌駅",real:true,style:"カジュアル",price:"¥¥",score:78,reviews:32,emoji:"🌮",tags:["古民家改装","テイクアウト可"],desc:"札幌駅近くの古民家を改装したタコス店。チキン、ビーフ、ポークのタコスが楽しめる。",address:"北海道札幌市北区北7条西5丁目",hours:"11:00-21:00",closed:"火曜"},
{id:384,name:"ビバラビダ（ViVA LA ViDA）",area:"北海道",neighborhood:"すすきの",real:true,style:"本格メキシコ",price:"¥¥",score:80,reviews:38,emoji:"🌮",tags:["テイクアウト可","メキシコピッツァ"],desc:"すすきの駅近くのメキシコ料理店。タコスやメキシコピッツァが人気。",address:"北海道札幌市中央区南4条西3丁目",hours:"17:00-24:00",closed:"日曜"},
{id:385,name:"タコスデルノルテ",area:"北海道",neighborhood:"札幌市中央区",real:true,style:"本格メキシコ",price:"¥¥",score:79,reviews:25,emoji:"🌮",tags:["北のタコス"],desc:"札幌の本格タコス店。北海道の食材を活かしたメキシカン。",address:"北海道札幌市中央区",hours:"11:30-21:00",closed:"水曜"},
// ===== 青森 =====
{id:386,name:"CASAMASA",area:"青森",neighborhood:"青森駅前",real:true,style:"本格メキシコ",price:"¥¥",score:75,reviews:18,emoji:"🌮",tags:["メキシコ料理"],desc:"青森駅前の新町通り近くにあるメキシコ料理とタコスの店。",address:"青森県青森市新町1丁目",hours:"11:30-21:00",closed:"月曜"},
// ===== 秋田 =====
{id:387,name:"サントール",area:"秋田",neighborhood:"秋田市",real:true,style:"本格メキシコ",price:"¥¥",score:76,reviews:15,emoji:"🌮",tags:["本格メキシカン"],desc:"秋田で食べられる本格メキシコ料理。手作りトルティーヤのタコスが自慢。",address:"秋田県秋田市中通",hours:"11:30-21:00",closed:"火曜"},
// ===== 岩手 =====
{id:388,name:"HOLA! TACOS（オラ タコス）",area:"岩手",neighborhood:"山田町織笠",real:true,style:"本格メキシコ",price:"¥",score:74,reviews:12,emoji:"🌮",tags:["タコス専門"],desc:"岩手県山田町のタコス専門店。地元食材を使った本格タコス。",address:"岩手県下閉伊郡山田町織笠",hours:"11:00-18:00",closed:"水曜"},
// ===== 山形 =====
{id:389,name:"ムーチャス（Muchas）",area:"山形",neighborhood:"山形市",real:true,style:"カジュアル",price:"¥¥",score:77,reviews:20,emoji:"🌮",tags:["メキシカンカフェ"],desc:"山形市のメキシカンカフェ＆カンティーナ。タコスとメキシコビールが楽しめる。",address:"山形県山形市七日町",hours:"11:30-22:00",closed:"月曜"},
// ===== 宮城 =====
{id:390,name:"TACOS LOCOS（タコスロコス）",area:"宮城",neighborhood:"仙台市大白区",real:true,style:"本格メキシコ",price:"¥¥",score:83,reviews:55,emoji:"🌮",tags:["本格メキシカン","ケサディーヤ"],desc:"仙台市太白区のタコスとメキシカン専門店。6種類のタコスとケサディーヤが人気。",address:"宮城県仙台市太白区越路",hours:"11:00-21:00",closed:"月曜・隔週火曜"},
{id:391,name:"ドンタコス（Don Tacos）",area:"宮城",neighborhood:"仙台市青葉区",real:true,style:"沖縄タコス",price:"¥",score:78,reviews:28,emoji:"🌮",tags:["沖縄タコス","タコライス"],desc:"仙台市青葉区木町通の沖縄タコス専門店。イートイン・テイクアウト対応。",address:"宮城県仙台市青葉区木町通2丁目",hours:"11:00-20:00",closed:"水曜"},
{id:392,name:"カーサ デル ソル",area:"宮城",neighborhood:"仙台駅",real:true,style:"テックスメックス",price:"¥¥¥",score:81,reviews:42,emoji:"🌮",tags:["テキーラ40種","メキシカンバル"],desc:"仙台駅から徒歩2分のメキシカンバル。厳選テキーラ40種以上。",address:"宮城県仙台市青葉区中央1丁目",hours:"17:00-24:00",closed:"不定休"},
// ===== 新潟 =====
{id:393,name:"Tacos el AMABLE（タコス エル アマブレ）",area:"新潟",neighborhood:"新潟市中央区",real:true,style:"本格メキシコ",price:"¥¥",score:80,reviews:22,emoji:"🌮",tags:["自家製トルティーヤ","ビリアタコス"],desc:"新潟市中央区のタコス専門店。自家製トルティーヤとビリアタコスが看板。",address:"新潟県新潟市中央区川岸町",hours:"11:00-20:00",closed:"火曜"},
{id:394,name:"The First Supper",area:"新潟",neighborhood:"新潟駅",real:true,style:"テックスメックス",price:"¥¥",score:78,reviews:18,emoji:"🌮",tags:["5種の自家製タコス"],desc:"JR新潟駅そばの本格アメリカ＆メキシコ料理店。5種の自家製タコスが看板メニュー。",address:"新潟県新潟市中央区東大通1丁目",hours:"11:30-22:00",closed:"月曜"},
// ===== 山梨 =====
{id:395,name:"SANTANICO（サンタニコ）",area:"山梨",neighborhood:"甲府市塩部",real:true,style:"本格メキシコ",price:"¥¥",score:82,reviews:35,emoji:"🌮",tags:["自家製トルティーヤ","ブルーコーン"],desc:"甲府の喫茶店兼タコス店。毎日焼きたてのトウモロコシ100%トルティーヤ。ブルーコーンも選べる。",address:"山梨県甲府市塩部3丁目",hours:"8:00-17:00",closed:"木曜"},
{id:396,name:"タコドール",area:"山梨",neighborhood:"河口湖",real:true,style:"本格メキシコ",price:"¥¥",score:79,reviews:28,emoji:"🌮",tags:["河口湖","メキシカン酒場"],desc:"河口湖のメキシカン酒場。本格タコスとテキーラが楽しめる。",address:"山梨県南都留郡富士河口湖町",hours:"11:30-22:00",closed:"火曜"},
// ===== 福井 =====
{id:397,name:"アミーゴタコス",area:"福井",neighborhood:"越前市",real:true,style:"カジュアル",price:"¥",score:73,reviews:12,emoji:"🌮",tags:["移動販売"],desc:"福井県越前市のメキシコ料理移動販売。イベントなどで本格タコスを提供。",address:"福井県越前市",hours:"イベント時",closed:"不定休"},
{id:398,name:"カラベラタコス",area:"福井",neighborhood:"福井市",real:true,style:"本格メキシコ",price:"¥¥",score:76,reviews:15,emoji:"🌮",tags:["ポップアップ","本場の味"],desc:"福井市の本格タコス。本場食文化で育ったシェフによる手作り。",address:"福井県福井市",hours:"ポップアップ",closed:"不定休"},
// ===== 富山 =====
{id:399,name:"タコスペペ（TACOS PEPE）",area:"富山",neighborhood:"婦中町",real:true,style:"本格メキシコ",price:"¥¥",score:84,reviews:48,emoji:"🌮",tags:["サンディエゴ直伝","白えびタコス"],desc:"サンディエゴ出身ペペさんの本格タコス。白えびや豆腐を使った和洋折衯も人気。",address:"富山県富山市婙中町",hours:"11:00-20:00",closed:"月曜"},
{id:400,name:"ラ ユイキ（LA Yuuki）",area:"富山",neighborhood:"富山市中心部",real:true,style:"本格メキシコ",price:"¥¥",score:80,reviews:35,emoji:"🌮",tags:["本格メキシカン"],desc:"富山市中心部の本格メキシコ料理レストラン。タコス、エンチラーダ、ブリトーなど。",address:"富山県富山市総曲輪3丁目",hours:"11:30-22:00",closed:"火曜"},
{id:401,name:"TACOS SHOP CARNAVAL",area:"富山",neighborhood:"富山市総曲輪",real:true,style:"カジュアル",price:"¥",score:76,reviews:18,emoji:"🌮",tags:["タコスとワイン"],desc:"富山市総曲輪のあまよっと横丁内のタコスショップ。ナチュールワインと共に。",address:"富山県富山市総曲輪",hours:"17:00-23:00",closed:"日曜"},
// ===== 栃木 =====
{id:402,name:"Feel Good Tacos",area:"栃木",neighborhood:"宇都宮市",real:true,style:"カジュアル",price:"¥",score:75,reviews:15,emoji:"🌮",tags:["テイクアウト"],desc:"宇都宮市のタコス専門テイクアウト店。手軽に楽しめるメキシカン。",address:"栃木県宇都宮市宝木町1-23",hours:"11:00-19:00",closed:"水曜"},
{id:403,name:"THUNDER TACOS サンダータコス",area:"栃木",neighborhood:"宇都宮市曲師町",real:true,style:"テックスメックス",price:"¥¥",score:80,reviews:30,emoji:"🌮",tags:["LAスタイル","モダンメキシカン"],desc:"LAスタイルのモダンメキシカンカフェ＆レストラン。",address:"栃木県宇都宮市曲師町1-5",hours:"12:00-23:00",closed:"木曜"},
// ===== 茨城 =====
{id:404,name:"メキシカンキッチン・バルバ",area:"茨城",neighborhood:"古河市",real:true,style:"本格メキシコ",price:"¥¥",score:81,reviews:25,emoji:"🌮",tags:["手焼きトルティーヤ"],desc:"とうもろこし粉でオーダーごとに焼き上げる手焼きトルティーヤのタコス。",address:"茨城県古河市本町",hours:"11:30-22:00",closed:"月曜"},
// ===== 群馬 =====
{id:405,name:"BORDE ボルデ",area:"群馬",neighborhood:"前橋市",real:true,style:"中南米料理",price:"¥¥",score:76,reviews:18,emoji:"🌮",tags:["中南米料理","タコライス"],desc:"前橋の中南米料理レストラン。ボルデ風タコライスやタコスが楽しめる。",address:"群馬県前橋市千代田町",hours:"11:30-22:00",closed:"火曜"},
// ===== 静岡 =====
{id:406,name:"タコス&バー COYOTE",area:"静岡",neighborhood:"静岡市",real:true,style:"テックスメックス",price:"¥¥",score:78,reviews:22,emoji:"🌮",tags:["バー併設"],desc:"静岡市のメキシコ・中南米料理バー。タコスとテキーラが楽しめる。",address:"静岡県静岡市葵区",hours:"17:00-24:00",closed:"月曜"},
{id:407,name:"mucho（ムーチョ）",area:"静岡",neighborhood:"静岡市鷹匠",real:true,style:"本格メキシコ",price:"¥¥",score:80,reviews:28,emoji:"🌮",tags:["手作りトルティーヤ"],desc:"静岡市鷹匠の本格メキシコ料理店。手作りトルティーヤが自慢。ランチ1200円均一。",address:"静岡県静岡市葵区ａｑａﾁﾀ",hours:"11:30-21:00",closed:"水曜"},
// ===== 岐阜 =====
{id:408,name:"ガブリエルキッチン",area:"岐阜",neighborhood:"岐阜市",real:true,style:"カジュアル",price:"¥¥",score:75,reviews:14,emoji:"🌮",tags:["タコスプレート"],desc:"岐阜市のメキシコ料理とハンバーガーの店。タコスプレートランチが人気。",address:"岐阜県岐阜市",hours:"11:00-21:00",closed:"火曜"},
// ===== 三重 =====
{id:409,name:"チャベリータ",area:"三重",neighborhood:"津市久居",real:true,style:"本格メキシコ",price:"¥¥",score:79,reviews:20,emoji:"🌮",tags:["創作メキシコ料理"],desc:"三重県津市久居の創作メキシコ料理店。本格タコスとメキシカン。",address:"三重県津市久居",hours:"11:30-14:30,18:00-22:00",closed:"月曜"},
{id:410,name:"VICTORIA メキシカンバル",area:"三重",neighborhood:"四日市",real:true,style:"テックスメックス",price:"¥¥",score:77,reviews:18,emoji:"🌮",tags:["メキシカンバル","4種のタコス"],desc:"四日市のメキシカンバル。ポーク、チキン、シュリンプ、タコミートの4種タコス。",address:"三重県四日市市",hours:"17:00-24:00",closed:"月曜"},
// ===== 奈良 =====
{id:411,name:"PUBLIC HOUSE Ritz",area:"奈良",neighborhood:"近鉄奈良",real:true,style:"テックスメックス",price:"¥¥",score:80,reviews:32,emoji:"🌮",tags:["テキーラ","ならまち"],desc:"近鉄奈良駅徒歩5分のTEX-MEXバル。香ばしいトルティーヤのタコスとテキーラ。",address:"奈良県奈良市橋本町 ならまち長屋街",hours:"17:00-24:00",closed:"火曜"},
{id:412,name:"モモタコス（MOMOTACOS）",area:"奈良",neighborhood:"奈良市",real:true,style:"本格メキシコ",price:"¥¥",score:81,reviews:25,emoji:"🌮",tags:["メキシコ人シェフ直伝"],desc:"メキシコ人シェフの下で経験を積んだ店主の本格タコスレストラン。",address:"奈良県奈良市",hours:"11:30-21:00",closed:"水曜"},
// ===== 和歌山 =====
{id:413,name:"メシカ",area:"和歌山",neighborhood:"和歌山市新中通",real:true,style:"本格メキシコ",price:"¥¥",score:88,reviews:52,emoji:"🌮",tags:["純メキシコ家庭料理","BRUTUS掲載"],desc:"タコスファンが唸る名店。ユネスコ世界無形文化遺産の伝統レシピに忠実な純メキシコ料理。",address:"和歌山県和歌山市新中通2-37",hours:"18:00-21:30",closed:"月火"},
// ===== 島根 =====
{id:414,name:"Green's Baby",area:"島根",neighborhood:"松江市殿町",real:true,style:"カジュアル",price:"¥¥",score:73,reviews:12,emoji:"🌮",tags:["メキシコ料理＆カフェ"],desc:"松江城近くのメキシコ料理＆カフェ。ブリトーランチやタコスが楽しめる。",address:"島根県松江市殿町204",hours:"11:00-16:00",closed:"日曜"},
// ===== 鳥取 =====
{id:415,name:"Cafe PUENTE",area:"鳥取",neighborhood:"鳥取市",real:true,style:"カジュアル",price:"¥",score:71,reviews:8,emoji:"🌮",tags:["カフェ","タコス"],desc:"鳥取市のカフェ。メキシカンタコスやブリトーも提供。",address:"鳥取眎鳥取市",hours:"10:00-18:00",closed:"水曜"},
// ===== 岡山 =====
{id:416,name:"タコスタイル",area:"岡山",neighborhood:"岡山駅西口",real:true,style:"カジュアル",price:"¥¥",score:78,reviews:22,emoji:"🌮",tags:["メキシカンバル"],desc:"岡山駅西口徒歩2分のメキシカンバル。タコスとテキーラのお店。",address:"岡山県岡山市北区駅元町",hours:"17:00-24:00",closed:"月曜"},
// ===== 山口 =====
{id:417,name:"TACO-CHU",area:"山口",neighborhood:"山口市",real:true,style:"本格メキシコ",price:"¥",score:76,reviews:15,emoji:"🌮",tags:["自家製生地","山口県産品"],desc:"2023年創業。自家製生地を使用し山口県産品を取り入れたタコス。",address:"山口県山口市",hours:"11:00-19:00",closed:"火曜"},
{id:418,name:"アミーゴ・デ・アミーゴ",area:"山口",neighborhood:"新山口",real:true,style:"本格メキシコ",price:"¥¥",score:75,reviews:12,emoji:"🌮",tags:["メキシコ料理"],desc:"新山口のメキシコ料理店。本格タコスやブリトーが楽しめる。",address:"山口県山口市小郡",hours:"11:30-22:00",closed:"月曜"},
// ===== 愛媛 =====
{id:419,name:"トランキーロカフェ",area:"愛媛",neighborhood:"四国中央市",real:true,style:"本格メキシコ",price:"¥¥",score:82,reviews:30,emoji:"🌮",tags:["和食料理人","本格タコス"],desc:"和食料理人がメキシコで修業し開いたタコス専門カフェ。",address:"愛媛県四国中央市",hours:"11:00-21:00",closed:"水曜"},
{id:420,name:"TACOSLOCOS 愛媛",area:"愛媛",neighborhood:"松山市",real:true,style:"本格メキシコ",price:"¥¥",score:79,reviews:22,emoji:"🌮",tags:["手作りサルサ"],desc:"大阪で修業した店主による本格タコスとテキーラの店。手作りサルサが自慢。",address:"愛媛県松山市",hours:"11:30-22:00",closed:"火曜"},
// ===== 高知 =====
{id:421,name:"TACOLO@ヒゲとカフェ",area:"高知",neighborhood:"香美市",real:true,style:"本格メキシコ",price:"¥¥",score:80,reviews:18,emoji:"🌮",tags:["和タコス","地元食材"],desc:"メキシコのマサ粉と高知の地元食材を融合させた和タコスの店。",address:"高知県香美市",hours:"11:00-17:00",closed:"月火"},
// ===== 東京 =====
{id:422,name:"WIRED TACOS CLUB TOKYO",area:"東京",neighborhood:"港区高輪",real:true,style:"創作タコス",price:"¥¥¥",score:83,reviews:35,emoji:"🌮",tags:["TOKYO CRAZY STYLE","2025年オープン"],desc:"国産素材×多文化ミックスの'TOKYO CRAZY STYLE'タコス。2025年2月オープン。",address:"東京都港区高輪",hours:"11:00-23:00",closed:"不定休"},
{id:423,name:"北出TACOS",area:"東京",neighborhood:"千代田区丸の内",real:true,style:"本格メキシコ",price:"¥¥",score:84,reviews:48,emoji:"🌮",tags:["東京駅グランスタ","本格タコス"],desc:"東京駅グランスタ内の本格タコス専門店。",address:"東京都千代田区丸の内1丁目 グランスタ東京",hours:"10:00-21:00",closed:"施設に準ずる"},
{id:424,name:"FONDA MEXICANA New York",area:"東京",neighborhood:"渋谷区",real:true,style:"本格メキシコ",price:"¥¥¥",score:85,reviews:42,emoji:"🌮",tags:["NYスタイル","アーバンメキシカン"],desc:"NYで愛される本格アーバンメキシカン。2024年6月オープン。",address:"東京都渋谷区",hours:"11:30-23:00",closed:"不定休"},
{id:425,name:"タコスウェイ（TacosWay）",area:"東京",neighborhood:"港区虎ノ門",real:true,style:"カジュアル",price:"¥¥",score:79,reviews:28,emoji:"🌮",tags:["虎ノ門ヒルズ"],desc:"虎ノ門ヒルズのメキシコ料理店。手軽に本格タコスが楽しめる。",address:"東京都港区虎ノ門1丁目",hours:"11:00-22:00",closed:"不定休"},
{id:426,name:"タコス メルカド（Tacos Mercado）",area:"東京",neighborhood:"小平市花小金井",real:true,style:"本格メキシコ",price:"¥¥",score:81,reviews:25,emoji:"🌮",tags:["花小金井"],desc:"花小金井の本格メキシコ料理店。手作りタコスとメキシカン。",address:"東京都小平市花小金井",hours:"11:30-21:00",closed:"水曜"},
// ===== 大阪 =====
{id:427,name:"Ola Tacos-Bar",area:"大阪",neighborhood:"中央区心斎橋",real:true,style:"本格メキシコ",price:"¥¥",score:84,reviews:52,emoji:"🌮",tags:["自家製トルティーヤ","テキーラ"],desc:"心斎橋の本格メキシカンバー。とうもろこしの風味を残した自家製トルティーヤ。",address:"大阪府大阪市中央区心斎橋筋",hours:"17:00-24:00",closed:"月曜"},
{id:428,name:"CANTINA RIMA",area:"大阪",neighborhood:"北区中崎町",real:true,style:"本格メキシコ",price:"¥¥",score:85,reviews:60,emoji:"🌮",tags:["2006年創業","メキシコ直輸入"],desc:"2006年創業の隠れ家的メキシコ料理店。メキシコ直輸入の食材とドリンク。",address:"大阪府大阪市北区中崎",hours:"18:00-24:00",closed:"月曜"},
{id:429,name:"pit master VAMOS 梅田",area:"大阪",neighborhood:"北区梅田",real:true,style:"テックスメックス",price:"¥¥",score:80,reviews:35,emoji:"🌮",tags:["BBQ×メキシカン","4種タコス"],desc:"本格BBQ×メキシカンの融合。牛肉・白身魚・豚肉・チキンの4種タコス。",address:"大阪府大阪市北区梅田",hours:"11:30-23:00",closed:"不定休"},
];if(window.stores){for(var i=0;i<n.length;i++){window.stores.push(n[i])}}else{window.storesExtra7=n}})();
