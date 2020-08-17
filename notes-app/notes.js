const fs = require('fs')
const chalk = require('chalk')

// const getNotes = () => {
//     return 'Your notes...'
// }

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title ) 
    const duplicateNote = notes.find((note) => note.title === title)


    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}


const removeNote = (title) => {
   const notes = loadNotes()
   const notesToKeep = notes.filter((note) => note.title !== title)

   if(notes.length > notesToKeep.length){
    console.log(chalk.green.inverse('Note Removed!'))
    saveNotes(notesToKeep)
   }else {
       console.log(chalk.red.inverse('No note found..sorry try again'))
   }
}



const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const readNote = (title) => {
const notes = loadNotes()
const note = notes.find((note) => note.title === title)

if(note){
    console.log(chalk.inverse(note.title))
    console.log(note.body)
}else {
    console.log(chalk.red.inverse('Note not found'))
}

}

const listNotes = () => {
  console.log(chalk.inverse('Your notes'))
  const notes = loadNotes()
  notes.forEach((note) =>{
      console.log(chalk.red.inverse(note.title))
  })
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}