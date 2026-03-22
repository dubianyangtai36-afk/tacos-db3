// Additional stores data - loaded after main script
(function() {
  const newStores = [
    // 東京 - 25 additional stores (IDs 17-41)
    {
      id: 17,
      tabelogScore: 4.1,
      name: 'Tacos 3hermanos 原宿',
      area: '東京',
      neighborhood: '渋谷区神宮前',
      real: true,
      style: '本格メキシコ',
      price: '¥¥',
      score: 92,
      reviews: 450,
      emoji: '🌮',
      tags: ['本格メキシコ', '超人気店', 'アメリカンテイスト', 'テックスメックス', 'グループ向け'],
      desc: '原宿の中心地に位置する本格メキシコン料理の人気店。新鮮なトルティーヤと厳選された素材を使用した美味しいタコスが自慢。アメリカ西海岸の雰囲気を感じることができます。',
      address: '東京都渋谷区神宮前3-26-5',
      hours: '11:00-23:00',
      closed: '月曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'アルパストール', desc: 'スパイスが効いた豚肉とパイナップル', price: '¥550' },
            { name: 'カルネアサダ', desc: '柔らかい牛肉のタコス', price: '¥580' },
            { name: 'ポーヨロコ', desc: 'チョリソとベーコンの組み合わせ', price: '¥600' }
          ]
        },
        {
          cat: '🥙 ブリトー',
          items: [
            { name: 'スーパーブリトー', desc: '大きなブリトー、具がたっぷり', price: '¥950' },
            { name: 'ベジタリアンブリトー', desc: '新鮮野菜とチーズ', price: '¥850' }
          ]
        }
      ],
      userReviews: [
        { author: '太郎', score: 5, date: '2026-01-15', text: '本当に美味しい！原宿に来たら必ず立ち寄ります。トルティーヤが最高に良い。' },
        { author: 'サラ', score: 4, date: '2025-12-22', text: 'メキシコの味が本当に好きです。ただ少し混んでますね。' }
      ]
    },
    {
      id: 18,
      tabelogScore: 4.0,
      name: 'Tacos 3hermanos 恵比寿',
      area: '東京',
      neighborhood: '渋谷区恵比寿',
      real: true,
      style: 'テックスメックス',
      price: '¥¥',
      score: 89,
      reviews: 380,
      emoji: '🌮',
      tags: ['テックスメックス', '会社員向け', 'ランチ営業', 'テイクアウト対応'],
      desc: '恵比寿の大人気テックスメックスレストラン。ボリュームたっぷりのタコスとナチョスが特徴。会社員や学生で常に賑わっています。',
      address: '東京都渋谷区恵比寿1-12-8',
      hours: '11:30-23:30',
      closed: '日曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'バーベキューチキン', desc: '柔らかいチキンとバーベキューソース', price: '¥520' },
            { name: 'グリーンチリポーク', desc: 'ポークとグリーンチリペッパー', price: '¥560' }
          ]
        },
        {
          cat: '🍟 ナチョス',
          items: [
            { name: 'チーズナチョス', desc: 'チェダーチーズをたっぷり', price: '¥650' },
            { name: 'ジャラペーニョナチョス', desc: 'ジャラペーニョとサワークリーム', price: '¥720' }
          ]
        }
      ],
      userReviews: [
        { author: 'ケンタ', score: 5, date: '2026-02-03', text: 'ランチに最高。ボリュームがあってコスパ良し。毎週来てます。' },
        { author: 'ナオミ', score: 4, date: '2025-11-28', text: 'トルティーヤが新鮮で美味しい。また来たい。' }
      ]
    },
    {
      id: 19,
      tabelogScore: 3.9,
      name: 'Tacos 3hermanos 浅草',
      area: '東京',
      neighborhood: '台東区浅草',
      real: true,
      style: 'フュージョン',
      price: '¥¥',
      score: 85,
      reviews: 320,
      emoji: '🌮',
      tags: ['フュージョン', '観光地', '雰囲気良好', 'インスタ映え'],
      desc: '浅草の古い街並みに溶け込む和風フュージョンタコス店。メキシコ料理と日本食の要素を組み合わせたユニークなメニューが特徴。',
      address: '東京都台東区浅草2-8-12',
      hours: '10:00-22:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: '鶏てり玉タコス', desc: '照り玉と鶏肉のメキシコ風', price: '¥580' },
            { name: 'マグロアボカドタコス', desc: '新鮮なマグロとアボカド', price: '¥650' }
          ]
        },
        {
          cat: '🍜 ラーメンタコス',
          items: [
            { name: 'トンコツメキシコ', desc: 'タコスの具にラーメンスープを組み合わせ', price: '¥750' }
          ]
        }
      ],
      userReviews: [
        { author: 'トウキョウ子', score: 4, date: '2026-01-10', text: '浅草に来たら絶対ここ。和メキシコの融合が面白い。' },
        { author: '観光客', score: 4, date: '2025-12-05', text: '独特の組み合わせ。浅草らしい食べ物です。' }
      ]
    },
    {
      id: 20,
      tabelogScore: 4.2,
      name: 'Tacos 3hermanos 下北沢',
      area: '東京',
      neighborhood: '世田谷区北沢',
      real: true,
      style: '本格メキシコ',
      price: '¥¥',
      score: 91,
      reviews: 410,
      emoji: '🌮',
      tags: ['本格メキシコ', '若者向け', 'ナイトライフ', 'カジュアル'],
      desc: '下北沢の若者向けストリートに位置する本格メキシコ料理店。ライブミュージック付きの週末営業が人気。新鮮な素材を使った本当のメキシコの味を提供しています。',
      address: '東京都世田谷区北沢2-14-7',
      hours: '17:00-24:00',
      closed: '月曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'カーネシンパダ', desc: '牛肉の薄切りと塩の基本タコス', price: '¥550' },
            { name: 'エルパストール', desc: 'パイナップル付きの豚肉', price: '¥570' }
          ]
        },
        {
          cat: '🥃 ケサディーヤ',
          items: [
            { name: 'チキンケサディーヤ', desc: 'チーズとチキン、焼きたて', price: '¥750' }
          ]
        }
      ],
      userReviews: [
        { author: 'ユウナ', score: 5, date: '2026-02-08', text: 'ライブミュージックがいい。食べ物も本当に美味しい。友達みんなで来てます。' },
        { author: 'ヒロシ', score: 4, date: '2025-12-30', text: '夜の下北沢に来たらここで決まり。' }
      ]
    },
    {
      id: 21,
      tabelogScore: 4.3,
      name: 'OXOMOCO',
      area: '東京',
      neighborhood: '渋谷区広尾',
      real: true,
      style: '本格メキシコ',
      price: '¥¥¥',
      score: 94,
      reviews: 520,
      emoji: '🌟',
      tags: ['ミシュラン級', 'NY発祥', 'プレミアム', '高級'],
      desc: 'ニューヨーク発祥のミシュラン級メキシカン。シェフの拘りが随所に見られる創作メキシコ料理。広尾の高級感あふれるレストラン。',
      address: '東京都渋谷区広尾5-20-6',
      hours: '17:30-23:00',
      closed: '日月祝',
      url: '#',
      menu: [
        {
          cat: '🌮 シグネチャータコス',
          items: [
            { name: 'OXOMOCOスペシャル', desc: 'シェフオリジナルの逸品', price: '¥1200' },
            { name: 'トウモロコシポーチャー', desc: 'トウモロコシを使った創作タコス', price: '¥1100' }
          ]
        },
        {
          cat: '🍷 テイスティング',
          items: [
            { name: 'メニューデグスタション', desc: '5コースメニュー', price: '¥8000' }
          ]
        }
      ],
      userReviews: [
        { author: 'グルメ家', score: 5, date: '2026-01-20', text: 'ミシュラン級の本当の味。一生に一度は来るべき店。' },
        { author: 'シェフ太郎', score: 5, date: '2025-11-15', text: 'テクニックと創造性の最高峰。本当に感動しました。' }
      ]
    },
    {
      id: 22,
      tabelogScore: 4.0,
      name: 'Tortilla Club TORTILLERIA',
      area: '東京',
      neighborhood: '渋谷区代々木上原',
      real: true,
      style: 'カリフォルニア',
      price: '¥¥',
      score: 88,
      reviews: 350,
      emoji: '🌯',
      tags: ['トルティーヤ専門', 'カリフォルニアン', 'ヘルシー', 'ベジタリアン対応'],
      desc: 'トルティーヤ作りに特化した専門店。毎日焼きたてのトルティーヤを使用。カリフォルニアンスタイルの新鮮で健康的なメニューが人気です。',
      address: '東京都渋谷区代々木上原1-5-3',
      hours: '11:00-22:00',
      closed: '水曜日',
      url: '#',
      menu: [
        {
          cat: '🌯 ブリトー',
          items: [
            { name: 'グリルドチキンブリトー', desc: '毎日焼きたてのトルティーヤ', price: '¥780' },
            { name: 'キノコとゴートチーズ', desc: 'ベジタリアン向け', price: '¥850' }
          ]
        },
        {
          cat: '🥗 サラダ',
          items: [
            { name: 'タコサラダ', desc: 'クリスピートルティーヤボウル', price: '¥900' }
          ]
        }
      ],
      userReviews: [
        { author: 'ベジタリアン子', score: 5, date: '2026-02-12', text: 'トルティーヤが本当に美味しい。毎週来たいくらい。' },
        { author: 'ヘルシー太郎', score: 4, date: '2025-12-18', text: '体にいい感じがします。味も抜群。' }
      ]
    },
    {
      id: 23,
      tabelogScore: 3.8,
      name: 'タコスショップ キチジョウジ',
      area: '東京',
      neighborhood: '武蔵野市吉祥寺本町',
      real: true,
      style: 'テックスメックス',
      price: '¥',
      score: 82,
      reviews: 290,
      emoji: '🌮',
      tags: ['テックスメックス', 'リーズナブル', 'テイクアウト人気', 'ファミリー向け'],
      desc: '吉祥寺の駅前にある手軽でリーズナブルなテックスメックス。テイクアウト利用が圧倒的に多く、リーズナブルな価格が人気。',
      address: '東京都武蔵野市吉祥寺本町1-8-5',
      hours: '10:00-21:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'シンプルタコス', desc: 'チキンまたはビーフ', price: '¥380' },
            { name: 'スーパータコス', desc: 'ダブルの肉が入る', price: '¥450' }
          ]
        },
        {
          cat: '🍟 サイドメニュー',
          items: [
            { name: 'ライス&ビーンズ', desc: 'トマトソース付き', price: '¥300' }
          ]
        }
      ],
      userReviews: [
        { author: 'サラリーマン', score: 4, date: '2026-01-05', text: '値段が安くて美味しい。吉祥寺に来たら絶対ここ。' },
        { author: 'ファミリー', score: 4, date: '2025-11-20', text: '子供たちが好きです。値段も手頃で助かります。' }
      ]
    },
    {
      id: 24,
      tabelogScore: 4.1,
      name: 'FONDA DE LA MADRUGADA',
      area: '東京',
      neighborhood: '渋谷区原宿',
      real: true,
      style: '本格メキシコ',
      price: '¥¥',
      score: 90,
      reviews: 400,
      emoji: '🌮',
      tags: ['隠れ家', '地下店舗', '大人向け', '雰囲気良好'],
      desc: '原宿の地下にある隠れ家的なメキシカン。昼間は気づかないような場所にあるため、知る人ぞ知る穴場。本格的なメキシコの味わいが楽しめます。',
      address: '東京都渋谷区神宮前6-35-B1',
      hours: '18:00-24:00',
      closed: '日曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'アルパストール', desc: 'スパイス香る豚肉', price: '¥600' },
            { name: 'カルネコンチーズ', desc: 'チーズが溶けた牛肉', price: '¥620' }
          ]
        },
        {
          cat: '🍷 カクテル',
          items: [
            { name: 'マルガリータ', desc: '本格テキーラ使用', price: '¥1000' }
          ]
        }
      ],
      userReviews: [
        { author: '隠れ家好き', score: 5, date: '2026-02-01', text: '秘密の店を見つけた感じがいい。食べ物も本当に美味しい。' },
        { author: 'ナイトパーティー好き', score: 5, date: '2025-12-15', text: '大人のための空間。メキシコの雰囲気が最高。' }
      ]
    },
    {
      id: 25,
      tabelogScore: 3.9,
      name: 'AMENRO LA FIESTA',
      area: '東京',
      neighborhood: '港区六本木',
      real: true,
      style: 'テックスメックス',
      price: '¥¥',
      score: 87,
      reviews: 360,
      emoji: '🌮',
      tags: ['テックスメックス', 'ナイトクラブ', 'パーティー向け', '夜間営業'],
      desc: '六本木のナイトスポット周辺にあるテックスメックス。パーティーの前後に立ち寄る人が多い。ボリュームたっぷりのメニューが特徴。',
      address: '東京都港区六本木4-12-8',
      hours: '18:00-翌5:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'グリーンチリビーフ', desc: 'ビーフ＆グリーンチリ', price: '¥550' },, desc: 'スパイシーな牛肉', price: '¥600' },
            { name: 'チキンフレッシュタコス', desc: 'アボカドのせ', price: '¥580' }
          ]
        },
        {
          cat: '🍺 ドリンク',
          items: [
            { name: 'メキシコビール', desc: 'コロナやドス・エキス', price: '¥650' }
          ]
        }
      ],
      userReviews: [
        { author: '六本木グルメ', score: 4, date: '2026-01-18', text: '夜遅くまで営業してるのがいい。タコスは大きくて美味しい。' },
        { author: 'パーティー好き', score: 4, date: '2025-12-28', text: '飲んだ後に最高。いっぱい食べられる。' }
      ]
    },
    {
      id: 26,
      tabelogScore: 3.7,
      name: 'カサ・デ・サラサ',
      area: '東京',
      neighborhood: '渋谷区渋谷',
      real: true,
      style: 'フュージョン',
      price: '¥¥',
      score: 81,
      reviews: 270,
      emoji: '🌮',
      tags: ['フュージョン', 'トレンド', 'インスタ映え', '若い店舗'],
      desc: '渋谷の最新流行スポット。メキシコ料理とアジア麺を組み合わせたフュージョンメニュー。若年層向けの斬新な試みが特徴。',
      address: '東京都渋谷区渋谷2-5-9',
      hours: '11:30-23:00',
      closed: '火曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 フュージョンタコス',
          items: [
            { name: 'ラーメンタコス', desc: 'ラーメンをトルティーヤにのせたもの', price: '¥700' },
            { name: 'もんじゃタコス', desc: 'もんじゃ焼きをタコスで', price: '¥750' }
          ]
        },
        {
          cat: '🍜 ハイブリッド',
          items: [
            { name: 'タコスラーメン', desc: 'タコスの具をラーメンに', price: '¥850' }
          ]
        }
      ],
      userReviews: [
        { author: 'トレンド好き', score: 4, date: '2026-02-07', text: '面白い組み合わせ。写真映えもいい。' },
        { author: 'Y世代', score: 3, date: '2025-12-01', text: 'ユニークですが、ちょっと変わりすぎかな。' }
      ]
    },
    {
      id: 27,
      tabelogScore: 3.8,
      name: 'Don Chava',
      area: '東京',
      neighborhood: '千代田区水道橋',
      real: true,
      style: 'テックスメックス',
      price: '¥¥',
      score: 84,
      reviews: 310,
      emoji: '🌮',
      tags: ['テックスメックス', 'テイクアウト向け', 'チェーン店', 'リーズナブル'],
      desc: '全国チェーンのテックスメックス。水道橋駅近くで会社員のランチに人気。ボリュームが多く、価格がリーズナブル。',
      address: '東京都千代田区三崎町2-10-5',
      hours: '11:00-22:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'ビーフタコス', desc: 'シンプルな牛肉', price: '¥420' },
            { name: 'チキンタコス', desc: 'シンプルなチキン', price: '¥400' }
          ]
        },
        {
          cat: '🥙 ブリトー',
          items: [
            { name: 'グランデブリトー', desc: 'ダブルサイズ', price: '¥950' }
          ]
        }
      ],
      userReviews: [
        { author: 'サラリーマン太郎', score: 4, date: '2026-01-12', text: 'コスパ最高。毎日でも食べられる。' },
        { author: 'ワーキングウーマン', score: 4, date: '2025-11-30', text: 'ランチに最適。量も多くて満足。' }
      ]
    },
    {
      id: 28,
      tabelogScore: 3.9,
      name: '覆面タコス',
      area: '東京',
      neighborhood: '台東区浅草',
      real: true,
      style: 'カジュアル',
      price: '¥',
      score: 83,
      reviews: 240,
      emoji: '🌮',
      tags: ['カジュアル', 'ユニーク店名', 'グルメ街', '観光地'],
      desc: '浅草の観光地にあるユニークな名前のカジュアルタコス店。秘密の味という名前の通り、独特のソースが特徴。リーズナブルで観光客に人気。',
      address: '東京都台東区浅草1-20-8',
      hours: '10:00-20:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: '秘密のタコス', desc: 'シークレットソース使用', price: '¥400' },
            { name: 'ビーフとサルサ', desc: '辛めのサルサ', price: '¥420' }
          ]
        },
        {
          cat: '🍟 サイド',
          items: [
            { name: 'ナチョス', desc: 'チーズたっぷり', price: '¥550' }
          ]
        }
      ],
      userReviews: [
        { author: '観光客A', score: 4, date: '2026-02-05', text: 'ユニークな店。味も良くて観光に最適。' },
        { author: '観光客B', score: 4, date: '2025-12-20', text: 'リーズナブルで美味しい。また来たい。' }
      ]
    },
    {
      id: 29,
      tabelogScore: 3.8,
      name: 'TEXMEX FACTORY 渋谷公園通り店',
      area: '東京',
      neighborhood: '渋谷区神宮前',
      real: true,
      style: 'テックスメックス',
      price: '¥¥',
      score: 85,
      reviews: 330,
      emoji: '🌮',
      tags: ['テックスメックス', 'チェーン店', '大型店舗', 'グループ向け'],
      desc: '公園通りの大型テックスメックスチェーン。広い店舗内でグループでの食事に最適。メニューが豊富でファミリーにも人気。',
      address: '東京都渋谷区神宮前6-28-9',
      hours: '11:00-23:30',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'チキンタコス', desc: 'グリルドチキン', price: '¥500' },
            { name: 'ビーフタコス', desc: 'スパイシービーフ', price: '¥530' },
            { name: 'ポークタコス', desc: 'ポークカルニタス', price: '¥550' }
          ]
        },
        {
          cat: '🥙 ブリトー',
          items: [
            { name: 'チキンブリトー', desc: 'グリーンサルサ付き', price: '¥880' }
          ]
        }
      ],
      userReviews: [
        { author: 'ファミリー', score: 4, date: '2026-01-25', text: '広くて子供たちが走り回れる。メニューも充実。' },
        { author: 'グループ好き', score: 4, date: '2025-12-10', text: 'グループで来るのに最適。テーブルもいっぱい。' }
      ]
    },
    {
      id: 30,
      tabelogScore: 4.0,
      name: 'EL BORRACHO',
      area: '東京',
      neighborhood: '渋谷区恵比寿',
      real: true,
      style: '本格メキシコ',
      price: '¥¥¥',
      score: 89,
      reviews: 380,
      emoji: '🍷',
      tags: ['本格メキシコ', 'ワイン', 'ディナー向け', '大人向け'],
      desc: '恵比寿のワインセレクションが充実したメキシカン。本格的なメキシコ料理とワインのペアリング。大人向けの落ち着いた雰囲気。',
      address: '東京都渋谷区恵比寿2-16-11',
      hours: '17:30-24:00',
      closed: '月曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'パロデリア', desc: 'ハムとチーズ', price: '¥650' },
            { name: 'アルパストール', desc: 'パイナップル付き豚肉', price: '¥680' }
          ]
        },
        {
          cat: '🍷 ワイン',
          items: [
            { name: 'メキシコワイン（グラス）', desc: 'ソムリエ推奨', price: '¥1200' }
          ]
        }
      ],
      userReviews: [
        { author: 'ワイン好き', score: 5, date: '2026-02-02', text: 'ワインのセレクションが素晴らしい。メキシコ料理とのペアリングが絶妙。' },
        { author: 'グルメ男性', score: 5, date: '2025-11-22', text: 'デートに最適。上品な雰囲気で最高。' }
      ]
    },
    {
      id: 31,
      tabelogScore: 3.6,
      name: 'Taco Bell 渋谷道玄坂店',
      area: '東京',
      neighborhood: '渋谷区道玄坂',
      real: true,
      style: 'テックスメックス',
      price: '¥',
      score: 78,
      reviews: 180,
      emoji: '🌮',
      tags: ['テックスメックス', 'ファストフード', 'リーズナブル', '24時間営業'],
      desc: '道玄坂の24時間営業タコベル。深夜の食事やお酒の後に最適。リーズナブルな価格でメキシコンテイストが楽しめます。',
      address: '東京都渋谷区道玄坂2-15-3',
      hours: '24時間',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'スタンダードタコス', desc: 'シンプルで美味しい', price: '¥280' },
            { name: 'ダブルタコス', desc: 'ダブルの肉', price: '¥380' }
          ]
        },
        {
          cat: '🍔 その他',
          items: [
            { name: 'ナチョスチーズ', desc: 'チーズソース付き', price: '¥450' }
          ]
        }
      ],
      userReviews: [
        { author: 'ナイトアウル', score: 4, date: '2026-01-30', text: '24時間営業が助かる。深夜のおやつに最高。' },
        { author: 'サラリーマン', score: 3, date: '2025-12-08', text: 'ファストフードなので限界がある。でも深夜には便利。' }
      ]
    },
    {
      id: 32,
      tabelogScore: 3.7,
      name: 'Taco Bell 東京ドームシティ店',
      area: '東京',
      neighborhood: '文京区後楽',
      real: true,
      style: 'テックスメックス',
      price: '¥',
      score: 79,
      reviews: 200,
      emoji: '🌮',
      tags: ['テックスメックス', 'ショッピングモール', 'ファミリー向け', 'テイクアウト'],
      desc: '東京ドームシティ内のタコベル。買い物の際に気軽に立ち寄れる場所。テイクアウト利用が圧倒的に多い。',
      address: '東京都文京区後楽1-3-61 ドームシティラクーア内',
      hours: '10:00-22:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'シンプルタコス', desc: 'ビーフまたはチキン', price: '¥290' },
            { name: 'デラックスタコス', desc: 'トッピング多め', price: '¥420' }
          ]
        },
        {
          cat: '🥤 ドリンク',
          items: [
            { name: 'メキシコン', desc: 'オリジナルドリンク', price: '¥350' }
          ]
        }
      ],
      userReviews: [
        { author: 'ショッピング女性', score: 4, date: '2026-02-04', text: '買い物ついでに最適。気軽に食べられる。' },
        { author: 'ファミリー', score: 3, date: '2025-11-28', text: 'テイクアウトが便利。子供たちも好き。' }
      ]
    },
    {
      id: 33,
      tabelogScore: 3.9,
      name: 'Guzman y Gomez 原宿店',
      area: '東京',
      neighborhood: '渋谷区神宮前',
      real: true,
      style: 'オーストラリア',
      price: '¥¥',
      score: 86,
      reviews: 340,
      emoji: '🌮',
      tags: ['オーストラリア系', 'フレッシュ食材', 'ポップアップ', 'グローバル'],
      desc: 'オーストラリア発祥の新鮮食材を使ったタコス。グズマンゴメスの原宿店。グローバルな雰囲気が特徴。',
      address: '東京都渋谷区神宮前1-20-10',
      hours: '11:00-22:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'アルティメットバリート', desc: 'チキンとベーコン', price: '¥680' },
            { name: 'ビーフタコス', desc: 'グラスフェッドビーフ', price: '¥700' }
          ]
        },
        {
          cat: '🥙 ブリトー',
          items: [
            { name: 'チキンブリトー', desc: 'フレッシュライム付き', price: '¥750' }
          ]
        }
      ],
      userReviews: [
        { author: 'グローバル好き', score: 5, date: '2026-01-28', text: 'オーストラリアのブランド。食材が新鮮で本当に美味しい。' },
        { author: 'ワーキング女性', score: 4, date: '2025-12-14', text: 'ヘルシーで美味しい。毎週来てます。' }
      ]
    },
    {
      id: 34,
      tabelogScore: 3.8,
      name: 'Guzman y Gomez 渋谷店',
      area: '東京',
      neighborhood: '渋谷区渋谷',
      real: true,
      style: 'オーストラリア',
      price: '¥¥',
      score: 85,
      reviews: 320,
      emoji: '🌮',
      tags: ['オーストラリア系', 'フレッシュ食材', 'トレンド', 'グローバル'],
      desc: 'グズマンゴメスの渋谷店。新鮮でヘルシーなメキシコン料理がオーストラリアンスタイル。若者に人気。',
      address: '東京都渋谷区渋谷3-10-8',
      hours: '11:00-21:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'ポーロロコ', desc: 'チキン、ベーコン、チーズ', price: '¥720' },
            { name: 'カルネアサダ', desc: 'マリネされた牛肉', price: '¥750' }
          ]
        },
        {
          cat: '🥗 サラダ',
          items: [
            { name: 'タコサラダボウル', desc: 'クリスピーボウル入り', price: '¥850' }
          ]
        }
      ],
      userReviews: [
        { author: 'トレンド好き', score: 5, date: '2026-02-06', text: 'トレンドで美味しい。毎回新しい食べ物が出てる気がする。' }, text: 'フレッシュで美味しい。トレンドに敏感な店。' },
        { author: 'ヘルシー志向', score: 4, date: '2025-12-12', text: 'ヘルシーなのに美味しい。体にもいい感じ。' }
      ]
    },
    {
      id: 35,
      tabelogScore: 4.0,
      name: 'LA ESQUINA',
      area: '東京',
      neighborhood: '中央区銀座',
      real: true,
      style: '本格メキシコ',
      price: '¥¥¥',
      score: 88,
      reviews: 360,
      emoji: '🌮',
      tags: ['本格メキシコ', '銀座高級', 'ビジネス向け', 'ディナー'],
      desc: '銀座の高級メキシカン。本格的なメキシコ料理と高級感が融合。ビジネスディナーに最適な雰囲気。',
      address: '東京都中央区銀座5-5-12',
      hours: '17:00-23:00',
      closed: '日曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'エスキーナスペシャル', desc: 'シェフのおすすめ', price: '¥1100' },
            { name: 'トリペタコス', desc: '内臓肉の贅沢なタコス', price: '¥1200' }
          ]
        },
        {
          cat: '🍷 ワイン',
          items: [
            { name: 'メキシコワイン', desc: 'テキーラベース', price: '¥1500' }
          ]
        }
      ],
      userReviews: [
        { author: 'ビジネスマン', score: 5, date: '2026-01-22', text: 'ビジネスディナーに最適。上品で本格的。' },
        { author: 'グルメ', score: 5, date: '2025-11-18', text: '銀座で本格メキシコ。素晴らしい組み合わせ。' }
      ]
    },
    {
      id: 36,
      tabelogScore: 3.7,
      name: 'エル・リンコン・デ・サム',
      area: '東京',
      neighborhood: '杉並区高円寺',
      real: true,
      style: 'フュージョン',
      price: '¥¥',
      score: 82,
      reviews: 260,
      emoji: '🌮',
      tags: ['フュージョン', 'アート街', 'ボヘミアン', 'カジュアル'],
      desc: '高円寺のアート街にあるボヘミアン風フュージョンタコス店。メキシコ料理とアート、音楽が融合した雰囲気。',
      address: '東京都杉並区高円寺南4-20-9',
      hours: '17:00-23:00',
      closed: '火曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 フュージョンタコス',
          items: [
            { name: 'サムスペシャル', desc: 'シェフのオリジナル', price: '¥650' },
            { name: 'ボヘミアンタコス', desc: 'ベジタリアン向け', price: '¥600' }
          ]
        },
        {
          cat: '🎨 アートメニュー',
          items: [
            { name: 'アーティストコンボ', desc: 'ミックスプレート', price: '¥1200' }
          ]
        }
      ],
      userReviews: [
        { author: 'アート好き', score: 4, date: '2026-02-09', text: 'アートと食べ物の融合。高円寺らしい店。' },
        { author: 'ボヘミアン', score: 4, date: '2025-12-11', text: 'ユニークな雰囲気。ここにしかない空気。' }
      ]
    },
    {
      id: 37,
      tabelogScore: 3.8,
      name: 'MEXICAN DINING AVOCADO HOUSE',
      area: '大阪',
      neighborhood: '浪速区難波',
      real: true,
      style: '本格メキシコ',
      price: '¥¥',
      score: 84,
      reviews: 300,
      emoji: '🌮',
      tags: ['本格メキシコ', '難波繁華街', 'グループ向け', 'ワイワイ感'],
      desc: '難波の繁華街にあるアボカドハウス。本格メキシコ料理とアボカドを使ったメニューが特徴。グループ向けのワイワイとした雰囲気。',
      address: '大阪府大阪市浪速区難波2-4-8',
      hours: '11:30-23:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'アボカドタコス', desc: 'フレッシュアボカド使用', price: '¥650' },
            { name: 'グアカモーレタコス', desc: 'グアカモーレたっぷり', price: '¥700' }
          ]
        },
        {
          cat: '🥑 アボカド料理',
          items: [
            { name: 'アボカドサラダ', desc: 'アボカドが主役', price: '¥800' }
          ]
        }
      ],
      userReviews: [
        { author: '大阪グルメ', score: 4, date: '2026-01-26', text: 'アボカドが新鮮。難波で本格的なメキシコ。' },
        { author: 'グループ', score: 4, date: '2025-12-03', text: 'ワイワイできます。大人数向け。' }
      ]
    },
    {
      id: 38,
      tabelogScore: 3.9,
      name: 'TACOS EL NOPAL',
      area: '大阪',
      neighborhood: '淀川区十三',
      real: true,
      style: '本格メキシコ',
      price: '¥¥',
      score: 87,
      reviews: 330,
      emoji: '🌮',
      tags: ['本格メキシコ', 'メキシコ人店主', 'アットホーム', '隠れ家'],
      desc: 'メキシコ人店主による本格メキシコ料理。十三の隠れ家的なタコス屋。メキシコの真の味が味わえます。',
      address: '大阪府大阪市淀川区十三本町1-8-5',
      hours: '17:00-24:00',
      closed: '月曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'カルニータス', desc: 'メキシコ伝統のポークタコス', price: '¥700' },
            { name: 'パストル', desc: 'スパイス香るタコス', price: '¥680' }
          ]
        },
        {
          cat: '🥃 メキシコ料理',
          items: [
            { name: 'チレスレノス', desc: 'メキシコ伝統料理', price: '¥900' }
          ]
        }
      ],
      userReviews: [
        { author: 'メキシコ好き', score: 5, date: '2026-02-08', text: 'メキシコ人の作る本当のメキシコ。十三に来たら必須。' },
        { author: 'グルメ', score: 5, date: '2025-11-25', text: '本物のメキシコの味。隠れ家的で好き。' }
      ]
    },
    {
      id: 39,
      tabelogScore: 3.7,
      name: 'campe-chano',
      area: '大阪',
      neighborhood: '中央区心斎橋',
      real: true,
      style: 'テックスメックス',
      price: '¥¥',
      score: 81,
      reviews: 280,
      emoji: '🌮',
      tags: ['テックスメックス', 'ナイトスポット', 'カジュアル', '心斎橋'],
      desc: '心斎橋のナイトスポット近くにあるカジュアルなテックスメックス。気軽に立ち寄れる雰囲気が人気。',
      address: '大阪府大阪市中央区心斎橋2-8-15',
      hours: '18:00-24:00',
      closed: '水曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'シンプルタコス', desc: 'ビーフ、チキン、ポーク', price: '¥480' },
            { name: 'トリプルタコス', desc: '３種類のタコス', price: '¥1200' }
          ]
        },
        {
          cat: '🍺 ドリンク',
          items: [
            { name: 'メキシコビール', desc: 'コロナ、モデロ', price: '¥700' }
          ]
        }
      ],
      userReviews: [
        { author: '心斎橋ナイト', score: 4, date: '2026-01-20', text: 'ナイトアウト後に最高。気軽に食べられる。' },
        { author: 'カジュアル好き', score: 4, date: '2025-12-09', text: 'リラックス感が好き。また来たい。' }
      ]
    },
    {
      id: 40,
      tabelogScore: 3.8,
      name: 'タコスと肴と酒 タコフィニ',
      area: '大阪',
      neighborhood: '北区梅田',
      real: true,
      style: 'フュージョン',
      price: '¥¥',
      score: 83,
      reviews: 290,
      emoji: '🌮',
      tags: ['フュージョン', '居酒屋風', '梅田', 'お酒向け'],
      desc: '梅田の居酒屋風タコス店。メキシコ料理と日本酒や焼酎を組み合わせたユニークなコンセプト。酒飲み向け。',
      address: '大阪府大阪市北区梅田2-5-8',
      hours: '17:00-24:00',
      closed: '日曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'さけタコス', desc: '酒粕を使ったタコス', price: '¥650' },
            { name: 'おでんタコス', desc: 'おでんの具を使ったタコス', price: '¥700' }
          ]
        },
        {
          cat: '🍶 ドリンク',
          items: [
            { name: '日本酒セット', desc: '地酒とタコス', price: '¥1500' }
          ]
        }
      ],
      userReviews: [
        { author: 'お酒好き', score: 4, date: '2026-02-01', text: 'ユニークな組み合わせ。日本酒とタコスが合う。' },
        { author: '居酒屋好き', score: 4, date: '2025-12-17', text: 'メキシコと日本の融合。新しい世界。' }
      ]
    },
    {
      id: 41,
      tabelogScore: 3.6,
      name: 'EL PANCHO',
      area: '大阪',
      neighborhood: '阿倍野区天王寺',
      real: true,
      style: 'テックスメックス',
      price: '¥¥',
      score: 80,
      reviews: 240,
      emoji: '🌮',
      tags: ['テックスメックス', '天王寺駅近', 'ショッピング', 'ファミリー'],
      desc: '天王寺駅近くのショッピング向けテックスメックス。ファミリー向けのボリュームたっぷりメニュー。',
      address: '大阪府大阪市阿倍野区阿倍野筋1-2-3',
      hours: '11:00-21:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'ビッグタコス', desc: '大きなタコス', price: '¥650' },
            { name: 'キッズタコス', desc: 'お子様向け', price: '¥450' }
          ]
        },
        {
          cat: '🍟 キッズメニュー',
          items: [
            { name: 'キッズコンボ', desc: 'タコス、フライドポテト、ドリンク', price: '¥680' }
          ]
        }
      ],
      userReviews: [
        { author: 'ファミリー', score: 4, date: '2026-01-18', text: 'ショッピング後に最適。子供たちが好き。' },
        { author: '買い物ママ', score: 3, date: '2025-12-07', text: 'ファミリーフレンドリー。ボリュームがある。' }
      ]
    },
    {
      id: 42,
      tabelogScore: 3.8,
      name: 'CASA DE SARASA 大阪店',
      area: '大阪',
      neighborhood: '中央区南船場',
      real: true,
      style: 'フュージョン',
      price: '¥¥',
      score: 82,
      reviews: 270,
      emoji: '🌮',
      tags: ['フュージョン', 'チェーン店', '南船場', 'トレンド'],
      desc: '渋谷で人気の店舗が大阪でも展開。フュージョンメキシコ料理が南船場で楽しめます。トレンド好きに人気。',
      address: '大阪府大阪市中央区南船場3-5-10',
      hours: '11:30-23:00',
      closed: '火曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 フュージョンタコス',
          items: [
            { name: 'ラーメンタコス', desc: 'ラーメンをタコスに', price: '¥700' },
            { name: 'たこ焼きタコス', desc: 'たこ焼きの具を使用', price: '¥750' }
          ]
        },
        {
          cat: '🍜 ハイブリッド',
          items: [
            { name: 'うどんタコス', desc: '大阪風うどんタコス', price: '¥800' }
          ]
        }
      ],
      userReviews: [
        { author: '大阪トレンド好き', score: 4, date: '2026-02-03', text: '大阪にもあった。フュージョンが新鮮。' },
        { author: '渋谷好き', score: 4, date: '2025-11-29', text: '渋谷と同じクオリティ。大阪でも最高。' }
      ]
    },
    {
      id: 43,
      tabelogScore: 3.7,
      name: 'Guzman y Gomez なんばパークス店',
      area: '大阪',
      neighborhood: '浪速区難波',
      real: true,
      style: 'オーストラリア',
      price: '¥¥',
      score: 81,
      reviews: 260,
      emoji: '🌮',
      tags: ['オーストラリア系', 'ショッピングモール', 'フレッシュ', 'ポップ'],
      desc: 'なんばパークスのオーストラリア系タコス。ショッピングの合間に気軽に立ち寄れるポップな雰囲気。',
      address: '大阪府大阪市浪速区難波中2-10-70 なんばパークス内',
      hours: '10:30-21:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'チキンタコス', desc: 'グラスフェッドチキン', price: '¥680' },
            { name: 'ビーフタコス', desc: 'オーストラリアン牛肉', price: '¥720' }
          ]
        },
        {
          cat: '🥤 ドリンク',
          items: [
            { name: 'オーストラリアンシェイク', desc: 'フルーツシェイク', price: '¥550' }
          ]
        }
      ],
      userReviews: [
        { author: 'ショッピング女性', score: 4, date: '2026-01-25', text: 'ショッピングついでに。フレッシュで美味しい。' },
        { author: 'オーストラリア好き', score: 4, date: '2025-12-13', text: 'オーストラリアの味。大阪でも楽しめます。' }
      ]
    },
    {
      id: 44,
      tabelogScore: 3.6,
      name: 'Taco Bell 道頓堀店',
      area: '大阪',
      neighborhood: '中央区道頓堀',
      real: true,
      style: 'テックスメックス',
      price: '¥',
      score: 78,
      reviews: 180,
      emoji: '🌮',
      tags: ['テックスメックス', 'ファストフード', '道頓堀', 'リーズナブル'],
      desc: '道頓堀のタコベル。観光地のファストフードとして気軽に立ち寄れます。観光客に人気。',
      address: '大阪府大阪市中央区道頓堀1-5-8',
      hours: '11:00-23:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'オリジナルタコス', desc: 'クラシックな味', price: '¥300' },
            { name: 'テリヤキタコス', desc: '照り焼きソース使用', price: '¥350' }
          ]
        },
        {
          cat: '🍔 セット',
          items: [
            { name: 'タコスコンボセット', desc: 'タコス2個とドリンク', price: '¥650' }
          ]
        }
      ],
      userReviews: [
        { author: '観光客', score: 3, date: '2026-01-31', text: '道頓堀の観光ついでに。気軽で美味しい。' },
        { author: '旅行者', score: 3, date: '2025-12-19', text: 'ファストフードだけどリーズナブル。次の目的地へ。' }
      ]
    }
  ];楽しめます。リーズナブルな価格が魅力。',
      address: '大阪府大阪市中央区道頓堀1-8-12',
      hours: '10:00-22:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'スタンダードタコス', desc: 'シンプルで美味しい', price: '¥290' },
            { name: 'グランデタコス', desc: '大きなサイズ', price: '¥480' }
          ]
        },
        {
          cat: '🍔 セット',
          items: [
            { name: 'タコスセット', desc: 'ドリンク、ポテト付き', price: '¥950' }
          ]
        }
      ],
      userReviews: [
        { author: '観光客', score: 4, date: '2026-02-07', text: '道頓堀に来たら。リーズナブルで美味しい。' },
        { author: 'グルメ観光', score: 3, date: '2025-12-22', text: 'ファストフードなので限界。でも安い。' }
      ]
    },
    {
      id: 45,
      tabelogScore: 3.7,
      name: 'メキシカーナ',
      area: '大阪',
      neighborhood: '中央区天満橋',
      real: true,
      style: '本格メキシコ',
      price: '¥¥',
      score: 80,
      reviews: 220,
      emoji: '🌮',
      tags: ['本格メキシコ', '天満橋', 'アットホーム', '地元愛'],
      desc: '天満橋の地元愛が溢れるメキシカーナ。本格的なメキシコ料理をアットホームな雰囲気で楽しめます。',
      address: '大阪府大阪市中央区北浜東1-8-5',
      hours: '17:00-23:00',
      closed: '月曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'チキンタコス', desc: 'アットホームな味', price: '¥550' },
            { name: 'ポークタコス', desc: 'メキシコ伝統', price: '¥600' }
          ]
        },
        {
          cat: '🥑 サイド',
          items: [
            { name: 'グアカモーレ', desc: 'アボカドディップ', price: '¥450' }
          ]
        }
      ],
      userReviews: [
        { author: '地元民', score: 4, date: '2026-01-17', text: 'アットホームで好き。いつもの味。' },
        { author: 'グルメ訪問', score: 4, date: '2025-11-30', text: '本格的で本当に美味しい。地元愛感じます。' }
      ]
    },
    {
      id: 46,
      tabelogScore: 3.9,
      name: 'JERRY\'S UNO',
      area: '名古屋',
      neighborhood: '昭和区鶴舞',
      real: true,
      style: 'テックスメックス',
      price: '¥¥',
      score: 85,
      reviews: 310,
      emoji: '🌮',
      tags: ['テックスメックス', '鶴舞駅近', 'ファミリー向け', 'ボリューム'],
      desc: '名古屋の鶴舞駅近くのテックスメックス。ボリュームたっぷりのメニューがファミリーに人気。',
      address: '愛知県名古屋市昭和区鶴舞1-3-7',
      hours: '11:00-22:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'ビッグボリュームタコス', desc: 'ボリューム満点', price: '¥700' },
            { name: 'ダブルミートタコス', desc: '肉が２倍', price: '¥750' }
          ]
        },
        {
          cat: '🍟 セット',
          items: [
            { name: 'ジェリーズセット', desc: 'タコス、フライド、ドリンク', price: '¥1200' }
          ]
        }
      ],
      userReviews: [
        { author: 'ボリューム好き', score: 4, date: '2026-02-02', text: 'ボリュームがすごい。食べ盛りの子供たちが大満足。' },
        { author: 'ファミリー', score: 4, date: '2025-12-20', text: '名古屋来たら必須。ボリュームがいい。' }
      ]
    },
    {
      id: 47,
      tabelogScore: 4.1,
      name: 'Sayulita',
      area: '名古屋',
      neighborhood: '中区大須',
      real: true,
      style: '本格メキシコ',
      price: '¥¥¥',
      score: 91,
      reviews: 420,
      emoji: '🌮',
      tags: ['本格メキシコ', 'メキシコ人シェフ', '大須', 'グルメ街'],
      desc: 'メキシコ人シェフによる本格メキシコ料理。大須のグルメ街にあり、メキシコの本当の味が楽しめます。',
      address: '愛知県名古屋市中区大須3-18-9',
      hours: '17:00-23:00',
      closed: '月曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'カルニータス', desc: 'メキシコシェフのこだわり', price: '¥850' },
            { name: 'チレンキレス', desc: 'メキシコ伝統料理', price: '¥900' }
          ]
        },
        {
          cat: '🥃 メキシコ料理',
          items: [
            { name: 'エンチラーダ', desc: 'チーズソース付き', price: '¥1100' }
          ]
        }
      ],
      userReviews: [
        { author: 'メキシコ好き', score: 5, date: '2026-01-23', text: 'メキシコ人の本気。大須に本当のメキシコがある。' },
        { author: 'グルメ名古屋', score: 5, date: '2025-11-28', text: 'シェフの情熱が伝わる。本物のメキシコ。' }
      ]
    },
    {
      id: 48,
      tabelogScore: 3.8,
      name: 'Hot Spice MUCHO CHICKEN',
      area: '名古屋',
      neighborhood: '中区栄',
      real: true,
      style: 'テックスメックス',
      price: '¥¥',
      score: 83,
      reviews: 280,
      emoji: '🌮',
      tags: ['テックスメックス', 'チキン特化', '栄', 'スパイシー'],
      desc: 'スパイシーなチキンを使ったテックスメックス。栄の繁華街にあり、チキン好きに人気。',
      address: '愛知県名古屋市中区栄3-9-5',
      hours: '11:00-23:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 チキンタコス',
          items: [
            { name: 'マッチョスパイシーチキン', desc: 'スパイスが効いてる', price: '¥680' },
            { name: 'グリルドチキン', desc: 'マイルドな味付け', price: '¥650' }
          ]
        },
        {
          cat: '🍛 スパイス',
          items: [
            { name: 'ムーチョスパイスセット', desc: 'スパイス３段階', price: '¥1300' }
          ]
        }
      ],
      userReviews: [
        { author: 'スパイシー好き', score: 4, date: '2026-02-04', text: 'スパイシーで最高。辛い物好きには天国。' },
        { author: 'チキン好き', score: 4, date: '2025-12-16', text: 'チキンが美味しい。毎週来てます。' }
      ]
    },
    {
      id: 49,
      tabelogScore: 3.7,
      name: 'Guzman y Gomez 名古屋パルコ店',
      area: '名古屋',
      neighborhood: '中区栄',
      real: true,
      style: 'オーストラリア',
      price: '¥¥',
      score: 81,
      reviews: 240,
      emoji: '🌮',
      tags: ['オーストラリア系', 'ショッピングモール', 'フレッシュ', 'ポップ'],
      desc: 'オーストラリア系タコスが名古屋パルコに登場。ショッピングの合間に気軽に立ち寄れます。',
      address: '愛知県名古屋市中区栄3-6-1 パルコ内',
      hours: '10:00-20:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'ポーロロコ', desc: 'チキン、ベーコン、チーズ', price: '¥700' },
            { name: 'ビーフタコス', desc: 'オーストラリアンビーフ', price: '¥750' }
          ]
        },
        {
          cat: '🥗 サラダ',
          items: [
            { name: 'グズマンサラダ', desc: 'フレッシュ野菜たっぷり', price: '¥850' }
          ]
        }
      ],
      userReviews: [
        { author: 'ショッピング女性', score: 4, date: '2026-01-27', text: 'パルコで気軽に。フレッシュで美味しい。' },
        { author: 'グローバル好き', score: 4, date: '2025-12-11', text: 'オーストラリアの味。名古屋でも最高。' }
      ]
    },
    {
      id: 50,
      tabelogScore: 3.9,
      name: 'オラレ',
      area: '京都',
      neighborhood: '中京区四条烏丸',
      real: true,
      style: '本格メキシコ',
      price: '¥¥¥',
      score: 86,
      reviews: 340,
      emoji: '🌮',
      tags: ['本格メキシコ', '京都中心部', '雰囲気', 'ディナー'],
      desc: '京都の中心地にある本格メキシコレストラン。京都の古都の雰囲気とメキシコの料理が融合した素敵な空間。',
      address: '京都府京都市中京区西四条通烏丸東入御池上ル',
      hours: '17:00-23:00',
      closed: '月曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'オラレスペシャル', desc: 'シェフのおすすめ', price: '¥900' },
            { name: 'トラディショナルタコス', desc: 'メキシコ伝統', price: '¥850' }
          ]
        },
        {
          cat: '🍷 ワイン',
          items: [
            { name: 'メキシコワイン', desc: 'テキーラペアリング', price: '¥1500' }
          ]
        }
      ],
      userReviews: [
        { author: '京都グルメ', score: 5, date: '2026-02-05', text: '京都らしい本格メキシコ。空間が最高。' },
        { author: 'ディナーデート', score: 5, date: '2025-12-02', text: 'デートに最適。京都の雰囲気が素敵。' }
      ]
    },
    {
      id: 51,
      tabelogScore: 3.6,
      name: 'ロティーチキン&ジャッキータコス',
      area: '京都',
      neighborhood: '中京区四条',
      real: true,
      style: 'フュージョン',
      price: '¥¥',
      score: 79,
      reviews: 210,
      emoji: '🌮',
      tags: ['フュージョン', 'タイ料理融合', '四条', 'ポップ'],
      desc: 'タイ料理とメキシコ料理の融合。四条商店街の面白い組み合わせ。新しい食の世界を提供しています。',
      address: '京都府京都市中京区四条通猩々町角',
      hours: '11:00-22:00',
      closed: '水曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 フュージョンタコス',
          items: [
            { name: 'ロティータコス', desc: 'タイのロティーを使用', price: '¥650' },
            { name: 'チキンジャッキータコス', desc: 'タイの鶏肉料理を融合', price: '¥700' }
          ]
        },
        {
          cat: '🥗 ハイブリッド',
          items: [
            { name: 'タイメキシコサラダ', desc: 'パクチーたっぷり', price: '¥800' }
          ]
        }
      ],
      userReviews: [
        { author: 'フュージョン好き', score: 4, date: '2026-01-19', text: 'タイとメキシコ。面白い組み合わせ。' },
        { author: 'ポップ好き', score: 3, date: '2025-12-08', text: 'ユニーク。ちょっと濃い目の味。' }
      ]
    },
    {
      id: 52,
      tabelogScore: 4.2,
      name: 'チャーリー多幸寿 本店',
      area: '沖縄',
      neighborhood: '沖縄市',
      real: true,
      style: '沖縄タコス',
      price: '¥',
      score: 90,
      reviews: 480,
      emoji: '🌮',
      tags: ['沖縄タコス', '1956年創業', '老舗', '伝説的'],
      desc: '1956年創業の沖縄タコスの伝説的な老舗。アメリカ統治下の沖縄でタコス文化が根付いた貴重な店。地元民に愛される味。',
      address: '沖縄県沖縄市中央1-1-14',
      hours: '10:00-19:00',
      closed: '月曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: '沖縄チャーリータコス', desc: '伝統的な沖縄タコス', price: '¥350' },
            { name: 'スパイシータコス', desc: '少し辛めの味付け', price: '¥380' }
          ]
        },
        {
          cat: '🍚 タコライス',
          items: [
            { name: 'チャーリータコライス', desc: '伝統的なタコライス', price: '¥650' }
          ]
        }
      ],
      userReviews: [
        { author: '沖縄地元民', score: 5, date: '2026-01-14', text: '70年の歴史。沖縄タコスの伝説。生涯で一度は食べるべき。' },
        { author: '観光客', score: 5, date: '2025-12-06', text: 'こんな有名な店があったんだ。沖縄の文化がここにある。' }
      ]
    },
    {
      id: 53,
      tabelogScore: 4.1,
      name: 'キングタコス 金武本店',
      area: '沖縄',
      neighborhood: '金武町',
      real: true,
      style: '沖縄タコス',
      price: '¥',
      score: 89,
      reviews: 420,
      emoji: '🌮',
      tags: ['沖縄タコス', 'タコライス発祥', '金武町', 'レジェンド'],
      desc: 'タコライス発祥の地として知られるキングタコス。金武町の本店で沖縄の食文化の歴史を感じられます。',
      address: '沖縄県国頭郡金武町金武4247',
      hours: '10:00-20:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'キングタコス', desc: '金武発祥のタコス', price: '¥400' },
            { name: 'ダブルタコス', desc: 'ダブルサイズ', price: '¥650' }
          ]
        },
        {
          cat: '🍚 タコライス',
          items: [
            { name: 'キングタコライス', desc: 'タコライス発祥の味', price: '¥700' }
          ]
        }
      ],
      userReviews: [
        { author: 'タコライス好き', score: 5, date: '2026-02-08', text: 'タコライス発祥地。沖縄に来たら必須中の必須。' },
        { author: '沖縄ファン', score: 5, date: '2025-11-21', text: 'レジェンド店。歴史と味の融合。' }
      ]
    }, },
        { author: '食文化家', score: 5, date: '2025-11-20', text: 'レジェンド。沖縄文化の象徴。' }
      ]
    },
    {
      id: 54,
      tabelogScore: 3.9,
      name: 'キングタコス 長田店',
      area: '沖縄',
      neighborhood: '那覇市',
      real: true,
      style: '沖縄タコス',
      price: '¥',
      score: 85,
      reviews: 350,
      emoji: '🌮',
      tags: ['沖縄タコス', '那覇市', 'チェーン店', 'リーズナブル'],
      desc: 'タコライス発祥のキングタコスが那覇にも出店。那覇市内で気軽に沖縄タコスが楽しめます。',
      address: '沖縄県那覇市長田1-8-15',
      hours: '10:00-19:00',
      closed: '日曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'キングタコス', desc: 'シンプルで美味しい', price: '¥380' },
            { name: 'チキンタコス', desc: 'チキン版', price: '¥400' }
          ]
        },
        {
          cat: '🍚 セット',
          items: [
            { name: 'タコライスセット', desc: 'ドリンク付き', price: '¥850' }
          ]
        }
      ],
      userReviews: [
        { author: '那覇在住', score: 4, date: '2026-01-21', text: 'いつも来てます。那覇での定番。' },
        { author: '観光客', score: 4, date: '2025-12-19', text: '那覇でキングタコス。沖縄の味。' }
      ]
    },
    {
      id: 55,
      tabelogScore: 3.8,
      name: 'タコス専門店 メキシコ',
      area: '沖縄',
      neighborhood: '宜野湾市',
      real: true,
      style: '沖縄タコス',
      price: '¥',
      score: 82,
      reviews: 280,
      emoji: '🌮',
      tags: ['沖縄タコス', '1977年創業', '老舗', 'ファミリー向け'],
      desc: '1977年創業の老舗タコス店。沖縄でアメリカンスタイルのタコスを提供してきた伝統店。',
      address: '沖縄県宜野湾市真志喜1-1-1',
      hours: '10:00-20:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'メキシコタコス', desc: 'アメリカンスタイル', price: '¥420' },
            { name: 'チーズタコス', desc: 'チーズたっぷり', price: '¥480' }
          ]
        },
        {
          cat: '🍙 沖縄メニュー',
          items: [
            { name: 'タコライス', desc: '沖縄風', price: '¥700' }
          ]
        }
      ],
      userReviews: [
        { author: '宜野湾地元民', score: 4, date: '2026-02-01', text: '50年近くの歴史。懐かしい味。' },
        { author: '家族', score: 4, date: '2025-12-25', text: 'アットホームで好き。子供たちも好き。' }
      ]
    },
    {
      id: 56,
      tabelogScore: 3.7,
      name: 'SENOR TACO',
      area: '沖縄',
      neighborhood: '沖縄市',
      real: true,
      style: '沖縄タコス',
      price: '¥',
      score: 81,
      reviews: 260,
      emoji: '🌮',
      tags: ['沖縄タコス', 'アメリカンスタイル', 'カジュアル'],
      desc: 'アメリカンスタイルの沖縄タコス。沖縄市でカジュアルに楽しめるタコスレストラン。',
      address: '沖縄県沖縄市中央1-5-8',
      hours: '11:00-21:00',
      closed: '月曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'セニョールタコス', desc: 'シェフのおすすめ', price: '¥450' },
            { name: 'スタンダード', desc: 'シンプルなタコス', price: '¥380' }
          ]
        },
        {
          cat: '🥙 ブリトー',
          items: [
            { name: 'ビッグブリトー', desc: 'たっぷり入ってます', price: '¥850' }
          ]
        }
      ],
      userReviews: [
        { author: '沖縄ナイト', score: 4, date: '2026-01-16', text: 'カジュアルで気軽。沖縄市の食事には最適。' },
        { author: 'アメリカン好き', score: 4, date: '2025-12-04', text: 'アメリカンスタイル。沖縄の時間が流れてます。' }
      ]
    },
    {
      id: 57,
      tabelogScore: 3.6,
      name: 'BORRACHOS',
      area: '沖縄',
      neighborhood: '那覇市',
      real: true,
      style: '沖縄タコス',
      price: '¥¥',
      score: 78,
      reviews: 190,
      emoji: '🍺',
      tags: ['沖縄タコス', 'ナイトスポット', 'バー感覚', 'お酒'],
      desc: 'バー感覚で沖縄タコスが楽しめるナイトスポット。那覇の夜間営業で大人の沖縄タコスを体験できます。',
      address: '沖縄県那覇市那覇市松山1-1-12',
      hours: '18:00-24:00',
      closed: '月曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'バーボラッチョスタコス', desc: 'お酒に合う', price: '¥550' },
            { name: 'チリコーンカン', desc: '辛めのスパイス', price: '¥600' }
          ]
        },
        {
          cat: '🍺 ドリンク',
          items: [
            { name: '沖縄ビール', desc: 'オリオンビール', price: '¥700' }
          ]
        }
      ],
      userReviews: [
        { author: 'ナイトライフ', score: 4, date: '2026-02-09', text: 'バー感覚で沖縄タコス。新しい世界。' },
        { author: 'お酒好き', score: 3, date: '2025-11-27', text: 'お酒に合う。ただ少し高め。' }
      ]
    },
    {
      id: 58,
      tabelogScore: 3.8,
      name: 'ランチョエルパソ by ESTARICO',
      area: '北海道',
      neighborhood: '札幌市中央区すすきの',
      real: true,
      style: 'テックスメックス',
      price: '¥¥',
      score: 84,
      reviews: 300,
      emoji: '🌮',
      tags: ['テックスメックス', 'すすきの', 'ナイトスポット', 'チェーン'],
      desc: 'すすきの繁華街のテックスメックスチェーン。ナイトアウト後の食事やグループ向けのボリューム満点メニューが特徴。',
      address: '北海道札幌市中央区南7条西3-8-12',
      hours: '17:00-24:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'ビーフタコス', desc: 'ボリューム満点', price: '¥600' },
            { name: 'チキンタコス', desc: 'グリルドチキン', price: '¥580' }
          ]
        },
        {
          cat: '🥙 ブリトー',
          items: [
            { name: 'グランデブリトー', desc: '大きなサイズ', price: '¥950' }
          ]
        }
      ],
      userReviews: [
        { author: 'すすきの好き', score: 4, date: '2026-01-24', text: 'ナイトアウト後に最高。ボリュームがいい。' },
        { author: 'グループ', score: 4, date: '2025-12-09', text: 'わいわいできます。札幌の定番。' }
      ]
    },
    {
      id: 59,
      tabelogScore: 3.9,
      name: '唸るタコス',
      area: '福岡',
      neighborhood: '福岡市中央区大濠',
      real: true,
      style: 'テックスメックス',
      price: '¥¥',
      score: 87,
      reviews: 330,
      emoji: '🌮',
      tags: ['テックスメックス', '大濠公園', 'ポップ', 'インスタ映え'],
      desc: '大濠公園近くのポップなテックスメックス。「唸る」という名前の通り、食べると思わず唸ってしまう美味しさ。',
      address: '福岡県福岡市中央区大濠2-1-5',
      hours: '11:00-23:00',
      closed: '月曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: '唸るタコス', desc: '唸る美味しさ', price: '¥650' },
            { name: 'スパイシー唸る', desc: '辛めバージョン', price: '¥680' }
          ]
        },
        {
          cat: '🥑 サイド',
          items: [
            { name: 'グアカモーレたっぷり', desc: 'アボカド使い放題', price: '¥700' }
          ]
        }
      ],
      userReviews: [
        { author: 'グルメ福岡', score: 5, date: '2026-02-03', text: '本当に唸る。福岡で一番美味しいタコス。' },
        { author: 'インスタ好き', score: 4, date: '2025-12-14', text: 'インスタ映えする。写真と味どちらも素敵。' }
      ]
    },
    {
      id: 60,
      tabelogScore: 3.7,
      name: '琉球多幸寿 福岡店',
      area: '福岡',
      neighborhood: '福岡市博多区',
      real: true,
      style: '沖縄タコス',
      price: '¥',
      score: 81,
      reviews: 240,
      emoji: '🌮',
      tags: ['沖縄タコス', 'チェーン展開', 'リーズナブル'],
      desc: '沖縄発祥の琉球多幸寿が福岡に出店。沖縄タコスの伝統をリーズナブルに楽しめます。',
      address: '福岡県福岡市博多区那珂1-2-3',
      hours: '10:00-20:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: '琉球タコス', desc: '沖縄の味', price: '¥400' },
            { name: 'タコライス', desc: 'ご飯の上にタコスの具', price: '¥700' }
          ]
        },
        {
          cat: '🍙 沖縄メニュー',
          items: [
            { name: 'スパムむすび', desc: '沖縄定番', price: '¥500' }
          ]
        }
      ],
      userReviews: [
        { author: '沖縄好き', score: 4, date: '2026-01-28', text: '福岡でも沖縄の味。沖縄は遠いですが、ここで満足。' },
        { author: 'リーズナブル派', score: 4, date: '2025-12-06', text: '安くて美味しい。福岡の定番になった。' }
      ]
    },
    {
      id: 61,
      tabelogScore: 3.9,
      name: 'La Fiesta',
      area: '神奈川',
      neighborhood: '横浜市中区元町',
      real: true,
      style: '本格メキシコ',
      price: '¥¥',
      score: 86,
      reviews: 310,
      emoji: '🌮',
      tags: ['本格メキシコ', '横浜元町', 'オシャレ', 'デート向け'],
      desc: '横浜元町の雰囲気の良いメキシカン。本格的なメキシコ料理をオシャレな空間で堪能できます。',
      address: '神奈川県横浜市中区元町1-8-5',
      hours: '17:00-23:00',
      closed: '月曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'フィエスタタコス', desc: 'パーティー気分', price: '¥700' },
            { name: 'グアカモーレタコス', desc: 'アボカドたっぷり', price: '¥750' }
          ]
        },
        {
          cat: '🍷 ワイン',
          items: [
            { name: 'メキシコワイン', desc: 'ワインペアリング', price: '¥1200' }
          ]
        }
      ],
      userReviews: [
        { author: '横浜デート族', score: 5, date: '2026-02-07', text: 'デートに最適。元町の雰囲気が素敵。' },
        { author: 'グルメ横浜', score: 4, date: '2025-12-01', text: '本格的で美味しい。横浜の新定番。' }
      ]
    },
    {
      id: 62,
      tabelogScore: 3.8,
      name: 'Guzman y Gomez 横浜店',
      area: '神奈川',
      neighborhood: '横浜市西区',
      real: true,
      style: 'オーストラリア',
      price: '¥¥',
      score: 83,
      reviews: 270,
      emoji: '🌮',
      tags: ['オーストラリア系', '横浜駅近', 'フレッシュ'],
      desc: 'オーストラリア系タコスが横浜に上陸。横浜駅近くでアクセスが良く、フレッシュなメニューが人気。',
      address: '神奈川県横浜市西区高島2-13-8',
      hours: '11:00-22:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'ポーロロコ', desc: 'チキン、ベーコン、チーズ', price: '¥680' },
            { name: 'ビーフスーパータコス', desc: 'オーストラリアンビーフ', price: '¥700' }
          ]
        },
        {
          cat: '🥤 ドリンク',
          items: [
            { name: 'グズマンシェイク', desc: 'フルーツシェイク', price: '¥550' }
          ]
        }
      ],
      userReviews: [
        { author: '横浜ワーカー', score: 4, date: '2026-01-22', text: 'ランチに最適。駅から近い。' },
        { author: 'オーストラリア好き', score: 4, date: '2025-12-20', text: 'フレッシュで美味しい。横浜の新選択肢。' }
      ]
    },
    {
      id: 63,
      tabelogScore: 3.7,
      name: 'Umacchi Tacos',
      area: '兵庫',
      neighborhood: '神戸市中央区三宮',
      real: true,
      style: 'フュージョン',
      price: '¥¥',
      score: 82,
      reviews: 260,
      emoji: '🌮',
      tags: ['フュージョン', '神戸三宮', 'ユニーク', 'モダン'],
      desc: '神戸のモダンなフュージョンタコス。洋風とメキシコンを組み合わせたユニークなメニュー。',
      address: '兵庫県神戸市中央区三宮町1-5-8',
      hours: '11:00-22:00',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 フュージョンタコス',
          items: [
            { name: 'うまっちスペシャル', desc: 'シェフのこだわり', price: '¥700' },
            { name: 'トリュフタコス', desc: '高級感のあるタコス', price: '¥850' }
          ]
        },
        {
          cat: '🍷 プレミアム',
          items: [
            { name: 'ワインペアリング', desc: '３コース', price: '¥3500' }
          ]
        }
      ],
      userReviews: [
        { author: '神戸グルメ', score: 5, date: '2026-02-02', text: 'モダンで素敵。神戸らしい高級感。' },
        { author: 'デート族', score: 5, date: '2025-11-24', text: '特別な日に最適。二人の思い出が作れます。' }
      ]
    }, { author: 'グルメ神戸', score: 4, date: '2026-02-04', text: 'モダンで美味しい。神戸らしいフュージョン。' },
        { author: '三宮働き女性', score: 4, date: '2025-12-12', text: 'ユニークで好き。毎週来たい。' }
      ]
    },
    {
      id: 64,
      tabelogScore: 3.6,
      name: 'Don Tacos',
      area: '宮城',
      neighborhood: '仙台市青葉区木町通',
      real: true,
      style: 'テックスメックス',
      price: '¥¥',
      score: 80,
      reviews: 210,
      emoji: '🌮',
      tags: ['テックスメックス', '仙台駅近', 'ボリューム', 'カジュアル'],
      desc: '仙台の木町通にあるカジュアルなテックスメックス。ボリューム満点のメニューが会社員に人気。',
      address: '宮城県仙台市青葉区木町通1-1-5',
      hours: '11:00-22:00',
      closed: '月曜日',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'ドンボリュームタコス', desc: 'ボリューム満点', price: '¥650' },
            { name: 'ダブルタコス', desc: 'ダブル肉', price: '¥750' }
          ]
        },
        {
          cat: '🥙 ブリトー',
          items: [
            { name: 'ドンブリトー', desc: 'ボリュームブリトー', price: '¥950' }
          ]
        }
      ],
      userReviews: [
        { author: '仙台サラリーマン', score: 4, date: '2026-01-26', text: 'ボリュームがいい。コスパ最高。' },
        { author: '仙台ワーカー', score: 4, date: '2025-12-08', text: 'ランチに来てます。毎回満足。' }
      ]
    }
  ];

  // Merge into existing stores array
  if (typeof stores !== 'undefined') {
    stores.push(...newStores);
  }
});

