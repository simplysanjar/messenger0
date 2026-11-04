// Privacycontent.js
// Матни Сиёсати махфият ба 4 забон: tg, ru, en, fa.
// v = { app, email, age, days } — қиматҳое, ки аз Privacy.jsx дода мешаванд.

const content = {
  /* ───────────────────────── ТОҶИКӢ ───────────────────────── */
  tg: (v) => ({
    ui: {
      title: "Сиёсати махфият",
      effective: "Аз санаи 2 ноябри 2026 эътибор дорад",
      glanceTitle: "Дар як нигоҳ",
      toc: "Мундариҷа",
      language: "Забон",
    },
    glance: [
      {
        title: "Паёмҳо рамзгузорӣ шудаанд",
        text: "Мундариҷаи паём дар дастгоҳи фиристанда рамзгузорӣ мешавад ва танҳо дар дастгоҳи гиранда кушода мешавад.",
      },
      {
        title: "Калидҳо дар дастгоҳи шумо",
        text: "Калидҳои рамзгузорӣ танҳо дар дастгоҳи шумо нигоҳ дошта мешаванд. Ҳатто администраторон ба онҳо дастрасӣ надоранд.",
      },
      {
        title: "Воридшавӣ тавассути Google",
        text: "Мо пароли шуморо намебинем ва нигоҳ намедорем. Шиносоӣ тавассути Google анҷом меёбад.",
      },
    ],
    sections: [
      {
        id: "intro",
        title: "Муқаддима",
        blocks: [
          { type: "p", text: `${v.app} платформаи муосири паёмрасонӣ бо системаи амниятии E2EE (рамзгузории байнихамдигарӣ) мебошад. Ин Сиёсати махфият шарҳ медиҳад, ки мо кадом маълумотро ҷамъ меорем, онро чӣ гуна истифода мебарем ва шумо онро чӣ тавр назорат карда метавонед.` },
          { type: "p", text: "Бо сабти ном ва истифодаи хизматрасонӣ шумо бо ин сиёсат розӣ мешавед. Агар розӣ набошед, лутфан аз хизматрасонӣ истифода набаред." },
        ],
      },
      {
        id: "data",
        title: "Кадом маълумотро мо ҷамъ меорем",
        blocks: [
          { type: "p", text: "Мо танҳо маълумоти барои кори хизматрасонӣ заруриро ҷамъ меорем:" },
          {
            type: "ul",
            items: [
              "Маълумот аз Google: ном, суроғаи email, акси профил ва нишонгари ягонаи аккаунти Google-и шумо.",
              "Маълумоти профил: ҳар чизе, ки шумо худатон дар профили худ ворид мекунед.",
              "Метамаълумоти хизматрасонӣ: барои расонидани паём сервер бояд донад, ки паём ба кӣ равона шудааст ва кай фиристода шудааст.",
              "Маълумоти техникӣ: навъи дастгоҳ ва браузер, суроғаи IP, вақти воридшавӣ ва сабтҳои хатогӣ, ки барои амният ва кори устувор лозиманд.",
              "Паёмҳо ва файлҳо дар шакли рамзгузоришуда: сервер танҳо матнҳои рамзшударо мегузаронад ва нигоҳ медорад, ки онро хонда наметавонад.",
            ],
          },
        ],
      },
      {
        id: "e2ee",
        title: "Рамзгузории E2EE чӣ тавр кор мекунад",
        blocks: [
          { type: "p", text: "Паёмҳои шумо бо рамзгузории End-to-End муҳофизат карда мешаванд. Ин чунин маъно дорад:" },
          {
            type: "ul",
            items: [
              "Паём дар дастгоҳи шумо рамзгузорӣ мешавад ва танҳо дар дастгоҳи гиранда кушода мешавад.",
              "Ҳеҷ кас, аз ҷумла роҳбарият ва администраторони хизматрасонӣ, паёмҳои шуморо хонда наметавонад.",
              "Калидҳои рамзгузорӣ танҳо дар дастгоҳи шумо нигоҳ дошта мешаванд ва ба сервер фиристода намешаванд.",
              "Чатҳо ва файлҳо ҳамон як сатҳи баланди амниятро доранд.",
            ],
          },
          {
            type: "note",
            title: "Ҳудуди муҳофизат",
            text: "Рамзгузорӣ паёмҳоро ҳангоми интиқол ва нигоҳдорӣ дар сервер муҳофизат мекунад. Он наметавонад аз скриншот, нусхабардорӣ аз ҷониби гиранда ё барномаи зарарнок дар дастгоҳи худи шумо муҳофизат кунад. Азбаски калидҳо танҳо дар дастгоҳи шумо ҳастанд, агар дастгоҳро гум кунед ё маълумоти онро тоза намоед, мо наметавонем калидҳо ва таърихи паёмҳоро барқарор кунем.",
          },
        ],
      },
      {
        id: "google",
        title: "Сабти ном тавассути Google",
        blocks: [
          { type: "p", text: "Сабти ном ва воридшавӣ тавассути Google Authentication анҷом меёбад. Мо аз Google танҳо маълумоти асосии профилро (ном, email, акс) мегирем. Мо ба паёмҳои Google, ба Drive ва ба дигар хизматрасониҳои аккаунти шумо дастрасӣ надорем." },
          { type: "p", text: `Иҷозатеро, ки ба ${v.app} додаед, шумо метавонед дар ягон вақт дар танзимоти аккаунти Google-и худ бекор кунед. Google маълумоти шуморо тибқи сиёсати махфияти худ коркард мекунад.` },
        ],
      },
      {
        id: "use",
        title: "Мо маълумотро чӣ тавр истифода мебарем",
        blocks: [
          {
            type: "ul",
            items: [
              "Барои сохтани аккаунт, шиносоии шумо ва расонидани паёмҳо.",
              "Барои муҳофизат аз дуздии аккаунт, сӯиистифода ва ҳамлаҳо.",
              "Барои ислоҳи хатогиҳо ва беҳтар кардани суръат ва устувории хизматрасонӣ.",
              "Барои иҷрои талаботи қонун.",
            ],
          },
          { type: "p", text: "Мо маълумоти шуморо намефурӯшем ва барои реклама истифода намебарем." },
        ],
      },
      {
        id: "security",
        title: "Муҳофизати аккаунт ва маълумот",
        blocks: [
          {
            type: "ul",
            items: [
              "Муҳофизат аз дуздии аккаунт тавассути шиносоии Google ва назорати сессияҳо.",
              "Муҳофизати пурраи маълумоти шахсӣ ҳангоми интиқол тавассути пайвасти рамзгузоришуда (HTTPS/WSS).",
              "Дастрасӣ ба сервер ва пойгоҳи маълумот танҳо барои шахсони ваколатдор ва танҳо дар ҳаҷми зарурӣ.",
            ],
          },
          { type: "p", text: "Бо вуҷуди ин, ягон низоми интернетӣ ба таври мутлақ бехатар нест. Барои амнияти худ дастгоҳро бо қулф ва аккаунти Google-ро бо тасдиқи дукарата муҳофизат кунед." },
        ],
      },
      {
        id: "sharing",
        title: "Мубодилаи маълумот бо тарафҳои сеюм",
        blocks: [
          { type: "p", text: "Мо маълумоти шуморо танҳо бо тарафҳое мубодила мекунем, ки барои кори хизматрасонӣ лозиманд:" },
          {
            type: "ul",
            items: [
              "Google: барои шиносоӣ ва воридшавӣ.",
              "Провайдери хостинг ва инфрасохтор: барои кори серверҳо.",
              "Мақомоти ваколатдор: танҳо бо дархости қонунӣ.",
            ],
          },
          { type: "p", text: "Ҳатто бо дархости қонунӣ мо мундариҷаи паёмҳоро дода наметавонем, зеро онро намехонем. Мо танҳо маълумотеро дода метавонем, ки воқеан дорем: маълумоти профил, метамаълумот ва матни рамзгузоришуда." },
        ],
      },
      {
        id: "retention",
        title: "Нигоҳдорӣ ва ҳазфи маълумот",
        blocks: [
          {
            type: "p",
            text:
              v.days === 0
                ? "Мо маълумотро то он даме нигоҳ медорем, ки аккаунти шумо фаъол аст. Пас аз ҳазфи аккаунт, маълумоти профил ва паёмҳои рамзгузоришуда фавран аз серверҳо тоза карда мешаванд, ба истиснои маълумоте, ки қонун нигоҳ доштани онро талаб мекунад."
                : `Мо маълумотро то он даме нигоҳ медорем, ки аккаунти шумо фаъол аст. Пас аз ҳазфи аккаунт, маълумоти профил ва паёмҳои рамзгузоришуда дар давоми ${v.days} рӯз аз серверҳо тоза карда мешаванд, ба истиснои маълумоте, ки қонун нигоҳ доштани онро талаб мекунад.`,
          },
        ],
      },
      {
        id: "rights",
        title: "Ҳуқуқҳои шумо",
        blocks: [
          {
            type: "ul",
            items: [
              "Дастрасӣ: бидонед, ки мо дар бораи шумо кадом маълумотро нигоҳ медорем.",
              "Ислоҳ: маълумоти нодурусти профили худро тағйир диҳед.",
              "Ҳазф: аккаунт ва маълумоти худро ҳазф кунед ё ҳазфи онро дархост намоед.",
              "Бозхонд: иҷозати додашударо ба Google дар ҳар вақт бекор кунед.",
            ],
          },
          { type: "p", text: `Барои татбиқи ин ҳуқуқҳо ба ${v.email} нависед.` },
        ],
      },
      {
        id: "children",
        title: "Синну сол",
        blocks: [
          { type: "p", text: `${v.app} барои шахсони аз ${v.age}-сола хурд пешбинӣ нашудааст. Агар бифаҳмем, ки аккаунт ба шахси аз ин синну сол хурдтар тааллуқ дорад, онро ҳазф мекунем.` },
        ],
      },
      {
        id: "changes",
        title: "Тағйирот дар ин сиёсат",
        blocks: [
          { type: "p", text: "Мо метавонем ин сиёсатро навсозӣ кунем. Дар ҳолати тағйироти назаррас, шуморо дар худи хизматрасонӣ огоҳ мекунем. Санаи қувваи охирин дар болои ин саҳифа нишон дода шудааст." },
        ],
      },
      {
        id: "contact",
        title: "Тамос",
        blocks: [
          { type: "p", text: "Агар дар бораи махфият савол дошта бошед, бо мо тамос гиред:" },
          { type: "contact" },
        ],
      },
    ],
  }),

  /* ───────────────────────── РУССКИЙ ───────────────────────── */
  ru: (v) => ({
    ui: {
      title: "Политика конфиденциальности",
      effective: "Действует с 2 ноября 2026 г.",
      glanceTitle: "Кратко",
      toc: "Содержание",
      language: "Язык",
    },
    glance: [
      {
        title: "Сообщения зашифрованы",
        text: "Содержимое сообщения шифруется на устройстве отправителя и расшифровывается только на устройстве получателя.",
      },
      {
        title: "Ключи на вашем устройстве",
        text: "Ключи шифрования хранятся только на вашем устройстве. Даже администраторы не имеют к ним доступа.",
      },
      {
        title: "Вход через Google",
        text: "Мы не видим и не храним ваш пароль. Аутентификация выполняется через Google.",
      },
    ],
    sections: [
      {
        id: "intro",
        title: "Введение",
        blocks: [
          { type: "p", text: `${v.app} — современная платформа для обмена сообщениями с системой безопасности E2EE (сквозное шифрование). Эта Политика конфиденциальности объясняет, какие данные мы собираем, как их используем и как вы можете ими управлять.` },
          { type: "p", text: "Регистрируясь и используя сервис, вы соглашаетесь с этой политикой. Если вы не согласны, пожалуйста, не пользуйтесь сервисом." },
        ],
      },
      {
        id: "data",
        title: "Какие данные мы собираем",
        blocks: [
          { type: "p", text: "Мы собираем только данные, необходимые для работы сервиса:" },
          {
            type: "ul",
            items: [
              "Данные из Google: имя, адрес электронной почты, фото профиля и уникальный идентификатор вашего аккаунта Google.",
              "Данные профиля: всё, что вы сами указываете в своём профиле.",
              "Служебные метаданные: чтобы доставить сообщение, серверу нужно знать, кому оно адресовано и когда было отправлено.",
              "Технические данные: тип устройства и браузера, IP-адрес, время входа и журналы ошибок, необходимые для безопасности и стабильной работы.",
              "Сообщения и файлы в зашифрованном виде: сервер лишь передаёт и хранит зашифрованные данные, которые не может прочитать.",
            ],
          },
        ],
      },
      {
        id: "e2ee",
        title: "Как работает шифрование E2EE",
        blocks: [
          { type: "p", text: "Ваши сообщения защищены сквозным шифрованием (End-to-End). Это означает:" },
          {
            type: "ul",
            items: [
              "Сообщение шифруется на вашем устройстве и расшифровывается только на устройстве получателя.",
              "Никто, включая руководство и администраторов сервиса, не может прочитать ваши сообщения.",
              "Ключи шифрования хранятся только на вашем устройстве и не отправляются на сервер.",
              "Чаты и файлы защищены на одинаково высоком уровне.",
            ],
          },
          {
            type: "note",
            title: "Границы защиты",
            text: "Шифрование защищает сообщения при передаче и при хранении на сервере. Оно не защищает от скриншотов, копирования получателем или вредоносных программ на вашем собственном устройстве. Поскольку ключи есть только на вашем устройстве, при потере устройства или очистке его данных мы не сможем восстановить ключи и историю сообщений.",
          },
        ],
      },
      {
        id: "google",
        title: "Регистрация через Google",
        blocks: [
          { type: "p", text: "Регистрация и вход выполняются через Google Authentication. Из Google мы получаем только основные данные профиля (имя, email, фото). У нас нет доступа к вашей почте Google, Drive и другим сервисам вашего аккаунта." },
          { type: "p", text: `Разрешение, выданное ${v.app}, вы можете отозвать в любой момент в настройках своего аккаунта Google. Google обрабатывает ваши данные в соответствии со своей политикой конфиденциальности.` },
        ],
      },
      {
        id: "use",
        title: "Как мы используем данные",
        blocks: [
          {
            type: "ul",
            items: [
              "Чтобы создать аккаунт, идентифицировать вас и доставлять сообщения.",
              "Чтобы защищать от кражи аккаунтов, злоупотреблений и атак.",
              "Чтобы исправлять ошибки и повышать скорость и стабильность сервиса.",
              "Чтобы выполнять требования закона.",
            ],
          },
          { type: "p", text: "Мы не продаём ваши данные и не используем их для рекламы." },
        ],
      },
      {
        id: "security",
        title: "Защита аккаунта и данных",
        blocks: [
          {
            type: "ul",
            items: [
              "Защита от кражи аккаунта через аутентификацию Google и контроль сессий.",
              "Полная защита персональных данных при передаче по зашифрованному соединению (HTTPS/WSS).",
              "Доступ к серверу и базе данных только у уполномоченных лиц и только в необходимом объёме.",
            ],
          },
          { type: "p", text: "Тем не менее ни одна интернет-система не может быть абсолютно безопасной. Для своей безопасности защитите устройство блокировкой, а аккаунт Google — двухфакторной аутентификацией." },
        ],
      },
      {
        id: "sharing",
        title: "Передача данных третьим лицам",
        blocks: [
          { type: "p", text: "Мы передаём ваши данные только тем сторонам, которые необходимы для работы сервиса:" },
          {
            type: "ul",
            items: [
              "Google: для аутентификации и входа.",
              "Хостинг-провайдер и инфраструктура: для работы серверов.",
              "Уполномоченные органы: только по законному запросу.",
            ],
          },
          { type: "p", text: "Даже по законному запросу мы не можем предоставить содержимое сообщений, потому что не можем его прочитать. Мы можем передать только то, что у нас действительно есть: данные профиля, метаданные и зашифрованный текст." },
        ],
      },
      {
        id: "retention",
        title: "Хранение и удаление данных",
        blocks: [
          {
            type: "p",
            text:
              v.days === 0
                ? "Мы храним данные, пока ваш аккаунт активен. После удаления аккаунта данные профиля и зашифрованные сообщения немедленно удаляются с серверов, за исключением данных, хранение которых требуется по закону."
                : `Мы храним данные, пока ваш аккаунт активен. После удаления аккаунта данные профиля и зашифрованные сообщения удаляются с серверов в течение ${v.days} дн., за исключением данных, хранение которых требуется по закону.`,
          },
        ],
      },
      {
        id: "rights",
        title: "Ваши права",
        blocks: [
          {
            type: "ul",
            items: [
              "Доступ: узнать, какие данные о вас мы храним.",
              "Исправление: изменить неточные данные в своём профиле.",
              "Удаление: удалить аккаунт и свои данные или запросить их удаление.",
              "Отзыв согласия: в любой момент отозвать разрешение, выданное Google.",
            ],
          },
          { type: "p", text: `Чтобы воспользоваться этими правами, напишите на ${v.email}.` },
        ],
      },
      {
        id: "children",
        title: "Возраст",
        blocks: [
          { type: "p", text: `${v.app} не предназначен для лиц младше ${v.age} лет. Если мы узнаем, что аккаунт принадлежит человеку младше этого возраста, мы удалим его.` },
        ],
      },
      {
        id: "changes",
        title: "Изменения в политике",
        blocks: [
          { type: "p", text: "Мы можем обновлять эту политику. При существенных изменениях мы уведомим вас в самом сервисе. Дата вступления в силу указана в верхней части страницы." },
        ],
      },
      {
        id: "contact",
        title: "Контакты",
        blocks: [
          { type: "p", text: "Если у вас есть вопросы о конфиденциальности, свяжитесь с нами:" },
          { type: "contact" },
        ],
      },
    ],
  }),

  /* ───────────────────────── ENGLISH ───────────────────────── */
  en: (v) => ({
    ui: {
      title: "Privacy Policy",
      effective: "Effective November 2, 2026",
      glanceTitle: "At a glance",
      toc: "Contents",
      language: "Language",
    },
    glance: [
      {
        title: "Messages are encrypted",
        text: "A message is encrypted on the sender's device and can only be opened on the recipient's device.",
      },
      {
        title: "Keys stay on your device",
        text: "Encryption keys are stored only on your device. Even administrators cannot access them.",
      },
      {
        title: "Sign in with Google",
        text: "We never see or store your password. Authentication is handled by Google.",
      },
    ],
    sections: [
      {
        id: "intro",
        title: "Introduction",
        blocks: [
          { type: "p", text: `${v.app} is a modern messaging platform with E2EE (end-to-end encryption) security. This Privacy Policy explains what information we collect, how we use it, and how you can control it.` },
          { type: "p", text: "By signing up and using the service, you agree to this policy. If you do not agree, please do not use the service." },
        ],
      },
      {
        id: "data",
        title: "Information we collect",
        blocks: [
          { type: "p", text: "We collect only the information needed to run the service:" },
          {
            type: "ul",
            items: [
              "Information from Google: your name, email address, profile photo, and the unique identifier of your Google account.",
              "Profile information: anything you enter in your profile yourself.",
              "Service metadata: to deliver a message, the server must know who it is addressed to and when it was sent.",
              "Technical information: device and browser type, IP address, sign-in time, and error logs needed for security and reliable operation.",
              "Messages and files in encrypted form: the server only relays and stores encrypted data that it cannot read.",
            ],
          },
        ],
      },
      {
        id: "e2ee",
        title: "How E2EE works",
        blocks: [
          { type: "p", text: "Your messages are protected with end-to-end encryption. This means:" },
          {
            type: "ul",
            items: [
              "A message is encrypted on your device and can only be opened on the recipient's device.",
              "No one, including the service's management and administrators, can read your messages.",
              "Encryption keys are stored only on your device and are never sent to the server.",
              "Chats and files receive the same high level of protection.",
            ],
          },
          {
            type: "note",
            title: "Limits of protection",
            text: "Encryption protects messages in transit and while stored on the server. It cannot protect against screenshots, copying by the recipient, or malware on your own device. Because the keys exist only on your device, if you lose the device or clear its data, we cannot recover the keys or your message history.",
          },
        ],
      },
      {
        id: "google",
        title: "Signing up with Google",
        blocks: [
          { type: "p", text: "Sign-up and sign-in are handled through Google Authentication. From Google we receive only your basic profile information (name, email, photo). We have no access to your Gmail, Drive, or other services in your account." },
          { type: "p", text: `You can revoke the permission you gave ${v.app} at any time in your Google account settings. Google processes your data under its own privacy policy.` },
        ],
      },
      {
        id: "use",
        title: "How we use information",
        blocks: [
          {
            type: "ul",
            items: [
              "To create your account, identify you, and deliver messages.",
              "To protect against account theft, abuse, and attacks.",
              "To fix bugs and improve the speed and reliability of the service.",
              "To comply with legal requirements.",
            ],
          },
          { type: "p", text: "We do not sell your data or use it for advertising." },
        ],
      },
      {
        id: "security",
        title: "Account and data protection",
        blocks: [
          {
            type: "ul",
            items: [
              "Protection against account theft through Google authentication and session control.",
              "Full protection of personal data in transit over an encrypted connection (HTTPS/WSS).",
              "Access to the server and database is limited to authorized people and only to the extent necessary.",
            ],
          },
          { type: "p", text: "Even so, no internet system is absolutely secure. For your own safety, protect your device with a lock and your Google account with two-step verification." },
        ],
      },
      {
        id: "sharing",
        title: "Sharing with third parties",
        blocks: [
          { type: "p", text: "We share your information only with parties needed to operate the service:" },
          {
            type: "ul",
            items: [
              "Google: for authentication and sign-in.",
              "Hosting and infrastructure provider: to run our servers.",
              "Authorities: only upon a lawful request.",
            ],
          },
          { type: "p", text: "Even on a lawful request, we cannot hand over the content of messages because we cannot read it. We can only provide what we actually hold: profile information, metadata, and encrypted text." },
        ],
      },
      {
        id: "retention",
        title: "Retention and deletion",
        blocks: [
          {
            type: "p",
            text:
              v.days === 0
                ? "We keep data for as long as your account is active. After you delete your account, profile data and encrypted messages are removed from our servers immediately, except for data we are required by law to keep."
                : `We keep data for as long as your account is active. After you delete your account, profile data and encrypted messages are removed from our servers within ${v.days} days, except for data we are required by law to keep.`,
          },
        ],
      },
      {
        id: "rights",
        title: "Your rights",
        blocks: [
          {
            type: "ul",
            items: [
              "Access: find out what information we hold about you.",
              "Correction: change inaccurate information in your profile.",
              "Deletion: delete your account and data, or request that we do so.",
              "Withdrawal: revoke the permission you gave Google at any time.",
            ],
          },
          { type: "p", text: `To exercise these rights, write to ${v.email}.` },
        ],
      },
      {
        id: "children",
        title: "Age",
        blocks: [
          { type: "p", text: `${v.app} is not intended for people under ${v.age}. If we learn that an account belongs to someone younger, we will delete it.` },
        ],
      },
      {
        id: "changes",
        title: "Changes to this policy",
        blocks: [
          { type: "p", text: "We may update this policy. For significant changes, we will notify you within the service. The effective date is shown at the top of this page." },
        ],
      },
      {
        id: "contact",
        title: "Contact",
        blocks: [
          { type: "p", text: "If you have questions about privacy, contact us:" },
          { type: "contact" },
        ],
      },
    ],
  }),

  /* ───────────────────────── فارسی ───────────────────────── */
  fa: (v) => ({
    ui: {
      title: "سیاست حریم خصوصی",
      effective: "اجرایی از ۱۱ آبان ۱۴۰۵",
      glanceTitle: "در یک نگاه",
      toc: "فهرست مطالب",
      language: "زبان",
    },
    glance: [
      {
        title: "پیام‌ها رمزگذاری شده‌اند",
        text: "محتوای پیام روی دستگاه فرستنده رمزگذاری می‌شود و فقط روی دستگاه گیرنده باز می‌شود.",
      },
      {
        title: "کلیدها روی دستگاه شما",
        text: "کلیدهای رمزگذاری فقط روی دستگاه شما نگهداری می‌شوند. حتی مدیران نیز به آن‌ها دسترسی ندارند.",
      },
      {
        title: "ورود با گوگل",
        text: "ما رمز عبور شما را نمی‌بینیم و ذخیره نمی‌کنیم. احراز هویت از طریق گوگل انجام می‌شود.",
      },
    ],
    sections: [
      {
        id: "intro",
        title: "مقدمه",
        blocks: [
          { type: "p", text: `${v.app} یک پلتفرم پیام‌رسان مدرن با سیستم امنیتی E2EE (رمزگذاری سرتاسری) است. این سیاست حریم خصوصی توضیح می‌دهد که ما چه اطلاعاتی را جمع‌آوری می‌کنیم، چگونه از آن استفاده می‌کنیم و شما چگونه می‌توانید آن را کنترل کنید.` },
          { type: "p", text: "با ثبت‌نام و استفاده از سرویس، شما با این سیاست موافقت می‌کنید. اگر موافق نیستید، لطفاً از سرویس استفاده نکنید." },
        ],
      },
      {
        id: "data",
        title: "چه اطلاعاتی را جمع‌آوری می‌کنیم",
        blocks: [
          { type: "p", text: "ما فقط اطلاعاتی را جمع‌آوری می‌کنیم که برای کار سرویس لازم است:" },
          {
            type: "ul",
            items: [
              "اطلاعات گوگل: نام، نشانی ایمیل، عکس نمایه و شناسه یکتای حساب گوگل شما.",
              "اطلاعات نمایه: هر آنچه خودتان در نمایه‌تان وارد می‌کنید.",
              "فراداده‌های سرویس: برای رساندن پیام، سرور باید بداند پیام به چه کسی ارسال شده و چه زمانی فرستاده شده است.",
              "اطلاعات فنی: نوع دستگاه و مرورگر، نشانی IP، زمان ورود و گزارش‌های خطا که برای امنیت و پایداری سرویس لازم‌اند.",
              "پیام‌ها و فایل‌ها به صورت رمزگذاری‌شده: سرور فقط داده‌های رمزگذاری‌شده را منتقل و نگهداری می‌کند و نمی‌تواند آن‌ها را بخواند.",
            ],
          },
        ],
      },
      {
        id: "e2ee",
        title: "رمزگذاری E2EE چگونه کار می‌کند",
        blocks: [
          { type: "p", text: "پیام‌های شما با رمزگذاری سرتاسری (End-to-End) محافظت می‌شوند. این یعنی:" },
          {
            type: "ul",
            items: [
              "پیام روی دستگاه شما رمزگذاری می‌شود و فقط روی دستگاه گیرنده باز می‌شود.",
              "هیچ‌کس، از جمله مدیریت و مدیران سرویس، نمی‌تواند پیام‌های شما را بخواند.",
              "کلیدهای رمزگذاری فقط روی دستگاه شما نگهداری می‌شوند و به سرور ارسال نمی‌شوند.",
              "گفتگوها و فایل‌ها از همان سطح بالای امنیت برخوردارند.",
            ],
          },
          {
            type: "note",
            title: "محدودیت‌های محافظت",
            text: "رمزگذاری از پیام‌ها هنگام انتقال و نگهداری روی سرور محافظت می‌کند. این روش نمی‌تواند در برابر اسکرین‌شات، کپی‌برداری گیرنده یا برنامه مخرب روی دستگاه خود شما محافظت کند. از آنجا که کلیدها فقط روی دستگاه شما هستند، اگر دستگاه را گم کنید یا اطلاعات آن را پاک کنید، ما نمی‌توانیم کلیدها و تاریخچه پیام‌ها را بازیابی کنیم.",
          },
        ],
      },
      {
        id: "google",
        title: "ثبت‌نام با گوگل",
        blocks: [
          { type: "p", text: "ثبت‌نام و ورود از طریق Google Authentication انجام می‌شود. ما از گوگل فقط اطلاعات اصلی نمایه (نام، ایمیل، عکس) را دریافت می‌کنیم. ما به ایمیل‌های گوگل، Drive و سایر سرویس‌های حساب شما دسترسی نداریم." },
          { type: "p", text: `مجوزی را که به ${v.app} داده‌اید، هر زمان می‌توانید در تنظیمات حساب گوگل خود لغو کنید. گوگل اطلاعات شما را طبق سیاست حریم خصوصی خودش پردازش می‌کند.` },
        ],
      },
      {
        id: "use",
        title: "چگونه از اطلاعات استفاده می‌کنیم",
        blocks: [
          {
            type: "ul",
            items: [
              "برای ساخت حساب، شناسایی شما و رساندن پیام‌ها.",
              "برای محافظت در برابر سرقت حساب، سوءاستفاده و حملات.",
              "برای رفع خطاها و بهبود سرعت و پایداری سرویس.",
              "برای رعایت الزامات قانونی.",
            ],
          },
          { type: "p", text: "ما اطلاعات شما را نمی‌فروشیم و برای تبلیغات استفاده نمی‌کنیم." },
        ],
      },
      {
        id: "security",
        title: "محافظت از حساب و اطلاعات",
        blocks: [
          {
            type: "ul",
            items: [
              "محافظت در برابر سرقت حساب از طریق احراز هویت گوگل و کنترل نشست‌ها.",
              "محافظت کامل از اطلاعات شخصی هنگام انتقال از طریق اتصال رمزگذاری‌شده (HTTPS/WSS).",
              "دسترسی به سرور و پایگاه داده فقط برای افراد مجاز و فقط در حد ضرورت.",
            ],
          },
          { type: "p", text: "با این حال هیچ سیستم اینترنتی کاملاً ایمن نیست. برای امنیت خود، دستگاهتان را با قفل و حساب گوگل خود را با تأیید دومرحله‌ای محافظت کنید." },
        ],
      },
      {
        id: "sharing",
        title: "اشتراک‌گذاری اطلاعات با اشخاص ثالث",
        blocks: [
          { type: "p", text: "ما اطلاعات شما را فقط با طرف‌هایی به اشتراک می‌گذاریم که برای کار سرویس لازم‌اند:" },
          {
            type: "ul",
            items: [
              "گوگل: برای احراز هویت و ورود.",
              "ارائه‌دهنده هاستینگ و زیرساخت: برای کار سرورها.",
              "مراجع صالح: فقط با درخواست قانونی.",
            ],
          },
          { type: "p", text: "حتی با درخواست قانونی نیز ما نمی‌توانیم محتوای پیام‌ها را تحویل دهیم، زیرا آن را نمی‌خوانیم. ما فقط می‌توانیم آنچه را واقعاً داریم ارائه کنیم: اطلاعات نمایه، فراداده‌ها و متن رمزگذاری‌شده." },
        ],
      },
      {
        id: "retention",
        title: "نگهداری و حذف اطلاعات",
        blocks: [
          {
            type: "p",
            text:
              v.days === 0
                ? "ما اطلاعات را تا زمانی که حساب شما فعال است نگهداری می‌کنیم. پس از حذف حساب، اطلاعات نمایه و پیام‌های رمزگذاری‌شده بلافاصله از سرورها پاک می‌شوند، به‌جز اطلاعاتی که قانون نگهداری آن‌ها را الزامی می‌کند."
                : `ما اطلاعات را تا زمانی که حساب شما فعال است نگهداری می‌کنیم. پس از حذف حساب، اطلاعات نمایه و پیام‌های رمزگذاری‌شده ظرف ${v.days} روز از سرورها پاک می‌شوند، به‌جز اطلاعاتی که قانون نگهداری آن‌ها را الزامی می‌کند.`,
          },
        ],
      },
      {
        id: "rights",
        title: "حقوق شما",
        blocks: [
          {
            type: "ul",
            items: [
              "دسترسی: بدانید ما چه اطلاعاتی از شما نگهداری می‌کنیم.",
              "اصلاح: اطلاعات نادرست نمایه خود را تغییر دهید.",
              "حذف: حساب و اطلاعات خود را حذف کنید یا درخواست حذف آن را بدهید.",
              "پس‌گرفتن مجوز: مجوزی را که به گوگل داده‌اید هر زمان لغو کنید.",
            ],
          },
          { type: "p", text: `برای اعمال این حقوق به ${v.email} ایمیل بزنید.` },
        ],
      },
      {
        id: "children",
        title: "سن",
        blocks: [
          { type: "p", text: `${v.app} برای افراد زیر ${v.age} سال در نظر گرفته نشده است. اگر متوجه شویم حسابی متعلق به فردی کم‌سن‌تر از این حد است، آن را حذف می‌کنیم.` },
        ],
      },
      {
        id: "changes",
        title: "تغییرات این سیاست",
        blocks: [
          { type: "p", text: "ممکن است این سیاست را به‌روزرسانی کنیم. در صورت تغییرات مهم، در خود سرویس به شما اطلاع می‌دهیم. تاریخ اجرایی‌شدن در بالای این صفحه نشان داده شده است." },
        ],
      },
      {
        id: "contact",
        title: "تماس",
        blocks: [
          { type: "p", text: "اگر درباره حریم خصوصی سؤالی دارید، با ما تماس بگیرید:" },
          { type: "contact" },
        ],
      },
    ],
  }),
};

export function getPolicy(lang, vars) {
  const build = content[lang] || content.tg;
  return build(vars);
}