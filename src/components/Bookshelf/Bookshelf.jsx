import { useState } from "react"

function Bookshelf(){

    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState({
        title:'',
        auther:''
    })

    function handleSubmit(event){
        event.preventDefault()
        setBooks([...books,newBook])
        setNewBook({
            title:'',
            auther:''
        })
        
    }
    
    function handleInputChange(event){
        setNewBook({...newBook,[event.target.name]:event.target.value})
    }

    return(
        <>
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="title">title: </label>
                    <input name="title" id="title" type="text" value={newBook.title} onChange={handleInputChange} /><br />                    
                    
                    <label htmlFor="auther">auther: </label>
                    <input name="auther" id="auther" type="text" value={newBook.auther} onChange={handleInputChange} /><br />
                    <button>Add Book</button>
                </form>
            </div>
            <div>
                {books.map((oneBook)=><div className="bookCard"> <h2> {oneBook.title} </h2> by: {oneBook.auther}</div>)}
            </div>
        </div>
        </>
    )
}

export default Bookshelf