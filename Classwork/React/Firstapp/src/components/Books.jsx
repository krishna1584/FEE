const Books=(props) =>{
    return <>
    <div className="Box">
        <div>
        <h1>Books</h1>
        <p>Name: {props.name}</p>
        <p>Author: {props.author}</p>
        <p>Published: {props.year}</p>
        </div>
        
    </div>
    </>
}
export default Books;