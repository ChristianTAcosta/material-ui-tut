import { Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { NoteCard } from "../components/NoteCard";
import Note from "../interfaces/note.interface";

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);

  const getNotes = async () => {
    const res = await fetch("http://localhost:8000/notes");
    const resObj: Note[] = await res.json();
    setNotes(resObj);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const handleDelete = async (id: number) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note: Note) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
