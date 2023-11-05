import { Note } from "@/app/notes/type";
import {MicroCMSQueries, createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
    apiKey: process.env.NEXT_PUBLIC_API_KEY || "",    
});

export const getNotesList = async ()=>{
    const notes = await client.getList<Note>({
        endpoint: "note_app",
    });
    return notes;
};

export const getNoteDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
)=>{
    const detail = await client.getListDetail<Note>({
        endpoint: "note_app",
        contentId,
        queries,
    });
    return detail;
};
