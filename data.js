// ========== TOEIC 学習データベース ==========
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
        hint: "【イメージ】予定を本来の場所から「離れた場所（off）」へ「置く（put）」。= postpone"
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
        hint: "【TOEIC頻出】tolerate と同義。ビジネス場面で「つまらない状況に耐える」という文脈で出題される。"
    },
    // --- 句動詞：Run ---
    {
        id: 10,
        type: "phrase",
        category: "Run",
        word: "run into",
        partOfSpeech: "句動詞",
        pronunciation: "/rʌn ˈɪntuː/",
        meaning: "〜にばったり会う、衝突する",
        hint: "【イメージ】走っている（run）最中に、ある空間の「中へ（into）」飛び込んでぶつかるイメージ。"
    },
    {
        id: 11,
        type: "phrase",
        category: "Run",
        word: "run out of",
        partOfSpeech: "句動詞",
        pronunciation: "/rʌn aʊt əv/",
        meaning: "〜が尽きる、足りなくなる",
        hint: "【TOEIC頻出】「ガソリンが尽きた」など、リソースの枯渇を表す。★パート5の空欄問題でよく出題。"
    },
    {
        id: 12,
        type: "phrase",
        category: "Run",
        word: "run by",
        partOfSpeech: "句動詞",
        pronunciation: "/rʌn baɪ/",
        meaning: "〜に相談する、提案する",
        hint: "【ビジネス用法】「That idea sounds good. Let me run it by my manager.」= 上司に相談させてください。"
    },
    // TOEIC頻出単語は toeic_vocab.js に移動しました
];

const AFFIX_BANK = [
    // --- 語彙・文法：接頭辞（語幹識別） ---
    {
        id: 50,
        type: "prefix",
        category: "接頭辞（語幹識別）",
        word: "pre-",
        partOfSpeech: "接頭辞",
        pronunciation: "/priː/",
        meaning: "「前もって」「先の」",
        examples: [
            "predict（前もって言う＝予測する）",
            "preview（下見・予告編）",
            "prepare（前もって用意する）"
        ]
    },
    {
        id: 51,
        type: "prefix",
        category: "接頭辞（語幹識別）",
        word: "re-",
        partOfSpeech: "接頭辞",
        pronunciation: "/riː/",
        meaning: "「再び」「もう一度」",
        examples: [
            "rewrite（書き直す）",
            "rebuild（再構築する）",
            "reschedule（予定を変更する）"
        ]
    },
    {
        id: 52,
        type: "prefix",
        category: "接頭辞（語幹識別）",
        word: "un-",
        partOfSpeech: "接頭辞",
        pronunciation: "/ʌn/",
        meaning: "「〜ではない」「反対」",
        examples: [
            "uncertain（不確かな）",
            "unlikely（ありそうもない）",
            "unhappy（不幸な）"
        ]
    },
    // --- 語彙・文法：接尾辞（語幹識別） ---
    {
        id: 60,
        type: "suffix_meaning",
        category: "接尾辞（語幹識別）",
        word: "-less",
        partOfSpeech: "接尾辞",
        pronunciation: "/ləs/",
        meaning: "「〜がない」「〜を欠いている」（否定・欠如）",
        examples: [
            "careless（不注意な）",
            "countless（数え切れないほどの）",
            "helpless（無力な）"
        ]
    },
    {
        id: 61,
        type: "suffix_meaning",
        category: "接尾辞（語幹識別）",
        word: "-ful",
        partOfSpeech: "接尾辞",
        pronunciation: "/fəl/",
        meaning: "「〜に満ちた」「〜で一杯」",
        examples: [
            "careful（注意深い）",
            "successful（成功した）",
            "meaningful（意味のある）"
        ]
    },
    {
        id: 62,
        type: "suffix_meaning",
        category: "接尾辞（語幹識別）",
        word: "-able / -ible",
        partOfSpeech: "接尾辞",
        pronunciation: "/əbl/",
        meaning: "「可能な」「〜できる」",
        examples: [
            "possible（可能な）",
            "comfortable（快適な）",
            "responsible（責任のある）"
        ]
    },
    // --- 語彙・文法：接尾辞（品詞識別） ---
    {
        id: 70,
        type: "suffix_part",
        category: "接尾辞（品詞識別）",
        word: "-tion / -sion",
        partOfSpeech: "接尾辞（名詞化）",
        pronunciation: "/ʃn/",
        meaning: "「〜すること」「〜の状態」（100%名詞になる形）",
        examples: [
            "production（生産）",
            "decision（決定）",
            "communication（コミュニケーション）"
        ]
    },
    {
        id: 71,
        type: "suffix_part",
        category: "接尾辞（品詞識別）",
        word: "-ment",
        partOfSpeech: "接尾辞（名詞化）",
        pronunciation: "/mənt/",
        meaning: "「〜すること」「〜の状態」（名詞形）",
        examples: [
            "management（管理）",
            "development（発展）",
            "employment（雇用）"
        ]
    },
    {
        id: 72,
        type: "suffix_part",
        category: "接尾辞（品詞識別）",
        word: "-ly",
        partOfSpeech: "接尾辞（副詞化）",
        pronunciation: "/li/",
        meaning: "「〜のように」「〜に」（副詞になる形）",
        examples: [
            "quickly（素早く）",
            "carefully（注意深く）",
            "recently（最近）"
        ]
    }
];

