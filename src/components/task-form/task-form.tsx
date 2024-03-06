import { useState } from 'react'
import { addTask } from '../../store/tasks/tasksSlice'
import { useDispatch} from 'react-redux'

import styles from './task-form.module.scss'

export const TaskForm = (): JSX.Element => {
  const [formValue, setFormValue] = useState('')
  const dispatch = useDispatch()

  const saveCard = ( event: React.ChangeEvent<HTMLFormElement> ): void => {
    event.preventDefault()
    dispatch(addTask(formValue))
    setFormValue('')
  }

  return (
    <>
      <div className={styles.row}>
        <form className={styles.inputWrapper} onSubmit={saveCard}>
          <input
            value={formValue}
            onChange={(e): void => setFormValue(e.target.value)}
            className={styles.inputAddTask}
            required
          />
          <button className={styles.buttonCreateTask}>Add Task</button>
        </form>
      </div>
      <br />
    </>
  )
}