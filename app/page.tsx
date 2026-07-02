"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type ResultId =
  | "zen-minimalist"
  | "indulgent-treat"
  | "night-owl"
  | "cozy-classic"
  | "sweet-enthusiast";

type QuizResult = {
  id: ResultId;
  name: string;
  drink: string;
  tagline: string;
  personality: string;
  image: string;
};

type Answer = {
  text: string;
  resultId: ResultId;
};

type Question = {
  prompt: string;
  answers: Answer[];
};

type ResultScore = QuizResult & {
  count: number;
  percentage: number;
};

const results: QuizResult[] = [
  {
    id: "zen-minimalist",
    name: "Дзен Минималист",
    drink: "Чёрный кофе single origin",
    tagline: "Просто. Чисто. Идеально.",
    personality:
      "Ты ценишь ясность, спокойствие и вкус без лишнего шума. В твоей чашке должно быть ровно то, что нужно — ничего случайного.",
    image: "/images/results/zen-minimalist.png",
  },
  {
    id: "indulgent-treat",
    name: "Избалованное Угощение",
    drink: "Мокка со взбитыми сливками",
    tagline: "Кофе — это десерт.",
    personality:
      "Ты умеешь превращать обычный момент в маленький праздник. Твой кофе должен быть мягким, тёплым и немного роскошным.",
    image: "/images/results/indulgent-treat.png",
  },
  {
    id: "night-owl",
    name: "Ночная Сова",
    drink: "Red Eye: кофе + шот эспрессо",
    tagline: "Сон опционален.",
    personality:
      "Ты оживаешь, когда город зажигает огни. Тебе нужен напиток с характером, который выдержит длинный вечер и ещё один дедлайн.",
    image: "/images/results/night-owl.png",
  },
  {
    id: "cozy-classic",
    name: "Уютная Классика",
    drink: "Дрип средней обжарки",
    tagline: "Комфорт в каждой чашке.",
    personality:
      "Ты выбираешь надёжность, спокойный ритм и привычки, к которым приятно возвращаться. Твой кофе — ежедневный ритуал, а не спектакль.",
    image: "/images/results/cozy-classic.png",
  },
  {
    id: "sweet-enthusiast",
    name: "Сладкий Энтузиаст",
    drink: "Карамельный латте",
    tagline: "Жизнь слишком коротка для горького.",
    personality:
      "Ты любишь пробовать новое, замечать детали и находить радость в неожиданных сочетаниях. Кофе для тебя — настроение, история и повод улыбнуться.",
    image: "/images/results/sweet-enthusiast.png",
  },
];

