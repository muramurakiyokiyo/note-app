import {createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
    apiKey: process.env.NEXT_PUBLIC_API_KEY || "",    
});

export const getNotesList = async ()=>{
    const notes = await client.getList({
        endpoint: "note_app",
    });
    return notes;
}
