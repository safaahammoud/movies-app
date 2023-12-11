import Image from 'next/image';

import { MovieComponentProps } from '@/types/movie';

export default function Movie({movie, id}: MovieComponentProps) {
    return (
        <div
            key={id}
            className='movie'
        >
            <Image
                alt='movie image'
                width={400}
                height={400}
                src={movie.Poster === 'N/A' ? 'https://placehold.co/400x400@2x.png' : movie.Poster}
            />

            <h1>{movie.Type}</h1>
            
            <h2>{movie.Title}</h2>
        </div>
    )
}