const questions: Question[] = [
  {
    prompt: "Какое утро тебе ближе?",
    answers: [
      {
        resultId: "zen-minimalist",
        text: "Тихое, собранное, без лишних разговоров.",
      },
      {
        resultId: "cozy-classic",
        text: "Медленное, тёплое, с любимой чашкой и спокойным началом.",
      },
      {
        resultId: "night-owl",
        text: "Поздний подъём после длинной ночи, нужен сильный заряд.",
      },
      {
        resultId: "indulgent-treat",
        text: "Утро как маленький праздник: мягкий свет, что-то сладкое, уют.",
      },
      {
        resultId: "sweet-enthusiast",
        text: "Хочу что-то красивое, вкусное и чуть-чуть необычное.",
      },
    ],
  },
  {
    prompt: "Если бы твой кофе был комнатой, какой?",
    answers: [
      {
        resultId: "zen-minimalist",
        text: "Минималистичная серая комната: порядок, воздух, чистые линии.",
      },
      {
        resultId: "cozy-classic",
        text: "Рабочий кабинет: спокойно, удобно, всё на своём месте.",
      },
      {
        resultId: "night-owl",
        text: "Подоконник ночью, город светится за окном.",
      },
      {
        resultId: "indulgent-treat",
        text: "Комната с камином, пледом и мягким светом.",
      },
      {
        resultId: "sweet-enthusiast",
        text: "Живое уютное кафе с деталями, людьми и, возможно, котом.",
      },
    ],
  },
  {
    prompt: "Что ты выбираешь в меню чаще всего?",
    answers: [
      {
        resultId: "zen-minimalist",
        text: "Что-то простое и честное, без сиропов и украшений.",
      },
      {
        resultId: "cozy-classic",
        text: "Проверенную классику, которая никогда не подводит.",
      },
      {
        resultId: "night-owl",
        text: "Самый крепкий вариант, пожалуйста.",
      },
      {
        resultId: "indulgent-treat",
        text: "Что-то насыщенное, шоколадное, сливочное — чтобы прямо побаловать себя.",
      },
      {
        resultId: "sweet-enthusiast",
        text: "Люблю экспериментировать: сезонные вкусы, необычные сочетания, что-то новое.",
      },
    ],
  },
  {
    prompt: "Какой у тебя идеальный вечер?",
    answers: [
      {
        resultId: "zen-minimalist",
        text: "Тишина, книга или музыка, минимум раздражителей.",
      },
      {
        resultId: "cozy-classic",
        text: "Спокойно закончить дела и почувствовать, что день был нормальным.",
      },
      {
        resultId: "night-owl",
        text: "Ещё рано спать: город живой, идеи идут, энергия есть.",
      },
      {
        resultId: "indulgent-treat",
        text: "Плед, фильм, мягкий свет, десерт.",
      },
      {
        resultId: "sweet-enthusiast",
        text: "Встретиться в красивом месте, попробовать что-то новое, поймать настроение.",
      },
    ],
  },
  {
    prompt: "Что важнее в напитке?",
    answers: [
      { resultId: "zen-minimalist", text: "Чистый вкус." },
      { resultId: "cozy-classic", text: "Надёжность." },
      { resultId: "night-owl", text: "Крепость." },
      { resultId: "indulgent-treat", text: "Уют." },
      { resultId: "sweet-enthusiast", text: "Радость." },
    ],
  },
  {
    prompt: "Какой комплимент тебе ближе?",
    answers: [
      { resultId: "zen-minimalist", text: "С тобой спокойно и ясно." },
      { resultId: "cozy-classic", text: "На тебя можно положиться." },
      {
        resultId: "night-owl",
        text: "Ты оживаешь, когда все уже устали.",
      },
      { resultId: "indulgent-treat", text: "Ты умеешь создавать уют." },
      {
        resultId: "sweet-enthusiast",
        text: "С тобой становится веселее и теплее.",
      },
    ],
  },
  {
    prompt: "Что бы ты хотела открыть в Basecamp?",
    answers: [
      {
        resultId: "zen-minimalist",
        text: "Идеальный чёрный кофе без лишнего шума.",
      },
      {
        resultId: "cozy-classic",
        text: "Ежедневный напиток, к которому приятно возвращаться.",
      },
      {
        resultId: "night-owl",
        text: "Крепкий напиток для длинных вечеров и дедлайнов.",
      },
      {
        resultId: "indulgent-treat",
        text: "Богатый десертный кофе для медленного момента.",
      },
      {
        resultId: "sweet-enthusiast",
        text: "Сладкий фирменный напиток, который хочется сфотографировать и обсудить.",
      },
    ],
  },
];

function calculateResults(answers: ResultId[]): ResultScore[] {
  const counts = results.reduce<Record<ResultId, number>>((acc, result) => {
    acc[result.id] = 0;
    return acc;
  }, {} as Record<ResultId, number>);

  answers.forEach((answer) => {
    counts[answer] += 1;
  });

  return results.map((result) => ({
    ...result,
    count: counts[result.id],
    percentage: Math.round((counts[result.id] / questions.length) * 100),
  }));
}

