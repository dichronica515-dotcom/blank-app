// ゲームデータ
const gameData = {
    affection: 50,
    currentScene: 0,
    playerName: "マツバ",

    backgrounds: {
        pokemonCenter: 'bg-pokemon-center',
        enjuCity: 'bg-enju-city',
        observatory: 'bg-observatory',
        starryNight: 'bg-starry-night'
    },

    scenes: [
        {
            background: 'pokemonCenter',
            character: 'iyori',
            speaker: 'イヨリ',
            text: '今日もお疲れ様でした、マツバさん。\n……あ、もうこんな時間なんですね。',
            next: 1
        },
        {
            background: 'pokemonCenter',
            character: 'matsuba',
            speaker: 'マツバ',
            text: '君も今日は夜勤だったんだね、イヨリちゃん。\n無理はしないでほしいな。',
            next: 2
        },
        {
            background: 'pokemonCenter',
            character: 'iyori',
            speaker: 'イヨリ',
            text: 'ふふ、大丈夫ですよ。\nでも……少し休憩させてもらってもいいですか？',
            next: 3
        },
        {
            background: 'pokemonCenter',
            character: 'iyori',
            speaker: '',
            text: 'イヨリは疲れた様子で椅子に座り、スマートフォンを取り出した。\n画面には、美しい星空の写真が待ち受けになっている。',
            next: 4
        },
        {
            background: 'pokemonCenter',
            character: 'matsuba',
            speaker: 'マツバ',
            text: '（……ん？　あの待ち受け……）',
            next: 5
        },
        {
            background: 'pokemonCenter',
            character: 'matsuba',
            speaker: 'マツバ',
            text: 'イヨリちゃん、その待ち受け……とても綺麗な星空だね。',
            next: 6
        },
        {
            background: 'pokemonCenter',
            character: 'iyori',
            speaker: 'イヨリ',
            text: 'え？　あ、これですか？\nはい、去年の冬に撮った写真なんです。',
            next: 7
        },
        {
            background: 'pokemonCenter',
            character: 'iyori',
            speaker: 'イヨリ',
            text: '実は……天体観測が趣味なんです。\n星を見ていると、心が落ち着くというか……不思議と穏やかな気持ちになれるんですよね。',
            next: 8
        },
        {
            background: 'pokemonCenter',
            character: 'matsuba',
            speaker: 'マツバ',
            text: '（そうだったのか……。\n彼女はいつも下を向いているイメージだったけど、夜空を見上げる趣味があったなんて）',
            next: 'choice1'
        },
        {
            id: 'choice1',
            type: 'choice',
            choices: [
                {
                    text: '「僕も星空は好きだよ。一緒に観に行かないかい？」（積極的）',
                    affection: 15,
                    next: 10
                },
                {
                    text: '「そうなんだ。今度の冬至の夜、流星群が見えるらしいね」（知識披露）',
                    affection: 10,
                    next: 11
                },
                {
                    text: '「へえ、意外だな。もしよかったら……」（控えめ）',
                    affection: 5,
                    next: 12
                }
            ]
        },
        {
            background: 'pokemonCenter',
            character: 'iyori',
            speaker: 'イヨリ',
            text: 'えっ……！？\nマツバさんと、一緒に……ですか？',
            affectionCheck: true,
            next: 13
        },
        {
            background: 'pokemonCenter',
            character: 'iyori',
            speaker: 'イヨリ',
            text: 'あ、はい……！\nそうなんです、今年は双子座流星群が見頃で……マツバさんもご存知なんですね！',
            affectionCheck: true,
            next: 13
        },
        {
            background: 'pokemonCenter',
            character: 'iyori',
            speaker: 'イヨリ',
            text: 'あ……はい、そう、です……。\nあの、もしかして……誘ってくださるんですか……？',
            affectionCheck: true,
            next: 13
        },
        {
            background: 'pokemonCenter',
            character: 'matsuba',
            speaker: 'マツバ',
            text: 'ああ。実はスズの塔の近くに、星が綺麗に見える場所があるんだ。\nもしよかったら、今度の休みに一緒に行かないかい？',
            next: 14
        },
        {
            background: 'pokemonCenter',
            character: 'iyori',
            speaker: 'イヨリ',
            text: '……はい！　ぜひ、お願いします！',
            next: 15
        },
        {
            background: 'pokemonCenter',
            character: 'iyori',
            speaker: '',
            text: 'イヨリの瞳が、まるで星空のように輝いた。\nその笑顔を見て、マツバの胸が高鳴る。',
            next: 16
        },
        {
            background: 'pokemonCenter',
            character: 'matsuba',
            speaker: 'マツバ',
            text: '（……やった。誘えた）\n（でも、当日はどうしよう。準備は……）',
            next: 'choice2'
        },
        {
            id: 'choice2',
            type: 'choice',
            choices: [
                {
                    text: '「防寒具と温かい飲み物を用意するよ」（気遣い）',
                    affection: 15,
                    next: 18
                },
                {
                    text: '「望遠鏡を持っていくね。綺麗な星を見せてあげる」（ロマンチック）',
                    affection: 10,
                    next: 19
                },
                {
                    text: '「手ぶらで来てくれればいいよ」（さりげない）',
                    affection: 5,
                    next: 20
                }
            ]
        },
        {
            background: 'pokemonCenter',
            character: 'iyori',
            speaker: 'イヨリ',
            text: 'あ、ありがとうございます……！\nそこまで準備してくださって……嬉しいです。',
            affectionCheck: true,
            next: 21
        },
        {
            background: 'pokemonCenter',
            character: 'iyori',
            speaker: 'イヨリ',
            text: '望遠鏡……！　本格的ですね！\n楽しみです、マツバさん。',
            affectionCheck: true,
            next: 21
        },
        {
            background: 'pokemonCenter',
            character: 'iyori',
            speaker: 'イヨリ',
            text: 'あ、はい……。\n何か持っていった方がいいものはありますか？',
            affectionCheck: true,
            next: 21
        },
        {
            background: 'enjuCity',
            character: '',
            speaker: '',
            text: '――そして、約束の日。\n冬の夜、エンジュの街は静かに雪化粧をしていた。',
            next: 22
        },
        {
            background: 'observatory',
            character: 'iyori',
            speaker: 'イヨリ',
            text: 'わあ……！　本当に、綺麗なところですね……。',
            next: 23
        },
        {
            background: 'observatory',
            character: 'matsuba',
            speaker: 'マツバ',
            text: 'ここはあまり人が来ない、穴場なんだ。\n夜になると、本当に星がよく見えるよ。',
            next: 24
        },
        {
            background: 'starryNight',
            character: '',
            speaker: '',
            text: '二人は並んで、夜空を見上げた。\n無数の星々が、まるで宝石のように煌めいている。',
            next: 25
        },
        {
            background: 'starryNight',
            character: 'iyori',
            speaker: 'イヨリ',
            text: '……綺麗、です。\nこんなに星が見えるなんて……。',
            next: 26
        },
        {
            background: 'starryNight',
            character: 'matsuba',
            speaker: 'マツバ',
            text: 'ほら、あそこに見えるのがオリオン座だよ。\nそして、あの明るい星がシリウス……。',
            next: 'choice3'
        },
        {
            id: 'choice3',
            type: 'choice',
            choices: [
                {
                    text: '「星の話をしていると、君の瞳も輝いているね」（告白的）',
                    affection: 20,
                    next: 28
                },
                {
                    text: '「星座には、それぞれ神話があってね……」（知識共有）',
                    affection: 10,
                    next: 29
                },
                {
                    text: '「寒くないかい？　もっと近くに来ても……」（優しさ）',
                    affection: 15,
                    next: 30
                }
            ]
        },
        {
            background: 'starryNight',
            character: 'iyori',
            speaker: 'イヨリ',
            text: 'え……っ！？\nそ、そんな……っ！',
            affectionCheck: true,
            next: 31
        },
        {
            background: 'starryNight',
            character: 'iyori',
            speaker: 'イヨリ',
            text: 'はい……！　聞かせてください。\nマツバさんの話、もっと聞きたいです。',
            affectionCheck: true,
            next: 31
        },
        {
            background: 'starryNight',
            character: 'iyori',
            speaker: 'イヨリ',
            text: 'あ……はい。\nでは、お言葉に甘えて……。',
            affectionCheck: true,
            next: 31
        },
        {
            background: 'starryNight',
            character: '',
            speaker: '',
            text: 'イヨリはマツバに少し身を寄せた。\n二人の息が白く染まり、夜空へと溶けていく。',
            next: 32
        },
        {
            background: 'starryNight',
            character: 'matsuba',
            speaker: 'マツバ',
            text: 'イヨリちゃん……。\n今日、誘ってよかった。',
            next: 33
        },
        {
            background: 'starryNight',
            character: 'iyori',
            speaker: 'イヨリ',
            text: '私も……誘ってくださって、本当に嬉しいです。\nマツバさんと一緒だと、いつもより星が綺麗に見える気がします。',
            next: 34
        },
        {
            background: 'starryNight',
            character: '',
            speaker: '',
            text: 'その瞬間、空に一筋の流れ星が走った。',
            next: 35
        },
        {
            background: 'starryNight',
            character: 'iyori',
            speaker: 'イヨリ',
            text: '流れ星……！',
            next: 36
        },
        {
            background: 'starryNight',
            character: 'matsuba',
            speaker: 'マツバ',
            text: '……願い事、したかい？',
            next: 37
        },
        {
            background: 'starryNight',
            character: 'iyori',
            speaker: 'イヨリ',
            text: 'はい。\n……マツバさんと、また一緒に星を見られますようにって。',
            next: 'ending'
        }
    ],

    endings: [
        {
            condition: affection => affection >= 90,
            background: 'starryNight',
            title: '✨ TRUE END: 星空の約束 ✨',
            text: 'イヨリの言葉を聞いて、マツバの胸が熱くなった。\n\n「……僕も、同じことを願ったよ」\n\nマツバはイヨリの手を、そっと握りしめた。\n冷たい手のひらが、触れ合った瞬間に温かくなっていく。\n\n「これからも、何度でも一緒に星を見よう。\n君が望むなら、毎晩だって」\n\nイヨリは頬を染めながら、小さく頷いた。\n二人の影が、星明かりの下で一つに重なる。\n\nその夜、二人の心に新しい星座が生まれた。\n――互いを想う、永遠の輝きを持った星座が。\n\n【好感度 MAX達成！】\n【イヨリとの距離が大きく縮まった】',
            affectionGain: 0
        },
        {
            condition: affection => affection >= 70,
            background: 'starryNight',
            title: '💫 GOOD END: 芽生える想い 💫',
            text: 'マツバは微笑んで、イヨリの肩を優しく抱き寄せた。\n\n「また、一緒に来よう。今度は春の星座を見に」\n\n「はい……！　楽しみにしています」\n\nイヨリの瞳には、星と同じくらい輝くものがあった。\n\n帰り道、二人は他愛のない話をしながら歩いた。\n以前よりも、距離が縮まっている気がする。\n\nこれは、まだ恋と呼べるものではないかもしれない。\nけれど、確かに何かが始まっている予感がした。\n\n【イヨリとの友好度が上昇した】\n【次の機会に期待……】',
            affectionGain: 0
        },
        {
            condition: affection => affection < 70,
            background: 'starryNight',
            title: '🌙 NORMAL END: 友人として 🌙',
            text: '「そうだね。また機会があれば」\n\nマツバは穏やかに答えた。\n\nイヨリも笑顔で頷く。\n二人の間には、心地よい静寂が流れていた。\n\n星を見る、という共通の趣味が見つかったことは\n二人にとって小さな、けれど確かな一歩だった。\n\nまだ、これは恋の始まりではない。\nけれど、友人としての絆は深まっている。\n\n焦らず、ゆっくりと。\n時間をかけて、二人の関係は育っていくだろう。\n\n【イヨリとの友好関係を築いた】\n【まだまだこれから……】',
            affectionGain: 0
        }
    ]
};

