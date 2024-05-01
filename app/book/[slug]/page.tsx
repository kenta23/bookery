import Script from 'next/script';
import BookPreview from './bookPreview';

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;

    console.log(slug);
     
  return (
    <div className='min-h-screen w-full'>
        <p>{slug}</p>
        <BookPreview />


       
    </div>
  )
}
