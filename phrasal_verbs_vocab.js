const VOCAB_BANK = [
    // --- 句動詞：Put ---
    {
        id: 1,
        type: "phrase",
        category: "Put",
        word: "put off",
        partOfSpeech: "句動詞",
        pronunciation: "/pʊt ɔːf/",
        meaning: "〜を延期する、遅らせる",
        hint: "【最頻出】= postpone。予定を「離れた場所（off）」へ「置く（put）」。call off（中止）との識別が超重要。"
    },
    {
        id: 2,
        type: "phrase",
        category: "Put",
        word: "put on",
        partOfSpeech: "句動詞",
        pronunciation: "/pʊt ɑːn/",
        meaning: "〜を着る、身につける",
        hint: "【イメージ】体に何かを「置く（put）」動作。状態を表す wear との識別問題に注意。"
    },
    {
        id: 3,
        type: "phrase",
        category: "Put",
        word: "put up with",
        partOfSpeech: "句動詞",
        pronunciation: "/pʊt ʌp wɪð/",
        meaning: "〜に耐える、我慢する",
        hint: "【3語の句動詞】= tolerate。不都合な状況や厳しい条件に耐える文脈で出題される。"
    },
    {
        id: 4,
        type: "phrase",
        category: "Put",
        word: "put together",
        partOfSpeech: "句動詞",
        pronunciation: "/pʊt report/",
        meaning: "（資料などを）まとめる、組み立てる、作成する",
        hint: "【ビジネス定番】「資料をとりまとめる(put together a report)」や「予算案を作成する」の意味でパート4、7に頻出。"
    },
    {
        id: 5,
        type: "phrase",
        category: "Put",
        word: "put through",
        partOfSpeech: "句動詞",
        pronunciation: "/pʊt θruː/",
        meaning: "（電話を）つなぐ、回線を接続する",
        hint: "【オフィス・電話応対】「Put me through to the sales department（営業部につないでください）」など、パート3の定番。"
    },

    // --- 句動詞：Run ---
    {
        id: 10,
        type: "phrase",
        category: "Run",
        word: "run into",
        partOfSpeech: "句動詞",
        pronunciation: "/rʌn ˈɪntuː/",
        meaning: "〜にばったり会う、（問題などに）直面する",
        hint: "【ビジネス文脈】偶然人に会う意味だけでなく「run into financial difficulties（財政難に直面する）」の形も頻出。"
    },
    {
        id: 11,
        type: "phrase",
        category: "Run",
        word: "run out of",
        partOfSpeech: "句動詞",
        pronunciation: "/rʌn aʊt əv/",
        meaning: "〜が尽きる、足りなくなる",
        hint: "【パート5・6鉄板】「run out of office supplies（事務用品を使い果たす）」など。out / of の空欄補填が狙われる。"
    },
    {
        id: 12,
        type: "phrase",
        category: "Run",
        word: "run by",
        partOfSpeech: "句動詞",
        pronunciation: "/rʌn baɪ/",
        meaning: "〜に相談する、意見を求める、提案する",
        hint: "【ビジネス口語】「Let me run this by my supervisor.（これを上司に確認させてください）」パート3のリスニングで重要。"
    },
    {
        id: 13,
        type: "phrase",
        category: "Run",
        word: "run short of",
        partOfSpeech: "句動詞",
        pronunciation: "/rʌn ʃɔːrt əv/",
        meaning: "〜が不足してきている",
        hint: "【状態の変化】run out ofは「完全にゼロ」。run short ofは「在庫が減ってきて足りない（まだ少しある）」状態。"
    },

    // --- 句動詞：Call ---
    {
        id: 20,
        type: "phrase",
        category: "Call",
        word: "call off",
        partOfSpeech: "句動詞",
        pronunciation: "/kɔːl ɔːf/",
        meaning: "〜を中止する、取り消す",
        hint: "【超頻出】= cancel。悪天候や諸事情で「イベントや会議を白紙に戻す」際に使われる。put off との引っ掛けに注意。"
    },
    {
        id: 21,
        type: "phrase",
        category: "Call",
        word: "call for",
        partOfSpeech: "句動詞",
        pronunciation: "/kɔːl fɔːr/",
        meaning: "〜を必要とする、要求する",
        hint: "【ビジネス文脈】「The project calls for advanced skills（プロジェクトには高度なスキルが必要だ）」や求人要件で登場。"
    },

    // --- 句動詞：Set ---
    {
        id: 30,
        type: "phrase",
        category: "Set",
        word: "set up",
        partOfSpeech: "句動詞",
        pronunciation: "/sɛt ʌp/",
        meaning: "〜を設立する、準備する、手配する",
        hint: "【万能ビジネス】= establish, arrange。「set up a meeting（会議をセッティングする）」はパート3・4の耳タコ表現。"
    },
    {
        id: 31,
        type: "phrase",
        category: "Set",
        word: "set aside",
        partOfSpeech: "句動詞",
        pronunciation: "/sɛt əˈsaɪd/",
        meaning: "（お金や時間を）取っておく、確保する",
        hint: "【予算・計画】「set aside funds for renovations（リノベーションのために資金を確保する）」など、パート7で頻出。"
    },
    {
        id: 32,
        type: "phrase",
        category: "Set",
        word: "set forth",
        partOfSpeech: "句動詞",
        pronunciation: "/sɛt fɔːrθ/",
        meaning: "（方針・規則などを）説明する、規定する",
        hint: "【契約書・社内規定】= state / explain。「the guidelines set forth in the manual（マニュアルに規定された指針）」パート6・7の難語枠。"
    },

    // --- 句動詞：Bring ---
    {
        id: 40,
        type: "phrase",
        category: "Bring",
        word: "bring up",
        partOfSpeech: "句動詞",
        pronunciation: "/brɪŋ ʌp/",
        meaning: "（話題などを）持ち出す、提起する",
        hint: "【会議の定番】= raise。「Why did she bring up the budget issue?（なぜ彼女は予算の話を持ち出したのか？）」"
    },
    {
        id: 41,
        type: "phrase",
        category: "Bring",
        word: "bring about",
        partOfSpeech: "句動詞",
        pronunciation: "/brɪŋ əˈbaʊt/",
        meaning: "〜を引き起こす、もたらす",
        hint: "【因果関係】= cause。「bring about technological innovation（技術革新をもたらす）」など、パート6・7の長文で頻出。"
    },

    // --- 句動詞：Look ---
    {
        id: 50,
        type: "phrase",
        category: "Look",
        word: "look over",
        partOfSpeech: "句動詞",
        pronunciation: "/lʊk ˈoʊvər/",
        meaning: "〜にざっと目を通す、調べる",
        hint: "【オフィス定番】= examine / review。「Could you look over this proposal?（この提案書に目を通してもらえますか？）」"
    },
    {
        id: 51,
        type: "phrase",
        category: "Look",
        word: "look into",
        partOfSpeech: "句動詞",
        pronunciation: "/lʊk ˈɪntuː/",
        meaning: "〜を調査する、調べる",
        hint: "【問題対応】= investigate。不具合やクレームに対し「We are looking into the issue.（問題を調査中です）」と返答するマスト表現。"
    },
    {
        id: 52,
        type: "phrase",
        category: "Look",
        word: "look forward to",
        partOfSpeech: "句動詞",
        pronunciation: "/lʊk ˈfɔːrwərd tuː/",
        meaning: "〜を楽しみに待つ",
        hint: "【文法問題の罠】toの後ろは「動詞の原形」ではなく「名詞」または「動名詞（-ing）」が来る。パート5の超ウブな引っかけ問題対策。"
    },

    // --- 句動詞：Fill / Carry / Turn （手続き・実行） ---
    {
        id: 60,
        type: "phrase",
        category: "Fill+Carry+Turn",
        word: "fill out",
        partOfSpeech: "句動詞",
        pronunciation: "/fɪl aʊt/",
        meaning: "（書類・フォームに）必要事項を記入する",
        hint: "【手続き定番】= complete。応募用紙やアンケート（questionnaire）の文脈。fill in も同様の意味。"
    },
    {
        id: 70,
        type: "phrase",
        category: "Fill+Carry+Turn",
        word: "carry out",
        partOfSpeech: "句動詞",
        pronunciation: "/ˈkæri aʊt/",
        meaning: "（計画・調査などを）実行する、実施する",
        hint: "【公式文書】= conduct / execute。「carry out a market survey（市場調査を実施する）」パート6・7の常連表現。"
    },
    {
        id: 80,
        type: "phrase",
        category: "Fill+Carry+Turn",
        word: "turn in",
        partOfSpeech: "句動詞",
        pronunciation: "/tɜːrn ɪn/",
        meaning: "〜を提出する",
        hint: "【オフィス・業務】= submit。「turn in the weekly report（週報を提出する）」。hand in も同じ意味でパート3・5に頻出。"
    },
    {
        id: 81,
        type: "phrase",
        category: "Fill+Carry+Turn",
        word: "turn out",
        partOfSpeech: "句動詞",
        pronunciation: "/tɜːrn aʊt/",
        meaning: "（〜という結果に）なる、判明する、〜を生産する",
        hint: "【多義語注意】「It turned out to be successful（成功だとわかった）」という結果の表現と、工場が製品を「生産する」の意味がある。"
    },
    {
        id: 82,
        type: "phrase",
        category: "Fill+Carry+Turn",
        word: "turn down",
        partOfSpeech: "句動詞",
        pronunciation: "/tɜːrn daʊn/",
        meaning: "（提案や応募を）断る、却下する、音量を下げる",
        hint: "【ビジネス拒絶】= reject / decline。「turn down an offer（オファーを断る）」の意味でビジネス文書によく登場。"
    },

    // --- 新規追加：3語の重要句動詞・その他最頻出（これで7割超えを確実に） ---
    {
        id: 90,
        type: "phrase",
        category: "Three-Word",
        word: "come up with",
        partOfSpeech: "句動詞",
        pronunciation: "/kʌm ʌp wɪð/",
        meaning: "（アイデア・計画などを）思いつく、提案する",
        hint: "【パート5・会話超頻出】「come up with a new marketing strategy（新しいマーケ戦略を思いつく）」。空欄に up や with を入れさせる問題が多数。"
    },
    {
        id: 91,
        type: "phrase",
        category: "Three-Word",
        word: "catch up with",
        partOfSpeech: "句動詞",
        pronunciation: "/kætʃ ʌp wɪð/",
        meaning: "（遅れを）取り戻す、〜に追いつく",
        hint: "【進捗管理】遅れているプロジェクトや、競合他社に「追いつく」という文脈でパート3やパート7の社内メールに出現。"
    },
    {
        id: 92,
        type: "phrase",
        category: "Three-Word",
        word: "keep up with",
        partOfSpeech: "句動詞",
        pronunciation: "/kiːp ʌp wɪð/",
        meaning: "（トレンド・周囲に）遅れずについていく",
        hint: "【市場動向】「keep up with market trends（市場のトレンドに遅れずについていく）」変化の激しいITやビジネス環境の長文で必須。"
    },
    {
        id: 100,
        type: "phrase",
        category: "Other",
        word: "take over",
        partOfSpeech: "句動詞",
        pronunciation: "/teɪk ˈoʊvər/",
        meaning: "（職務・会社などを）引き継ぐ、買収する",
        hint: "【人事・M&A】前任者の仕事を引き継ぐ（take over the position）文脈、または企業買収のニュースで確実に登場する超重要語。"
    },
    {
        id: 101,
        type: "phrase",
        category: "Other",
        word: "draw up",
        partOfSpeech: "句動詞",
        pronunciation: "/drɔː ʌp/",
        meaning: "（契約書や予定案などを）作成する、立案する",
        hint: "【契約・法務】= prepare。「draw up a contract（契約書を作成する）」の組み合わせは、パート5のコロケーション問題（相性の良い単語を選ぶ問題）で頻出。"
    },
    {
        id: 102,
        type: "phrase",
        category: "Other",
        word: "fall behind",
        partOfSpeech: "句動詞",
        pronunciation: "/fɔːl bɪˈhaɪnd/",
        meaning: "（スケジュールなどに）遅れる",
        hint: "【進捗管理】「fall behind schedule（予定より遅れる）」は、TOEICの世界で最もトラブルが起きる会議・メールの定番フレーズ。"
    }
];