// ゲーム状態管理
let currentSceneIndex = 0;
let typewriterTimeoutId = null; // タイプライターのタイマーID

// DOM要素
const titleScreen = document.getElementById('title-screen');
const startButton = document.getElementById('start-button');
const background = document.getElementById('background');
const charIyori = document.getElementById('char-iyori');
const charMatsuba = document.getElementById('char-matsuba');
const speakerName = document.getElementById('speaker-name');
const dialogueText = document.getElementById('dialogue-text');
const nextButton = document.getElementById('next-button');
const choicesDiv = document.getElementById('choices');
const affectionBar = document.getElementById('affection-bar');
const affectionValue = document.getElementById('affection-value');

// ゲーム開始
startButton.addEventListener('click', () => {
    titleScreen.classList.add('hidden');
    loadScene(0);
    updateAffectionMeter();
});

// 次へボタン
nextButton.addEventListener('click', () => {
    const scene = gameData.scenes[currentSceneIndex];
    if (scene.type === 'choice') return;

    if (scene.next === 'ending') {
        showEnding();
    } else if (typeof scene.next === 'string' && scene.next.startsWith('choice')) {
        loadScene(scene.next);
    } else {
        loadScene(scene.next);
    }
});

// シーンロード
function loadScene(sceneId) {
    // 前のタイプライター効果をキャンセル
    if (typewriterTimeoutId) {
        clearTimeout(typewriterTimeoutId);
        typewriterTimeoutId = null;
    }

    // クラスリセット（エンディングモード解除）
    const gameContainer = document.getElementById('game-container');
    if (gameContainer) {
        gameContainer.classList.remove('ending-mode');
    }

    let scene;

    if (typeof sceneId === 'string') {
        const sceneIndex = gameData.scenes.findIndex(s => s.id === sceneId);
        if (sceneIndex === -1) {
            console.error('Scene not found:', sceneId);
            return;
        }
        scene = gameData.scenes[sceneIndex];
        currentSceneIndex = sceneIndex;
    } else {
        scene = gameData.scenes[sceneId];
        currentSceneIndex = sceneId;
    }

    if (!scene) return;

    // 背景変更
    if (scene.background) {
        background.className = ''; // クラスリセット
        background.innerHTML = ''; // 星を削除

        const bgKey = scene.background;
        const bgClass = gameData.backgrounds[bgKey];
        background.classList.add(bgClass);

        // 星空の場合、星を生成
        if (bgKey === 'starryNight' || bgKey === 'observatory') {
            createStars();
        }
    }

    // キャラクター表示
    charIyori.classList.remove('active');
    charMatsuba.classList.remove('active');

    if (scene.character === 'iyori') {
        charIyori.classList.add('active');
    } else if (scene.character === 'matsuba') {
        charMatsuba.classList.add('active');
    }

    // セリフ表示
    speakerName.textContent = scene.speaker || '';
    dialogueText.textContent = '';

    // タイプライター効果（テキストがある場合のみ）
    if (scene.text) {
        typeWriter(scene.text, 0);
    }

    // affectionCheckのシーンは自動的に次へ進む
    if (scene.affectionCheck) {
        nextButton.style.display = 'none';
        choicesDiv.style.display = 'none';
        typewriterTimeoutId = setTimeout(() => { // ここのタイマーも管理対象にする手があるが、別管理の方が安全かも。一旦このままでOK
            loadScene(scene.next);
        }, 2500); // セリフを読む時間を与える
        return;
    }

    // 選択肢処理
    if (scene.type === 'choice') {
        nextButton.style.display = 'none';
        showChoices(scene.choices);
    } else {
        nextButton.style.display = 'block';
        choicesDiv.style.display = 'none';
    }
}

