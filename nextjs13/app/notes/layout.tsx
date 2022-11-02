/* eslint-disable @next/next/no-head-element */

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Notes</h1>
      {children}
    </>
  );
}
