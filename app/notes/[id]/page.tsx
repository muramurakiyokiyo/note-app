import Link from "next/link"
import Note from "./Note"
import { getNoteDetail, getNotesList } from "@/lib/client"

export async function generateStaticParams() {
    const {contents} = await getNotesList();
  
    return contents.map((note) => ({
    //id:=フォルダ名[id]に合わせる
      id: note.id,
    }))
}

export default async function Page( {params}: {params: {id: string}}){
    const noteDetail = await getNoteDetail(params.id);

    return (
        <main className="mx-2 sm:mx-4">
            <Link href="/notes">
                ←Back
            </Link>
            <h2 className="my-4 text-gray-400 text-xs" >View Note</h2>
            <Note note={noteDetail}/>
        </main>
    )
};