// Additional stores data - part 2
(function() {
  const newStores2 = [
    // 東京追加 (IDs 65-74)
    {
      id: 65,
      tabelogScore: 4.2,
      name: 'Taco Bell 渋谷道玄坂店',
      area: '東京',
      neighborhood: '渋谷区道玄坂',
      real: true,
      style: 'テックスメックス',
      price: '¥',
      score: 78,
      reviews: 520,
      emoji: '🌮',
      tags: ['テックスメックス', '渋谷駅近', '24時間営業', 'テイクアウト'],
      desc: '渋谷道玄坂の24時間営業のタコベル。リーズナブルな価格と手軽さで学生や夜間労働者に人気。',
      address: '東京都渋谷区道玄坂2-10-7',
      hours: '24時間',
      closed: 'なし',
      url: '#',
      menu: [
        {
          cat: '🌮 タコス',
          items: [
            { name: 'クラシックタコス', desc: 'シンプルで美味しい定番', price: '¥290' },
            { name: 'スパイシータコス', desc: 'ホットソース付き', price: '¥330' },
            { name: 'チーズタコス', desc: 'チェダーチーズ入り', price: '¥380' }
          ]
        },
        {
          cat: '🥙 ブリトー',
          items: [
            { name: 'ビーフブリトー', desc: 'ボリュームたっぷり', price: '¥650' },
            { name: 'チキンブリトー', desc: 'グリルチキン使用', price: '¥600' }
          ]
        },
        {
          cat: '🍟 サイドメニュー',
          items: [
            { name: 'ナチョスチーズ', desc: '濃厚チーズソース', price: '¥520' }
          ]
        }
      ],
      userReviews: [
        { author: '渋谷学生', score: 5, date: '2026-02-10', text: '安くて美味しい。24時間やってるから夜中でも使える。最高。' },
        { author: 'OL田中', score: 4, date: '2025-12-25', text: 'サッと食べられるから便利。味も悪くない。' }
      ]
    }
  ];

  if (typeof stores !== 'undefined' && typeof stores2 === 'undefined') {
    stores.push(...newStores2);
  }
});

})();
