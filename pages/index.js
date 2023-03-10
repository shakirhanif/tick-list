import Head from "next/head";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import CreateArea from "../components/CreateArea";
import Note from "../components/Note";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    setNotes((prev_notes) => [...prev_notes, note]);
  };
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Head>
        <title>Sticky</title>
        <meta
          name="Sticky"
          content="This is stciky notes app, keep track of your routine tasks"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Header />
        <CreateArea onAdd={addNote} />
        <div className=" px-20">
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}
