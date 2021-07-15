import { Card, CardContent, CardHeader, IconButton, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import React from "react";
export const NoteCard = ({ note,handleDelete }:any) => {



  return <div>
   <Card>
     <CardHeader
     action={<IconButton onClick={(e)=>{handleDelete(note.id)}}><DeleteOutlined/></IconButton>}
      title={note.title}
      subheader={note.category}
     />
     <CardContent>
       <Typography variant="body2" color="textSecondary">
         {note.details}
       </Typography>
     </CardContent>
    
     </Card> 
    </div>;
};
