import React from 'react'
import Pocketbase from 'pocketbase';

async function getNote(noteId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, 
    {
        next: { revalidate: 10 },
    });
    const data = await res.json();
    return data;
}

export default async function NotePage({ params }: any) {
    const note = await getNote(params.id);

  return (
    <div>
      <h1>notes/{note.id}</h1>
        <p>{note.title}</p>
        <p>{note.content}</p>
        <p>{note.created}</p>
    </div>
  )
}
