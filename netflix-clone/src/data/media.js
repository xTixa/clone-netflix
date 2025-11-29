const sampleRows = [
  {
    title: 'Filmes',
    items: [
      {
        id: 'hg',
        title: 'The Hunger Games',
        year: 2012,
        poster: "https://image.tmdb.org/t/p/w500/1yQZ6u64LSh8D0tN6fEosPV4O0D.jpg",
        synopsis:
          'Em um futuro distópico, jovens são escolhidos para competir até a morte em um reality show sangrento conhecido como Jogos Vorazes. Katniss Everdeen se oferece como tributo para salvar sua irmã e torna-se símbolo de resistência.',
        genres: ['Ação', 'Aventura', 'Drama'],
        runtime: 142,
        rating: '7.2',
        cast: [
          { name: 'Jennifer Lawrence', role: 'Katniss Everdeen', photo: 'https://picsum.photos/seed/jlaw/80/80' },
          { name: 'Josh Hutcherson', role: 'Peeta Mellark', photo: 'https://picsum.photos/seed/jhutch/80/80' },
          { name: 'Liam Hemsworth', role: 'Gale Hawthorne', photo: 'https://picsum.photos/seed/liam/80/80' },
        ],
        trailer: null,
      },
      {
        id: 'hp1',
        title: "Harry Potter and the Sorcerer's Stone",
        year: 2001,
        poster: 'https://picsum.photos/seed/harrypotter/400/600',
        synopsis:
          'Um menino órfão descobre que é um bruxo e é convidado para frequentar a Escola de Magia de Hogwarts, onde faz amigos e enfrenta perigos enquanto descobre seu passado.',
        genres: ['Aventura', 'Família', 'Fantasia'],
        runtime: 152,
        rating: '7.6',
        cast: [
          { name: 'Daniel Radcliffe', role: 'Harry Potter', photo: 'https://picsum.photos/seed/drad/80/80' },
          { name: 'Emma Watson', role: 'Hermione Granger', photo: 'https://picsum.photos/seed/ewatson/80/80' },
          { name: 'Rupert Grint', role: 'Ron Weasley', photo: 'https://picsum.photos/seed/rgrint/80/80' },
        ],
        trailer: null,
      },
      {
        id: 'scream',
        title: 'Scream',
        year: 1996,
        poster: 'https://picsum.photos/seed/scream/400/600',
        synopsis:
          'Uma série de assassinatos numa pequena cidade faz com que uma jovem e seus amigos se tornem alvos de um misterioso assassino mascarado que se inspira em filmes de terror.',
        genres: ['Terror', 'Mistério'],
        runtime: 111,
        rating: '7.2',
        cast: [
          { name: 'Neve Campbell', role: 'Sidney Prescott', photo: 'https://picsum.photos/seed/ncampbell/80/80' },
          { name: 'Courteney Cox', role: 'Gale Weathers', photo: 'https://picsum.photos/seed/ccox/80/80' },
          { name: 'David Arquette', role: 'Dewey Riley', photo: 'https://picsum.photos/seed/darquette/80/80' },
        ],
        trailer: null,
      },
    ],
  },
  {
    title: 'Séries',
    items: [
      {
        id: 'ginny-georgia',
        title: 'Ginny & Georgia',
        year: 2021,
        poster: 'https://picsum.photos/seed/ginny/400/600',
        synopsis:
          'Uma mãe carismática e sua filha adolescente mudam-se para uma nova cidade, onde a filha precisa lidar com as complexidades do ensino médio enquanto segredos do passado da mãe vêm à tona.',
        genres: ['Drama', 'Comédia'],
        runtime: 50,
        rating: '7.4',
        cast: [
          { name: 'Antonia Gentry', role: 'Ginny Miller', photo: 'https://picsum.photos/seed/agentry/80/80' },
          { name: 'Brianne Howey', role: 'Georgia Miller', photo: 'https://picsum.photos/seed/bhowey/80/80' },
        ],
        trailer: null,
      },
      {
        id: 'dexter',
        title: 'Dexter',
        year: 2006,
        poster: 'https://picsum.photos/seed/dexter/400/600',
        synopsis:
          'Dexter Morgan, um analista forense especialista em padrões de sangue, leva uma vida dupla como um vigilante serial killer que persegue criminosos que escaparam da justiça.',
        genres: ['Crime', 'Drama', 'Thriller'],
        runtime: 55,
        rating: '8.6',
        cast: [
          { name: 'Michael C. Hall', role: 'Dexter Morgan', photo: 'https://picsum.photos/seed/mhall/80/80' },
          { name: 'Jennifer Carpenter', role: 'Debra Morgan', photo: 'https://picsum.photos/seed/jcarp/80/80' },
        ],
        trailer: null,
      },
      {
        id: 'maxton-hall',
        title: 'Maxton Hall',
        year: 2023,
        poster: 'https://picsum.photos/seed/maxton/400/600',
        synopsis:
          'Na prestigiada Maxton Hall, alunos lidam com privilégios, rivalidades e segredos sombrios que ameaçam a reputação da escola e a segurança dos estudantes.',
        genres: ['Drama', 'Mistério'],
        runtime: 42,
        rating: '6.9',
        cast: [
          { name: 'Elenco Principal', role: '', photo: 'https://picsum.photos/seed/actor1/80/80' },
        ],
        trailer: null,
      },
      {
        id: 'we-were-liars',
        title: 'We Were Liars',
        year: 2023,
        poster: 'https://picsum.photos/seed/liars/400/600',
        synopsis:
          'Uma história de família, segredos e uma tragédia que muda tudo: uma jovem retorna à ilha da família e precisa confrontar memórias fragmentadas enquanto descobre a verdade.',
        genres: ['Drama', 'Mistério'],
        runtime: 45,
        rating: '7.0',
        cast: [
          { name: 'Elenco Principal', role: '', photo: 'https://picsum.photos/seed/actor2/80/80' },
        ],
        trailer: null,
      },
    ],
  },
]

export default sampleRows
