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
            { name: 'グリーンチリビーフ', desc: 'ビーフ＆グリーンチリ', price: '¥550' },
            { name: 'スパイシービーフ', desc: 'スパイシーな牛肉', price: '¥600' },
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
        { author: 'トレンド好き', score: 5, date: '2026-02-06', text: 'トレンドで美味しい。毎回新しい食べ物が出てる気がする。' },
        { author: 'グルメ好き', score: 4, date: '2026-01-15', text: 'フレッシュで美味しい。トレンドに敏感な店。' },
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
  ];
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
