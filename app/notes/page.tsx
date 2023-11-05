import { getNotesList } from '@/lib/client';
import Link from 'next/link' //コレがないとエラー。動画では不要

export default aync function Page(){

    const notelist = await getNotesList();
    console.log(notelist.contents);

    return (
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-y-10 mt-10'>
            <NoteItem/>
            <NoteItem/>
            <NoteItem/>
        </div>
    );
}

const NoteItem = ()=>{
    return(
        <div className="bg-gray-100 rounded-lg p-5">
            <Link href={`/notes/1`}>
                <h3 className='text-purple-500 hover:text-purple-700 text-lg md:text-x1 font-semibold mb-3 underline'>初めてのノートです</h3>
                ここに内容詳細
            </Link>
        </div>
    );
};