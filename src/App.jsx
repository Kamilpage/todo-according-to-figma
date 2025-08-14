import React, { useState, useMemo } from "react"
import './Main.css'
import NoteList from "./NoteList";
import AddNoteModal from "./AddNote";
import search from './assets/vector.svg'
import theme from './assets/react.svg'
function App() {
  const [tasks, setTasks] = useState(["Пример задачи"]);
  const [isOpen, setIsOpen] = useState(true)
  const [searchInput, setSearchInput] = useState('')
  const [selectSort, setSelectSort] = useState('all')
  const filteredItems = useMemo(() => {
    let items = [...tasks];
    if (!searchInput && selectSort === 'all') {
      return tasks;
    }
    if (searchInput) {
      items = tasks.filter((task) => { return task.toLowerCase().includes(searchInput.toLowerCase()) })
    }
    selectSort === 'asc' ? items.sort((a, b) => a.localeCompare(b)) : items.sort((a, b) => b.localeCompare(a))
    return items
  })
  const handleSubmit = (value) => {
    setTasks((t) => [...t, value]);
    setIsOpen(false)
  };
  const checkDublicate = (title) => {
    return filteredItems.some((el) => el.toLowerCase() === title.toLowerCase())
  }

  return (
    <>
      <div className='container'>
        <h1>TODO LIST</h1>
        <div className='form-part'>
          <input
            value={searchInput}
            onChange={(e) => { setSearchInput(e.target.value) }}
            className="search-input"
            type="text" placeholder='Search note...' />
          <img id="vector-icon" src={search} alt="Vector" />
          <select value={selectSort}
            onChange={(e) => setSelectSort(e.target.value)}>
            <option value="all">ALL</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
          <img src={theme} alt="Empty" />
        </div>
        <button className="add-btn" onClick={() => setIsOpen(true)}>Add</button>
      </div>
      <NoteList tasks={filteredItems} setTasks={setTasks} />
      <AddNoteModal onSubmit={handleSubmit} isOpen={isOpen} setIsOpen={setIsOpen} checkDublicate={checkDublicate} />
    </>
  )
}

export default App
