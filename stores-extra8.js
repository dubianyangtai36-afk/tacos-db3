(function(){var n=[
// ===== 神奈川 =====
{id:430,name:"COMEDOR DE MARGARITA",area:"神奈川",neighborhood:"横浜駅",real:true,style:"本格メキシコ",price:"¥¥¥",score:83,reviews:42,emoji:"🌮",tags:["ニュウマン横浜","モダンメキシカン"],desc:"横浜駅直結ニュウマン横浜9Fのモダンメキシカン。ファヒータ、タコス、ブリトー。",address:"神奈川県横浜市西区南幸1丁目 ニュウマン横浜9F",hours:"11:00-23:00",closed:"施設に準ずる"},
{id:431,name:"ワンズダイニング",area:"神奈川",neighborhood:"横浜市中区元町",real:true,style:"本格メキシコ",price:"¥¥",score:80,reviews:30,emoji:"🌮",tags:["メキシカンvsアメリカン食べ比べ"],desc:"元町中華街駅徒歩1分。メキシカンタコスとアメリカンタコスの食べ比べができる。",address:"神奈川県横浜市中区元町",hours:"11:30-22:00",closed:"火曜"},
// ===== 京都 =====
{id:432,name:"dos tacos yasaka（ドス タコス ヤサカ）",area:"京都",neighborhood:"東山区八坂",real:true,style:"本格メキシコ",price:"¥",score:83,reviews:38,emoji:"🌮",tags:["八坂神社近く","昼限定"],desc:"八坂神社近くの昼間限定タコス専門店。海外観光客からも本場の味と評判。",address:"京都府京都市東山区",hours:"11:00-17:00",closed:"水曜"},
{id:433,name:"YONA YONA TACOS",area:"京都",neighborhood:"中京区河原町",real:true,style:"カジュアル",price:"¥¥",score:78,reviews:25,emoji:"🌮",tags:["手巻きタコス"],desc:"京都河原町三条の手巻きタコスの店。自分で作れるタコス盛りセットが人気。",address:"京都府京都市中京区河原町通三条",hours:"17:00-23:00",closed:"月曜"},
// ===== 愛知 =====
{id:434,name:"TACO FANATICO（タコファナティコ）",area:"愛知",neighborhood:"名古屋市中区久屋大通",real:true,style:"本格メキシコ",price:"¥¥",score:86,reviews:65,emoji:"🌮",tags:["久屋大通パーク","テキーラ100種"],desc:"名古屋・久屋大通パーク内の本格タコス専門店。焼きたてトルティーヤと約100種のテキーラ。",address:"愛知県名古屋市中区大須 RAYARD Hisaya-odori Park内",hours:"11:00-22:00",closed:"不定休"},
{id:435,name:"MUNCHIES STAND（マンチーズスタンド）",area:"愛知",neighborhood:"名古屋市天白区",real:true,style:"本格メキシコ",price:"¥",score:80,reviews:30,emoji:"🌮",tags:["ストリートタコス","自家製サルサ"],desc:"天白区塩釜口のメキシカンストリートタコス専門店。自家製チポトレサルサが自慢。",address:"愛知県名古屋市天白区塩釜口",hours:"11:00-20:00",closed:"月曜"},
{id:436,name:"endoji tacos",area:"愛知",neighborhood:"名古屋市西区那古量",real:true,style:"創作タコス",price:"¥¥",score:82,reviews:20,emoji:"🌮",tags:["ビストロシェフ","創作タコス"],desc:"ビストロシェフによる創作タコス専門店。粗挽が牛たんや篠島産釜揚げしらすタコス。",address:"愛知県名古屋市西区那古野",hours:"11:00-15:00",closed:"火水"},
{id:437,name:"Hot Spice MUCHO CHICKEN",area:"愛知",neighborhood:"名古屋市中区栄",real:true,style:"カジュアル",price:"¥¥",score:78,reviews:22,emoji:"🌮",tags:["手巻きタコス","カスタマイズ"],desc:"名古屋初の手巻きタコス専門店。自分好みにカスタマイズできる。",address:"愛知県名古屋市中区栄",hours:"11:30-22:00",closed:"不定休"},
// ===== 福岡 =====
{id:438,name:"ロシータ",area:"福岡",neighborhood:"中央区中洲",real:true,style:"本格メキシコ",price:"¥¥",score:87,reviews:70,emoji:"🌮",tags:["3世代の味","老舗"],desc:"メキシコ移民の祖母から3代受け継ぐ本場の味。中洲の老舗メキシコ料理店。",address:"福岡県福岡市中央区中洲",hours:"18:00-24:00",closed:"日曜"},
{id:439,name:"Tacos Stand",area:"福岡",neighborhood:"中央区今泉",real:true,style:"本格メキシコ",price:"¥¥",score:82,reviews:45,emoji:"🌮",tags:["2002年創業","手作りトルティーヤ"],desc:"2002年創業の老舗。手作りトルティーヤのタコスとブリトー。天神駅徒歩7分。",address:"福岡県福岡市中央区今泉2-4-36",hours:"11:30-22:00",closed:"月曜"},
{id:440,name:"チリ・ダイニング（CHILI DINING）",area:"福岡",neighborhood:"博多区",real:true,style:"テックスメックス",price:"¥¥",score:80,reviews:38,emoji:"🌮",tags:["TEX-MEX","博多"],desc:"博多のTEX-MEXレストラン。テキサス風メキシコ料理が楽しめる。",address:"福岡県福岡市博多区",hours:"11:30-23:00",closed:"不定休"},
{id:441,name:"エル パティオ（EL PATIO）",area:"福岡",neighborhood:"中央区今泉",real:true,style:"本格メキシコ",price:"¥¥",score:81,reviews:35,emoji:"🌮",tags:["自家製サルサ"],desc:"天神駅徒歩7分。ミンチ肉と千切りキャベツの自家製サルサソースタコスが名物。",address:"福岡県福岡市中央区今泉2-5-6",hours:"11:30-22:00",closed:"火曜"},
// ===== 広島 =====
{id:442,name:"コメルムーチョ",area:"広島",neighborhood:"広島市南区宇品西",real:true,style:"本格メキシコ",price:"¥¥",score:83,reviews:28,emoji:"🌮",tags:["タコスグランプリ3位","自家製"],desc:"注文後に生地から作るタコス。タコスグランプリ2024で3位受賞。",address:"広島県広島市南区宇品西",hours:"11:00-20:00",closed:"月曜"},
// ===== 沖縄 =====
{id:443,name:"タコス専門店 メキシコ 北谷店",area:"沖縄",neighborhood:"北谷町",real:true,style:"沖縄タコス",price:"¥",score:88,reviews:120,emoji:"🌮",tags:["創業47年","北谷"],desc:"創業47年の超人気タコス専門店。宜野湾本店から移転。",address:"沖縄県中頭郡北谷町北谷1丁目12-10",hours:"11:00-20:00",closed:"水木"},
{id:444,name:"LUCKY TACOS（ラッキータコス）",area:"沖縄",neighborhood:"那覇市平和通り",real:true,style:"沖縄タコス",price:"¥",score:82,reviews:55,emoji:"🌮",tags:["元祖塩タコス","平和通り"],desc:"那覇平和通りの2階。沖縄の塩マースを使った元祖塩タコス。",address:"沖縄県那覇市牧志3丁目",hours:"11:00-19:00",closed:"火曜"},
{id:445,name:"チャーリー多幋寿",area:"沖縄",neighborhood:"沖縄市",real:true,style:"沖縄タコス",price:"¥",score:85,reviews:80,emoji:"🌮",tags:["老舗","沖縄市コザ"],desc:"沖縄市コザの老舗タコス店。アメリカ統治時代から続く伝統の味。",address:"沖縄県沖縄市中央4丁目",hours:"10:30-20:00",closed:"日曜"},
{id:446,name:"SENOR TACO（セニョール ターコ）",area:"沖縄",neighborhood:"沖縄市",real:true,style:"本格メキシコ",price:"¥",score:79,reviews:30,emoji:"🌮",tags:["沖縄市"],desc:"沖縄市のタコス専門店。本格メキシカンスタイル。",address:"沖縄県沖縄市中央",hours:"11:00-20:00",closed:"月曜"},
{id:447,name:"BORRACHOS",area:"沖縄",neighborhood:"那覇市",real:true,style:"本格メキシコ",price:"¥¥",score:81,reviews:35,emoji:"🌮",tags:["那覇メキシカン"],desc:"那覇市のメキシカンバー＆レストラン。タコスとテキーラ。",address:"沖縄県那覇市",hours:"17:00-24:00",closed:"月曜"},
// ===== 佐賀 =====
{id:448,name:"アスタコス",area:"佐賀",neighborhood:"佐賀市",real:true,style:"沖縄タコス",price:"¥",score:78,reviews:20,emoji:"🌮",tags:["タコス&タコライス","2025年オープン"],desc:"佐賀駅から徒歩10分のタコス＆タコライス専門店。2025年7月オープン。",address:"佐賀県佐賀市神野東3丁目;-24",hours:"11:00-20:00",closed:"水曜"},
// ===== 熊本 =====
{id:449,name:"La Catrina Tacos&Beer",area:"熊本",neighborhood:"熊本市上通り",real:true,style:"本格メキシコ",price:"¥¥",score:79,reviews:22,emoji:"🌮",tags:["メキシコビール","上通り"],desc:"熊本市上通りのメキシカン。メキシコビールとナチョス、タコスが楽しめる。",address:"熊本県熊本市中央区上通町",hours:"17:00-24:00",closed:"月曜"},
// ===== 長野 =====
{id:450,name:"Burrito y Tacos 5884",area:"長野",neighborhood:"上伊那郡箕輪町",real:true,style:"本格メキシコ",price:"¥",score:78,reviews:18,emoji:"🌮",tags:["信州味噌チリコンカン"],desc:"箕輪町のブリトーとタコス専門店。信州味噌を使った挽肉チリコンカンがおすすめ。",address:"長野県上伊那郡箕輪町",hours:"11:00-19:00",closed:"月火"},
{id:451,name:"ARCOIRIS（アルコイリス）",area:"長野",neighborhood:"長野市中央通り",real:true,style:"テックスメックス",price:"¥¥",score:77,reviews:15,emoji:"🌮",tags:["スパニッシュ＆メキシカン"],desc:"長野市中央通りのスパニッシュ＆メキシカンダイニングバー。ランチ1000円。",address:"長野県長野市南長野",hours:"11:30-22:00",closed:"火曜"},
// ===== 滋賀 =====
{id:452,name:"El Cactus（エルカクタス）",area:"滋賀",neighborhood:"大津市",real:true,style:"テックスメックス",price:"¥¥",score:75,reviews:12,emoji:"🌮",tags:["メキシカン"],desc:"大津市のメキシカンレストラン。タコスやブリトーが楽しめる。",address:"滋賀県大津市",hours:"11:30-22:00",closed:"月曜"},
// ===== 長崎 =====
{id:453,name:"Taco Shop Elena",area:"長崎",neighborhood:"佐世保市",real:true,style:"テックスメックス",price:"¥",score:76,reviews:15,emoji:"🌮",tags:["佐世保","ソフトタコス"],desc:"佐世保のタコスショップ。ソフトタコスが人気。",address:"長崎県佐世保市",hours:"11:00-20:00",closed:"火曜"},
// ===== 鹿児島 =====
{id:454,name:"Quinoa（キヌア）",area:"鹿児島",neighborhood:"鹿児島市旭通り",real:true,style:"中南米料理",price:"¥¥",score:76,reviews:14,emoji:"🌮",tags:["キヌア","南米料理"],desc:"旝通り駅近くの南米料理店。キノアを使ったタコスやメキシカン料理。",address:"鹿児島県鹿児島市旭通り",hours:"11:30-22:00",closed:"月曜"},
// ===== 兵庫 =====
{id:455,name:"EL PANCHO（エルパンチョ）",area:"兵庫",neighborhood:"神戸市中央区",real:true,style:"本格メキシコ",price:"¥¥",score:82,reviews:40,emoji:"🌮",tags:["三宮","テキーラバー"],desc:"三宮の本格メキシコ料理＆テキーラバー。手作りタコスとテキーラが自慢。",address:"兵庫県神戸市中央区下山手通",hours:"17:00-24:00",closed:"月曜"},
// ===== 千葉 =====
{id:456,name:"TACO BELL 幕張新都心店",area:"千葉",neighborhood:"千葉市美浜区",real:true,style:"ファストフード",price:"¥",score:72,reviews:60,emoji:"🌮",tags:["タコベル","ファストフード"],desc:"イオンモール幕張新都心内のタコベル。手軽にタコスが楽しめる。",address:"千葉県千葉市美浜区豊砂1丁目",hours:"10:00-21:00",closed:"施設に準ずる"},
// ===== 埼玉 =====
{id:457,name:"TACO RICO 大宮店",area:"埼玉",neighborhood:"さいたま市大宮区",real:true,style:"カジュアル",price:"¥",score:78,reviews:28,emoji:"🌮",tags:["手づくりタコス"],desc:"手づくり食材にこだわったタコス&ブリトーのファストカジュアル。目の前で作る。",address:"埼玉県さいたま市大宮区",hours:"11:00-21:00",closed:"不定休"},
// ===== 大分 =====
{id:458,name:"メヒカリ",area:"大分",neighborhood:"大分市",real:true,style:"本格メキシコ",price:"¥¥",score:76,reviews:12,emoji:"🌮",tags:["メキシコ料理"],desc:"大分市のメキシコ料理店。タコスやブリトーなど本格メキシカンが楽しめる。",address:"大分県大分市中央町",hours:"17:00-23:00",closed:"月曜"},
// ===== 宮崎 =====
{id:459,name:"AMIGOS TACOS",area:"宮崎",neighborhood:"宮崎市",real:true,style:"カジュアル",price:"¥",score:74,reviews:10,emoji:"🌮",tags:["タコス"],desc:"宮崎市のタコス店。カジュアルにメキシカンが楽しめる。",address:"宮崎県宮崎市",hours:"11:00-20:00",closed:"火曜"},
// ===== 香川 =====
{id:460,name:"Mexican Kitchen ORALE",area:"香川",neighborhood:"高松市",real:true,style:"本格メキシコ",price:"¥¥",score:78,reviews:20,emoji:"🌮",tags:["高松メキシカン"],desc:"高松市のメキシカンキッチン。本格タコスとテキーラ。",address:"香川県高松市",hours:"17:00-23:00",closed:"月曜"},
// ===== 徳島 =====
{id:461,name:"CABS TACOS",area:"徳島",neighborhood:"徳島市",real:true,style:"カジュアル",price:"¥",score:75,reviews:12,emoji:"🌮",tags:["タコス","ブリトー"],desc:"徳島市のメキシカンフードショップ。タコスとブリトー。",address:"徳島県徳島市",hours:"11:00-20:00",closed:"水曜"},
// ===== 福島 =====
{id:462,name:"メキシカンダイナー チコ",area:"福島",neighborhood:"郡山市",real:true,style:"テックスメックス",price:"¥¥",score:76,reviews:15,emoji:"🌮",tags:["郡山","メキシカン"],desc:"郡山市のメキシカンダイナー。タコスやナチョスが楽しめる。",address:"福島県郡山市",hours:"11:30-22:00",closed:"月曜"},
// Additional stores found in second round of searches
// ===== 東京 追加 =====
{id:463,name:"TACOS Shop kichijoji",area:"東京",neighborhood:"武蔵野市吉祥寺",real:true,style:"本格メキシコ",price:"¥",score:83,reviews:40,emoji:"🌮",tags:["ハモニカ横丁","スタンディング"],desc:"吉祥寺ハモニカ横丁のスタンディングタコス店。本栾派タコスを気軽に。",address:"東京都武蔵野市吉祥寺本町1丁目",hours:"12:00-21:00",closed:"水曜"},
{id:464,name:"TACOS BAR 恵比寿",area:"東京",neighborhood:"渋谷区恵比寿",real:true,style:"本格メキシコ",price:"¥¥",score:84,reviews:35,emoji:"🌮",tags:["ロスタコスアスーレス绰列"],desc:"三軒茶屋ロス・タコス・アスーレスの2号店。恵比寿で本格タコス。",address:"東京都渋谷区恵比寿",hours:"11:00-22:00",closed:"月曜"},
{id:465,name:"Blue Entrance Kitchen 中目黒",area:"東京",neighborhood:"目黒区中目黒",real:true,style:"沖縄タコス",price:"¥¥",score:82,reviews:38,emoji:"🌮",tags:["飲めるタコス","沖縄発"],desc:"沖縄から上陸のテクスメクスタコス。チーズ煼き付けトルティーヤに和牛使用。",address:"東京都目黒区中目黒",hours:"11:00-21:00",closed:"火曜"},
{id:466,name:"POCA TACO'S",area:"東京",neighborhood:"中野区中野",real:true,style:"カジュアル",price:"¥",score:76,reviews:20,emoji:"🌮",tags:["中野"],desc:"中野のタコス・メキシコ料理店。カジュアルに楽しめるメキシカン。",address:"東京都中野区中野",hours:"11:30-22:00",closed:"月曜"},
{id:467,name:"タコスマスカラス",area:"東京",neighborhood:"台東区浅草",real:true,style:"カジュアル",price:"¥",score:78,reviews:30,emoji:"🌮",tags:["浅草","350円〜"],desc:"浅草駅徒歩5分。ランチタイム350円からのお手頃タコス。",address:"東京都台東区浅草",hours:"11:30-21:00",closed:"水曜"},
{id:468,name:"OKITACO 浅草",area:"東京",neighborhood:"台東区浅草",real:true,style:"沖縄タコス",price:"¥",score:77,reviews:22,emoji:"🌮",tags:["沖縄タコス","浅草"],desc:"沖縄タコスの浅草店。本場沖縄スタイルのタコスが東京で楽しめる。",address:"東京都台東区浅草",hours:"11:00-20:00",closed:"火曜"},
{id:469,name:"FRIJOLES 六本木店",area:"東京",neighborhood:"港区六本木",real:true,style:"カジュアル",price:"¥¥",score:79,reviews:45,emoji:"🌮",tags:["ブリトー＆タコス"],desc:"ブリトー・タコス・サラダ専門店チェーン。六本木店。",address:"東京都港区六本木",hours:"11:00-22:00",closed:"不定休"},
{id:470,name:"FRIJOLES 大手町店",area:"東京",neighborhood:"千代田区大手町",real:true,style:"カジュアル",price:"¥¥",score:78,reviews:35,emoji:"🌮",tags:["ブリトー＆タコス"],desc:"ブリトー・タコス・サラダ専門店チェーン。大手町店。",address:"東京都千代田区大手町",hours:"11:00-21:00",closed:"土日"},
{id:471,name:"Guzman y Gomez 渋谷",area:"東京",neighborhood:"渋谷区渋谷",real:true,style:"カジュアル",price:"¥",score:77,reviews:50,emoji:"🌮",tags:["GYG","オーストラリア発"],desc:"オーストラリア発のメキシカンキッチン。フレッシュ食材のタコスとブリトー。",address:"東京都渋谷区",hours:"10:00-22:00",closed:"不定休"},
{id:472,name:"TACO FANATICO 中目黒",area:"東京",neighborhood:"目黒区中目黒",real:true,style:"本格メキシコ",price:"¥¥",score:85,reviews:55,emoji:"🌮",tags:["目黒川沿い","グルテンフリー"],desc:"中目黒駅徒歩2分。目黒川沿いのタコス専門店。グルテンフリーのカラフルタコス。",address:"東京都目黒区上目黒",hours:"11:30-22:00",closed:"火曜"},
// ===== 大阪 追加 =====
{id:473,name:"MEXICAN DINING AVOCADO HOUSE",area:"大阪",neighborhood:"中央区難波",real:true,style:"本格メキシコ",price:"¥¥",score:81,reviews:40,emoji:"🌮",tags:["アボカド専門","難波"],desc:"難波駅徒歩2分。厳選アボカドを使用したタコスやワカモレ。",address:"大阪府大阪市中央区難波",hours:"11:30-23:00",closed:"不定休"},
{id:474,name:"TacoDelio",area:"大阪",neighborhood:"中央区難波",real:true,style:"カジュアル",price:"¥",score:76,reviews:25,emoji:"🌮",tags:["なんばパークス"],desc:"なんばパークス内のタコス店。気軽にメキシカンが楽しめる。",address:"大阪府大阪市中央区難波 なんばパークス",hours:"11:00-21:00",closed:"施設に準ずる"},
// ===== 兵庫 追加 =====
{id:475,name:"JUNK FOOD KOBE",area:"兵庫",neighborhood:"神戸市中央区元町",real:true,style:"カジュアル",price:"¥¥",score:79,reviews:35,emoji:"🌮",tags:["タコスとビール","元町"],desc:"元町駅徒歩2分のタコスとビールのカフェ&バー。昼飲みにも最適瀂",address:"兵庫県神戸市中央区元町通",hours:"11:30-23:00",closed:"火曜"},
{id:476,name:"Umacchi Tacos（ウマッチタコス）",area:"兵庫",neighborhood:"神戸市中央区三宮",real:true,style:"本格メキシコ",price:"¥¥",score:81,reviews:28,emoji:"🌮",tags:["テキーラバー系列","メキシコ産食材"],desc:"テキーラバーBAR UMA-LAがオープンしたタコス専門店。本場メキシコ産食材使用。",address:"兵庫県神戸市中央区三宮町",hours:"11:30-22:00",closed:"月曜"},
{id:477,name:"クロニックタコス 三宮",area:"兵庫",neighborhood:"神戸市中央区三宮",real:true,style:"テックスメックス",price:"¥",score:75,reviews:30,emoji:"🌮",tags:["米国チェーン"],desc:"アメリカのメキシコ料理チェーン。ファストフード価格で本格メキシカン。",address:"兵庫県神戸市中央区三宮町",hours:"10:00-21:00",closed:"不定休"},
// ===== 千葉 追加 =====
{id:478,name:"メキシカンバル RICO",area:"千葉",neighborhood:"船橋市",real:true,style:"カジュアル",price:"¥¥",score:79,reviews:30,emoji:"🌮",tags:["手作りタコス","ロティサリーチキン"],desc:"JR船橋駅徒歩1分。毎日生地から手作りのタコスとロティサリーチキン。24時まで営業。",address:"千葉県船橋市本町",hours:"11:30-24:00",closed:"不定休"},
// ===== 埼玉 追加 =====
{id:479,name:"メルカドMAYA（マヤ）",area:"埼玉",neighborhood:"さいたま市大宮区",real:true,style:"本格メキシコ",price:"¥¥",score:80,reviews:22,emoji:"🌮",tags:["メキシコ家庭料理","現地8年修業"],desc:"メキシコで8年間教わった家庭料理を提供。大宮駅近くのシェアキッチンで営業。",address:"埼玉県さいたま市大宮区宮町1丁目",hours:"11:30-20:00",closed:"月火"},
{id:480,name:"チランガバンダ",area:"埼玉",neighborhood:"桶川市",real:true,style:"本格メキシコ",price:"¥¥",score:86,reviews:45,emoji:"🌮",tags:["予約必須","無農薬とうもろこし"],desc:"無農薬とうもろこしを製粉から手作りのナルティーヤ。予約必須の人気店。",address:"埼玉県桶川市",hours:"11:30-14:00,17:30-21:00",closed:"水木"},
{id:481,name:"パンチラインガレージ",area:"埼玉",neighborhood:"川越市",real:true,style:"テックスメックス",price:"¥¥",score:78,reviews:20,emoji:"🌮",tags:["川越","多国籍バル"],desc:"川越駅徒歩5分のメキシコ料理中心の多国籍バル。タコスとお酒が楽しめる。",address:"埼玉県川越市脇田本町",hours:"17:00-24:00",closed:"月曜"},
{id:482,name:"キャンティーナDaDa",area:"埼玉",neighborhood:"さいたま市大宮区",real:true,style:"テックスメックス",price:"¥¥",score:77,reviews:18,emoji:"🌮",tags:["タコス×パエリア","2024オープン"],desc:"大宮のメキシカンバル。タコスとパエリアが名物のおしゃれバル。",address:"埼玉県さいたま市大宮区宮町",hours:"17:00-24:00",closed:"月曜"}
];if(window.stores){for(var i=0;i<n.length;i++){window.stores.push(n[i])}}else{window.storesExtra8=n}})();
