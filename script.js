// ========== グローバル状態 =========
let currentSection = null;
let currentMode = 'menu'; // 'menu', 'material', 'test', 'result'
let currentData = [];
let testData = [];
let currentIndex = 0;
let correctCount = 0;
let wrongIndices = [];
let answerShown = false;

// ========== ユーティリティ関数 =========
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function saveWrongData(data) {
    localStorage.setItem('toeic_flashcard_wrong_data', JSON.stringify(data));
}

function loadWrongData() {
    const data = localStorage.getItem('toeic_flashcard_wrong_data');
    return data ? JSON.parse(data) : [];
}

function switchScreen(screenId) {
    // すべての画面を非表示
    document.getElementById('menuScreen').classList.remove('active');
    document.getElementById('materialScreen').classList.remove('active');
    document.getElementById('testScreen').classList.remove('active');
    document.getElementById('resultScreen').classList.remove('active');
    
    // 指定のスクリーンをアクティブ化
    document.getElementById(screenId).classList.add('active');
}

// ========== メニュー画面 =========
function getBankBySection(sectionName) {
    const sectionToBank = {
        'Put': VOCAB_BANK,
        'Run': VOCAB_BANK,
        'Call': VOCAB_BANK,
        'Set': VOCAB_BANK,
        'Bring': VOCAB_BANK,
        'Look': VOCAB_BANK,
        'Fill+Carry+Turn': VOCAB_BANK,
        'Three-Word': VOCAB_BANK,
        'Other': VOCAB_BANK,
        'TOEIC頻出単語': TOEIC_VOCAB,
        'TOEIC頻出単語 1-50': TOEIC_VOCAB,
        'TOEIC頻出単語 51-100': TOEIC_VOCAB,
        'TOEIC頻出単語 101-150': TOEIC_VOCAB,
        'TOEIC頻出単語 151-200': TOEIC_VOCAB,
        'TOEIC頻出単語 201-250': TOEIC_VOCAB,
        'TOEIC頻出単語 201-250': TOEIC_VOCAB,
        'TOEIC頻出単語 251-300': TOEIC_VOCAB,
        'TOEIC頻出単語 301-350': TOEIC_VOCAB,
        'TOEIC頻出単語 351-400': TOEIC_VOCAB,
        '接頭辞（語幹識別）': AFFIX_BANK,
        '接尾辞（語幹識別）': AFFIX_BANK,
        '接尾辞（品詞識別）': AFFIX_BANK,
        '発音記号': PHONETIC_BANK,
    };
    return sectionToBank[sectionName] || [];
}

function startSection(sectionName) {
    currentSection = sectionName;
    const bank = getBankBySection(sectionName);

    if (sectionName.startsWith('TOEIC頻出単語')) {
        currentData = bank.filter(item => item.category === 'TOEIC頻出単語');
        if (sectionName.endsWith('1-50')) {
            currentData = currentData.slice(0, 50);
        } else if (sectionName.endsWith('51-100')) {
            currentData = currentData.slice(50, 100);
        } else if (sectionName.endsWith('101-150')) {
            currentData = currentData.slice(101, 150);
        } else if (sectionName.endsWith('151-200')) {
            currentData = currentData.slice(151, 200);
        } else if (sectionName.endsWith('201-250')) {
            currentData = currentData.slice(201, 250);
        }else if (sectionName.endsWith('251-300')) {
            currentData = currentData.slice(251, 300);
        }else if (sectionName.endsWith('301-350')) {
            currentData = currentData.slice(301, 350);
        }else if (sectionName.endsWith('351-400')) {
            currentData = currentData.slice(351, 400);
        }
    } else {
        currentData = bank.filter(item => item.category === sectionName);
    }

    showMaterialMode();
}

function backToMenu() {
    currentMode = 'menu';
    currentSection = null;
    currentData = [];
    testData = [];
    currentIndex = 0;
    correctCount = 0;
    wrongIndices = [];
    answerShown = false;
    switchScreen('menuScreen');
}

// ========== 教材モード =========
function getItemTitle(item) {
    return item.symbol || item.word || '';
}

function getItemCategory(item) {
    return item.name || item.partOfSpeech || '';
}

function getItemPronunciation(item) {
    // 発音記号の項目では、howToPronounce（説明）ではなく例語（word + ipa）を優先して表示する
    if (item.type === 'phonetic' && item.examples && item.examples.length > 0) {
        if (typeof item.examples[0] === 'object') {
            return item.examples.map(ex => `${ex.word} ${ex.ipa}`).join(' / ');
        }
        return item.examples.join(' / ');
    }
    return item.howToPronounce || item.pronunciation || '';
}

function getItemMeaning(item) {
    return item.description || item.meaning || '';
}

function getItemExamplesText(item) {
    if (!item.examples) {
        return '';
    }
    if (item.examples.length > 0 && typeof item.examples[0] === 'object') {
        return item.examples.map(ex => `${ex.word} ${ex.ipa}`).join('\n');
    }
    return item.examples.join('\n');
}

