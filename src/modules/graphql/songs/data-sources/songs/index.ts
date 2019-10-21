import { InMemoryDataSource } from '@container/data-sources/in-memory';
import { Comment, CommentInput, Song, Toggle } from '@container/schema';

export class SongsDataSource extends InMemoryDataSource {
    private async getById(songId: string) {
        return songs[songs.findIndex((song) => song.id === songId)];
    }

    async getAll() {
        return songs;
    }

    async getComments(songId: string) {
        return comments[songId];
    }

    async searchByName(name: string) {
        return songs.filter((song) => song.name.includes(name));
    }

    async exist(songId: string) {
        return Boolean(songs.find((song) => song.id === songId));
    }

    async setLike(songId: string, like: Toggle) {
        const song = await this.getById(songId);
        song.isLiked = like === Toggle.ADD;
        return song;
    }

    async addComment(songId: string, comment: CommentInput) {
        if (!comments[songId]) comments[songId] = [];
        comments[songId].push(comment);
        return this.getById(songId);
    }

    async addListener(songId: string) {
        const song = await this.getById(songId);
        song.listens++;
        return song;
    }
}

const songs: Song[] = [
    {
        id: '5da741d986a655b5276c4eee',
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
        id: '5da741e8da9940fbbececa07',
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
        id: '5da741f42bbddc592040d335',
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
        id: '5da74205276ebdae0497fed8',
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
        id: '5da742155e2387a8c1c408d8',
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

const comments: Record<string, Comment[]> = {
    '5da741d986a655b5276c4eee': [
        {
            user: {
                name: 'John Wick',
                avatar:
                    'https://cdnb.artstation.com/p/assets/images/images/013/127/649/large/michael-papatsounis-johnwickfinal.jpg?1538170551',
            },
            text: 'This song is worth killing for',
        },
    ],
};
