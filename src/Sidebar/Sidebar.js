import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'


import { faNoteSticky, faBars, faSearch, faTrash} from '@fortawesome/free-solid-svg-icons'
import styles from './Sidebar.module.css'

const timeFormat = {
    hour: "2-digit",
    minute: "2-digit"
}

function Sidebar({ notes, onCreateNote, onDeleteNote }) {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <FontAwesomeIcon 
                    icon={faBars} 
                    className={styles.sidebarIcon}/>

                <p className={styles.sidebarTitle}>All Notes</p>

                <FontAwesomeIcon 
                    icon={faNoteSticky} 
                    className={styles.sidebarIcon}
                    onClick={onCreateNote}/>
            </div>

            <div className={styles.sidebarSearchArea}>
                <FontAwesomeIcon icon={faSearch} className={styles.sidebarSearchIcon}/>
                <input className={styles.sidebarSearchInput}
                    placeholder="Search all notes and tags"/>
            </div>


            <div className={styles.sidebarNotes}>
                <ul className={styles.listNotes}>

                    {notes.map((note) => (
                        <li className={clsx(styles.sidebarNote)}> 
                            <div className={styles.sidebarNoteTitle}>
                                <strong>{note.title}</strong>

                                <FontAwesomeIcon 
                                    icon={faTrash} 
                                    className={styles.sidebarTrashIcon}
                                    onClick={() => onDeleteNote(note.id)}/>
                            </div>
    
                            <p className={styles.sidebarNotePreview}>
                                {note.content && note.content.substring(0, 100) + "..."}
                            </p>
                            
                            <small className={styles.sidebarNoteModified}>
                                Last modified {new Date(note.lastModified).toLocaleDateString("en-GB", timeFormat)}
                            </small>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Sidebar;