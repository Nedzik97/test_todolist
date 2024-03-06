import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTaskTitle } from '../../store/tasks/tasksSlice'

import styles from './update-form.module.scss'

type UpdateFormProps = {
  id: string
  setIsEditTask: (isEditTask: boolean) => void
}

export const UpdateForm = ({ id, setIsEditTask}: UpdateFormProps): JSX.Element => {
  const [updateForm, setUpdateForm] = useState('')
  const dispatch = useDispatch()

  const updateTask = (id: string, updateForm: string): void => {
    dispatch(editTaskTitle({ id, newTitle: updateForm }))
    setUpdateForm('')
    setIsEditTask(false)
  }

  return (
    <div className={styles.updateFormWrapper}>
      <div className={styles.editInputWrapper}>
        <input
          value={updateForm}
          onChange={(e): void => setUpdateForm(e.target.value)}
          className={styles.editInput}
        />
      </div>
      <div className={styles.editButtonWrapper}>
        <button onClick={(): void => updateTask(id, updateForm)} className={styles.buttonUpdateTask}>
          Update
        </button>
        <button onClick={(): void => setIsEditTask(false)} className={styles.buttonUndoEdit}>
          Cancel
        </button>
      </div>
      <br />
    </div>
  )
}

