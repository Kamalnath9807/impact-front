import Link from 'next/link';

const Forms = ({ forms }) => {
  return (
    <>
      <ul className='list-none space-y-4 text-4xl font-bold mb-3'>
        {forms &&
          forms.data.map((form) => {
            return (
              <li key={form.id}>
                <Link href={`form/` + form.attributes.slug}>
                  {form.attributes.formcontent}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Forms;
