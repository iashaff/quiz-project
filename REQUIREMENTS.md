# Coffee Personality Quiz — Requirements

## Project overview

Build a web quiz for Basecamp Coffee: **“Какая твоя кофейная личность?”**

The quiz helps customers discover a coffee personality, see their percentage match across several types, and receive drink recommendations. It should feel like a warm, premium extension of Basecamp Coffee — not a generic points program.

## Product goal

Make Basecamp Rewards feel personal, memorable, and tied to the coffee experience.

The quiz should answer the customer question:

> “Что мне попробовать в Basecamp?”

## Audience

Basecamp Coffee customers who like the café atmosphere but do not strongly care about loyalty points or tiers.

## Results

The quiz has **5 personality/coffee results**.

### 1. Дзен Минималист

- **Drink:** Чёрный кофе single origin
- **Tagline:** Просто. Чисто. Идеально.
- **Personality:** Спокойный, собранный, ценит чистый вкус и минимум лишнего.
- **Image:** `public/images/results/zen-minimalist.png`
- **Image direction:** Кофе на столе, спокойная комната, минималистичный интерьер в серых тонах.

### 2. Избалованное Угощение

- **Drink:** Мокка со взбитыми сливками
- **Tagline:** Кофе — это десерт.
- **Personality:** Любит мягкость, уют, плед, камин и ощущение маленького праздника.
- **Image:** `public/images/results/indulgent-treat.png`
- **Image direction:** Тёплая комната с камином, чашка на деревянном столике, плед, мягкий свет.

### 3. Ночная Сова

- **Drink:** Red Eye: кофе + шот эспрессо
- **Tagline:** Сон опционален.
- **Personality:** Живёт в позднем ритме, любит сильный заряд, ночной город и дедлайны.
- **Image:** `public/images/results/night-owl.png`
- **Image direction:** Кружка на подоконнике, за окном живой ночной город и звёзды.

### 4. Уютная Классика

- **Drink:** Дрип средней обжарки
- **Tagline:** Комфорт в каждой чашке.
- **Personality:** Надёжный, спокойный, любит понятный ежедневный ритуал без лишнего шума.
- **Image:** `public/images/results/cozy-classic.png`
- **Image direction:** Приятный рабочий кабинет без излишеств.

### 5. Сладкий Энтузиаст

- **Drink:** Карамельный латте
- **Tagline:** Жизнь слишком коротка для горького.
- **Personality:** Любит экспериментировать, пробовать новое, красивые места и радостные вкусы.
- **Image:** `public/images/results/sweet-enthusiast.png`
- **Image direction:** Кружка на столе в уютном, оригинальном кафе с живым интерьером, возможно pet café с кошками.

## Result display logic

Use **percentage display**.

At the end, show:

1. Primary winning personality.
2. Percentage breakdown across all 5 types.
3. Main drink recommendation.
4. Short description of the winning personality.
5. Atmospheric result image.

Example:

> Ты — Ночная Сова на 43%.
> Твой кофе: Red Eye.
> Но в тебе также есть 29% Уютной Классики и 14% Дзен Минималиста.

## Scoring logic

Each answer maps to one personality.

At the end:

- count selections per personality;
- divide each count by total number of questions;
- convert to percentages;
- highest score is the primary result;
- if there is a tie, use the first highest result in the configured result order.

## Visual style

Blend style previews **3 + 4**.

Desired style:

- warm premium Basecamp;
- cozy but more mature and dramatic;
- coffee, cream, chocolate, forest green, warm wood, soft shadows;
- strong typography from the dramatic preview;
- soft cards and warmth from the cozy preview;
- no childish feeling.

Avoid:

- emoji in answer options;
- playful sticker-like UI;
- overly bright candy colors;
- generic corporate look.

## Icons and answer presentation

Use **clean text only** for answer options.

No emojis and no icons beside answers.

Visual interest should come from:

- layout;
- typography;
- colors;
- hover states;
- result images;
- progress indicator.

## Images

Use atmospheric result images, not just cup photos.

For now, use local SVG assets in `public/images/results/`:

- `zen-minimalist.png`
- `indulgent-treat.png`
- `night-owl.png`
- `cozy-classic.png`
- `sweet-enthusiast.png`

These can be replaced later with generated or photographic assets.

