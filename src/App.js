import { useState, useEffect } from 'react'
import data from './data/data'

function App() {
  const [myData, setMyData] = useState([])
  const [dependency, setDependency] = useState(true)

  useEffect(() => {
    setMyData(data)
  }, [dependency])

  const handleChecked = (e, data) => {
    const name = e.target.name
    if (data[name] === true) {
      data[name] = false
      setDependency(false)
    } else if (data[name] === false) {
      data[name] = true
      setDependency(true)
    }
  }

  return (
    <div className="App">
      <table>
        <tr>
          <th>Module Name</th>
          <th>Activity Name</th>
          <th>Create</th>
          <th>View</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {myData.map((dta) => (
          <>
            <tr>
              <td>{dta.moduleName}</td>
              <td>{dta.activityName}</td>
              <td>
                <input
                  name="isCreate"
                  checked={dta.isCreate}
                  onClick={(e) => handleChecked(e, dta)}
                  type="checkbox"
                />
              </td>
              <td>
                <input
                  name="isView"
                  onClick={(e) => handleChecked(e, dta)}
                  checked={dta.isView}
                  type="checkbox"
                />
              </td>
              <td>
                <input
                  name="isEdit"
                  onClick={(e) => handleChecked(e, dta)}
                  checked={dta.isEdit}
                  type="checkbox"
                />
              </td>
              <td>
                <input
                  name="isDelete"
                  onClick={(e) => handleChecked(e, dta)}
                  checked={dta.isDelete}
                  type="checkbox"
                />
              </td>
            </tr>
          </>
        ))}
      </table>
    </div>
  )
}

export default App
