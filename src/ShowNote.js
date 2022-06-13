import React from "react"
import Edit from "./Edit.js"
export default function ShowNote(props){
    //podla statusu bodu v zozname zobrazime bud ten bod alebo policko na upravu
    const showList = props.list.map((p) =>
    p.status === false ?
    <li key={p.id}
    className = {p.done ? " done" : ""}
    >
        {p.txt}
        <button className = "remBtn"
        onClick={() => props.onRemove(p.id)}>
            X
        </button>
        <button className = "editBtn"
        onClick = {() => props.onEdit(p.id)}>
            Edit
        </button>
        <button className = "doneBtn"
        onClick = {() => props.onDone(p.id)}>
            ✓
        </button>
    </li>
    :
    <Edit onSubmit = {props.onSubmit}
    member = {p}
    key = {p.id}/>
    )

    return (
    <ul>
    {showList}
    </ul>)
}