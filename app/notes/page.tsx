import Link from "next/link";
import PocketBase from 'pocketbase'
import CreateNote from "./CreateNote";

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

async function getNotes() {
    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.records.getList('notes');
    // const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
    // const data = await res.json();
    return data?.items as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();
    return (
        <div>
        <h1>Notes Page</h1>
        <ul style={{ display: 'flex' }}>
            {notes.map((note) => (
            <li key={note.id}>
                <Link href={`/notes/${note.id}`}>
                <a>{note.title}</a>
                <p>{note.content}</p>
                <p>{note.created}</p>
                </Link>
            </li>
            ))}
        </ul>
        <CreateNote />
        </div>
    );
    }