## Questions

Question style: **mixed** — lifestyle, mood, abstract, everyday preference.

Each question has 5 answers, one for each personality.

### Question 1: Какое утро тебе ближе?

- **Дзен Минималист:** Тихое, собранное, без лишних разговоров.
- **Уютная Классика:** Медленное, тёплое, с любимой чашкой и спокойным началом.
- **Ночная Сова:** Поздний подъём после длинной ночи, нужен сильный заряд.
- **Избалованное Угощение:** Утро как маленький праздник: мягкий свет, что-то сладкое, уют.
- **Сладкий Энтузиаст:** Хочу что-то красивое, вкусное и чуть-чуть необычное.

### Question 2: Если бы твой кофе был комнатой, какой?

- **Дзен Минималист:** Минималистичная серая комната: порядок, воздух, чистые линии.
- **Уютная Классика:** Рабочий кабинет: спокойно, удобно, всё на своём месте.
- **Ночная Сова:** Подоконник ночью, город светится за окном.
- **Избалованное Угощение:** Комната с камином, пледом и мягким светом.
- **Сладкий Энтузиаст:** Живое уютное кафе с деталями, людьми и, возможно, котом.

### Question 3: Что ты выбираешь в меню чаще всего?

- **Дзен Минималист:** Что-то простое и честное, без сиропов и украшений.
- **Уютная Классика:** Проверенную классику, которая никогда не подводит.
- **Ночная Сова:** Самый крепкий вариант, пожалуйста.
- **Избалованное Угощение:** Что-то насыщенное, шоколадное, сливочное — чтобы прямо побаловать себя.
- **Сладкий Энтузиаст:** Люблю экспериментировать: сезонные вкусы, необычные сочетания, что-то новое.

### Question 4: Какой у тебя идеальный вечер?

- **Дзен Минималист:** Тишина, книга или музыка, минимум раздражителей.
- **Уютная Классика:** Спокойно закончить дела и почувствовать, что день был нормальным.
- **Ночная Сова:** Ещё рано спать: город живой, идеи идут, энергия есть.
- **Избалованное Угощение:** Плед, фильм, мягкий свет, десерт.
- **Сладкий Энтузиаст:** Встретиться в красивом месте, попробовать что-то новое, поймать настроение.

### Question 5: Что важнее в напитке?

- **Дзен Минималист:** Чистый вкус.
- **Уютная Классика:** Надёжность.
- **Ночная Сова:** Крепость.
- **Избалованное Угощение:** Уют.
- **Сладкий Энтузиаст:** Радость.

### Question 6: Какой комплимент тебе ближе?

- **Дзен Минималист:** «С тобой спокойно и ясно».
- **Уютная Классика:** «На тебя можно положиться».
- **Ночная Сова:** «Ты оживаешь, когда все уже устали».
- **Избалованное Угощение:** «Ты умеешь создавать уют».
- **Сладкий Энтузиаст:** «С тобой становится веселее и теплее».

### Question 7: Что бы ты хотела открыть в Basecamp?

- **Дзен Минималист:** Идеальный чёрный кофе без лишнего шума.
- **Уютная Классика:** Ежедневный напиток, к которому приятно возвращаться.
- **Ночная Сова:** Крепкий напиток для длинных вечеров и дедлайнов.
- **Избалованное Угощение:** Богатый десертный кофе для медленного момента.
- **Сладкий Энтузиаст:** Сладкий фирменный напиток, который хочется сфотографировать и обсудить.

## Core pages / states

The application should include:

1. **Landing / intro state**
   - Quiz title
   - Short explanation
   - Start button

2. **Question state**
   - Progress indicator
   - Current question
   - Text-only answer cards

3. **Result state**
   - Primary personality
   - Atmospheric result image
   - Coffee recommendation
   - Percentage breakdown
   - Restart button

## Tone of voice

Use Basecamp voice:

- warm;
- human;
- local;
- not corporate;
- playful, but not childish;
- no aggressive marketing language.

## Success criteria

The app is successful if:

- the quiz is easy to understand in 10 seconds;
- answer options feel distinct;
- the result feels personal and memorable;
- visuals feel warm, mature, and Basecamp-like;
- the result gives a clear coffee recommendation;
- the app can be iterated later with better images, sharing, and loyalty integration.
