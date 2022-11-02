import Link from "next/link";

export interface PbCollectionResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Items[];
}

export interface Items {
  "@collectionId": string;
  "@collectionName": string;
  content: string;
  created: Date;
  id: string;
  title: string;
  updated: Date;
}


async function getNotes(): Promise<PbCollectionResponse> {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default async function NotesPage() {
  const notes = await getNotes();


  return (
    <div>
      {notes?.items.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  )
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  )
}
