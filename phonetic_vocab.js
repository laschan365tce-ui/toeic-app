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
