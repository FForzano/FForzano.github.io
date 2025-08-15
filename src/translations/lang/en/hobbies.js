const hobbies = {
  title: 'Hobbies & Interests',
  subtitle: 'Passions outside of work impact my life as much as work itself.',
  hobbies: [
    {
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
        "Over the years, I've also explored different aspects of music. During high school, I attended a mixing and studio recording course and worked as a live light technician. Later, I participated in some small events as a sound assistant. Recently, I took a few lutherie lessons, with the idea of building a St. Vincent-style guitar as a surprise gift.",
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
      title: 'Sailing',
      description: 'Sailing has taught me patience, reading weather conditions, and teamwork. I mainly sail in the Adriatic with regular outings.',
      icon: 'Waves',
      media: {
        images: [
          { src: '/images/sailing1.jpg', alt: 'Sailboat' }
        ],
        documents: [],
        links: []
      }
    },
    {
      title: 'Cooking',
      description: 'I love experimenting in the kitchen, trying new recipes and culinary techniques. Cooking is another form of creativity for me.',
      icon: 'ChefHat',
      media: {
        images: [
          { src: '/images/cooking1.jpg', alt: 'Preparing a dish' },
          { src: '/images/cooking2.jpg', alt: 'Gourmet kitchen' }
        ],
        documents: [],
        links: []
      }
    }
  ]
};

export default hobbies;