const PHONETIC_BANK = [
    {
        id: 201,
        type: "phonetic",
        category: "発音記号",
        symbol: "æ",
        name: "母音",
        description: "口を左右に大きく開けて「ア」と発音する（日本語の『ア』より明るい音）",
        howToPronounce: "「ア」と「エ」の中間音",
        examples: [
            { word: "cat", ipa: "/kæt/" },
            { word: "apple", ipa: "/ˈæpl/" },
            { word: "bag", ipa: "/bæg/" }
        ]
    },
    {
        id: 202,
        type: "phonetic",
        category: "発音記号",
        symbol: "ə",
        name: "母音（シュワー）",
        description: "TOEIC頻出！最も多く出現する音。アクセントのない音節で使われる。",
        howToPronounce: "「ア」と「イ」の中間のぼやけた音",
        examples: [
            { word: "about", ipa: "/əˈbaʊt/" },
            { word: "banana", ipa: "/bəˈnænə/" },
            { word: "sofa", ipa: "/ˈsoʊfə/" }
        ]
    },
    {
        id: 203,
        type: "phonetic",
        category: "発音記号",
        symbol: "ɪ",
        name: "母音",
        description: "「イ」と「ウ」の中間。/i:/ より短くてぼやけた音。",
        howToPronounce: "短い「イ」の音",
        examples: [
            { word: "sit", ipa: "/sɪt/" },
            { word: "business", ipa: "/ˈbɪznəs/" },
            { word: "kit", ipa: "/kɪt/" }
        ]
    },
    {
        id: 204,
        type: "phonetic",
        category: "発音記号",
        symbol: "i:",
        name: "母音",
        description: "日本語の『イー』に近い。:（コロン）は「長音」を示す。",
        howToPronounce: "長く伸ばした「イ」の音",
        examples: [
            { word: "see", ipa: "/si:/" },
            { word: "key", ipa: "/ki:/" },
            { word: "beach", ipa: "/bi:tʃ/" }
        ]
    },
    {
        id: 205,
        type: "phonetic",
        category: "発音記号",
        symbol: "ʊ",
        name: "母音",
        description: "「ウ」と「オ」の中間。/u:/ より短い。",
        howToPronounce: "短い「ウ」の音",
        examples: [
            { word: "book", ipa: "/bʊk/" },
            { word: "put", ipa: "/pʊt/" },
            { word: "look", ipa: "/lʊk/" }
        ]
    },
    {
        id: 206,
        type: "phonetic",
        category: "発音記号",
        symbol: "u:",
        name: "母音",
        description: "日本語の『ウー』に近い。唇を丸くして発音。",
        howToPronounce: "長く伸ばした「ウ」の音",
        examples: [
            { word: "blue", ipa: "/blu:/" },
            { word: "food", ipa: "/fu:d/" },
            { word: "school", ipa: "/sku:l/" }
        ]
    },
    {
        id: 207,
        type: "phonetic",
        category: "発音記号",
        symbol: "ɔ:",
        name: "母音",
        description: "唇を丸くして、日本語の『オー』より暗く発音。",
        howToPronounce: "長く伸ばした「オ」の音",
        examples: [
            { word: "door", ipa: "/dɔ:/" },
            { word: "water", ipa: "/ˈwɔ:tə/" },
            { word: "thought", ipa: "/θɔ:t/" }
        ]
    },
    {
        id: 208,
        type: "phonetic",
        category: "発音記号",
        symbol: "ɑ:",
        name: "母音",
        description: "口を大きく開いて、日本語の『ア』より奥から発音。",
        howToPronounce: "長く伸ばした「ア」の音（イギリス英語）",
        examples: [
            { word: "car", ipa: "/kɑ:/" },
            { word: "park", ipa: "/pɑ:k/" },
            { word: "heart", ipa: "/hɑ:t/" }
        ]
    },
    {
        id: 209,
        type: "phonetic",
        category: "発音記号",
        symbol: "θ",
        name: "子音",
        description: "舌を上下の歯で軽くかみながら「ス」と発音。日本語にない音。",
        howToPronounce: "「スの音」と「セの音」を混ぜたような音",
        examples: [
            { word: "think", ipa: "/θɪŋk/" },
            { word: "thank", ipa: "/θæŋk/" },
            { word: "three", ipa: "/θri:/" }
        ]
    },
    {
        id: 210,
        type: "phonetic",
        category: "発音記号",
        symbol: "ð",
        name: "子音",
        description: "舌を上下の歯で軽くかみながら「ズ」と発音。θ の有声版。",
        howToPronounce: "「ズの音」と「ゼの音」を混ぜたような音",
        examples: [
            { word: "this", ipa: "/ðɪs/" },
            { word: "that", ipa: "/ðæt/" },
            { word: "the", ipa: "/ðə/" }
        ]
    }
];
