import ParentComponent from './ParentComponent'
import Person from './Person.jsx'
import './App.css'
import Books from './Books.jsx'
function App() {
  return (

    <div >
      <Books name="GooseBumps" author="R.L Stein" year="2016"></Books>
      <Books name="Good Vibes" author="abc" year="2020"></Books>
      <Books name="Metamorphosis" author="Franz Kafka" year="1987"></Books>
    </div>
  )
}

export default App;