import React from "react";

const Note = ()=>{
    return(
        <div className="Flex flex-col bg-gray-100 rounded-lg p-5 gap-2.5">
            <h3 className="text-pink-500">ノートタイトル</h3>
            <span>ノート詳細</span>
        </div>
    );
 };

export default Note;