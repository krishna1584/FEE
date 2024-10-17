const Person = ({name,age,crush}) => {
    return (
      <div className= "person">
          <h1>Name: {name}</h1>
          <h2>Age: {age}</h2>
          <h3>Crush: {crush}</h3>
      </div>
    )
  }
  
  export default Person