function showMaterialMode() {
    currentMode = 'material';
    switchScreen('materialScreen');
    
    // タイトル設定
    document.getElementById('materialTitle').textContent = currentSection;
    
    // テーブル作成
    const tbody = document.getElementById('materialTableBody');
    tbody.innerHTML = '';
    currentData.forEach(item => {
        const thirdColumn = getItemExamplesText(item) || getItemPronunciation(item);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="material-word">${getItemTitle(item)}</td>
            <td class="material-meaning">${getItemMeaning(item)}</td>
            <td class="material-hint">${thirdColumn}</td>
        `;
        tbody.appendChild(tr);
    });
}

function getItemHint(item) {
    // 発音記号のテストでは、ヒントに説明ではなく例語を表示する
    if (item.type === 'phonetic' && item.examples && item.examples.length > 0) {
        return item.examples[0] && typeof item.examples[0] === 'object'
            ? item.examples.map(ex => `${ex.word} ${ex.ipa}`).join(' / ')
            : item.examples.join(' / ');
    }
    if (item.description && item.examples && item.examples.length > 0) {
        const examplesText = item.examples[0] && typeof item.examples[0] === 'object'
            ? item.examples.map(ex => `${ex.word} ${ex.ipa}`).join(' / ')
            : item.examples.join(' / ');
        return `${item.description}\n${examplesText}`;
    }
    if (item.hint) {
        return item.hint;
    }
    if (item.examples) {
        return '例: ' + getItemExamplesText(item).replace(/\n/g, ' / ');
    }
    return item.description || '';
}

// ========== テストモード =========
function startTest() {
    currentMode = 'test';
    testData = shuffleArray(currentData);
    currentIndex = 0;
    correctCount = 0;
    wrongIndices = [];
    answerShown = false;
    
    switchScreen('testScreen');
    showCard();
}

function showCard() {
    answerShown = false;
    const item = testData[currentIndex];
    
    // プログレスバー更新
    document.getElementById('progressBar').textContent = `${currentIndex + 1} / ${testData.length} 問目`;
    
    // カード表面
    document.getElementById('cardWord').textContent = getItemTitle(item);
    document.getElementById('cardPartOfSpeech').textContent = getItemCategory(item);
    document.getElementById('cardPronunciation').textContent = getItemPronunciation(item);
    
    // 答え領域を隠す
    document.getElementById('answerArea').style.display = 'none';
    document.getElementById('judgmentArea').style.display = 'none';
    
    // 答えボタンを表示
    document.getElementById('answerToggleBtn').style.display = 'block';
    document.getElementById('answerToggleBtn').textContent = '答えを表示';
}

function toggleAnswer() {
    answerShown = !answerShown;
    const answerArea = document.getElementById('answerArea');
    const judgmentArea = document.getElementById('judgmentArea');
    const answerBtn = document.getElementById('answerToggleBtn');
    
    if (answerShown) {
        const item = testData[currentIndex];
        document.getElementById('cardMeaning').textContent = getItemMeaning(item);
        document.getElementById('cardHint').textContent = getItemHint(item);
        
        answerArea.style.display = 'block';
        judgmentArea.style.display = 'block';
        answerBtn.style.display = 'none';
    } else {
        answerArea.style.display = 'none';
        judgmentArea.style.display = 'none';
        answerBtn.style.display = 'block';
    }
}

function recordCorrect() {
    correctCount++;
    nextCard();
}

function recordWrong() {
    wrongIndices.push(currentIndex);
    nextCard();
}

function nextCard() {
    currentIndex++;
    if (currentIndex < testData.length) {
        showCard();
    } else {
        // 全問回答完了 → リザルト画面
        showResult();
    }
}

// ========== リザルト画面 =========
function showResult() {
    currentMode = 'result';
    switchScreen('resultScreen');
    
    const percentage = Math.round((correctCount / testData.length) * 100);
    document.getElementById('resultPercentage').textContent = percentage + '%';
    
    // 間違えた問題データをLocalStorageに保存
    const wrongData = wrongIndices.map(idx => testData[idx]);
    saveWrongData(wrongData);
    
    // 「間違えた問題だけ」ボタンの表示制御
    const retryWrongBtn = document.getElementById('retryWrongBtn');
    if (wrongIndices.length > 0) {
        retryWrongBtn.style.display = 'block';
    } else {
        retryWrongBtn.style.display = 'none';
    }
}

function retryAll() {
    startTest();
}

function retryWrong() {
    currentMode = 'test';
    const wrongData = loadWrongData();
    if (wrongData.length > 0) {
        testData = shuffleArray(wrongData);
        currentIndex = 0;
        correctCount = 0;
        wrongIndices = [];
        answerShown = false;
        switchScreen('testScreen');
        showCard();
    }
}

// ========== セクション折り畳み機能 =========
function toggleSection(titleElement) {
    const buttonsContainer = titleElement.nextElementSibling;
    const arrow = titleElement.querySelector('.toggle-arrow');
    
    buttonsContainer.classList.toggle('collapsed');
    arrow.classList.toggle('collapsed');
}
