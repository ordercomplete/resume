// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  address: `132 Christiansen Radial Garlandfort, LA 03788-6152`,
  position: `Junior Fullstack JS Developer`,
  salary: `$600 per month`,
  title: {
    text: `Resume`,
  },
  name: {
    firstname: `Ivan`,
    lastname: `Ivanov`,
  },
}
var footer = {
  social: {
    email: {
      text: `dmytro@mail.com`,
      href: `mailto:dmytro@mail.com`,
    },
    phone: {
      text: `+380670000123`,
      href: `tel:+380670000123`,
    },
    linkedin: {
      text: `LinkedIn`,
      href: `https://www.linkedin.com/in/dmytro-test`,
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: {
        text: `Resume | Summary`,
      },
    },

    header,

    main: {
      summary: {
        title: `Summary`,
        text: `Open-minded for new technologies, with 1 years of
        experience in development. Whenever I start to
        work on a new project I learn the domain and try
        to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },

      experience: {
        title: `Other experience`,
        text: `Pet project for parsing sport betting data from
        different platforms ( odds ) and sport statistics
        ( tournament position, goals etc), analyzing by
        simple mathematics models and preparing
        probability for such events like: money line -
        first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: {
        text: `Resume | Skills`,
      },
    },

    header,

    main: {
      skills: [
        {
          name: `HTML`,
          point: 10,
          isTop: true,
        },
        {
          name: `Handlebars`,
          point: 8,
          isTop: true,
        },
        {
          name: `VS Code & NPM`,
          point: 6,
          isTop: false,
        },
        {
          name: `Git & Terminal`,
          point: 5,
        },
        {
          name: `React.js`,
          point: 0,
        },
        {
          name: `PHP`,
          point: null,
        },
      ],
      hobbies: [
        {
          name: `Listening to different genres of music.`,
          isMain: true,
        },
        {
          name: `Playing musical instruments.`,
          isMain: true,
        },
        {
          name: `Photography and image editing.`,
          isMain: false,
        },
        {
          name: `Traveling and exploring new places.`,
          isMain: false,
        },
        {
          name: `Amateur cinematography and video editing.`,
          isMain: false,
        },
        {
          name: `Cooking and experimenting with recipes with the family.`,
          isMain: true,
        },
      ],
    },

    footer,
  })
})

// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: {
        text: `Resume | Education`,
      },
    },

    header,

    main: {
      education: [
        {
          name: `IT school GoIT - Fullstack developer`,
          point: 3,
          isTop: true,
          isEnd: false,
        },
        {
          name: `SNAU - Enterprise economics`,
          point: 8,
          isTop: false,
          isEnd: true,
        },
        {
          name: `SNAU - Civil and industrial construction`,
          point: 10,
          isTop: false,
          isEnd: true,
        },
      ],
      certificates: [
        {
          name: `Сертифікат з розробки програмного забезпечення:
          Школа програмування "Професійні стандарти" (м. Київ)
          Professional Software Development Certification Course (Kyiv Standards School)`,
          id: 353,
        },
        {
          name: `Сертифікат з медійного дизайну:
          Школа мистецтва та дизайну "ARTSAFARI" (м. Львів)
          ARTSAFARI School of Art and Design (Lviv)`,
          id: 658,
        },
        {
          name: `Сертифікат з робототехніки:
          Інститут робототехніки та інженерії ПрАТ "Прогрес-Роботік" (м. Дніпро)
          Progress-Robotics Institute of Robotics and Engineering LLC (Dnipro)`,
          id: 789,
        },
      ],
    },

    footer,
  })
})

// ================================================================
//      це ендпоінт        ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: `big`,
    page: {
      title: {
        text: `Resume | Work`,
      },
    },

    header,

    main: {
      works: [
        {
          position: `Senior Full Stack Developer, Tech Innovators`,
          company: {
            name: `LogicSquare Solutions`,
            // url: `https://logic-square.com/`,
          },
          duration: {
            from: `10.10.2020`,
            to: null,
          },

          projectAmount: 1,

          projects: [
            {
              name: `- Development of a marketing automation platform`,
              url: `https://logic-square.com/`,
              about: `Creating a platform for automatic creation and management of advertising campaigns and results analysis.`,
              stack: [
                {
                  name: `JavaScript`,
                },
                {
                  name: `React`,
                },
                {
                  name: `Node.js`,
                },
                {
                  name: `Express`,
                },
                {
                  name: `PostgreSQL`,
                },
                {
                  name: `HTML5`,
                },
                {
                  name: `CSS3`,
                },
                {
                  name: `GraphQL`,
                },
                {
                  name: `Docker`,
                },
              ],
              stackAmount: 9,
              awards: [
                {
                  name: `- Innovative Approach Award in 2020`,
                },
                {
                  name: `- Team Leadership Award`,
                },
              ],
              awardAmount: 2,
            },
          ],
        },
        {
          position: `Middle Full Stack Developer, WebCorp`,
          company: {
            name: `SoftTech Innovations`,
            url: `https://softbd.com/`,
          },
          duration: {
            from: `10.10.2017`,
            to: `10.10.2020`,
          },

          projectAmount: 1,

          projects: [
            {
              name: `- Development of a web application for finance management`,
              url: `https://softbd.com/`,
              about: `Creating a web application for tracking expenses, budget planning, and financial operations analysis.`,
              stack: [
                {
                  name: `JavaScript`,
                },
                {
                  name: `Angular`,
                },
                {
                  name: `Node.js`,
                },
                {
                  name: `Express`,
                },
                {
                  name: `MongoDB`,
                },
                {
                  name: `HTML5`,
                },
                {
                  name: `CSS3`,
                },
              ],
              stackAmount: 8,
              awards: [
                {
                  name: `- Best Teamwork Award in 2017`,
                },
                {
                  name: `- High Productivity Award`,
                },
              ],
              awardAmount: 2,
            },
          ],
        },
        {
          position: `Junior Full Stack Developer, IT Craft`,
          company: {
            name: `CodeWave Inc.`,
            url: `https://codewave.com/`,
          },
          duration: {
            from: `10.10.2014`,
            to: '10.10.2017',
          },

          projectAmount: 1,

          projects: [
            {
              name: `Development of a web platform for ordering food from restaurants`,
              url: `https://codewave.com/`,
              about: `Creating a website for searching restaurants, browsing menus, and ordering food online.`,
              stack: [
                {
                  name: `HTML5`,
                },
                {
                  name: `CSS3`,
                },
                {
                  name: `JavaScript`,
                },
                {
                  name: `jQuery`,
                },
                {
                  name: `PHP`,
                },
                {
                  name: `MySQL`,
                },
              ],
              stackAmount: 3,
              awards: [
                {
                  name: `- Best Initiative Award in 2016`,
                },
                {
                  name: `- High Code Quality Award`,
                },
              ],
              awardAmount: 2,
            },
          ],
        },
      ],
    },
    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
