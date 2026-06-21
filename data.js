// ========== TOEIC 学習データベース（拡張版） ==========
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
    // 【追加】TOEIC 700点レベル：接頭辞（語幹識別）
    {
        id: 53,
        type: "prefix",
        category: "接頭辞（語幹識別）",
        word: "pro-",
        partOfSpeech: "接頭辞",
        pronunciation: "/proʊ/",
        meaning: "「前へ」「賛成して」",
        examples: [
            "promote（昇進させる、促進する）",
            "proceed（前進する、進める）",
            "propose（提案する）"
        ]
    },
    {
        id: 54,
        type: "prefix",
        category: "接頭辞（語幹識別）",
        word: "con- / com- / co-",
        partOfSpeech: "接頭辞",
        pronunciation: "/kən/ /kəm/",
        meaning: "「共に」「完全に」",
        examples: [
            "collaborate（共同で作業する）",
            "confirm（確認する）",
            "compromise（妥協する、妥協）"
        ]
    },
    {
        id: 55,
        type: "prefix",
        category: "接頭辞（語幹識別）",
        word: "de-",
        partOfSpeech: "接頭辞",
        pronunciation: "/dɪ/",
        meaning: "「下に」「離れて」「否定」",
        examples: [
            "decrease（減少する、減少）",
            "delay（遅らせる、遅延）",
            "decline（衰退する、断る）"
        ]
    },
    {
        id: 56,
        type: "prefix",
        category: "接頭辞（語幹識別）",
        word: "sub-",
        partOfSpeech: "接頭辞",
        pronunciation: "/sʌb/",
        meaning: "「下に」「下位の」「副」",
        examples: [
            "submit（提出する＝下に出す）",
            "subordinate（部下、下位の）",
            "subcontract（下請け契約する）"
        ]
    },
    {
        id: 57,
        type: "prefix",
        category: "接頭辞（語幹識別）",
        word: "in- / im- / il- / ir-",
        partOfSpeech: "接頭辞",
        pronunciation: "/ɪn/ /ɪm/",
        meaning: "「中へ」「〜でない（否定）」",
        examples: [
            "incomplete（不完全な）",
            "implement（実行する、道具）",
            "innovative（革新的な）"
        ]
    },
    {
        id: 58,
        type: "prefix",
        category: "接頭辞（語幹識別）",
        word: "ex-",
        partOfSpeech: "接頭辞",
        pronunciation: "/eks/",
        meaning: "「外に」「前の」",
        examples: [
            "expand（拡大する）",
            "executive（重役、執行権のある）",
            "exceed（超える）"
        ]
    },
    {
        id: 59,
        type: "prefix",
        category: "接頭辞（語幹識別）",
        word: "inter-",
        partOfSpeech: "接頭辞",
        pronunciation: "/ɪntər/",
        meaning: "「〜の間」「相互に」",
        examples: [
            "international（国際的な）",
            "interview（面接、インタビュー）",
            "interact（相互に作用する）"
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
    // 【追加】TOEIC 700点レベル：接尾辞（語幹識別）
    {
        id: 63,
        type: "suffix_meaning",
        category: "接尾辞（語幹識別）",
        word: "-ee",
        partOfSpeech: "接尾辞",
        pronunciation: "/iː/",
        meaning: "「〜される人」（行為を受ける側）",
        examples: [
            "employee（従業員 ※雇われる人）",
            "interviewee（面接を受ける人）",
            "trainee（研修生 ※訓練を受ける人）"
        ]
    },
    {
        id: 64,
        type: "suffix_meaning",
        category: "接尾辞（語幹識別）",
        word: "-en",
        partOfSpeech: "接尾辞",
        pronunciation: "/ən/",
        meaning: "「〜にする」「〜になる」（動詞化）",
        examples: [
            "shorten（短縮する）",
            "broaden（広げる ※視野などを）",
            "strengthen（強化する）"
        ]
    },
    {
        id: 65,
        type: "suffix_meaning",
        category: "接尾辞（語幹識別）",
        word: "-free",
        partOfSpeech: "接尾辞",
        pronunciation: "/friː/",
        meaning: "「〜のない」「〜を免れた」",
        examples: [
            "duty-free（免税の）",
            "interest-free（無利子の）",
            "trouble-free（トラブルのない）"
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
    },
    // 【追加】TOEIC 700点レベル：接尾辞（品詞識別・パート5対策に直結）
    {
        id: 73,
        type: "suffix_part",
        category: "接尾辞（品詞識別）",
        word: "-ty / -ity",
        partOfSpeech: "接尾辞（名詞化）",
        pronunciation: "/ti/ /əti/",
        meaning: "「性質」「状態」（名詞形）",
        examples: [
            "security（安全、警備）",
            "availability（利用可能性、空き状況）",
            "productivity（生産性）"
        ]
    },
    {
        id: 74,
        type: "suffix_part",
        category: "接尾辞（品詞識別）",
        word: "-ive",
        partOfSpeech: "接尾辞（形容詞化）",
        pronunciation: "/ɪv/",
        meaning: "「〜の性質を持つ」「〜がちな」（形容詞形）",
        examples: [
            "alternative（代わりの、選択肢 ※名詞もある）",
            "effective（効果的な）",
            "competitive（競争力のある）"
        ]
    },
    {
        id: 75,
        type: "suffix_part",
        category: "接尾辞（品詞識別）",
        word: "-ize / -ise",
        partOfSpeech: "接尾辞（動詞化）",
        pronunciation: "/aɪz/",
        meaning: "「〜化する」「〜にする」（動詞形）",
        examples: [
            "minimize（最小限に抑える）",
            "optimize（最適化する）",
            "authorize // 権限を与える"
        ]
    },
    {
        id: 76,
        type: "prefix",
        category: "接頭辞（語幹識別）",
        word: "over-",
        partOfSpeech: "接頭辞",
        pronunciation: "/ˈoʊvər/",
        meaning: "「過剰に」「超えて」「上から」",
        examples: [
            "oversee（監督する＝上から見る ※superviseと同義）",
            "overdue（期限が過ぎた ※請求書や返却物で頻出）",
            "overestimate（過大評価する）"
        ]
    },
    {
        id: 77,
        type: "prefix",
        category: "接頭辞（語幹識別）",
        word: "counter-",
        partOfSpeech: "接頭辞",
        pronunciation: "/ˈkaʊntər/",
        meaning: "「反対の」「対抗する」",
        examples: [
            "counterpart（対応する人・物 ※他社の同等の役職の人などを指す）",
            "countermeasure（対抗策、対応策）",
            "counteroffer（対案、カウンターオファー）"
        ]
    },
    {
        id: 78,
        type: "prefix",
        category: "接頭辞（語幹識別）",
        word: "mis-",
        partOfSpeech: "接頭辞",
        pronunciation: "/mɪs/",
        meaning: "「誤った」「悪く」",
        examples: [
            "misplace（置き忘れる、紛失する ※書類を無くした文脈で頻出）",
            "misinterpret（誤解する、誤って解釈する）",
            "mislead（誤解を招く、迷わせる）"
        ]
    },

    // --- 語彙・文法：接尾辞（700点レベルの職務・契約文脈） ---
    {
        id: 79,
        type: "suffix_meaning",
        category: "接尾辞（語幹識別）",
        word: "-ship",
        partOfSpeech: "接尾辞（名詞化）",
        pronunciation: "/ʃɪp/",
        meaning: "「状態」「地位」「資格」「関係」",
        examples: [
            "leadership（統率力）",
            "partnership（提携、共同経営）",
            "ownership（所有権 ※ビジネスで主導権を持つニュアンス）"
        ]
    },

    // --- 語彙・文法：接尾辞（品詞識別：700点レベルの最大の罠） ---
    {
        id: 80,
        type: "suffix_part",
        category: "接尾辞（品詞識別）",
        word: "-al",
        partOfSpeech: "接尾辞（形容詞化／名詞化の罠）",
        pronunciation: "/l/",
        meaning: "「〜の（形容詞）」または「〜すること（名詞）」",
        examples: [
            "proposal（提案 ※形は形容詞っぽいのに【名詞】。超頻出）",
            "professional（専門的な／専門職 ※形容詞・名詞の両方）",
            "approval（承認 ※【名詞】。上司の承認などの文脈）"
        ]
    },
    {
        id: 81,
        type: "suffix_part",
        category: "接尾辞（品詞識別）",
        word: "-ant / -ent",
        partOfSpeech: "接尾辞（人・物名詞／形容詞）",
        pronunciation: "/ənt/",
        meaning: "「〜する人・物」「〜の性質の」",
        examples: [
            "consultant（コンサルタント ※人名詞）",
            "applicant（応募者 ※求人求職文脈の最頻出名詞）",
            "efficient（効率的な ※形容詞）"
        ]
    },
    {
        id: 82,
        type: "suffix_part",
        category: "接尾辞（品詞識別）",
        word: "-ance / -ence",
        partOfSpeech: "接尾辞（名詞化）",
        pronunciation: "/əns/",
        meaning: "「性質」「状態」「行為」（名詞形）",
        examples: [
            "performance（業績、実績、公演）",
            "compliance（法令遵守、順応）",
            "maintenance（保守、管理、メンテナンス）"
        ]
    }
];
