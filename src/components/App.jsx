import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Notes';
import NotesData from './NotesData';

function App(){
    return (
        <div>
            <Header />
            
            {NotesData.map((noteData)=>{
                return (
                    <Note key={noteData.key} title={noteData.title} content={noteData.content} />
                )
            })}
            <Footer />
        </div>
    );
}
export default App;