// タイプライター効果
function typeWriter(text, index) {
    if (index < text.length) {
        dialogueText.textContent += text.charAt(index);
        typewriterTimeoutId = setTimeout(() => typeWriter(text, index + 1), 30);
    } else {
        typewriterTimeoutId = null;
    }
}

// 選択肢表示
function showChoices(choices) {
    choicesDiv.innerHTML = '';
    choicesDiv.style.display = 'flex';

    choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-button';
        button.textContent = choice.text;

        button.addEventListener('click', () => {
            gameData.affection += choice.affection;
            updateAffectionMeter();
            choicesDiv.style.display = 'none';
            loadScene(choice.next);
        });

        choicesDiv.appendChild(button);
    });
}

// 好感度メーター更新
function updateAffectionMeter() {
    const affection = Math.min(100, Math.max(0, gameData.affection));
    affectionBar.style.width = affection + '%';
    affectionValue.textContent = affection + ' / 100';
}

// エンディング表示
function showEnding() {
    const affection = gameData.affection;
    let ending = gameData.endings.find(e => e.condition(affection));

    if (!ending) {
        ending = gameData.endings[gameData.endings.length - 1];
    }

    // 背景変更（エンディング）
    background.className = '';
    background.innerHTML = '';
    background.style.backgroundImage = ''; // 画像リセット
    background.style.backgroundSize = '';

    // TRUE END (好感度90以上) の場合、専用スチルを表示
    if (affection >= 90) {
        // 画像読み込み確認のためにパスを調整（相対パス）
        background.style.backgroundImage = "url('hoshinoiyori.png')";
        background.style.backgroundSize = "cover";
        background.style.backgroundPosition = "center center"; // 中央揃え
        background.style.backgroundRepeat = "no-repeat";

        // エンディングモードクラス追加（テキストボックスのスタイル変更）
        document.getElementById('game-container').classList.add('ending-mode');
    } else {
        const bgKey = ending.background;
        const bgClass = gameData.backgrounds[bgKey];
        background.classList.add(bgClass);

        if (bgKey === 'starryNight' || bgKey === 'observatory') {
            createStars();
        }
    }

    charIyori.classList.remove('active');
    charMatsuba.classList.remove('active');

    speakerName.textContent = ending.title;
    dialogueText.innerHTML = ending.text.replace(/\n/g, '<br>');

    nextButton.style.display = 'none';

    // リスタートボタン追加
    setTimeout(() => {
        const restartBtn = document.createElement('button');
        restartBtn.textContent = 'もう一度プレイする';
        restartBtn.className = 'choice-button';
        restartBtn.style.position = 'absolute';
        restartBtn.style.bottom = '30px';
        restartBtn.style.right = '50px';
        restartBtn.addEventListener('click', () => {
            location.reload();
        });
        const textBox = document.getElementById('text-box');
        if (textBox) textBox.appendChild(restartBtn);
    }, 2000);
}

// 星生成関数
function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const size = Math.random() * 3 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;

        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 80 + '%';

        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        star.style.setProperty('--opacity', Math.random());

        background.appendChild(star);
    }
}
