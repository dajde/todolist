import React,{useState} from "react"

export default function Edit(props){
    const id = props.member.id
    const [changed,setChanged] = useState(props.member.txt)
    return(
    <form key={props.member.id}
    onSubmit={(event) =>{
        event.preventDefault()
        props.onSubmit({id,changed})
    }
}
    >
        <input
        className = "editInput"
        autoFocus={true}
        placeholder="Edit your note"
        value={changed}
        onChange={(e) => setChanged(e.target.value)}
        >
        </input>
    </form>
    


    )
}