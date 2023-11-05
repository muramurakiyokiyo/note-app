import { getNotesList } from '@/lib/client';
import Link from 'next/link' //コレがないとエラー。動画では不要
import { Note } from './type';
import parse from "html-react-parser";

type NoteProps = {
    note: Note;
};

export default async function Page(){

    const notelist = await getNotesList();

    return (
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-y-10 mt-10'>
            {
                notelist.contents.map((note)=>(
                    <NoteItem key={note.id} note={note} />    
                ))
            }
        </div>
    );
}

const NoteItem = ({note}: NoteProps)=>{
    return(
        <div className="bg-gray-100 rounded-lg p-5">
            <Link href={`/notes/${note.id}`}>
                <h3 className='text-purple-500 hover:text-purple-700 text-lg md:text-x1 font-semibold mb-3 underline'>{note.title}</h3>
                {parse(note.content)}
            </Link>
        </div>
    );
};