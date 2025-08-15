import React, { useState, useMemo, useEffect } from "react"
import './Main.css'
import NoteList from "./NoteList";
import AddNoteModal from "./AddNote";
import search from './assets/vector.svg'
import theme from './assets/react.svg'
import plusIcon from './assets/plus.svg'
function App() {
  const [tasks, setTasks] = useState(["Пример задачи"]);
  const [isOpen, setIsOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [selectSort, setSelectSort] = useState('all')
  const [rightAngle, setRightAngle] = useState(0)
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
  function setRightCord() {
    let result = 0
    const width = window.document.body.clientWidth;
    const [container] = document.getElementsByClassName('container');
    if (container) {
      const containerWidth = container.offsetWidth;
      const offset = width - containerWidth
      result = Math.floor(offset / 2).toFixed(2);
    }
    setRightAngle(result);
  }
  useEffect(() => {
    setRightCord()
    window.addEventListener('resize', setRightCord);
    return () => { window.removeEventListener('resize', setRightCord) }
  }, [])
  return (
    <>
      <div className='container'>
        <h1 className="text-center">TODO LIST</h1>
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
        <button className="add-btn" style={{ position: 'fixed', bottom: '32px', right: rightAngle + 'px' }} onClick={() => setIsOpen(true)}><img src={plusIcon} alt="plusIcon" /></button>
      </div>
      <NoteList tasks={filteredItems} setTasks={setTasks} />
      <AddNoteModal onSubmit={handleSubmit} isOpen={isOpen} setIsOpen={setIsOpen} checkDublicate={checkDublicate} />
    </>
  )
}

export default App
