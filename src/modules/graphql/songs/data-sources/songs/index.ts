import { InMemoryDataSource } from '@container/data-sources/in-memory';
import { Song } from '@container/schema';

const songs: Song[] = [
    {
        artist: 'September 87',
        name: 'Bad Dream Baby',
        listens: 145202,
        isLiked: true,
        cover: 'https://i.vimeocdn.com/video/526078435_1280x720.jpg',
        description: 'This song is by September 87 and features Dream Fiend.',
        tags: [
            {
                isImportant: true,
                value: 'New Synth Wave',
            },
            {
                isImportant: true,
                value: '🔥Popular',
            },
            {
                value: 'Electronic',
            },
            {
                value: 'Retro',
            },
            {
                value: 'Outrun',
            },
        ],
        comments: [
            {
                user: {
                    name: 'John Wick',
                    avatar:
                        'https://cdnb.artstation.com/p/assets/images/images/013/127/649/large/michael-papatsounis-johnwickfinal.jpg?1538170551',
                },
                text: 'This song is worth killing for',
            },
        ],
    },
    {
        name: 'Running in the night',
        artist: 'FM-84',
        listens: 32000,
        isLiked: false,
        cover: 'https://i.redd.it/xvyfcvt7fvwz.jpg',
        description: 'This song is by September 87 and features Dream Fiend.',
        tags: [
            {
                isImportant: true,
                value: 'New Synth Wave',
            },
            {
                isImportant: true,
                value: '🔥 Popular',
            },
            {
                value: 'Electronic',
            },
            {
                value: 'Retro',
            },
            {
                value: 'Outrun',
            },
        ],
    },
    {
        name: 'Kickstart my heart',
        artist: 'Mötley Crüe',
        listens: 1030002,
        isLiked: true,
        cover: 'https://townsquare.media/site/295/files/2019/02/MCscr.jpg?w=980&q=75',
        description: 'This song is by September 87 and features Dream Fiend.',
        tags: [
            {
                value: 'Glam metal',
            },
            {
                isImportant: true,
                value: '🔥 Popular',
            },
            {
                value: 'Heavy metal',
            },
            {
                value: 'Hard Rock',
            },
        ],
    },
    {
        name: 'Dark side of the moon',
        artist: 'Pink Floyd',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/81aTawcGdmL._SL1500_.jpg',
        listens: 8398893,
        isLiked: false,
        description: 'Placeholder',
        tags: [
            {
                value: 'Progressive rock',
                isImportant: true,
            },
            {
                value: 'Rock',
            },
        ],
    },
    {
        name: 'Mind of a Beast',
        artist: 'The Glitch Mob',
        cover: 'https://consequenceofsound.net/wp-content/uploads/2014/01/91vaxjhtjjl-_sl1500_.jpg?quality=80&w=807',
        listens: 490000,
        isLiked: true,
        description: 'Placeholder',
        tags: [
            {
                value: 'Glitch',
                isImportant: true,
            },
            {
                value: 'Electronic rock',
            },
            {
                value: 'Dubstep',
            },
            {
                value: 'EDM',
            },
        ],
    },
];

export class SongsDataSource extends InMemoryDataSource {
    getAll() {
        return songs;
    }
}
