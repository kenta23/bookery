import Script from 'next/script';
import BookPreview from './bookPreview';
import { BASE_URL } from '@/lib/utils';
import { getBookById } from '@/lib/data';



export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
   
    const data = await getBookById(slug);
     
  return (
    <div className='min-h-screen  w-full'>
        <BookPreview data={data}/>    
    </div>
  )
}
