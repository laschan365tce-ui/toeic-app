// ========== TOEIC 頻出単語（移動元: data.js） ==========
const TOEIC_VOCAB = [
    {
        id: 80,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "appointment",
        partOfSpeech: "名詞",
        pronunciation: "/əˈpɔɪntmənt/",
        meaning: "予約、アポイント",
        hint: "【TOEIC頻出】会議や医者の予約などでよく出題される。"
    },
    {
        id: 81,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "schedule",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/ˈskedʒuːl/",
        meaning: "予定、予定を組む",
        hint: "【TOEIC頻出】schedule a meeting / schedule change のような文脈で出題される。"
    },
    {
        id: 82,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "require",
        partOfSpeech: "動詞",
        pronunciation: "/rɪˈkwaɪər/",
        meaning: "必要とする、要求する",
        hint: "【TOEIC頻出】required documents / require approval など、ビジネス文脈で頻出。"
    },
    {
        id: 83,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "customer",
        partOfSpeech: "名詞",
        pronunciation: "/ˈkʌstəmər/",
        meaning: "顧客",
        hint: "【TOEIC頻出】customer service / customer complaint のような顧客対応の場面で出題される。"
    },
    {
        id: 84,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "attend",
        partOfSpeech: "動詞",
        pronunciation: "/əˈtend/",
        meaning: "出席する、参加する",
        hint: "【TOEIC頻出】meetings や training sessions への参加でよく出る。"
    },
    {
        id: 85,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "arrange",
        partOfSpeech: "動詞",
        pronunciation: "/əˈreɪndʒ/",
        meaning: "手配する、取り決める",
        hint: "【TOEIC頻出】会議や配送の手配で使われる。"
    },
    {
        id: 86,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "confirm",
        partOfSpeech: "動詞",
        pronunciation: "/kənˈfɜːrm/",
        meaning: "確認する、確定する",
        hint: "【TOEIC頻出】予約や予定を確認する文脈で登場。"
    },
    {
        id: 87,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "cancel",
        partOfSpeech: "動詞",
        pronunciation: "/ˈkænsəl/",
        meaning: "取り消す、キャンセルする",
        hint: "【TOEIC頻出】予約や注文の変更でよく使われる。"
    },
    {
        id: 88,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "postpone",
        partOfSpeech: "動詞",
        pronunciation: "/pəˈspoʊn/",
        meaning: "延期する",
        hint: "【TOEIC頻出】meeting や event を延期する場面で出る。"
    },
    {
        id: 89,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "reschedule",
        partOfSpeech: "動詞",
        pronunciation: "/ˌriːˈskedʒuːl/",
        meaning: "再予定を組む、再調整する",
        hint: "【TOEIC頻出】会議や出荷の予定変更に頻出。"
    },
    {
        id: 90,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "venue",
        partOfSpeech: "名詞",
        pronunciation: "/ˈvenjuː/",
        meaning: "会場、場所",
        hint: "【TOEIC頻出】conference や event の場所を説明する際に使われる。"
    },
    {
        id: 91,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "conference",
        partOfSpeech: "名詞",
        pronunciation: "/ˈkɒnfərəns/",
        meaning: "会議、カンファレンス",
        hint: "【TOEIC頻出】business meetings や seminar の文脈で出題。"
    },
    {
        id: 92,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "meeting",
        partOfSpeech: "名詞",
        pronunciation: "/ˈmiːtɪŋ/",
        meaning: "会議、打ち合わせ",
        hint: "【TOEIC頻出】schedule a meeting のような表現は定番。"
    },
    {
        id: 93,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "reservation",
        partOfSpeech: "名詞",
        pronunciation: "/ˌrezərˈveɪʃən/",
        meaning: "予約",
        hint: "【TOEIC頻出】hotel や restaurant での予約に関する出題が多い。"
    },
    {
        id: 94,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "itinerary",
        partOfSpeech: "名詞",
        pronunciation: "/aɪˈtɪnərəri/",
        meaning: "旅程、日程表",
        hint: "【TOEIC頻出】travel plan や business trip の説明で使われる。"
    },
    {
        id: 95,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "accommodation",
        partOfSpeech: "名詞",
        pronunciation: "/əˌkɒməˈdeɪʃən/",
        meaning: "宿泊施設、収容",
        hint: "【TOEIC頻出】hotel booking や lodging の話題で登場。"
    },
    {
        id: 96,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "departure",
        partOfSpeech: "名詞",
        pronunciation: "/dɪˈpɑːrtʃər/",
        meaning: "出発",
        hint: "【TOEIC頻出】flight schedule や travel information で頻出。"
    },
    {
        id: 97,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "arrival",
        partOfSpeech: "名詞",
        pronunciation: "/əˈraɪvəl/",
        meaning: "到着",
        hint: "【TOEIC頻出】arrival time や airport announcements に使われる。"
    },
    {
        id: 98,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "boarding",
        partOfSpeech: "名詞",
        pronunciation: "/ˈbɔːrdɪŋ/",
        meaning: "搭乗",
        hint: "【TOEIC頻出】boarding pass や gate information に出る。"
    },
    {
        id: 99,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "flight",
        partOfSpeech: "名詞",
        pronunciation: "/flaɪt/",
        meaning: "飛行機便、フライト",
        hint: "【TOEIC頻出】airline information や travel plan で出題される。"
    },
    {
        id: 100,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "luggage",
        partOfSpeech: "名詞",
        pronunciation: "/ˈlʌɡɪdʒ/",
        meaning: "手荷物、荷物",
        hint: "【TOEIC頻出】airport や hotel の場面でよく出る。"
    },
    {
        id: 101,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "passport",
        partOfSpeech: "名詞",
        pronunciation: "/ˈpæspɔːrt/",
        meaning: "パスポート",
        hint: "【TOEIC頻出】travel documents 関連の問題で頻出。"
    },
    {
        id: 102,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "visa",
        partOfSpeech: "名詞",
        pronunciation: "/ˈviːzə/",
        meaning: "ビザ",
        hint: "【TOEIC頻出】international travel の文脈で登場。"
    },
    {
        id: 103,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "customs",
        partOfSpeech: "名詞",
        pronunciation: "/ˈkʌstəmz/",
        meaning: "税関",
        hint: "【TOEIC頻出】airport や travel procedures の話題で使われる。"
    },
    {
        id: 104,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "representative",
        partOfSpeech: "名詞",
        pronunciation: "/ˌreprɪˈzentətɪv/",
        meaning: "担当者、代表者",
        hint: "【TOEIC頻出】customer support や sales の場面で出題される。"
    },
    {
        id: 105,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "manager",
        partOfSpeech: "名詞",
        pronunciation: "/ˈmænɪdʒər/",
        meaning: "管理者、マネージャー",
        hint: "【TOEIC頻出】business structure や company roles で頻出。"
    },
    {
        id: 106,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "supervisor",
        partOfSpeech: "名詞",
        pronunciation: "/ˈsuːpərvaɪzər/",
        meaning: "監督者、上司",
        hint: "【TOEIC頻出】workplace conversation でよく出る。"
    },
    {
        id: 107,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "employee",
        partOfSpeech: "名詞",
        pronunciation: "/ɪmˈplɔɪiː/",
        meaning: "従業員",
        hint: "【TOEIC頻出】staff や company policy の文脈で使用。"
    },
    {
        id: 108,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "employer",
        partOfSpeech: "名詞",
        pronunciation: "/ɪmˈplɔɪər/",
        meaning: "雇用主、会社",
        hint: "【TOEIC頻出】hiring や employment contract の話題で出る。"
    },
    {
        id: 109,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "staff",
        partOfSpeech: "名詞",
        pronunciation: "/stæf/",
        meaning: "職員、スタッフ",
        hint: "【TOEIC頻出】hotel staff / office staff などで登場。"
    },
    {
        id: 110,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "colleague",
        partOfSpeech: "名詞",
        pronunciation: "/ˈkɒliːɡ/",
        meaning: "同僚",
        hint: "【TOEIC頻出】business conversation でよく出る単語。"
    },
    {
        id: 111,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "client",
        partOfSpeech: "名詞",
        pronunciation: "/ˈklaɪənt/",
        meaning: "顧客、取引先",
        hint: "【TOEIC頻出】customer と似た文脈で使われる。"
    },
    {
        id: 112,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "applicant",
        partOfSpeech: "名詞",
        pronunciation: "/ˈæplɪkənt/",
        meaning: "応募者",
        hint: "【TOEIC頻出】job application や hiring process で登場。"
    },
    {
        id: 113,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "candidate",
        partOfSpeech: "名詞",
        pronunciation: "/ˈkændɪdeɪt/",
        meaning: "候補者、志願者",
        hint: "【TOEIC頻出】interview や recruitment の場面で使われる。"
    },
    {
        id: 114,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "application",
        partOfSpeech: "名詞",
        pronunciation: "/ˌæplɪˈkeɪʃən/",
        meaning: "申し込み、応募",
        hint: "【TOEIC頻出】job application / application form の表現でよく出る。"
    },
    {
        id: 115,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "interview",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/ˈɪntərvjuː/",
        meaning: "面接／面接する",
        hint: "【TOEIC頻出】hiring の場面で頻出。"
    },
    {
        id: 116,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "hire",
        partOfSpeech: "動詞",
        pronunciation: "/haɪər/",
        meaning: "採用する",
        hint: "【TOEIC頻出】recruitment や staffing の文脈に登場。"
    },
    {
        id: 117,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "recruit",
        partOfSpeech: "動詞",
        pronunciation: "/rɪˈkruːt/",
        meaning: "採用する、募集する",
        hint: "【TOEIC頻出】new staff recruitment の表現で使われる。"
    },
    {
        id: 118,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "training",
        partOfSpeech: "名詞",
        pronunciation: "/ˈtreɪnɪŋ/",
        meaning: "研修、訓練",
        hint: "【TOEIC頻出】employee training / staff development に登場。"
    },
    {
        id: 119,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "seminar",
        partOfSpeech: "名詞",
        pronunciation: "/ˈsemɪnɑːr/",
        meaning: "セミナー",
        hint: "【TOEIC頻出】business event や training session で出題。"
    },
    {
        id: 120,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "workshop",
        partOfSpeech: "名詞",
        pronunciation: "/ˈwɜːrkʃɒp/",
        meaning: "ワークショップ、研修会",
        hint: "【TOEIC頻出】practical training の場面でよく使われる。"
    },
    {
        id: 121,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "proposal",
        partOfSpeech: "名詞",
        pronunciation: "/prəˈpoʊzəl/",
        meaning: "提案、企画書",
        hint: "【TOEIC頻出】project proposal や contract discussions に出る。"
    },
    {
        id: 122,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "budget",
        partOfSpeech: "名詞",
        pronunciation: "/ˈbʌdʒɪt/",
        meaning: "予算",
        hint: "【TOEIC頻出】finance や project planning の場面で頻出。"
    },
    {
        id: 123,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "expense",
        partOfSpeech: "名詞",
        pronunciation: "/ɪkˈspens/",
        meaning: "費用、経費",
        hint: "【TOEIC頻出】travel expenses / expense report の文脈で使われる。"
    },
    {
        id: 124,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "invoice",
        partOfSpeech: "名詞",
        pronunciation: "/ˈɪnvɔɪs/",
        meaning: "請求書",
        hint: "【TOEIC頻出】payment と関連する業務用語。"
    },
    {
        id: 125,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "receipt",
        partOfSpeech: "名詞",
        pronunciation: "/rɪˈsiːt/",
        meaning: "領収書",
        hint: "【TOEIC頻出】purchase / refund の場面で出題。"
    },
    {
        id: 126,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "refund",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/ˈriːfʌnd/",
        meaning: "払い戻し、返金する",
        hint: "【TOEIC頻出】customer service や return policy で登場。"
    },
    {
        id: 127,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "payment",
        partOfSpeech: "名詞",
        pronunciation: "/ˈpeɪmənt/",
        meaning: "支払い",
        hint: "【TOEIC頻出】invoice payment / payment due などで使われる。"
    },
    {
        id: 128,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "salary",
        partOfSpeech: "名詞",
        pronunciation: "/ˈsæləri/",
        meaning: "給与、給料",
        hint: "【TOEIC頻出】employment conditions に関する問題で頻出。"
    },
    {
        id: 129,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "bonus",
        partOfSpeech: "名詞",
        pronunciation: "/ˈboʊnəs/",
        meaning: "ボーナス、特典",
        hint: "【TOEIC頻出】salary package や benefits の文脈で出る。"
    },
    {
        id: 130,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "benefit",
        partOfSpeech: "名詞",
        pronunciation: "/ˈbenɪfɪt/",
        meaning: "給付、福利厚生",
        hint: "【TOEIC頻出】employee benefits / health insurance で登場。"
    },
    {
        id: 131,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "contract",
        partOfSpeech: "名詞",
        pronunciation: "/ˈkɒntrækt/",
        meaning: "契約",
        hint: "【TOEIC頻出】agreement / contract terms の文脈で使われる。"
    },
    {
        id: 132,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "agreement",
        partOfSpeech: "名詞",
        pronunciation: "/əˈɡriːmənt/",
        meaning: "合意、協定",
        hint: "【TOEIC頻出】contract negotiation の場面で頻出。"
    },
    {
        id: 133,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "policy",
        partOfSpeech: "名詞",
        pronunciation: "/ˈpɒləsi/",
        meaning: "方針、規則",
        hint: "【TOEIC頻出】company policy / return policy の表現で使われる。"
    },
    {
        id: 134,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "insurance",
        partOfSpeech: "名詞",
        pronunciation: "/ɪnˈʃʊərəns/",
        meaning: "保険",
        hint: "【TOEIC頻出】travel insurance / health insurance の文脈に登場。"
    },
    {
        id: 135,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "warranty",
        partOfSpeech: "名詞",
        pronunciation: "/ˈwɒrənti/",
        meaning: "保証、保障",
        hint: "【TOEIC頻出】product warranty / service warranty に使われる。"
    },
    {
        id: 136,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "purchase",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/ˈpɜːrtʃəs/",
        meaning: "購入、購入する",
        hint: "【TOEIC頻出】order / purchase order の表現でよく出る。"
    },
    {
        id: 137,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "order",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/ˈɔːrdər/",
        meaning: "注文、命じる",
        hint: "【TOEIC頻出】order details / place an order に出題。"
    },
    {
        id: 138,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "shipment",
        partOfSpeech: "名詞",
        pronunciation: "/ˈʃɪpmənt/",
        meaning: "出荷、発送",
        hint: "【TOEIC頻出】delivery schedule / shipment status で登場。"
    },
    {
        id: 139,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "delivery",
        partOfSpeech: "名詞",
        pronunciation: "/dɪˈlɪvəri/",
        meaning: "配達、納品",
        hint: "【TOEIC頻出】shipment と関連する文脈で出る。"
    },
    {
        id: 140,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "inventory",
        partOfSpeech: "名詞",
        pronunciation: "/ˈɪnvəntri/",
        meaning: "在庫、棚卸",
        hint: "【TOEIC頻出】stock management / inventory check に出題。"
    },
    {
        id: 141,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "stock",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/stɒk/",
        meaning: "在庫、蓄える",
        hint: "【TOEIC頻出】inventory management の話題で頻出。"
    },
    {
        id: 142,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "supplier",
        partOfSpeech: "名詞",
        pronunciation: "/səˈplaɪər/",
        meaning: "供給業者、仕入先",
        hint: "【TOEIC頻出】purchase order や supply chain で登場。"
    },
    {
        id: 143,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "vendor",
        partOfSpeech: "名詞",
        pronunciation: "/ˈvendər/",
        meaning: "販売業者、ベンダー",
        hint: "【TOEIC頻出】supplier と同じような業務用語。"
    },
    {
        id: 144,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "manufacturer",
        partOfSpeech: "名詞",
        pronunciation: "/ˌmænjəˈfæktʃərər/",
        meaning: "製造業者",
        hint: "【TOEIC頻出】product source / manufacturing process の文脈で出る。"
    },
    {
        id: 145,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "product",
        partOfSpeech: "名詞",
        pronunciation: "/ˈprɒdʌkt/",
        meaning: "製品、商品",
        hint: "【TOEIC頻出】product launch / product line で頻出。"
    },
    {
        id: 146,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "service",
        partOfSpeech: "名詞",
        pronunciation: "/ˈsɜːrvɪs/",
        meaning: "サービス",
        hint: "【TOEIC頻出】customer service / after-sales service の文脈で登場。"
    },
    {
        id: 147,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "quality",
        partOfSpeech: "名詞",
        pronunciation: "/ˈkwɒləti/",
        meaning: "品質、質",
        hint: "【TOEIC頻出】quality control / quality assurance に頻出。"
    },
    {
        id: 148,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "research",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/rɪˈsɜːrtʃ/",
        meaning: "調査、研究する",
        hint: "【TOEIC頻出】market research / research report に使われる。"
    },
    {
        id: 149,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "development",
        partOfSpeech: "名詞",
        pronunciation: "/dɪˈveləpmənt/",
        meaning: "開発、成長",
        hint: "【TOEIC頻出】product development / career development の文脈。"
    },
    {
        id: 150,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "production",
        partOfSpeech: "名詞",
        pronunciation: "/prəˈdʌkʃən/",
        meaning: "生産、製造",
        hint: "【TOEIC頻出】production schedule / factory production で登場。"
    },
    {
        id: 151,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "maintenance",
        partOfSpeech: "名詞",
        pronunciation: "/ˈmeɪntənəns/",
        meaning: "維持、保守",
        hint: "【TOEIC頻出】equipment maintenance / facility maintenance に出る。"
    },
    {
        id: 152,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "repair",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/rɪˈpeər/",
        meaning: "修理、修理する",
        hint: "【TOEIC頻出】repair service / equipment repair の文脈で頻出。"
    },
    {
        id: 153,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "facility",
        partOfSpeech: "名詞",
        pronunciation: "/fəˈsɪləti/",
        meaning: "施設",
        hint: "【TOEIC頻出】office facility / conference facility に使われる。"
    },
    {
        id: 154,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "office",
        partOfSpeech: "名詞",
        pronunciation: "/ˈɒfɪs/",
        meaning: "事務所、オフィス",
        hint: "【TOEIC頻出】office location / office hours の表現で出題。"
    },
    {
        id: 155,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "branch",
        partOfSpeech: "名詞",
        pronunciation: "/bræntʃ/",
        meaning: "支店、支部",
        hint: "【TOEIC頻出】branch office / regional branch の文脈で登場。"
    },
    {
        id: 156,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "headquarters",
        partOfSpeech: "名詞",
        pronunciation: "/ˌhedˈkwɔːrtərz/",
        meaning: "本社、本部",
        hint: "【TOEIC頻出】company structure の話題でよく出る。"
    },
    {
        id: 157,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "department",
        partOfSpeech: "名詞",
        pronunciation: "/dɪˈpɑːrtmənt/",
        meaning: "部門、部署",
        hint: "【TOEIC頻出】sales department / accounting department で頻出。"
    },
    {
        id: 158,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "division",
        partOfSpeech: "名詞",
        pronunciation: "/dɪˈvɪʒən/",
        meaning: "部門、課",
        hint: "【TOEIC頻出】company division / business division の表現で使用。"
    },
    {
        id: 159,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "deadline",
        partOfSpeech: "名詞",
        pronunciation: "/ˈdedlaɪn/",
        meaning: "締め切り、期限",
        hint: "【TOEIC頻出】project deadline / submission deadline に出る。"
    },
    {
        id: 160,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "priority",
        partOfSpeech: "名詞",
        pronunciation: "/praɪˈɒrəti/",
        meaning: "優先事項、優先順位",
        hint: "【TOEIC頻出】urgent task / set a priority の文脈で登場。"
    },
    {
        id: 161,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "project",
        partOfSpeech: "名詞",
        pronunciation: "/ˈprɒdʒekt/",
        meaning: "プロジェクト、計画",
        hint: "【TOEIC頻出】project team / project timeline で頻出。"
    },
    {
        id: 162,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "assignment",
        partOfSpeech: "名詞",
        pronunciation: "/əˈsaɪnmənt/",
        meaning: "課題、任務",
        hint: "【TOEIC頻出】work assignment / special assignment の文脈。"
    },
    {
        id: 163,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "task",
        partOfSpeech: "名詞",
        pronunciation: "/tæsk/",
        meaning: "仕事、課題",
        hint: "【TOEIC頻出】daily task / complete the task などで使われる。"
    },
    {
        id: 164,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "report",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/rɪˈpɔːrt/",
        meaning: "報告書、報告する",
        hint: "【TOEIC頻出】monthly report / report to a manager で登場。"
    },
    {
        id: 165,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "document",
        partOfSpeech: "名詞",
        pronunciation: "/ˈdɒkjʊmənt/",
        meaning: "書類、文書",
        hint: "【TOEIC頻出】important documents / document review の文脈。"
    },
    {
        id: 166,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "file",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/faɪl/",
        meaning: "ファイル、ファイルする",
        hint: "【TOEIC頻出】file a report / maintain files に使われる。"
    },
    {
        id: 167,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "record",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/ˈrekɔːrd/",
        meaning: "記録、記録する",
        hint: "【TOEIC頻出】keep records / sales record の話題。"
    },
    {
        id: 168,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "database",
        partOfSpeech: "名詞",
        pronunciation: "/ˈdeɪtəbeɪs/",
        meaning: "データベース",
        hint: "【TOEIC頻出】customer database / update the database に登場。"
    },
    {
        id: 169,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "software",
        partOfSpeech: "名詞",
        pronunciation: "/ˈsɒftwer/",
        meaning: "ソフトウェア",
        hint: "【TOEIC頻出】software update / install software の文脈。"
    },
    {
        id: 170,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "hardware",
        partOfSpeech: "名詞",
        pronunciation: "/ˈhɑːrdwer/",
        meaning: "ハードウェア",
        hint: "【TOEIC頻出】computer hardware / hardware support で出題。"
    },
    {
        id: 171,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "network",
        partOfSpeech: "名詞",
        pronunciation: "/ˈnetwɜːrk/",
        meaning: "ネットワーク、回路",
        hint: "【TOEIC頻出】IT support / network connection の話題。"
    },
    {
        id: 172,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "update",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/ʌpˈdeɪt/",
        meaning: "更新、更新する",
        hint: "【TOEIC頻出】software update / status update に使われる。"
    },
    {
        id: 173,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "upgrade",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/ʌpˈɡreɪd/",
        meaning: "アップグレード、改良する",
        hint: "【TOEIC頻出】system upgrade / service upgrade で登場。"
    },
    {
        id: 174,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "installation",
        partOfSpeech: "名詞",
        pronunciation: "/ˌɪnstəˈleɪʃən/",
        meaning: "設置、導入",
        hint: "【TOEIC頻出】equipment installation / software installation の文脈。"
    },
    {
        id: 175,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "support",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/səˈpɔːrt/",
        meaning: "支援、サポートする",
        hint: "【TOEIC頻出】customer support / technical support で頻出。"
    },
    {
        id: 176,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "feedback",
        partOfSpeech: "名詞",
        pronunciation: "/ˈfiːdbæk/",
        meaning: "フィードバック、意見",
        hint: "【TOEIC頻出】performance feedback / customer feedback に登場。"
    },
    {
        id: 177,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "survey",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/ˈsɜːrveɪ/",
        meaning: "調査、調査する",
        hint: "【TOEIC頻出】customer survey / survey results で出題。"
    },
    {
        id: 178,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "questionnaire",
        partOfSpeech: "名詞",
        pronunciation: "/ˌkwestʃəˈneər/",
        meaning: "アンケート、質問票",
        hint: "【TOEIC頻出】survey questionnaire / fill out a questionnaire の文脈。"
    },
    {
        id: 179,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "promotion",
        partOfSpeech: "名詞",
        pronunciation: "/prəˈmoʊʃən/",
        meaning: "昇進、販促",
        hint: "【TOEIC頻出】job promotion / promotional campaign でよく使われる。"
    },
// ========== 追加分（ID 180 〜 229）計50単語 ==========
    {
        id: 180,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "announce",
        partOfSpeech: "動詞",
        pronunciation: "/əˈnaʊns/",
        meaning: "発表する、告知する",
        hint: "【TOEIC頻出】公式な社内通知や新製品発表などで使われる。名詞形 announcement も最頻出。"
    },
    {
        id: 181,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "negotiate",
        partOfSpeech: "動詞",
        pronunciation: "/nɪˈɡoʊʃieɪt/",
        meaning: "交渉する、取り決める",
        hint: "【TOEIC頻出】negotiate a contract（契約を交渉する）など、ビジネスの取引場面で頻出。"
    },
    {
        id: 182,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "submit",
        partOfSpeech: "動詞",
        pronunciation: "/səbˈmɪt/",
        meaning: "提出する",
        hint: "【TOEIC頻出】submit a report / submit an application など、書類を出す際の定番表現。"
    },
    {
        id: 183,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "approve",
        partOfSpeech: "動詞",
        pronunciation: "/əˈpruːv/",
        meaning: "承認する、決裁する",
        hint: "【TOEIC頻出】予算や企画書の決裁文脈で登場。名詞形 approval（承認）もセットで狙われる。"
    },
    {
        id: 184,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "remind",
        partOfSpeech: "動詞",
        pronunciation: "/rɪˈmaɪnd/",
        meaning: "思い出させる、気づかせる",
        hint: "【TOEIC頻出】remind A of B / remind A to do の語法が重要。会議や支払いの催促メールで頻出。"
    },
    {
        id: 185,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "notify",
        partOfSpeech: "動詞",
        pronunciation: "/ˈnoʊtɪfaɪ/",
        meaning: "通知する、知らせる",
        hint: "【TOEIC頻出】notify A of B（AにBを通知する）の形で、仕様変更やイベントの中止を伝える文脈に出る。"
    },
    {
        id: 186,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "inform",
        partOfSpeech: "動詞",
        pronunciation: "/ɪnˈfɔːrm/",
        meaning: "知らせる、通知する",
        hint: "【TOEIC頻出】inform A about B / ビジネスメールの書き出し「I am writing to inform you that...」は定番。"
    },
    {
        id: 187,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "subscribe",
        partOfSpeech: "動詞",
        pronunciation: "/səbˈskraɪb/",
        meaning: "定期購読する、サブスク登録する",
        hint: "【TOEIC頻出】subscribe to a magazine / 名詞形 subscription と共に出題される。"
    },
    {
        id: 188,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "revenue",
        partOfSpeech: "名詞",
        pronunciation: "/ˈrevənuː/",
        meaning: "収入、総売上高",
        hint: "【TOEIC頻出】annual revenue（年間総収入）など、財務報告や企業の業績発表で頻出。"
    },
    {
        id: 189,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "profit",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/ˈprɒfɪt/",
        meaning: "利益、収益／利益を得る",
        hint: "【TOEIC頻出】net profit（純利益）や 形容詞 profitable（利益になる）の形で業績データに登場。"
    },
    {
        id: 190,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "quarter",
        partOfSpeech: "名詞",
        pronunciation: "/ˈkwɔːrtər/",
        meaning: "四半期、4分の1",
        hint: "【TOEIC頻出】first quarter (Q1) のように、企業の3ヶ月ごとの決算・業績報告の定番。"
    },
    {
        id: 191,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "advertising",
        partOfSpeech: "名詞",
        pronunciation: "/ˈædvərtaɪzɪŋ/",
        meaning: "広告、広告業",
        hint: "【TOEIC頻出】advertising campaign / advertisement（個々の広告）などの表現で頻出。"
    },
    {
        id: 192,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "campaign",
        partOfSpeech: "名詞",
        pronunciation: "/kæmˈpeɪn/",
        meaning: "キャンペーン、販促活動",
        hint: "【TOEIC頻出】promotional campaign / marketing campaign など、マーケティングの話題で定番。"
    },
    {
        id: 193,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "brochure",
        partOfSpeech: "名詞",
        pronunciation: "/broʊˈʃʊr/",
        meaning: "パンフレット、小冊子",
        hint: "【TOEIC頻出】pamphlet や booklet と同義。製品案内や会社紹介の配布物として登場。"
    },
    {
        id: 194,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "material",
        partOfSpeech: "名詞",
        pronunciation: "/məˈtɪəriəl/",
        meaning: "材料、資材、資料",
        hint: "【TOEIC頻出】raw materials（原材料）、training materials（研修資料）など多岐にわたる文脈で出る。"
    },
    {
        id: 195,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "equipment",
        partOfSpeech: "名詞",
        pronunciation: "/ɪˈkwɪpmənt/",
        meaning: "機器、用具、設備",
        hint: "【TOEIC頻出】不可算名詞（複数形のsがつかない）として重要。office equipment など。"
    },
    {
        id: 196,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "inspect",
        partOfSpeech: "動詞",
        pronunciation: "/ɪnˈspekt/",
        meaning: "検査する、点検する",
        hint: "【TOEIC頻出】工場の品質管理や建物の安全点検で登場。名詞形 inspection も最頻出。"
    },
    {
        id: 197,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "locate",
        partOfSpeech: "動詞",
        pronunciation: "/loʊˈkeɪt/",
        meaning: "位置させる、場所を特定する",
        hint: "【TOEIC頻出】be conveniently located（便利な場所にある）の受動態の形で非常によく出る。"
    },
    {
        id: 198,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "relocate",
        partOfSpeech: "動詞",
        pronunciation: "/ˌriːˈloʊkeɪt/",
        meaning: "移転する、引っ越す",
        hint: "【TOEIC頻出】office relocation（オフィスの移転）や、工場の移転、個人の転勤の話題で頻出。"
    },
    {
        id: 200,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "delay",
        partOfSpeech: "動詞/名詞",
        pronunciation: "/dɪˈleɪ/",
        meaning: "遅らせる、延期する／遅れ",
        hint: "【TOEIC頻出】flight delay（フライトの遅れ）や shipment delay（出荷の遅れ）などトラブルの定番。"
    },
    {
        id: 201,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "strategy",
        partOfSpeech: "名詞",
        pronunciation: "/ˈstrætədʒi/",
        meaning: "戦略、計画",
        hint: "【TOEIC頻出】marketing strategy / business strategy など、企業の方向性を議論する場面に出る。"
    },
    {
        id: 202,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "target",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/ˈtɑːrɡɪt/",
        meaning: "目標、的／目標にする",
        hint: "【TOEIC頻出】sales target / target customer のように、売上目標やターゲット層の話題に頻出。"
    },
    {
        id: 203,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "post",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/poʊst/",
        meaning: "職、地位／掲示する、配置する",
        hint: "【TOEIC頻出】apply for the post（職に応募する）、post a notice（通知を掲示する）の文脈で出る。"
    },
    {
        id: 204,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "head",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/hed/",
        meaning: "長、責任者／向かう、率いる",
        hint: "【TOEIC頻出】head of the department（部門長）、head for the venue（会場に向かう）の形で使われる。"
    },
    {
        id: 205,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "manufacture",
        partOfSpeech: "動詞/名詞",
        pronunciation: "/ˌmænjəˈfæktʃər/",
        meaning: "製造する／製造、製品",
        hint: "【TOEIC頻出】既出の manufacturer（製造業者）の基底語。工場の生産体制に関する話題で頻出。"
    },
    {
        id: 206,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "invest",
        partOfSpeech: "動詞",
        pronunciation: "/ɪnˈvest/",
        meaning: "投資する",
        hint: "【TOEIC頻出】invest in new technology / investment（名詞：投資）、investor（名詞：投資家）も最頻出。"
    },
    {
        id: 207,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "fund",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/fʌnd/",
        meaning: "資金、基金／資金を出す",
        hint: "【TOEIC頻出】raise funds（資金を集める）、the project is funded by...（〜が出資している）の形で登場。"
    },
    {
        id: 208,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "launch",
        partOfSpeech: "動詞/名詞",
        pronunciation: "/lɔːntʃ/",
        meaning: "開始する、売り出す／発売、開始",
        hint: "【TOEIC頻出】product launch（新製品の発売）、launch a website（サイトを立ち上げる）の文脈で頻出。"
    },
    {
        id: 209,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "expand",
        partOfSpeech: "動詞",
        pronunciation: "/ɪkˈspænd/",
        meaning: "拡大する、進出する",
        hint: "【TOEIC頻出】expand the business / expand into international markets など、事業拡大の文脈で登場。"
    },
    {
        id: 210,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "merge",
        partOfSpeech: "動詞",
        pronunciation: "/mɜːrdʒ/",
        meaning: "合併する、統合する",
        hint: "【TOEIC頻出】2つの会社が合併するニュース（M&A）の文脈で頻出。名詞形は merger。"
    },
    {
        id: 211,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "acquire",
        partOfSpeech: "動詞",
        pronunciation: "/əˈkwaɪər/",
        meaning: "買収する、獲得する",
        hint: "【TOEIC頻出】会社や権利の買収、スキルの習得などで使われる。名詞形は acquisition。"
    },
    {
        id: 212,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "compete",
        partOfSpeech: "動詞",
        pronunciation: "/kəmˈpiːt/",
        meaning: "競う、競争する",
        hint: "【TOEIC頻出】competitor（名詞：競合他社）、competitive（形容詞：競争力のある）が非常に出る。"
    },
    {
        id: 213,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "consume",
        partOfSpeech: "動詞",
        pronunciation: "/kənˈsuːm/",
        meaning: "消費する",
        hint: "【TOEIC頻出】consumer（名詞：消費者）の基底語。consumer trends（消費者動向）などの表現で頻出。"
    },
    {
        id: 214,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "retail",
        partOfSpeech: "名詞/形容詞",
        pronunciation: "/ˈriːteɪl/",
        meaning: "小売／小売の",
        hint: "【TOEIC頻出】retail store（小売店）、retail price（小売価格）。対義語は wholesale（卸売り）。"
    },
    {
        id: 215,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "wholesale",
        partOfSpeech: "名詞/形容詞",
        pronunciation: "/ˈhoʊlseɪl/",
        meaning: "卸売り／卸売りの",
        hint: "【TOEIC頻出】問屋や業者向けのBtoB取引、バルク（大量）買いの文脈で登場。"
    },
    {
        id: 216,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "transaction",
        partOfSpeech: "名詞",
        pronunciation: "/trænˈzækʃən/",
        meaning: "取引、処理",
        hint: "【TOEIC頻出】online transaction（オンライン決済・取引）や銀行の入出金処理の話題で頻出。"
    },
    {
        id: 217,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "statement",
        partOfSpeech: "名詞",
        pronunciation: "/ˈsteɪtmənt/",
        meaning: "明細書、声明、陳述",
        hint: "【TOEIC頻出】bank statement（銀行口座の取引明細書）、financial statement（財務諸表）で超頻出。"
    },
    {
        id: 218,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "balance",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/ˈbæləns/",
        meaning: "残高、釣り合い／バランスをとる",
        hint: "【TOEIC頻出】account balance（口座残高）、outstanding balance（未払残高）の表現で頻出。"
    },
    {
        id: 219,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "account",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/əˈkaʊnt/",
        meaning: "口座、取引先、説明／説明する、占める",
        hint: "【TOEIC頻出】open an account（口座を開く）、account for 30%（30%を占める）の語法が頻出。"
    },
    {
        id: 220,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "audit",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/ˈɔːdɪt/",
        meaning: "会計監査、検査／監査する",
        hint: "【TOEIC頻出】financial audit（会計監査）、tax audit（税務調査）など社内の財務チェック関連で登場。"
    },
    {
        id: 221,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "commercial",
        partOfSpeech: "形容詞/名詞",
        pronunciation: "/kəˈmɜːrʃəl/",
        meaning: "商業的な、商業の／テレビCM",
        hint: "【TOEIC頻出】commercial district（商業地区）や、TV/ラジオ広告（commercials）の文脈で出る。"
    },
    {
        id: 222,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "advertise",
        partOfSpeech: "動詞",
        pronunciation: "/ˈædvərtaɪz/",
        meaning: "広告する、宣伝する",
        hint: "【TOEIC頻出】既出の advertising の動詞形。advertise a job vacancy（求人を出す）などでも使われる。"
    },
    {
        id: 223,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "flyer",
        partOfSpeech: "名詞",
        pronunciation: "/ˈflaɪər/",
        meaning: "チラシ、フライヤー",
        hint: "【TOEIC頻出】distribute flyers（チラシを配る）の表現で、イベント告知や店舗オープンの話題に出る。"
    },
    {
        id: 224,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "agency",
        partOfSpeech: "名詞",
        pronunciation: "/ˈeɪdʒənsi/",
        meaning: "代理店、機関",
        hint: "【TOEIC頻出】travel agency（旅行代理店）、advertising agency（広告代理店）、employment agency（人材紹介所）。"
    },
    {
        id: 225,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "agent",
        partOfSpeech: "名詞",
        pronunciation: "/ˈeɪdʒənt/",
        meaning: "代理人、エージェント、店員",
        hint: "【TOEIC頻出】travel agent（旅行会社のスタッフ）、real estate agent（不動産業者）の文脈で頻出。"
    },
    {
        id: 226,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "real estate",
        partOfSpeech: "名詞",
        pronunciation: "/ˈriːəl ɪˌsteɪt/",
        meaning: "不動産、物件",
        hint: "【TOEIC頻出】real estate agency（不動産会社）や、オフィスの移転・購入物件の文脈で登場。"
    },
    {
        id: 227,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "tenant",
        partOfSpeech: "名詞",
        pronunciation: "/ˈtenənt/",
        meaning: "借地人、テナント、入居者",
        hint: "【TOEIC頻出】ビルやオフィスの賃貸契約、商業施設の入居者に関する問題で定番。"
    },
    {
        id: 228,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "lease",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/liːs/",
        meaning: "賃貸借契約／賃貸する、リースする",
        hint: "【TOEIC頻出】sign a lease（リース契約を結ぶ）、lease office space など、不動産や備品レンタルで頻出。"
    },
    {
        id: 229,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "rent",
        partOfSpeech: "名詞/動詞",
        pronunciation: "/rent/",
        meaning: "家賃、賃貸料／賃借りする",
        hint: "【TOEIC頻出】pay rent（家賃を払う）。leaseよりも一般的な賃貸・レンタル（車や機器など）で使われる。"
    },
    {
        id: 230,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "accomplish",
        partOfSpeech: "動詞",
        pronunciation: "/əˈkɑːmplɪʃ/",
        meaning: "～を成し遂げる、達成する",
        hint: "目標や任務を達成するという文脈で頻出。名詞形はaccomplishment（業績、達成）。"
    },
    {
        id: 231,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "accumulate",
        partOfSpeech: "動詞",
        pronunciation: "/əˈkjuːmjəleɪt/",
        meaning: "（資本・富・情報など）を蓄積する、貯める",
        hint: "ポイント、富、経験などが蓄積する際に使用される。自動詞・他動詞の双方で使われる。"
    },
    {
        id: 232,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "allocate",
        partOfSpeech: "動詞",
        pronunciation: "/ˈæləkeɪt/",
        meaning: "（予算・時間・リソース）を割り当てる、配分する",
        hint: "allocate A to B（AをBに割り当てる）の形で、予算編成の文脈で非常によく出題される。"
    },
    {
        id: 233,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "appraise",
        partOfSpeech: "動詞",
        pronunciation: "/əˈpreɪz/",
        meaning: "～を評価する、査定する",
        hint: "不動産の査定や、従業員の人事評価（performance appraisal）の文脈で必須の単語。"
    },
    {
        id: 234,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "assemble",
        partOfSpeech: "動詞",
        pronunciation: "/əˈsembl/",
        meaning: "（部品など）を組み立てる、（人が）集まる",
        hint: "部品の組み立て（工場文脈）と、会議などのために人が集まる（オフィス文脈）の2つの意味を押さえる。"
    },
    {
        id: 235,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "attribute",
        partOfSpeech: "動詞",
        pronunciation: "/əˈtrɪbjuːt/",
        meaning: "（結果）を～のせいにする、～に帰する",
        hint: "attribute A to B（Aの原因はBにあるとする）の語法がパート5・6で頻出。"
    },
    {
        id: 236,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "authorize",
        partOfSpeech: "動詞",
        pronunciation: "/ˈɔːθəraɪz/",
        meaning: "～を公認する、権限を与える",
        hint: "authorized dealer（正規販売店）や、authorized service center（公認修理センター）の形で頻出。"
    },
    {
        id: 237,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "collaborate",
        partOfSpeech: "動詞",
        pronunciation: "/kəˈlæbəreɪt/",
        meaning: "共同して働く、協力する",
        hint: "自動詞。collaborate with（人と協力する）、collaborate on（プロジェクト等で協力する）の形をとる。"
    },
    {
        id: 238,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "commence",
        partOfSpeech: "動詞",
        pronunciation: "/kəˈmens/",
        meaning: "（公式に）始まる、～を開始する",
        hint: "beginやstartのフォーマルな表現。式典、工事、契約などの開始時に用いられる。"
    },
    {
        id: 239,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "compensate",
        partOfSpeech: "動詞",
        pronunciation: "/ˈkɑːmpenseɪt/",
        meaning: "～に補償する、埋め合わせる",
        hint: "compensate A for B（Aに対してBの補償をする）の形。名詞形compensation（報酬・補償）も頻出。"
    },
    {
        id: 240,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "comply",
        partOfSpeech: "動詞",
        pronunciation: "/kəmˈplaɪ/",
        meaning: "（規則・基準などに）従う、準拠する",
        hint: "自動詞。comply withの形で用いられ、規則、法律、安全基準を遵守する文脈で必須。"
    },
    {
        id: 241,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "conclude",
        partOfSpeech: "動詞",
        pronunciation: "/kənˈkluːd/",
        meaning: "～を締めくくる、結論づける、（契約を）結ぶ",
        hint: "会議やスピーチの締めくくりだけでなく、契約（contract）や交渉を締結する文脈でも使用される。"
    },
    {
        id: 242,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "conduct",
        partOfSpeech: "動詞",
        pronunciation: "/kənˈdʌkt/",
        meaning: "（調査・検査・ツアーなど）を行う、実施する",
        hint: "conduct a survey（調査を行う）、conduct an inspection（検査を行う）など定番のコロケーションが多い。"
    },
    {
        id: 243,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "consecutive",
        partOfSpeech: "形容詞",
        pronunciation: "/kənˈsekjətɪv/",
        meaning: "連続した、引き続いての",
        hint: "for three consecutive years（3年連続で）のように、期間や日数を表す表現と共によく使われる。"
    },
    {
        id: 244,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "contribute",
        partOfSpeech: "動詞",
        pronunciation: "/kənˈtrɪbjuːt/",
        meaning: "貢献する、寄付する、寄稿する",
        hint: "contribute toの形で用いられ、toは前置詞のため後ろには名詞または動名詞が続く。"
    },
    {
        id: 245,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "delegate",
        partOfSpeech: "動詞",
        pronunciation: "/ˈdelɪɡeɪt/",
        meaning: "（権限・任務など）を委譲する、任せる",
        hint: "名詞（代表者）の意味もあるが、動詞として「部下に仕事を委譲する」というマネジメント文脈で頻出。"
    },
    {
        id: 246,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "demolish",
        partOfSpeech: "動詞",
        pronunciation: "/dɪˈmɑːlɪʃ/",
        meaning: "（建造物など）を取り壊す、解体する",
        hint: "古いビルを取り壊して新しい施設を建設する、といった再開発の文脈で頻出。"
    },
    {
        id: 247,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "designated",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈdezɪɡneɪtɪd/",
        meaning: "指定された、指名された",
        hint: "designated parking area（指定の駐車区域）やdesignated smoking area（指定喫煙所）など、施設内の規則で頻出。"
    },
    {
        id: 248,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "diminish",
        partOfSpeech: "動詞",
        pronunciation: "/dɪˈmɪnɪʃ/",
        meaning: "減少する、～を減らす",
        hint: "売上、コスト、リスク、影響力などが減少する文脈で、decreaseやreduceの類義語として登場。"
    },
    {
        id: 249,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "disrupt",
        partOfSpeech: "動詞",
        pronunciation: "/dɪsˈrʌpt/",
        meaning: "～を混乱させる、中断させる",
        hint: "悪天候によって交通機関の運行（service）やイベントが中断される文脈でよく使われる。"
    },
    {
        id: 250,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "distribute",
        partOfSpeech: "動詞",
        pronunciation: "/dɪˈstrɪbjuːt/",
        meaning: "～を分配する、配布する、流通させる",
        hint: "資料を配布する（hand outのフォーマル表現）や、商品を市場に流通させる文脈で使用。"
    },
    {
        id: 251,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "eligible",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈelɪdʒəbl/",
        meaning: "（～の）資格がある、適格な",
        hint: "be eligible for [to do]（～の資格がある）の形で、割引、昇進、給付金を受ける条件の文脈で頻出。"
    },
    {
        id: 252,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "eliminate",
        partOfSpeech: "動詞",
        pronunciation: "/ɪˈlɪmɪneɪt/",
        meaning: "～を排除する、除去する、削減する",
        hint: "無駄なコストの削減（eliminate waste）や、製造プロセスから欠陥を取り除く文脈で使われる。"
    },
    {
        id: 253,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "emphasize",
        partOfSpeech: "動詞",
        pronunciation: "/ˈemfəsaɪz/",
        meaning: "～を強調する、重視する",
        hint: "プレゼンや会議で特定のポイントを強調する、または企業が顧客サービスを重視する文脈で使用。"
    },
    {
        id: 254,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "endorse",
        partOfSpeech: "動詞",
        pronunciation: "/ɪnˈdɔːrs/",
        meaning: "（公に）～を承認する、支持する、（有名人が商品を）宣伝する",
        hint: "有名人による商品の推薦・CM出演（celebrity endorsement）や、計画の承認・支持を表す。"
    },
    {
        id: 255,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "enforce",
        partOfSpeech: "動詞",
        pronunciation: "/ɪnˈfɔːrs/",
        meaning: "（法律や規則など）を施行する、執行する、遵守させる",
        hint: "新しい社内規則や駐車規制などを厳格に適用・実施する文脈で用いられる。"
    },
    {
        id: 256,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "enhance",
        partOfSpeech: "動詞",
        pronunciation: "/ɪnˈhæns/",
        meaning: "（価値・質・能力など）を高める、向上させる",
        hint: "enhance customer satisfaction（顧客満足度を高める）や、スキルを向上させるなどポジティブな文脈で頻出。"
    },
    {
        id: 257,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "enroll",
        partOfSpeech: "動詞",
        pronunciation: "/ɪnˈroʊl/",
        meaning: "（講座などに）登録する、入学する、入会する",
        hint: "自動詞としてenroll in a seminar（セミナーに申し込む）の形で頻出。名詞形はenrollment。"
    },
    {
        id: 258,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "ensure",
        partOfSpeech: "動詞",
        pronunciation: "/ɪnˈʃʊr/",
        meaning: "～を確実にする、保証する",
        hint: "ensure that 節（～であることを確実にする）の形で、ミスを防いだり安全を確保したりする文脈で多用される。"
    },
    {
        id: 259,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "entitle",
        partOfSpeech: "動詞",
        pronunciation: "/ɪnˈtaɪtl/",
        meaning: "～に権利を与える、資格を与える",
        hint: "受動態の be entitled to 名詞 [do] （～する権利がある）はパート5・7の契約・規約文脈で超頻出。"
    },
    {
        id: 260,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "evaluate",
        partOfSpeech: "動詞",
        pronunciation: "/ɪˈvæljueɪt/",
        meaning: "～を評価する、査定する",
        hint: "業績、提案書、製品の性能などを客観的に数値や基準で評価する文脈で使われる。"
    },
    {
        id: 261,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "exceed",
        partOfSpeech: "動詞",
        pronunciation: "/ɪkˈsiːd/",
        meaning: "（数量・限度など）を超える、上回る",
        hint: "exceed expectations（期待を超える）、exceed the budget（予算をオーバーする）などの組み合わせが頻出。"
    },
    {
        id: 262,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "expedite",
        partOfSpeech: "動詞",
        pronunciation: "/ˈekspədaɪt/",
        meaning: "～を急がせる、迅速に処理する",
        hint: "配送や手続きを通常より早める文脈で使用される。expedite shipping（迅速発送）など。"
    },
    {
        id: 263,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "expire",
        partOfSpeech: "動詞",
        pronunciation: "/ɪkˈspaɪər/",
        meaning: "（有効期限などが）切れる、満了する",
        hint: "自動詞。契約、パスポート、クーポン、クレジットカードの有効期限が切れる文脈で必須。"
    },
    {
        id: 264,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "fluctuate",
        partOfSpeech: "動詞",
        pronunciation: "/ˈflʌktʃueɪt/",
        meaning: "（価格・数値などが）変動する、上下に揺れ動く",
        hint: "価格、気温、株価、需要などが不規則に上がったり下がったりする文脈で使用される。"
    },
    {
        id: 265,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "forfeit",
        partOfSpeech: "動詞",
        pronunciation: "/ˈfɔːrfət/",
        meaning: "（権利・財産など）を没収される、失う",
        hint: "規約違反やキャンセルに伴い、保証金（deposit）や権利を失うというシビアな文脈で登場。"
    },
    {
        id: 266,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "implement",
        partOfSpeech: "動詞",
        pronunciation: "/ˈɪmplɪment/",
        meaning: "（計画・政策・システムなど）を実行する、実施する",
        hint: "implement a new policy（新方針を実施する）や、新規システムの導入文脈で非常に好まれる動詞。"
    },
    {
        id: 267,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "incentive",
        partOfSpeech: "名詞",
        pronunciation: "/ɪnˈsentɪv/",
        meaning: "刺激、動機、報奨金",
        hint: "従業員のやる気を出すためのボーナスや、顧客を惹きつけるための特典（割引など）を指す。"
    },
    {
        id: 268,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "incorporate",
        partOfSpeech: "動詞",
        pronunciation: "/ɪnˈkɔːrpəreɪt/",
        meaning: "～を組み入れる、取り入れる、法人組織にする",
        hint: "incorporate A into B（AをBに組み込む）の形や、フィードバックを計画に取り入れる文脈で頻出。"
    },
    {
        id: 269,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "incur",
        partOfSpeech: "動詞",
        pronunciation: "/ɪnˈkɜːr/",
        meaning: "（負債・損害・費用など）を被る、負う、生じさせる",
        hint: "incur extra charges（追加料金が発生する）など、好ましくない費用を負担する文脈で使われる。"
    },
    {
        id: 270,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "indicate",
        partOfSpeech: "動詞",
        pronunciation: "/ˈɪndɪkeɪt/",
        meaning: "～を指し示す、示す、表す",
        hint: "調査結果が～を示している（studies indicate that...）や、意向を示す際に用いられる。"
    },
    {
        id: 271,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "innovative",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈɪnəveɪtɪv/",
        meaning: "革新的な、画期的な",
        hint: "新製品のPR、技術開発、企業の強みをアピールする文脈で頻出するポジティブな形容詞。"
    },
    {
        id: 272,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "jeopardize",
        partOfSpeech: "動詞",
        pronunciation: "/ˈdʒepərdaɪz/",
        meaning: "～を危険にさらす、台無しにする",
        hint: "不祥事やミスのせいで、プロジェクトの成功や企業の評判（reputation）が危機に瀕する文脈で使用。"
    },
    {
        id: 273,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "mandatory",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈmændətɔːri/",
        meaning: "義務的な、強制的な、必須の",
        hint: "compulsoryやrequiredの類義語。mandatory training（必須研修）など、不参加が許されない文脈で使われる。"
    },
    {
        id: 274,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "modify",
        partOfSpeech: "動詞",
        pronunciation: "/ˈmɑːdɪfaɪ/",
        meaning: "（部分的に）～を修正する、変更する",
        hint: "changeよりもフォーマルで、計画、契約、デザインの一部を少し手直し・修正する際に用いられる。"
    },
    {
        id: 275,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "optimize",
        partOfSpeech: "動詞",
        pronunciation: "/ˈɑːptɪmaɪz/",
        meaning: "～を最適化する、最大限に効率化する",
        hint: "ウェブサイトのパフォーマンス、業務プロセス、物流システムを最も効率的な状態にする文脈で使用。"
    },
    {
        id: 276,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "outfit",
        partOfSpeech: "動詞",
        pronunciation: "/ˈaʊtfɪt/",
        meaning: "（必要な用具・装備など）を配備する、供給する",
        hint: "名詞（服装・組織）の意味もあるが、動詞として「オフィスや工場に設備を備え付ける」という文脈で出題される。"
    },
    {
        id: 277,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "oversee",
        partOfSpeech: "動詞",
        pronunciation: "/ˌoʊvərˈsiː/",
        meaning: "～を監督する、統括する",
        hint: "superviseの類義語。マネジメント職の業務内容（プロジェクトやチーム全体を監督する）を説明する文脈で必須。"
    },
    {
        id: 278,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "patronize",
        partOfSpeech: "動詞",
        pronunciation: "/ˈpeɪtrənaɪz/",
        meaning: "（店など）のひいき客になる、常連として通う",
        hint: "ビジネス文脈では「恩着せがましい態度を取る」ではなく、「店舗を愛顧する」という意味で使われる。名詞はpatron（愛顧者、顧客）。"
    },
    {
        id: 279,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "pending",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈpendɪŋ/",
        meaning: "未決定の、保留中の、～を待つ間に",
        hint: "pending approval（承認待ち）の形で頻出。前置詞として「～の決定を待つ間に」という意味でも使われる。"
    },
    {
        id: 280,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "pertain",
        partOfSpeech: "動詞",
        pronunciation: "/pərˈteɪn/",
        meaning: "（～に）関係する、属する",
        hint: "自動詞。pertain to 名詞（～に関連する）の形で、documents pertaining to the merger（合併に関連する書類）のように公式文書で多用される。"
    },
    {
        id: 281,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "precedent",
        partOfSpeech: "名詞",
        pronunciation: "/ˈpresɪdənt/",
        meaning: "前例、先例",
        hint: "set a precedent（前例を作る）、without precedent（前例のない）の形で、企業の意思決定や法務の文脈で登場。"
    },
    {
        id: 282,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "preclude",
        partOfSpeech: "動詞",
        pronunciation: "/pɪˈkluːd/",
        meaning: "～を排除する、妨げる、不可能にする",
        hint: "preclude A from doing（Aが～するのを妨げる）の語法が重要。preventの非常にフォーマルな表現。"
    },
    {
        id: 283,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "premises",
        partOfSpeech: "名詞",
        pronunciation: "/ˈpremɪsɪz/",
        meaning: "（敷地を含む）店舗、建物、構内",
        hint: "常に複数形で使用される。on the premises（敷地内で、構内で）は、施設のセキュリティや利用ルールの文脈で頻出。"
    },
    {
        id: 284,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "prevalent",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈprevələnt/",
        meaning: "普及している、一般的な",
        hint: "市場のトレンド、特定のビジネス慣行、意見などが広く浸透している状態を指す。"
    },
    {
        id: 285,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "prohibit",
        partOfSpeech: "動詞",
        pronunciation: "/proʊˈhɪbɪt/",
        meaning: "～を禁止する",
        hint: "prohibit A from doing（Aが～するのを禁止する）の形を好む。受動態の be prohibited from doing もパート5で頻出。"
    },
    {
        id: 286,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "prominent",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈprɑːmɪnənt/",
        meaning: "著名な、傑出した、目立つ",
        hint: "prominent figure（著名人）や、基調講演のスピーカーを紹介する文脈、または広告が目立つ位置にある場合に使用。"
    },
    {
        id: 287,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "prospective",
        partOfSpeech: "形容詞",
        pronunciation: "/prəˈspektɪv/",
        meaning: "見込みのある、将来の",
        hint: "prospective client（見込み客）やprospective employee（採用応募者・将来の従業員）など、ビジネスのターゲットを指す。"
    },
    {
        id: 288,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "provisional",
        partOfSpeech: "形容詞",
        pronunciation: "/prəˈvɪʒənl/",
        meaning: "暫定的な、仮の",
        hint: "provisional agreement（暫定合意）やprovisional schedule（仮のスケジュール）など、正式決定前の段階で使われる。"
    },
    {
        id: 289,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "punctual",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈpʌŋktʃuəl/",
        meaning: "時間を厳守する、時間に正確な",
        hint: "従業員の評価項目や、交通機関の運行ダイヤの正確さを表す文脈で頻出。名詞形はpunctuality。"
    },
    {
        id: 290,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "ratify",
        partOfSpeech: "動詞",
        pronunciation: "/ˈrætɪfaɪ/",
        meaning: "（条約・契約などを）批准する、正式承認する",
        hint: "取締役会（board of directors）や経営陣が、暫定的な契約や修正案を正式に可決・承認するシチュエーションで登場。"
    },
    {
        id: 291,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "rebate",
        partOfSpeech: "名詞",
        pronunciation: "/ˈriːbeɪt/",
        meaning: "（支払代金の一部の）払い戻し、リベート",
        hint: "製品購入後にメーカーに申請して一部現金を戻してもらう「mail-in rebate」は、家電や家具の購入文脈で必須。"
    },
    {
        id: 292,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "recipient",
        partOfSpeech: "名詞",
        pronunciation: "/rɪˈsɪpiənt/",
        meaning: "受取人、受賞者",
        hint: "メールや荷物の受取人、または社内表彰（award）の受賞者を指す文脈で多用される。"
    },
    {
        id: 293,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "reconcile",
        partOfSpeech: "動詞",
        pronunciation: "/ˈrekənsaɪl/",
        meaning: "～を一致させる、和解させる、（帳簿などを）照合する",
        hint: "会計文脈において、銀行の残高証明書と社内の会計帳簿データを「照合して一致させる」という業務でよく使われる。"
    },
    {
        id: 294,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "redundant",
        partOfSpeech: "形容詞",
        pronunciation: "/rɪˈdʌndənt/",
        meaning: "不必要な、余剰の、人員削減された",
        hint: "システムが二重化されていて余剰がある（ポジティブ）という意味と、人員削減の対象になる（ネガティブ）の両面がある。"
    },
    {
        id: 295,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "reimburse",
        partOfSpeech: "動詞",
        pronunciation: "/ˌriːɪmˈbɜːrs/",
        meaning: "（経費などを）払い戻す、立て替え払いする",
        hint: "reimburse A for B（AにBの費用を払い戻す）の形。出張費（travel expenses）の精算手続きで絶対に出題される。"
    },
    {
        id: 296,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "reluctant",
        partOfSpeech: "形容詞",
        pronunciation: "/rɪˈlʌktənt/",
        meaning: "気が進まない、～するのを嫌がる",
        hint: "be reluctant to do（～するのを嫌がる）の形。新しい方針の導入に対して従業員や顧客が難色を示す文脈で登場。"
    },
    {
        id: 297,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "remittance",
        partOfSpeech: "名詞",
        pronunciation: "/rɪˈmɪtns/",
        meaning: "送金、送金額",
        hint: "支払いの文脈で使われる極めてフォーマルな語。remittance advice（送金通知書）などの表現もある。"
    },
    {
        id: 298,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "renovate",
        partOfSpeech: "動詞",
        pronunciation: "/ˈrenəveɪt/",
        meaning: "（建物を）修復する、リフォームする",
        hint: "店舗やオフィスの一時休業（temporary closure）の理由として、改装工事（renovation）が最も頻出するパターン。"
    },
    {
        id: 299,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "renowned",
        partOfSpeech: "形容詞",
        pronunciation: "/rɪˈnaʊnd/",
        meaning: "有名な、名高い",
        hint: "be renowned for（～で名高い）の形で、企業の強みや、高名な専門家、シェフなどを紹介する文脈で使われる。"
    },
    {
        id: 300,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "reprimand",
        partOfSpeech: "動詞",
        pronunciation: "/ˈreprɪmænd/",
        meaning: "～を叱責する、厳重注意する",
        hint: "職務怠慢や規約違反を行った従業員に対し、マネージャーや人事部が公式に注意を与える人事文脈の単語。"
    },
    {
        id: 301,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "rescind",
        partOfSpeech: "動詞",
        pronunciation: "/rɪˈsɪnd/",
        meaning: "（法律・契約・決定などを）撤回する、無効にする",
        hint: "決定された方針や、内定（job offer）、契約が何らかの理由で取り消されるシビアな文脈で使用。"
    },
    {
        id: 302,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "retrieve",
        partOfSpeech: "動詞",
        pronunciation: "/rɪˈtriːv/",
        meaning: "（データを）検索して取り出す、（失ったものを）回収する",
        hint: "データベースから情報を呼び出すIT文脈や、保管倉庫から荷物を取り出す物流文脈で使われる。"
    },
    {
        id: 303,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "revamp",
        partOfSpeech: "動詞",
        pronunciation: "/ˌriːˈvæmp/",
        meaning: "～を刷新する、改造する",
        hint: "ウェブサイトのデザイン刷新（revamp a website）や、古くなったマーケティング戦略、業務プロセスの全面見直しの文脈。"
    },
    {
        id: 304,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "scrutonize",
        partOfSpeech: "動詞",
        pronunciation: "/ˈskruːtənaɪz/",
        meaning: "～を綿密に調べる、精査する",
        hint: "監査（audit）の文脈で、帳簿や報告書、契約書の不備を徹底的にチェックする際に多用される。"
    },
    {
        id: 305,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "solicit",
        partOfSpeech: "動詞",
        pronunciation: "/səˈlɪsɪt/",
        meaning: "/（意見・アドバイス・寄付など）を求める、懇請する",
        hint: "solicit feedback（フィードバックを募る）やsolicit donations（寄付を募る）など、周囲に協力を求める際に使われる。"
    },
    {
        id: 306,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "speculate",
        partOfSpeech: "動詞",
        pronunciation: "/ˈspekjuleɪt/",
        meaning: "推測する、憶測する、投機する",
        hint: "自動詞。speculate about [on]（～について推測する）の形。今後の市場動向や株価、買収の噂について議論する文脈。"
    },
    {
        id: 307,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "stagnant",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈstæɡnənt/",
        meaning: "停滞した、活気がない",
        hint: "stagnant economy（停滞した経済）やstagnant sales（伸び悩む売上）のように、ビジネスが成長していない局面を表す。"
    },
    {
        id: 308,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "stringent",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈstrɪndʒənt/",
        meaning: "（規則・基準などが）厳しい、厳格な",
        hint: "strictのフォーマル表現。stringent safety standards（厳格な安全基準）やstringent quality control（厳格な品質管理）で頻出。"
    },
    {
        id: 309,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "subsidize",
        partOfSpeech: "動詞",
        pronunciation: "/ˈsʌbsɪdaɪz/",
        meaning: "～に補助金を支給する、一部負担する",
        hint: "企業が従業員の福利厚生として、ジムの会員費や通勤費を一部負担（subsidize）する文脈で頻出。名詞はsubsidy（補助金）。"
    },
    {
        id: 310,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "substantial",
        partOfSpeech: "形容詞",
        pronunciation: "/səbˈstænʃl/",
        meaning: "かなりの、大幅な、実質的な",
        hint: "substantial increase（大幅な増加）やsubstantial amount of money（大金）のように、数量や程度が大きいことを強調する。"
    },
    {
        id: 311,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "superficial",
        partOfSpeech: "形容詞",
        pronunciation: "/ˌsuːpərˈfɪʃl/",
        meaning: "表面的な、浅薄な",
        hint: "調査や検査が不十分で、うわべだけの確認に終わっている（superficial inspection）という問題指摘の文脈で使用。"
    },
    {
        id: 312,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "surplus",
        partOfSpeech: "名詞",
        pronunciation: "/ˈsɜːrplʌs/",
        meaning: "黒字、余剰、過剰",
        hint: "budget surplus（予算の黒字）や、需要を上回る製品在庫の余剰（surplus stock）を指す際に使われる。"
    },
    {
        id: 313,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "unanimous",
        partOfSpeech: "形容詞",
        pronunciation: "/juˈnænɪməs/",
        meaning: "満場一致の、全員賛成の",
        hint: "unanimous vote（満場一致の投票）やunanimous approval（満場一致の承認）など、取締役会や会議の決定文脈で頻出。"
    },
    {
        id: 314,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "unprecedented",
        partOfSpeech: "形容詞",
        pronunciation: "/ʌnˈpresɪdentɪd/",
        meaning: "前例のない、かつてない",
        hint: "unprecedented growth（かつてない成長）など、市場での大成功や異例の事態を説明する形容詞。"
    },
    {
        id: 315,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "vacate",
        partOfSpeech: "動詞",
        pronunciation: "/ˈveɪkeɪt/",
        meaning: "（部屋・座席などを）明け渡す、立ち退く",
        hint: "ホテルのチェックアウトや、オフィスの移転に伴い、期日までに部屋を空にする契約・規則文脈で多用。"
    },
    {
        id: 316,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "vendor",
        partOfSpeech: "名詞",
        pronunciation: "/ˈvendər/",
        meaning: "業者、売り手、販売元",
        hint: "既存リストに一部重複があったが、ITベンダーやイベントの出店業者など、具体的な外部取引先を指す最重要語。"
    },
    {
        id: 317,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "versatile",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈvɜːrsətl/",
        meaning: "多才な、用途の広い、万能な",
        hint: "様々な業務をこなせる優秀な人材（versatile employee）や、複数の機能を持つ製品・ツールのPRで使用。"
    },
    {
        id: 318,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "viable",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈvaɪəbl/",
        meaning: "実行可能な、実用性のある、生存可能な",
        hint: "financially viable（財務的に引き合う、採算が取れる）やviable alternative（実行可能な代替案）の形でビジネスプランを議論する際に必須。"
    },
    {
        id: 319,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "waive",
        partOfSpeech: "動詞",
        pronunciation: "/weɪv/",
        meaning: "（権利・手数料などを）放棄する、免除する",
        hint: "waive the shipping fee（配送料を免除する）やwaive the late fee（延滞金を免除する）など、顧客対応の文脈で超頻出。"
    },
    {
        id: 320,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "warrant",
        partOfSpeech: "動詞",
        pronunciation: "/ˈwɔːrənt/",
        meaning: "～を正当化する、保証する、〜に値する",
        hint: "名詞（保証）だけでなく、動詞として「その問題はさらなる調査を要する（warrant further investigation）」等の文脈でパート7に出現。"
    },
    {
        id: 321,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "adhere",
        partOfSpeech: "動詞",
        pronunciation: "/ədˈhɪr/",
        meaning: "（規則・信念などに）固執する、従う",
        hint: "自動詞。adhere to the guidelines（ガイドラインを遵守する）の形をとる。comply withの言い換えとして定番。"
    },
    {
        id: 322,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "adversely",
        partOfSpeech: "副詞",
        pronunciation: "/ədˈvɜːrsli/",
        meaning: "悪影響を及ぼして、逆に",
        hint: "adversely affect（悪影響を与える）というコロケーションがほぼすべて。悪天候や法改正が業績に影を落とす文脈。"
    },
    {
        id: 323,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "advocate",
        partOfSpeech: "名詞",
        pronunciation: "/ˈædvəkət/",
        meaning: "主張者、支持者、擁護者",
        hint: "動詞（～を主張する）もあるが、名詞として「環境保護の支持者（an advocate for environmental protection）」のように使われる。"
    },
    {
        id: 324,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "affiliation",
        partOfSpeech: "名詞",
        pronunciation: "/əˌfɪliˈeɪʃn/",
        meaning: "提携、加盟、所属",
        hint: "business affiliation（業務提携）や、学術会議などの登録フォームで「所属機関」を記載する欄で見かける単語。"
    },
    {
        id: 325,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "alleviate",
        partOfSpeech: "動詞",
        pronunciation: "/əˈliːvieɪt/",
        meaning: "（苦痛・問題など）を緩和する、軽減する",
        hint: "alleviate traffic congestion（交通渋滞を緩和する）や、顧客の不満、業務の負担を減らす文脈で使用。"
    },
    {
        id: 326,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "amendment",
        partOfSpeech: "名詞",
        pronunciation: "/əˈmendment/",
        meaning: "（契約書・法律などの）修正、改正、修正条項",
        hint: "make amendments to the contract（契約書に修正を加える）のように、法務やビジネスの交渉最終段階で必須。"
    },
    {
        id: 327,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "anonymous",
        partOfSpeech: "形容詞",
        pronunciation: "/əˈnɑːnɪməs/",
        meaning: "匿名の、名前を伏せた",
        hint: "anonymous donation（匿名寄付）やanonymous survey（匿名アンケート）など、プライバシー保護の文脈で登場。"
    },
    {
        id: 328,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "anticipate",
        partOfSpeech: "動詞",
        pronunciation: "/ænˈtɪsɪpeɪt/",
        meaning: "～を予想する、予期する、楽しみに待つ",
        hint: "expectに近いが、先を見越して対策を立てるニュアンスを含む。highly anticipated event（大いに期待されたイベント）。"
    },
    {
        id: 329,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "stringently",
        partOfSpeech: "副詞",
        pronunciation: "/ˈstrɪndʒəntli/",
        meaning: "厳格に、厳重に",
        hint: "動詞enforce（施行する）やregulate（規制する）を修飾し、コンプライアンスや安全対策が妥協なく行われている様を表す。"
    },
    {
        id: 330,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "apparel",
        partOfSpeech: "名詞",
        pronunciation: "/əˈpærəl/",
        meaning: "衣服、衣料品",
        hint: "clothingのフォーマルな表現。アパレル産業（apparel industry）や小売（retail）の文脈で頻出。"
    },
    {
        id: 331,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "articulate",
        partOfSpeech: "動詞",
        pronunciation: "/ɑːrˈtɪkjuleɪt/",
        meaning: "（考えなどを）明確に表現する、はっきり述べる",
        hint: "プレゼンテーションや会議、面接で自分の意見やビジョンを論理的かつ明確に伝えるスキルを指す。"
    },
    {
        id: 332,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "aspire",
        partOfSpeech: "動詞",
        pronunciation: "/əˈspaɪər/",
        meaning: "熱望する、志す",
        hint: "自動詞。aspire to do（～することを熱望する）の形。キャリアアップや、将来～になりたいという文脈（aspiring entrepreneur：起業家志望）で使用。"
    },
    {
        id: 333,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "stringent",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈstrɪndʒənt/",
        meaning: "（規則・基準などが）厳しい、厳格な",
        hint: "重複登録の疑いがあるため、代替として「austere（厳格な、緊縮の）」や、予算削減（austere budget）の文脈を想定。"
    },
    {
        id: 334,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "beverage",
        partOfSpeech: "名詞",
        pronunciation: "/ˈbevərɪdʒ/",
        meaning: "（水以外の）飲み物、飲料",
        hint: "drinkのフォーマル表現。ケータリング、機内サービス、レストラン、社内イベントの告知文脈で必須。"
    },
    {
        id: 335,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "breach",
        partOfSpeech: "名詞",
        pronunciation: "/briːtʃ/",
        meaning: "（法律・契約などの）違反、侵害、不履行",
        hint: "breach of contract（契約違反）やdata breach（データ漏洩）など、法的責任やセキュリティ上の重大問題で登場。"
    },
    {
        id: 336,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "cater",
        partOfSpeech: "動詞",
        pronunciation: "/ˈkeɪtər/",
        meaning: "（料理などを）まかなう、要望に応じる",
        hint: "cater for/to 名詞の形で「ニーズを満たす」という意味や、catered event（出張料理付きのイベント）として出題。"
    },
    {
        id: 337,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "chronological",
        partOfSpeech: "形容詞",
        pronunciation: "/ˌkrɑːnəˈlɑːdʒɪkl/",
        meaning: "年代順の、時間の経過に従った",
        hint: "in chronological order（年代順に）というフレーズで頻出。履歴書（resume）の経歴記載や、報告書の構成指示で使われる。"
    },
    {
        id: 338,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "coincide",
        partOfSpeech: "動詞",
        pronunciation: "/ˌkoʊɪnˈsaɪd/",
        meaning: "同時に起こる、（意見などが）一致する",
        hint: "自動詞。coincide with 名詞の形で、イベントのスケジュールが重なってしまった時や、計画が他と一致した際に使用。"
    },
    {
        id: 339,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "collateral",
        partOfSpeech: "名詞",
        pronunciation: "/kəˈlætərəl/",
        meaning: "担保、見返り",
        hint: "銀行から融資（loan）を受ける際に提供する不動産などの「担保」を指す、金融・融資文脈の重要語。"
    },
    {
        id: 340,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "commend",
        partOfSpeech: "動詞",
        pronunciation: "/kəˈmend/",
        meaning: "～を褒める、称賛する",
        hint: "praiseのフォーマルな表現。業績を上げた従業員や、永年勤続のスタッフを社内メールで公式に表彰・称賛する文脈で頻出。"
    },
    {
        id: 341,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "compatible",
        partOfSpeech: "形容詞",
        pronunciation: "/kəmˈpætəbl/",
        meaning: "（機器やシステムが）互換性のある、適合する",
        hint: "be compatible with 名詞（～と互換性がある）の形で、新ソフトウェアや周辺機器の導入可否を議論するIT文脈に必須。"
    },
    {
        id: 342,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "compel",
        partOfSpeech: "動詞",
        pronunciation: "/kəmˈpel/",
        meaning: "（人）に無理に～させる、強いる",
        hint: "compel A to do（Aに～することを強いる）の形。法改正や市場の急変により、企業が方針転換を余儀なくされる文脈。"
    },
    {
        id: 343,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "complimentary",
        partOfSpeech: "形容詞",
        pronunciation: "/ˌkɑːmplɪˈmentri/",
        meaning: "無料の、優待の、称賛の",
        hint: "freeのビジネス表現。complimentary breakfast（無料の朝食）やcomplimentary ticket（優待券）など、ホテル・サービス業で超頻出。"
    },
    {
        id: 344,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "compromise",
        partOfSpeech: "動詞",
        pronunciation: "/ˈkɑːmprəmaɪz/",
        meaning: "妥協する、（信用など）を危うくする",
        hint: "契約交渉における「妥協」だけでなく、セキュリティや品質が「脅かされる、低下する（compromise quality）」の意味も重要。"
    },
    {
        id: 345,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "mandatory",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈmændətɔːri/",
        meaning: "義務的な、必須の",
        hint: "前出。代替語「compulsory（義務的な）」と同等義。研修や手続きの強制力を示す。"
    },
    {
        id: 346,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "confidential",
        partOfSpeech: "形容詞",
        pronunciation: "/ˌkɑːnfɪˈdenʃl/",
        meaning: "機密の、秘密の",
        hint: "confidential information（機密情報）やconfidential document（機密書類）など、社内セキュリティや契約書に頻出。"
    },
    {
        id: 347,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "consolidate",
        partOfSpeech: "動詞",
        pronunciation: "/kənˈsɑːlɪdeɪt/",
        meaning: "（地位などを）固める、合併する、統合する",
        hint: "複数の部署や拠点を一つに「統合する」文脈、あるいは債務を一本化する（consolidate debts）文脈で使用。"
    },
    {
        id: 348,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "contractor",
        partOfSpeech: "名詞",
        pronunciation: "/ˈkɑːntræktər/",
        meaning: "請負業者、契約社員",
        hint: "外部の工事請負業者（independent contractor）や、特定のプロジェクトのために有期で雇う専門家を指す。"
    },
    {
        id: 349,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "contradict",
        partOfSpeech: "動詞",
        pronunciation: "/ˌkɑːntrəˈdɪkt/",
        meaning: "～と矛盾する、～に反論する",
        hint: "データや調査結果が、従来の予測や他人の主張と食い違っている（矛盾している）という指摘の文脈。"
    },
    {
        id: 350,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "curriculum",
        partOfSpeech: "名詞",
        pronunciation: "/kəˈrɪkjələm/",
        meaning: "カリキュラム、教育課程",
        hint: "社員研修プログラム（training program）や語学学校、教育機関の講座内容を説明するパンフレット等の文章で登場。"
    },
    {
        id: 351,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "curtail",
        partOfSpeech: "動詞",
        pronunciation: "/kɜːrˈteɪl/",
        meaning: "～を削減する、短縮する",
        hint: "reduceの硬い表現。curtail spending（支出を削減する）やcurtail production（生産を縮小する）の形で使われる。"
    },
    {
        id: 352,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "debris",
        partOfSpeech: "名詞",
        pronunciation: "/dəˈbriː/",
        meaning: "（破壊されたものの）残骸、破片、ゴミ",
        hint: "発音注意。不可算名詞。工事現場の瓦礫の撤去や、災害・事故後の現場片付けの文脈、道路の通行止め理由として出題。"
    },
    {
        id: 353,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "deduct",
        partOfSpeech: "動詞",
        pronunciation: "/dɪˈdʌkt/",
        meaning: "（金額など）を差し引く、控除する",
        hint: "給与から税金や保険料が天引きされる、または合計金額から割引分が差し引かれる文脈。名詞形はdeduction。"
    },
    {
        id: 354,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "defective",
        partOfSpeech: "形容詞",
        pronunciation: "/dɪˈfektɪv/",
        meaning: "欠陥のある、不完全な",
        hint: "defective product（欠陥品）。製品の不具合による返品（return）、交換（exchange）、返金（refund）のカスタマーサポート文脈で必須。"
    },
    {
        id: 355,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "defer",
        partOfSpeech: "動詞",
        pronunciation: "/dɪˈfɜːr/",
        meaning: "～を延期する、先送りにする",
        hint: "postponeやdelayの類義語。defer payment（支払いを猶予・延期する）やdefer a decision（決定を先送りする）などで頻出。"
    },
    {
        id: 356,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "deficit",
        partOfSpeech: "名詞",
        pronunciation: "/ˈdefəsɪt/",
        meaning: "赤字、不足額",
        hint: "surplus（黒字）の対義語。budget deficit（予算の赤字）やtrade deficit（貿易赤字）など、財務状況の悪化を示す表現。"
    },
    {
        id: 357,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "deliberate",
        partOfSpeech: "形容詞",
        pronunciation: "/dɪˈlɪbərət/",
        meaning: "故意の、計画的な、慎重な",
        hint: "動詞（熟考する）もあるが、形容詞として「慎重な決断（deliberate decision）」や、意図的な行為を指す文脈で使用。"
    },
    {
        id: 358,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "deteriorate",
        partOfSpeech: "動詞",
        pronunciation: "/dɪˈtɪriəreɪt/",
        meaning: "悪化する、低下する",
        hint: "自動詞。worsenのフォーマル表現。経済状況、業績、天候、あるいは建物の老朽化（deteriorating building）の文脈で使われる。"
    },
    {
        id: 359,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "discrepancy",
        partOfSpeech: "名詞",
        pronunciation: "/dɪˈskrepənsi/",
        meaning: "（計算などの）矛盾、不一致、食い違い",
        hint: "請求書の金額と実際の納品数が異なるなど、帳簿やデータ間の「矛盾・エラー」を指摘・修正する文脈で超頻出。"
    },
    {
        id: 360,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "discretion",
        partOfSpeech: "名詞",
        pronunciation: "/dɪˈskreʃn/",
        meaning: "裁量、決定権、慎重さ",
        hint: "at the manager's discretion（マネージャーの裁量で）などのフレーズで頻出。例外処理や個別の判断を認める規則文脈。"
    },
    {
        id: 361,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "dismantle",
        partOfSpeech: "動詞",
        pronunciation: "/dɪsˈmæntl/",
        meaning: "（機械などを）分解する、解体する",
        hint: "工場の大型機械の移設時や、イベント終了後のステージ・ブースを「解体する」工事・設備文脈で使用。"
    },
    {
        id: 362,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "diversify",
        partOfSpeech: "動詞",
        pronunciation: "/daɪˈvɜːrsɪfaɪ/",
        meaning: "多角化する、多様化する",
        hint: "diversify the product line（製品ラインナップを多角化する）や、投資先・事業リスクを分散する文脈の経営戦略用語。"
    },
    {
        id: 363,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "dividend",
        partOfSpeech: "名詞",
        pronunciation: "/ˈdɪvɪdend/",
        meaning: "配当、配当金",
        hint: "株主（shareholder）に対して支払われる利益の分配金を指す、決算・株式市場文脈の専門用語。"
    },
    {
        id: 364,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "drastic",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈdræstɪk/",
        meaning: "猛烈な、思い切った、劇的な",
        hint: "drastic change（劇的な変化）やdrastic cost reduction（抜本的なコスト削減）のように、手段や変化が極めて大きい様。"
    },
    {
        id: 365,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "earnings",
        partOfSpeech: "名詞",
        pronunciation: "/ˈɜːrnɪŋz/",
        meaning: "利益、所得、収益",
        hint: "常に複数形。corporate earnings（企業の収益）や、四半期決算報告（earnings report）のタイトルなどで必ず見かける。"
    },
    {
        id: 366,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "economical",
        partOfSpeech: "形容詞",
        pronunciation: "/ˌiːkəˈnɑːmɪkl/",
        meaning: "経済的な、無駄遣いしない、省エネの",
        hint: "economic（経済の）と混同注意。製品のコストパフォーマンスが高い、または燃費が良いことを謳う広告文脈で多用。"
    },
    {
        id: 367,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "eminent",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈemɪnənt/",
        meaning: "著名な、優れた",
        hint: "prominentの類義語。学会や業界トップのカンファレンスで、著名な学者や経営者をスピーカーとして紹介する際に使用。"
    },
    {
        id: 368,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "endeavor",
        partOfSpeech: "名詞",
        pronunciation: "/ɪnˈdevər/",
        meaning: "努力、試み、事業",
        hint: "動詞（努力する）もあるが、名詞としてin our future endeavors（我々の今後の取り組み・事業において）というビジネスの挨拶状の締め括りで頻出。"
    },
    {
        id: 369,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "enterprise",
        partOfSpeech: "名詞",
        pronunciation: "/ˈentərpraɪz/",
        meaning: "企業、事業、進取の気性",
        hint: "corporationやcompanyの類義語。特に大企業や、新規の冒険的な事業プロジェクトを指す際に使われる用語。"
    },
    {
        id: 370,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "enthusiastic",
        partOfSpeech: "形容詞",
        pronunciation: "/ɪnˌθuːziˈæstɪk/",
        meaning: "熱狂的な、熱心な",
        hint: "be enthusiastic about 名詞（～に熱心である）。新しいプロジェクトや職務に対し、高いモチベーションを持っている人材を表す。"
    },
    {
        id: 371,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "errand",
        partOfSpeech: "名詞",
        pronunciation: "/ˈerənd/",
        meaning: "使い走り、用事",
        hint: "run errands（使い走りをする、雑用を済ませる）という定型表現。業務時間中にちょっとした外出をするシチュエーションなどで登場。"
    },
    {
        id: 372,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "esteem",
        partOfSpeech: "名詞",
        pronunciation: "/ɪˈstiːm/",
        meaning: "尊敬、尊重、高い評価",
        hint: "held in high esteem（高く評価されている）の形で頻出。業界内での信頼や、社内での優れた評価を表す表現。"
    },
    {
        id: 373,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "evacuate",
        partOfSpeech: "動詞",
        pronunciation: "/ɪˈvækjueɪt/",
        meaning: "（建物などから）避難する、～を退去させる",
        hint: "火災訓練（fire drill）や災害時の指示において、オフィスビルから速やかに退出・避難する文脈で必須。"
    },
    {
        id: 374,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "excerpt",
        partOfSpeech: "名詞",
        pronunciation: "/ˈeksɜːrpt/",
        meaning: "（本や記事などの）抜粋、引用",
        hint: "パート7の設問などで、雑誌のコラムや社内規定の一部を「抜粋したもの」として提示する際によく見られる語。"
    },
    {
        id: 375,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "exempt",
        partOfSpeech: "形容詞",
        pronunciation: "/ɪɡˈzempt/",
        meaning: "（義務などを）免除された",
        hint: "be exempt from 名詞（～を免除されている）の形で、残業代支給対象外の職種（exempt employee）や、免税（tax-exempt）の文脈で頻出。"
    },
    {
        id: 376,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "exert",
        partOfSpeech: "動詞",
        pronunciation: "/ɪɡˈzɜːrt/",
        meaning: "（力・影響力など）を行使する、働かせる",
        hint: "exert influence on 名詞（～に影響力を及ぼす）や、全力を尽くす（exert oneself）といった表現で使われる。"
    },
    {
        id: 377,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "exorbitant",
        partOfSpeech: "形容詞",
        pronunciation: "/ɪɡˈzɔːrbɪtənt/",
        meaning: "（価格・料金などが）法外な、高すぎる",
        hint: "expensiveの過激な表現。ホテルやサービスの追加料金、家賃などが不当に高いと不満を述べる文脈で使用。"
    },
    {
        id: 378,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "feasibility",
        partOfSpeech: "名詞",
        pronunciation: "/ˌfiːzəˈbɪləti/",
        meaning: "実現可能性、実行可能性",
        hint: "feasibility study（実現可能性の調査、フィージビリティスタディ）の形で、新規プロジェクトを立ち上げる前の承認段階で多用。"
    },
    {
        id: 379,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "fluency",
        partOfSpeech: "名詞",
        pronunciation: "/ˈfluːənsi/",
        meaning: "流暢さ、滑らかさ",
        hint: "求人要件（job requirements）において、英語や他言語の流暢な運用能力（fluency in English）を求める文脈で必須。"
    },
    {
        id: 380,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "forthcoming",
        partOfSpeech: "形容詞",
        pronunciation: "/ˌfɔːrθˈkʌmɪŋ/",
        meaning: "来たるべき、間近に迫った",
        hint: "upcomingの類義語。forthcoming election（次期選挙）やforthcoming book（近刊）など、イベントや出版が近い文脈で使用。"
    },
    {
        id: 381,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "foster",
        partOfSpeech: "動詞",
        pronunciation: "/ˈfɑːstər/",
        meaning: "～を促進する、育成する、醸成する",
        hint: "foster team spirit（チームスピリットを育む）やfoster innovation（革新を促す）など、社内環境を良くするポジティブな文脈で頻出。"
    },
    {
        id: 382,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "fragile",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈfrædʒl/",
        meaning: "壊れやすい、脆い",
        hint: "物流・配送文脈の必須単語。梱包箱のラベル（Fragile: Handle with care / 壊れ物注意）や、不安定な経済状況の描写に登場。"
    },
    {
        id: 383,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "garment",
        partOfSpeech: "名詞",
        pronunciation: "/ˈɡɑːrmənt/",
        meaning: "衣類、衣服",
        hint: "apparelの類義語。クリーニング店への預け入れ、衣類メーカーの在庫管理、アパレルショップのセール告知などで使われる。"
    },
    {
        id: 384,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "gauge",
        partOfSpeech: "動詞",
        pronunciation: "/ɡeɪdʒ/",
        meaning: "（大きさ・量などを）測定する、（人の感情を）推し量る",
        hint: "gauge customer reaction（顧客の反応を窺う）や、計器で数値を測る文脈で使用。名詞では「計器、尺度」の意味。"
    },
    {
        id: 385,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "grievance",
        partOfSpeech: "名詞",
        pronunciation: "/ˈɡriːvəns/",
        meaning: "不満、苦情",
        hint: "complaintの極めてフォーマルな表現。特に労働環境に対する従業員側からの公式な不満（file a grievance / 苦情を申し立てる）の文脈。"
    },
    {
        id: 386,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "hazard",
        partOfSpeech: "名詞",
        pronunciation: "/ˈhæzərd/",
        meaning: "危険、危険要素",
        hint: "dangerのフォーマル表現。safety hazard（安全上の脅威）やenvironmental hazard（環境有害性）など、工場や施設の安全点検文脈で頻出。"
    },
    {
        id: 387,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "hectare",
        partOfSpeech: "名詞",
        pronunciation: "/ˈhekteər/",
        meaning: "ヘクタール（面積の単位）",
        hint: "不動産開発や大規模な工場の敷地（site）、農地の面積をパート7の紹介記事などで描写する際に登場する単位。"
    },
    {
        id: 388,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "hence",
        partOfSpeech: "副詞",
        pronunciation: "/hens/",
        meaning: "それゆえに、したがって、今から",
        hint: "thereforeの硬い表現。論文調の報告書や、two weeks hence（今から2週間後）のように期間の取り決め文脈で使われる。"
    },
    {
        id: 389,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "hospitality",
        partOfSpeech: "名詞",
        pronunciation: "/ˌhɑːspɪˈtæləti/",
        meaning: "歓迎、もてなし、サービス業",
        hint: "hospitality industry（ホテル・観光・サービス産業）という複合名詞や、顧客を招待した際の感謝の挨拶（Thank you for your hospitality）で頻出。"
    },
    {
        id: 390,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "imminent",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈɪmɪnənt/",
        meaning: "（危険や変化が）差し迫った、目と鼻の先の",
        hint: "悪天候の接近や、新システムの強制移行など、避けて通れない事態が直前に迫っているシビアなニュアンスを持つ。"
    },
    {
        id: 391,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "impartial",
        partOfSpeech: "形容詞",
        pronunciation: "/ɪmˈpɑːrʃl/",
        meaning: "公平な、偏見のない",
        hint: "fairの硬い表現。外部の監査人（impartial auditor）や、人事評価、調査報告書の中立性を証明する文脈で使われる。"
    },
    {
        id: 392,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "imperative",
        partOfSpeech: "形容詞",
        pronunciation: "/ɪmˈperətɪv/",
        meaning: "絶対に不可欠な、緊急の、義務的な",
        hint: "It is imperative that 節（～することが絶対に必要だ）の形で頻出。期限厳守や機密保持など、最優先事項の指示で使用。"
    },
    {
        id: 393,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "implication",
        partOfSpeech: "名詞",
        pronunciation: "/ˌɪmplɪˈkeɪʃn/",
        meaning: "（予想される）影響、結果、含み",
        hint: "financial implications（財務への影響）のように、ある決定や法改正が将来もたらす波及効果を議論する文脈で必須。"
    },
    {
        id: 394,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "inadvertently",
        partOfSpeech: "副詞",
        pronunciation: "/ˌɪnədˈvɜːrtəntli/",
        meaning: "うっかり、不注意にも、意図せず",
        hint: "by mistakeのフォーマル表現。誤ってデータを消去した、請求書を2回送ってしまった等のトラブルの謝罪・釈明文脈。"
    },
    {
        id: 395,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "inbound",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈɪnbaʊnd/",
        meaning: "到着する、市内に向かう、入電の",
        hint: "inbound flight（到着便）のほか、コールセンター業務における顧客からの受信（inbound calls）の文脈で登場。"
    },
    {
        id: 396,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "itinerant",
        partOfSpeech: "形容詞",
        pronunciation: "/aɪˈtɪnərənt/",
        meaning: "巡回する、移動を続ける",
        hint: "itinerary（旅行日程）の関連語。各地の支店を回る巡回技術者（itinerant engineer）などの説明でパート7に出現。"
    },
    {
        id: 397,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "judicious",
        partOfSpeech: "形容詞",
        pronunciation: "/dʒuˈdɪʃəs/",
        meaning: "思慮分別の高い、賢明な",
        hint: "wiseやsensibleの洗練された表現。予算の配分や、リスクマネジメントにおける「賢明な判断・選択」を称賛する文脈。"
    },
    {
        id: 398,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "kinship",
        partOfSpeech: "名詞",
        pronunciation: "/ˈkɪnʃɪp/",
        meaning: "親族関係、親近感、連帯感",
        hint: "TOEIC特化単語帳（金のフレーズ等）の名称にも掛かる語。地域社会とのつながりや、チームメンバー間の強い連帯感を示す。"
    },
    {
        id: 399,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "lapse",
        partOfSpeech: "名詞",
        pronunciation: "/læps/",
        meaning: "（時間の）経過、（ちょっとした）誤り、失効",
        hint: "lapse of time（時間の経過）やa lapse of concentration（集中力の途切れ）、契約が更新されず失効する文脈などで使用。"
    },
    {
        id: 400,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "lavish",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈlævɪʃ/",
        meaning: "豪華な、贅沢な、気前の良い",
        hint: "lavish banquet（豪華な晩餐会）やlavish praise（多大な称賛）。イベントの格調の高さをアピールする文脈。"
    },
    {
        id: 401,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "leakage",
        partOfSpeech: "名詞",
        pronunciation: "/ˈliːkɪdʒ/",
        meaning: "漏洩、漏れ、リーク",
        hint: "工場の配管からの液体漏れ（water leakage）や、機密情報の漏洩（information leakage）を指摘・対策する文脈。"
    },
    {
        id: 402,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "legacy",
        partOfSpeech: "名詞",
        pronunciation: "/ˈleɡəsi/",
        meaning: "遺産、受け継いだもの、古い（システム）",
        hint: "退職する創業者の功績（legacy）を称える文脈のほか、IT分野の「レガシーシステム（旧式システム）」の刷新文脈で頻出。"
    },
    {
        id: 403,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "legitimate",
        partOfSpeech: "形容詞",
        pronunciation: "/lɪˈdʒɪtɪmət/",
        meaning: "合法的な、正当な、妥当な",
        hint: "legitimate reason（正当な理由）の形で頻出。返品手続きや締め切り遅延の申請が認められる正当性を議論する文脈。"
    },
    {
        id: 404,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "lenient",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈliːniənt/",
        meaning: "寛大な、情け深い",
        hint: "規則の適用や違反者への処分、あるいは期日の判定が「厳しくない（緩い）」状態を指す。対義語はstringentやstrict。"
    },
    {
        id: 405,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "leverage",
        partOfSpeech: "動詞",
        pronunciation: "/ˈlevərɪdʒ/",
        meaning: "～を活用する、テコにする",
        hint: "名詞（レバレッジ、影響力）もあるが、ビジネスでは「強みやリソースを有効活用して成果を上げる」という意味の動詞として多用。"
    },
    {
        id: 406,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "liability",
        partOfSpeech: "名詞",
        pronunciation: "/ˌlaɪəˈbɪləti/",
        meaning: "法的責任、債務、負債",
        hint: "product liability（製造物責任）や、会計用語のliabilities（負債の部）として登場。事故時の免責条項などに必須。"
    },
    {
        id: 407,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "liquidation",
        partOfSpeech: "名詞",
        pronunciation: "/ˌlɪkwɪˈdeɪʃn/",
        meaning: "（倒産会社などの）清算、整理、現金化",
        hint: "liquidation sale（清算セール、閉店売り尽くし）の形で、店舗の完全閉店に伴う在庫処分案内のチラシ文脈で頻出。"
    },
    {
        id: 408,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "lucrative",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈluːkrətɪv/",
        meaning: "利益の上がる、儲かる",
        hint: "profitableの類義語。lucrative contract（実入りの良い契約）やlucrative market（儲かる市場）など、投資・事業の成功機会を指す。"
    },
    {
        id: 409,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "malfunction",
        partOfSpeech: "名詞",
        pronunciation: "/ˌmælˈfʌŋkʃn/",
        meaning: "不具合、故障、誤作動",
        hint: "動詞（誤作動する）もある。equipment malfunction（機器の不具合）など、オフィス機器や工場ラインのトラブル文脈で必須。"
    },
    {
        id: 410,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "mediation",
        partOfSpeech: "名詞",
        pronunciation: "/ˌmiːdiˈeɪʃn/",
        meaning: "調停、仲裁",
        hint: "企業間の紛争（dispute）や、労働者と経営陣の対立を、裁判に持ち込まずに外部の第三者を挟んで解決を試みる文脈。"
    },
    {
        id: 411,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "meticulous",
        partOfSpeech: "形容詞",
        pronunciation: "/məˈtɪkjələs/",
        meaning: "極めて注意深い、細部まで行き届いた",
        hint: "meticulous planning（細心の計画）やmeticulous attention to detail（細部への徹底的なこだわり）など、高品質な業務を称賛する表現。"
    },
    {
        id: 412,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "momentum",
        partOfSpeech: "名詞",
        pronunciation: "/moʊˈmentəm/",
        meaning: "勢い、推進力、弾み",
        hint: "gain momentum（勢いづく）というコロケーションが基本。売上やプロジェクト、市場の拡大スピードが加速する場面で使われる。"
    },
    {
        id: 413,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "monopoly",
        partOfSpeech: "名詞",
        pronunciation: "/məˈnɑːpəli/",
        meaning: "独占、独占企業、専売特許",
        hint: "市場を1社が独占している状態。独占禁止法（antitrust laws）や、競合が存在しない独占的優位性を論じる文脈。"
    },
    {
        id: 414,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "morale",
        partOfSpeech: "名詞",
        pronunciation: "/məˈræl/",
        meaning: "（組織の）士気、勤労意欲",
        hint: "moral（道徳）と混同注意。boost employee morale（従業員の士気を高める）のように、福利厚生や職場環境改善の目的として登場。"
    },
    {
        id: 415,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "municipal",
        partOfSpeech: "形容詞",
        pronunciation: "/mjuːˈnɪsɪpl/",
        meaning: "地方自治体の、市営の",
        hint: "municipal government（市役所、地方自治体）やmunicipal tax（住民税）。地域のイベント、ゴミ収集、公共工事の告知文脈で頻出。"
    },
    {
        id: 416,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "negligible",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈneɡlɪdʒəbl/",
        meaning: "無視できるほどの、ごくわずかな",
        hint: "変化やミスが小さく、業績や安全性にほとんど影響を与えない（negligible impact）と結論づける文脈で使用。"
    },
    {
        id: 417,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "norm",
        partOfSpeech: "名詞",
        pronunciation: "/nɔːrm/",
        meaning: "標準、規範、一般的な基準",
        hint: "above the norm（標準以上）などの表現。業界の平均値や、一般的なビジネスマナー・労働基準を指す際に使われる。"
    },
    {
        id: 418,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "obsolete",
        partOfSpeech: "形容詞",
        pronunciation: "/ˌɑːbsəˈliːt/",
        meaning: "時代遅れの、廃れた",
        hint: "outdatedの類義語。新製品の登場により古い機材やソフトウェアが「陳腐化・無用」になるIT・製造文脈の最重要単語。"
    },
    {
        id: 419,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "obstacle",
        partOfSpeech: "名詞",
        pronunciation: "/ˈɑːbstəkl/",
        meaning: "障害、障害物",
        hint: "overcome obstacles（障害を乗り越える）の形で頻出。プロジェクト進行上のボトルネックや、海外進出の障壁について語る文脈。"
    },
    {
        id: 420,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "occupancy",
        partOfSpeech: "名詞",
        pronunciation: "/ˈɑːkjəpənsi/",
        meaning: "（ホテル・ビルなどの）収容、居住、占有",
        hint: "occupancy rate（ホテルの客室稼働率、ビルの入居率）の複合名詞が、ホテル業や不動産投資の業績報告で頻出。"
    },
    {
        id: 421,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "on-site",
        partOfSpeech: "形容詞",
        pronunciation: "/ˌɑːnˈsaɪt/",
        meaning: "現地の、敷地内の、駐在の",
        hint: "on-site parking（敷地内駐車場）やon-site inspection（現地査察）。わざわざ移動せずその場所で提供される利便性を表す。"
    },
    {
        id: 422,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "outsource",
        partOfSpeech: "動詞",
        pronunciation: "/ˈaʊtsɔːrs/",
        meaning: "（業務を）外部委託する、外注する",
        hint: "コア業務に集中するため、カスタマーサポートやデータ入力を外部業者（vendor）に委託するコスト削減文脈で多用。"
    },
    {
        id: 423,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "outstanding",
        partOfSpeech: "形容詞",
        pronunciation: "/aʊtˈstændɪŋ/",
        meaning: "傑出した、未払いの、未解決の",
        hint: "「優れた業績」という意味のほか、outstanding balance（未払い残高）という会計・請求文脈の超重要意味を必ず押さえる。"
    },
    {
        id: 424,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "overhaul",
        partOfSpeech: "名詞",
        pronunciation: "/ˈoʊvərhɔːl/",
        meaning: "全面的見直し、分解修理、オーバーホール",
        hint: "動詞（～を全面点検する）もある。system overhaul（システムの全面刷新）や、老朽化した設備の解体点検文脈で登場。"
    },
    {
        id: 425,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "oversight",
        partOfSpeech: "名詞",
        pronunciation: "/ˈoʊvərsaɪt/",
        meaning: "見落とし、手落ち、監視、監督",
        hint: "due to an oversight（見落としのせいで）というミスの言い訳文脈と、監修（under the oversight of...）という逆の2つの意味を持つ。"
    },
    {
        id: 426,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "paramount",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈpærəmaʊnt/",
        meaning: "最高の、主要な、何よりも優先される",
        hint: "of paramount importance（最重要の）という定型表現で多用。安全対策やデータ機密など、最優先すべき方針の表明。"
    },
    {
        id: 427,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "pave",
        partOfSpeech: "動詞",
        pronunciation: "/peɪv/",
        meaning: "（道路を）舗装する、（道を）切り開く",
        hint: "paved parking lot（舗装された駐車場）のような施設描写と、pave the way for（～への道を切り開く）というビジネスチャンスの比喩表現がある。"
    },
    {
        id: 428,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "peak",
        partOfSpeech: "形容詞",
        pronunciation: "/piːk/",
        meaning: "ピークの、最盛期の、最高の",
        hint: "名詞や動詞（頂点に達する）もあるが、peak season（繁忙期）やpeak hours（混雑時間帯）の形で料金の変動文脈に直結する。"
    },
    {
        id: 429,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "penalty",
        partOfSpeech: "名詞",
        pronunciation: "/ˈpenəlti/",
        meaning: "罰金、違約金、不利益",
        hint: "fineの類義語。cancellation penalty（キャンセル違約金）や、契約の期日遅延に伴う罰則金の請求文脈で頻出。"
    },
    {
        id: 430,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "perishable",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈperɪʃəbl/",
        meaning: "（食品などが）腐りやすい、傷みやすい",
        hint: "perishable food（生鮮食品）。物流・運送において、冷蔵配送（refrigerated shipping）や迅速な手配を要求する文脈で頻出。"
    },
    {
        id: 431,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "perquisite",
        partOfSpeech: "名詞",
        pronunciation: "/ˈpɜːrkwɪzɪt/",
        meaning: "（職務に伴う）諸手当、臨時収入、特権",
        hint: "通称「perk（特典、フリンジベネフィット）」。社用車の私用許可やジムの無料利用など、求人票の福利厚生欄で使われる。"
    },
    {
        id: 432,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "petition",
        partOfSpeech: "名詞",
        pronunciation: "/pəˈtɪʃn/",
        meaning: "嘆願書、請願書、申し立て",
        hint: "sign a petition（嘆願書に署名する）。地域住民による再開発への反対や、従業員による労働環境改善の要求文脈で登場。"
    },
    {
        id: 433,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "placement",
        partOfSpeech: "名詞",
        pronunciation: "/ˈpleɪsmənt/",
        meaning: "配置、就職、配属",
        hint: "job placement（職業紹介、就職斡旋）や、新入社員の適性に応じた部署への「配属」を指す人事文脈の重要語。"
    },
    {
        id: 434,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "plumber",
        partOfSpeech: "名詞",
        pronunciation: "/ˈplʌmər/",
        meaning: "配管工、水道屋",
        hint: "発音注意（bは黙字）。オフィスの洗面所や工場の排水管の水漏れ（leakage）トラブルで、修理に呼ばれる職種として定番。"
    },
    {
        id: 435,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "plummet",
        partOfSpeech: "動詞",
        pronunciation: "/ˈplʌmɪt/",
        meaning: "（価格・数値などが）急落する、垂直に落ちる",
        hint: "plungeの類義語。dropやdecreaseよりも激しい下落を表し、不況による株価の急落や売上の激減を描写するシビアな文脈。"
    },
    {
        id: 436,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "portfolio",
        partOfSpeech: "名詞",
        pronunciation: "/pɔːrtˈfoʊlioʊ/",
        meaning: "作品集、投資資産構成、製品群",
        hint: "デザイナーの作品集という文脈のほか、金融投資（資産配分）や、企業の保有する商品ラインナップ全体を指す。"
    },
    {
        id: 437,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "postal",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈpoʊstl/",
        meaning: "郵便の、郵便による",
        hint: "postal service（郵便事業）やpostal code（郵便番号）。荷物の発送オプションや、アンケートの返送方法の指定文脈。"
    },
    {
        id: 438,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "practitioner",
        partOfSpeech: "名詞",
        pronunciation: "/prækˈtɪʃənər/",
        meaning: "（特定の専門職の）開業医、弁護士、実践者",
        hint: "medical practitioner（医師）やlegal practitioner（法律家）など、資格を持った専門職を指す格式高い表現。"
    },
    {
        id: 439,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "precaution",
        partOfSpeech: "名詞",
        pronunciation: "/prɪˈkɔːʃn/",
        meaning: "予防策、警戒、安全対策",
        hint: "take precautions（予防措置を講じる）。工場の安全規律や、サイバーセキュリティの脆弱性対策において必須のフレーズ。"
    },
    {
        id: 440,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "precedence",
        partOfSpeech: "名詞",
        pronunciation: "/ˈpresɪdəns/",
        meaning: "優先、上位、優先権",
        hint: "take precedence over 名詞（～に優先する）。予算やリソースが限られる中、どのタスクを最優先すべきかを議論する文脈。"
    },
    {
        id: 441,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "predominantly",
        partOfSpeech: "副詞",
        pronunciation: "/drɪˈdɑːmɪnəntli/",
        meaning: "主に、大部分は、圧倒的に",
        hint: "mainlyの類義語。顧客層の属性（例：主に20代）や、売上の内訳、特定の技術が市場の大半を占める様を説明する。"
    },
    {
        id: 442,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "premium",
        partOfSpeech: "名詞",
        pronunciation: "/ˈpriːmiəm/",
        meaning: "保険料、割増料金、高級な（形容詞）",
        hint: "insurance premium（保険料）の意味が最重要。また、追加サービスを受けるための割増料金や、高品質な製品の形容詞としても頻出。"
    },
    {
        id: 443,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "requisite",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈrekwɪzɪt/",
        meaning: "必須の、必要な",
        hint: "requiredの硬い表現。requisite skills（必須スキル）のように、求人要件やプロジェクト参加への前提条件として登場。"
    },
    {
        id: 444,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "prestige",
        partOfSpeech: "名詞",
        pronunciation: "/preˈstiːʒ/",
        meaning: "名声、威信、高級感",
        hint: "prestigious（名声のある）の関連語。一流企業としてのブランド価値や、格式高い賞（award）の価値を形容する文脈。"
    },
    {
        id: 445,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "prizes",
        partOfSpeech: "名詞",
        pronunciation: "/praɪzɪz/",
        meaning: "賞、賞品、賞金",
        hint: "社内コンテストや、顧客向けのプロモーションキャンペーン（raffle/抽選会）の景品について記述する文脈で登場。"
    },
    {
        id: 446,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "probation",
        partOfSpeech: "名詞",
        pronunciation: "/proʊˈbeɪʃn/",
        meaning: "見習い期間、試用期間",
        hint: "probationary period（試用期間）。新入社員が正式採用（permanent employee）になる前の、能力・適性の見極め期間を指す。"
    },
    {
        id: 447,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "procure",
        partOfSpeech: "動詞",
        pronunciation: "/prəˈkjʊr/",
        meaning: "（必要なものを）調達する、入手する",
        hint: "buyやgetの専門的表現。工場の原材料やオフィス資材の調達（procurement department / 調達部）文脈で必須。"
    },
    {
        id: 448,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "productivity",
        partOfSpeech: "名詞",
        pronunciation: "/ˌproʊdʌkˈtɪvəti/",
        meaning: "生産性、生産力",
        hint: "improve productivity（生産性を向上させる）。新規ITツールの導入目的や、製造ラインの効率化の成果として語られる最重要単語。"
    },
    {
        id: 449,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "proficiency",
        partOfSpeech: "名詞",
        pronunciation: "/prəˈfɪʃnsi/",
        meaning: "熟達、堪能、能力の高さ",
        hint: "language proficiency（語学力）。履歴書や求人票で、特定のソフトウェア（Excel等）や外国語の「実務運用能力」を測定する文脈。"
    },
    {
        id: 450,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "projection",
        partOfSpeech: "名詞",
        pronunciation: "/prəˈdʒekʃn/",
        meaning: "予測、見積もり、投影",
        hint: "financial projections（財務予測）やsales projection（売上予測）。次四半期以降の予算策定や経営会議で必ず使われる。"
    },
    {
        id: 451,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "prolong",
        partOfSpeech: "動詞",
        pronunciation: "/prəˈlɔːŋ/",
        meaning: "（期間を）延長する、長引かせる",
        hint: "extendに近いが、寿命や機器の耐用年数を「長持ちさせる（prolong the life of the machine）」という設備メンテナンス文脈で頻出。"
    },
    {
        id: 452,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "promptly",
        partOfSpeech: "副詞",
        pronunciation: "/ˈprɑːmptli/",
        meaning: "迅速に、即座に、きっかりに",
        hint: "please reply promptly（迅速にご返信ください）や、at 9:00 AM promptly（午前9時きっかりに）など、ビジネス上の連絡・時間管理で多用。"
    },
    {
        id: 453,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "property",
        partOfSpeech: "名詞",
        pronunciation: "/ˈprɑːpərti/",
        meaning: "不動産、財産、所有物、特性",
        hint: "real estateの類義語。commercial property（商業物件）や、社内施設（company property）内での立ち入り規制ルールなどで登場。"
    },
    {
        id: 454,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "proprietor",
        partOfSpeech: "名詞",
        pronunciation: "/prəˈpraɪətər/",
        meaning: "所有者、経営者、オーナー",
        hint: "ownerのフォーマルな表現。個人商店、レストラン、宿泊施設などの「個人事業主・経営者」を指す際に好まれる。"
    },
    {
        id: 455,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "prosecute",
        partOfSpeech: "動詞",
        pronunciation: "/ˈprɑːsɪkjuːt/",
        meaning: "起訴する、告発する、遂行する",
        hint: "Violators will be prosecuted（違反者は処罰されます）。敷地内への無断立ち入り（trespassing）や、著作権侵害に対する警告文で頻出。"
    },
    {
        id: 456,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "prospectus",
        partOfSpeech: "名詞",
        pronunciation: "/prəˈspektəs/",
        meaning: "（学校や企業の）案内書、目論見書",
        hint: "新規投資ファンドへの出資を募る際、または新規開講セミナーの受講生に向けて配布される、詳細な「事業・概要説明書」。"
    },
    {
        id: 457,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "prosperity",
        partOfSpeech: "名詞",
        pronunciation: "/prɑːˈsperəti/",
        meaning: "繁栄、成功、繁盛",
        hint: "economic prosperity（経済的繁栄）。企業の周年記念パーティーや挨拶状で、パートナー企業の将来の「成功・繁栄」を祈る定型表現。"
    },
    {
        id: 458,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "proximity",
        partOfSpeech: "名詞",
        pronunciation: "/prɑːkˈsɪməti/",
        meaning: "（場所・時間の）近さ、接近",
        hint: "in close proximity to 名詞（～に極めて近い）。不動産の紹介文で、駅や商業施設に近いという立地上の優位性をアピールする表現。"
    },
    {
        id: 459,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "proxy",
        partOfSpeech: "名詞",
        pronunciation: "/ˈprɑːksi/",
        meaning: "代理人、代理権、委任状",
        hint: "vote by proxy（代理投票）。株主総会（shareholders' meeting）に出席できない株主が、事前に議決権を代理人に委任する文脈で頻出。"
    },
    {
        id: 460,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "prudent",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈpruːdnt/",
        meaning: "慎重な、分別のある、抜かりのない",
        hint: "judiciousの類義語。不況期における「慎重な財務管理（prudent financial management）」や、リスク回避のための堅実な選択。"
    },
    {
        id: 461,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "publicity",
        partOfSpeech: "名詞",
        pronunciation: "/pʌbˈlɪsəti/",
        meaning: "宣伝、広告、評判、知名度",
        hint: "広告（advertising）は有料の枠を指すが、publicityはメディアに取り上げられることによる「無料の宣伝効果・注目」を意味することが多い。"
    },
    {
        id: 462,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "quota",
        partOfSpeech: "名詞",
        pronunciation: "/ˈkwoʊtə/",
        meaning: "割り当て、ノルマ、定数",
        hint: "meet the sales quota（販売ノルマを達成する）。営業部門の目標達成や、輸出入における数量制限（import quota）の文脈で登場。"
    },
    {
        id: 463,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "radiant",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈreɪdiənt/",
        meaning: "光り輝く、晴れやかな",
        hint: "化粧品のPR文脈（radiant skin / 輝く肌）や、リフォーム後の明るいオフィス、受賞して晴れやかな表情の従業員を描写。"
    },
    {
        id: 464,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "radical",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈrædɪkl/",
        meaning: "根本的な、過激な、抜本的な",
        hint: "drasticの類義語。radical change（根本的な変化）やradical overhaul（抜本的な見直し）など、企業の構造改革の文脈で使用。"
    },
    {
        id: 465,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "radius",
        partOfSpeech: "名詞",
        pronunciation: "/ˈreɪdiəs/",
        meaning: "半径、範囲",
        hint: "within a 5-mile radius（半径5マイル以内）。店舗のデリバリー対応エリアの案内や、新規出店に伴う競合調査の範囲設定文脈。"
    },
    {
        id: 466,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "raffle",
        partOfSpeech: "名詞",
        pronunciation: "/ˈræfl/",
        meaning: "福引き、抽選、ラッフル",
        hint: "raffle ticket（抽選券）。社内パーティーの催しや、地域の慈善イベント（charity event）で景品を配る際の定番形式。"
    },
    {
        id: 467,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "ramification",
        partOfSpeech: "名詞",
        pronunciation: "/ˌræmɪfɪˈkeɪʃn/",
        meaning: "（予期せぬ）結果、影響、波及効果",
        hint: "implicationに近いが、特定の決定やミスがのちのちもたらす、複雑で好ましくない「副次的影響」を論じるシビアな文脈。"
    },
    {
        id: 468,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "rationale",
        partOfSpeech: "名詞",
        pronunciation: "/ˌræʃəˈnæl/",
        meaning: "論理的根拠、理由づけ",
        hint: "the rationale behind the decision（その決定の背後にある根拠）。新方針の導入や予算削減を従業員や株主に納得させるための説明書面。"
    },
    {
        id: 469,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "readily",
        partOfSpeech: "副詞",
        pronunciation: "/ˈredɪli/",
        meaning: "容易に、簡単に、快く",
        hint: "readily available（容易に手に入る）。製品の交換部品や最新データが、顧客の手元にすぐ届く利便性をアピールするフレーズ。"
    },
    {
        id: 470,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "reallocation",
        partOfSpeech: "名詞",
        pronunciation: "/ˌriːæləˈkeɪʃn/",
        meaning: "再配分、再割り当て",
        hint: "budget reallocation（予算の再配分）。経営環境の変化に伴い、既存の予算や人員（resource）を別プロジェクトへ再編成する文脈。"
    },
    {
        id: 471,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "reasonable",
        partOfSpeech: "形容詞",
        pronunciation: "/ˈriːznəbl/",
        meaning: "妥当な、（価格が）手頃な、道理にかなった",
        hint: "affordableに近いが、価格だけでなく「納得感のある安さ・正当性」を表す。reasonable price（手頃な価格）。"
    },
    {
        id: 472,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "reassurance",
        partOfSpeech: "名詞",
        pronunciation: "/ˌriːəˈʃʊrəns/",
        meaning: "安心、安心させる言葉、再保証",
        hint: "give reassurance to customers（顧客に安心感を与える）。セキュリティ事故や不具合の発生後、再発防止策を提示して顧客を落ち着かせる文脈。"
    },
    {
        id: 473,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "rebuff",
        partOfSpeech: "動詞",
        pronunciation: "/rɪˈbʌf/",
        meaning: "～を断固として拒絶する、はねつける",
        hint: "rejectよりも強い表現。他社からの買収提案（takeover bid）や、妥協のない契約条件の提示を突っぱねるシビアな交渉文脈。"
    },
    {
        id: 474,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "recede",
        partOfSpeech: "動詞",
        pronunciation: "/rɪˈsiːd/",
        meaning: "後退する、遠ざかる、弱まる",
        hint: "自動詞。The floodwaters receded（洪水が引いた）という災害復旧文脈や、市場のインフレ懸念が和らぐ経済文脈。"
    },
    {
        id: 475,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "receptive",
        partOfSpeech: "形容詞",
        pronunciation: "/rɪˈseptɪv/",
        meaning: "受け入れる、寛容な、理解がある",
        hint: "be receptive to feedback（フィードバックを快く受け入れる）。マネジメント層が部下の提案や顧客の声に耳を傾ける姿勢を示す。"
    },
    {
        id: 476,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "recession",
        partOfSpeech: "名詞",
        pronunciation: "/rɪˈseʃn/",
        meaning: "不景気、景気後退",
        hint: "economic recession（景気後退期）。売上の低迷、人員削減（layoff）、予算凍結など、企業が守りの姿勢に入る背景として頻出。"
    },
    {
        id: 477,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "reciprocal",
        partOfSpeech: "形容詞",
        pronunciation: "/rɪˈsɪprəkl/",
        meaning: "相互の、互恵的な、お返しの",
        hint: "reciprocal agreement（互恵協定）。2つの企業が互いに顧客を紹介し合うなど、Win-Winの提携関係を結ぶ文脈。"
    },
    {
        id: 478,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "reclaim",
        partOfSpeech: "動詞",
        pronunciation: "/rɪˈkleɪm/",
        meaning: "～を取り戻す、返還を要求する、開墾する",
        hint: "空港の荷物受取所（baggage claim）の関連語。遺失物センター（lost and found）で自分の持ち物を確認し、手元に「回収する」文脈。"
    },
    {
        id: 479,
        type: "vocab",
        category: "TOEIC頻出単語",
        word: "recommendation",
        partOfSpeech: "名詞",
        pronunciation: "/ˌrekəmənˈdeɪʃn/",
        meaning: "推薦、推奨、推薦状",
        hint: "letter of recommendation（推薦状）。転職活動時の前職の上司からの評価書や、コンサルタントによる改善提案の報告書で頻出。"
    }
]
