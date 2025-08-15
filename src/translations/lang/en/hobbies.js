const hobbies = {
  title: 'Hobbies & Interests',
  subtitle: 'Passions outside of work impact my life as much as work itself.',
  hobbies: [
    {
      key: 'guitar-music',
      title: 'Guitar & Music',
      description: [
        'I have been playing guitar since I was a child, took several years of classical and jazz lessons, and played in small groups of friends, from rock to blues.',
        {
          type: 'carousel',
          items: [
            { type: 'image', src: 'images/mbc-photo-1.jpg', alt: 'MBC live 1' },
            { type: 'image', src: 'images/mbc-photo-2.jpg', alt: 'MBC live 2' },
            { type: 'image', src: 'images/hotheels-photo-1.jpg', alt: 'Hot Heels live' }
          ]
        },
        'Over the years, I have also explored different aspects related to music. During high school, I attended a mixing and studio recording course and worked as a live light technician. Later, I participated in some small events as a sound assistant. Recently, I took a few lutherie lessons, with the idea of building a St. Vincent-style guitar as a surprise gift.',
        {
          type: 'carousel',
          items: [
            { type: 'image', src: 'images/stVincent-building.jpg', alt: 'Homemade St. Vincent in-Building' },
            { type: 'image', src: 'images/cajon.jpg', alt: 'Homemade cajon' },
          ]
        },
      ],
      icon: 'Music',
      media: {
        images: [],
        documents: [],
        links: []
      }
    },
    {
      key: 'sailing',
      title: 'Sailing',
      description: [
        'For a few years now, I have discovered the fun of sailing a dinghy. Every summer I attend a sailing course with the **[Italian Naval League (LNI) of Ferrara](https://www.leganavale.it/ferrara).** During 2024, together with my girlfriend, we bought a second-hand 470 with which we regularly go out in Goro.',
        {
          type: 'carousel',
          items: [
            { type: 'image', src: 'images/sail-470-1.jpg', alt: 'Sail 470 - 1' },
            { type: 'image', src: 'images/sail-group.jpg', alt: 'Sail with LNI Ferrara' },
            { type: 'image', src: 'images/sail-470-2.jpg', alt: 'Sail 470 - 2' },
          ]
        },
        'To learn some details about this boat, I translated the *470 Guide* by Arthur Gurevitch.\n\n' +
        'The editable and integrable version is available on [![GitHub](https://img.shields.io/badge/GitHub-Manuale--470--ITA-181717?logo=github&style=flat-square)](https://github.com/FForzano/Manuale-470-ITA)\n' +
        '\n**Any contribution, correction or suggestion is welcome!**' +
        '\n\n[![Download the Guide 📥](https://img.shields.io/badge/Download%20PDF-Guida%20470-blue?logo=adobeacrobatreader&logoColor=white&style=for-the-badge)](https://github.com/FForzano/Manuale-470-ITA/releases/download/v1.0/Manuale-al-470-ITA.pdf)'
      ],
      icon: 'Waves',
      media: {
        images: [],
        documents: [],
        links: [
          { label: '470 Guide ITA', url: 'https://github.com/FForzano/Manuale-470-ITA/releases/download/v1.0/Manuale-al-470-ITA.pdf' },
          { label: '470 Guide ITA (Editable Repository)', url: 'https://github.com/FForzano/Manuale-470-ITA' },
          { label: '470 Guide Original (ENG)', url: 'https://github.com/FForzano/Manuale-470-ITA/blob/master/470-Manual-ENG.pdf' }
        ]
      }
    },
    {
      key: 'cooking',
      title: 'Cooking',
      description: [
        'I like to cook for myself and for some friends. I am not looking for sophisticated or particularly elaborate recipes, just the pleasure of preparing and eating a well-made dish.',
        {
          type: 'carousel',
          items: [
            { type: 'image', src: 'images/pasta-broccoli-arriminati.jpg', alt: 'Pasta with broccoli arriminati' },
            { type: 'image', src: 'images/brioches-tuppo.jpg', alt: 'Brioches col tuppo' },
            { type: 'image', src: 'images/pangoccioli.jpg', alt: 'Pangoccioli' },
            { type: 'image', src: 'images/panelle.jpg', alt: 'Panelle' }
          ]
        },
        "I'm collecting the recipes I like (mine and others) in a Notion site. If you want to take a look, you can find it **[here](https://zenith-cobbler-831.notion.site/24d7be2d9ff580498fafd41f7f96ed5c?v=24d7be2d9ff581ce8d9d000c986b018b/)**."
      ],
      icon: 'ChefHat',
      media: {
        images: [],
        documents: [],
        links: [
          { label: 'Fede & Lele Recipe Book', url: 'https://zenith-cobbler-831.notion.site/24d7be2d9ff580498fafd41f7f96ed5c?v=24d7be2d9ff581ce8d9d000c986b018b/' }
        ]
      }
    },
    // {
    //   title: 'Photography',
    //   description: 'Photography is a great passion of mine. I like to capture moments and landscapes, exploring the beauty of the world through the lens.',
    //   icon: 'Camera',
    //   media: {
    //     images: [
    //       { src: '/images/photography1.jpg', alt: 'Mountain landscape' },
    //       { src: '/images/photography2.jpg', alt: 'Portrait' }
    //     ],
    //     documents: [],
    //     links: []
    //   }
    // }
  ]
};

export default hobbies;
