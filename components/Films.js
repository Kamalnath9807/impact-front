import Link from 'next/link';
import forms from './Forms';

const Films = ({ films }) => {
  return (
    <>
      <ul className='list-none space-y-4 text-4xl font-bold mb-3'>
        {films &&
          films.data.map((film) => {
            return (
              <li key={film.id}>
                <Link href={`film/`}>
                  <Link href={`form`}>
                    {' '}
                    {film.attributes.title}
                    {film.attributes.director}
                  </Link>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Films;