function getWinner(scores: ResultScore[]) {
  return scores.reduce((winner, current) =>
    current.count > winner.count ? current : winner,
  );
}

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ResultId[]>([]);

  const scores = useMemo(() => calculateResults(answers), [answers]);
  const winner = useMemo(() => getWinner(scores), [scores]);
  const currentQuestion = questions[currentQuestionIndex];
  const isComplete = answers.length === questions.length;

  function handleStart() {
    setStarted(true);
  }

  function handleAnswer(resultId: ResultId) {
    const nextAnswers = [...answers, resultId];
    setAnswers(nextAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((index) => index + 1);
    }
  }

  function handleRestart() {
    setStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#170f0a] text-[#fff7e8]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(216,151,92,0.32),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(89,119,85,0.24),transparent_28%),linear-gradient(135deg,#170f0a_0%,#3a2116_47%,#715036_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-40 bg-gradient-to-b from-[#fff1d2]/10 to-transparent" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-5 py-8 sm:px-8 lg:px-10">
        {!started && <IntroScreen onStart={handleStart} />}

        {started && !isComplete && (
          <QuestionScreen
            currentIndex={currentQuestionIndex}
            question={currentQuestion}
            total={questions.length}
            onAnswer={handleAnswer}
          />
        )}

        {started && isComplete && (
          <ResultScreen
            scores={scores}
            winner={winner}
            onRestart={handleRestart}
          />
        )}
      </section>
    </main>
  );
}

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="max-w-2xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#d5a56f]">
          Basecamp Coffee Rewards
        </p>
        <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.06em] text-[#fff7e8] sm:text-7xl lg:text-8xl">
          Какая твоя кофейная личность?
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-[#ead8bd] sm:text-xl">
          Ответь на семь коротких вопросов. Мы подберём твой кофейный
          профиль, покажем совпадения в процентах и посоветуем напиток,
          который стоит попробовать в твоей местной Basecamp.
        </p>
        <button
          className="mt-9 rounded-full bg-[#f3d7a4] px-7 py-4 text-base font-bold text-[#25150f] shadow-[0_18px_50px_rgba(243,215,164,0.25)] transition hover:-translate-y-0.5 hover:bg-[#ffe4b6] focus:outline-none focus:ring-4 focus:ring-[#f3d7a4]/35"
          onClick={onStart}
        >
          Начать викторину
        </button>
      </div>

      <div className="rounded-[2rem] border border-[#f5d9b0]/20 bg-[#fff7e8]/10 p-4 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="rounded-[1.5rem] border border-[#f5d9b0]/20 bg-[#2b1911]/65 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-[#98ad86]">
            Тёплый кофейный профиль
          </p>
          <div className="mt-7 space-y-4">
            {results.slice(0, 3).map((result) => (
              <div
                className="rounded-3xl border border-[#f5d9b0]/15 bg-[#fffaf0]/8 p-5"
                key={result.id}
              >
                <p className="font-serif text-2xl text-[#fff7e8]">
                  {result.name}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#d8c3a5]">
                  {result.drink}. {result.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionScreen({
  currentIndex,
  question,
  total,
  onAnswer,
}: {
  currentIndex: number;
  question: Question;
  total: number;
  onAnswer: (resultId: ResultId) => void;
}) {
  const progress = ((currentIndex + 1) / total) * 100;

  return (
    <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-[#f5d9b0]/20 bg-[#fff7e8]/95 p-5 text-[#2b1911] shadow-2xl shadow-black/30 sm:p-8 lg:p-10">
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#6d7f55]">
          <span>Вопрос {currentIndex + 1} из {total}</span>
          <span>Basecamp Quiz</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[#e6d8c3]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#5d7a4f] to-[#c88953] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#2b1911] sm:text-5xl">
        {question.prompt}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[#6f5a49]">
        Выбери вариант, который больше всего похож на тебя. Здесь нет
        правильных ответов — только кофейные маршруты.
      </p>

      <div className="mt-8 grid gap-3">
        {question.answers.map((answer) => (
          <button
            className="group rounded-3xl border border-[#d7c3a7] bg-[#fffaf1] px-5 py-5 text-left text-base leading-7 text-[#321f16] transition hover:-translate-y-0.5 hover:border-[#8a5a38] hover:bg-[#fff2dc] hover:shadow-xl hover:shadow-[#6d432c]/10 focus:outline-none focus:ring-4 focus:ring-[#8a5a38]/15 sm:px-6"
            key={`${question.prompt}-${answer.resultId}`}
            onClick={() => onAnswer(answer.resultId)}
          >
            <span className="block font-medium transition group-hover:text-[#6d432c]">
              {answer.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultScreen({
  scores,
  winner,
  onRestart,
}: {
  scores: ResultScore[];
  winner: ResultScore;
  onRestart: () => void;
}) {
  const sortedScores = [...scores].sort((a, b) => b.percentage - a.percentage);
  const supportingScores = sortedScores
    .filter((score) => score.id !== winner.id && score.percentage > 0)
    .slice(0, 2);

  return (
    <div className="grid w-full gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div className="space-y-5">
        <div className="overflow-hidden rounded-[2rem] border border-[#f5d9b0]/25 bg-[#fff7e8]/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#2b1911]">
            <Image
              alt={`Атмосферное изображение результата ${winner.name}`}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              src={winner.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#170f0a]/45 via-transparent to-transparent" />
          </div>
        </div>

        <section className="rounded-[2rem] border border-[#f5d9b0]/20 bg-[#fff7e8]/95 p-6 text-[#2b1911] shadow-2xl shadow-black/25 sm:p-8 lg:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6d7f55]">
            Твой результат
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-none tracking-[-0.055em] text-[#2b1911] sm:text-6xl">
            {winner.name}
          </h2>
          <p className="mt-4 text-xl font-semibold text-[#8a5a38]">
            Ты — {winner.name} на {winner.percentage}%.
          </p>
          <p className="mt-5 text-lg leading-8 text-[#624d3d]">
            {winner.personality}
          </p>

          {supportingScores.length > 0 && (
            <p className="mt-7 rounded-3xl border border-[#d8c3a5] bg-[#fffaf1] p-5 text-sm leading-6 text-[#6f5a49]">
              В тебе также есть {formatSupportingScores(supportingScores)}.
            </p>
          )}
        </section>
      </div>

      <section className="rounded-[2rem] border border-[#f5d9b0]/20 bg-[#fff7e8]/95 p-6 text-[#2b1911] shadow-2xl shadow-black/25 sm:p-8 lg:p-10">
        <div className="rounded-3xl border border-[#d8c3a5] bg-[#fffaf1] p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6d7f55]">
            Твой кофе
          </p>
          <p className="mt-2 font-serif text-3xl leading-tight text-[#2b1911] sm:text-4xl">
            {winner.drink}
          </p>
          <p className="mt-3 text-lg text-[#7a5c43]">{winner.tagline}</p>
          <p className="mt-5 text-sm leading-6 text-[#6f5a49]">
            Покажи этот результат бариста — и попроси напиток, который
            подходит твоему кофейному настроению.
          </p>
        </div>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6d7f55]">
            Твои совпадения
          </p>
          <div className="mt-5 space-y-4">
            {sortedScores.map((score) => (
              <div key={score.id}>
                <div className="mb-2 flex items-center justify-between gap-4 text-sm font-semibold text-[#3d2a1f]">
                  <span>{score.name}</span>
                  <span>{score.percentage}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#e6d8c3]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#5d7a4f] via-[#9b774f] to-[#c88953] transition-all duration-700"
                    style={{ width: `${score.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 flex justify-center sm:justify-start">
          <button
            className="inline-flex min-w-48 items-center justify-center whitespace-nowrap rounded-full bg-[#2b1911] px-8 py-4 text-base font-bold text-[#fff7e8] shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#49301f] focus:outline-none focus:ring-4 focus:ring-[#2b1911]/20"
            onClick={onRestart}
          >
            Пройти ещё раз
          </button>
        </div>
      </section>
    </div>
  );
}

function formatSupportingScores(scores: ResultScore[]) {
  return scores
    .map((score) => `${score.percentage}% ${getGenitiveName(score.id)}`)
    .join(" и ");
}

function getGenitiveName(id: ResultId) {
  const names: Record<ResultId, string> = {
    "zen-minimalist": "Дзен Минималиста",
    "indulgent-treat": "Избалованного Угощения",
    "night-owl": "Ночной Совы",
    "cozy-classic": "Уютной Классики",
    "sweet-enthusiast": "Сладкого Энтузиаста",
  };

  return names[id];
}
