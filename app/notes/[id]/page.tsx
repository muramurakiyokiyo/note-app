import Link from "next/link"
import Note from "./Note"

export default async function Page(){
    return (
        <main className="mx-2 sm:mx-4">
            <Link href="/notes">
                ←Back
            </Link>
            <h2 className="my-4 text-gray-400 text-xs" >View Note</h2>
            <Note/>
        </main>
    )
};