import ShowNote from './ShowNote.js'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import "./App.css"
export default function App(){
    const [list,setList] = useState([])
    const [note,setNote] = useState("")

    const handleAdd = (event) =>{
        event.preventDefault()
        const newList = list.concat({
            id: uuidv4(),
            txt: note,
            status: false,
            done: false
        })
        setList(newList)
        setNote("")
    }
    //onRemove - odstrani bod zo zoznamu
    const handleRemove = (props) => {
        const newList = list.filter((item) => item.id !== props)
        setList(newList)
    }
    //onEdit - zmeni status na true, aby sa zmenil element na input field
    const handleEdit = (props) => {
        let change = list.find((item) => item.id === props)
        let newList = list.map((item) => item)
        let index = list.indexOf(change)

        change = {...change, status : true}
        newList[index] = change
        setList(newList)
    }
    //onSubmit - zmeni text a nastavi flag meneneho objektu na false
    const handleChange = (props) => {
        let change = list.find((item) => item.id === props.id)
        let newList = list.map((item) => item)
        let index = list.indexOf(change)
        change = {...change, status : false,txt: props.changed}
        newList[index] = change
        setList(newList)

    }
    //onDone - zmeni flag kvoli farbe oznaceneho bodu v zozname
    const handleDone = (props) => {
        let change = list.find((item) => item.id === props)
        let newList = list.map((item) => item)
        let index = list.indexOf(change)
        change = {...change,done:!change.done}
        newList[index] = change
        setList(newList)
    }

    return (
        <>    
        <div className = "maindiv">
            <h1 className = "title">
                TODO LIST
            </h1>
            <form onSubmit = {handleAdd}>
                <input
                className = "mainInput"
                placeholder = "Enter your note"
                onChange = {(e) => setNote(e.target.value)}
                value = {note}
                />
            </form>
            <ShowNote 
            list = {list} 
            onRemove = {handleRemove}
            onEdit = {handleEdit}
            onSubmit = {handleChange}
            onDone = {handleDone}
            />
        </div>
        </>
    )
}

