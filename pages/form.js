import Forms from '../components/Forms';
import Layout from '../components/Layout';
import { fetcher } from '../lib/api';
import useSWR from 'swr';
import { useState } from 'react';
import { useFetchUser } from '../lib/authContext';
import Films from '../components/Films';

const FormsList = ({ forms }) => {
  const { user, loading } = useFetchUser();
  const [pageIndex, setPageIndex] = useState(1);
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/forms`,
    fetcher,
    {
      fallbackData: forms,
    }
  );
  return (
    <Layout user={user}>
      <Forms forms={data} />
      <Films />
      <div className='space-x-2 space-y-2'>
        <span>{`${pageIndex} of ${
          data && data.meta.pagination.pageCount
        }`}</span>
      </div>
    </Layout>
  );
};

export default FormsList;

export async function getStaticProps() {
  const formsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/forms?pagination[page]=1&pagination[pageSize]=5`
  );
  return {
    props: {
      forms: formsResponse,
    },
  };
}
