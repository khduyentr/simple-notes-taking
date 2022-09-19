import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'


import { faNoteSticky, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './Sidebar.module.css'


function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <FontAwesomeIcon icon={faBars} className={styles.sidebarIcon}/>
                <p className={styles.sidebarTitle}>All Notes</p>
                <FontAwesomeIcon icon={faNoteSticky} className={styles.sidebarIcon}/>
            </div>

            <div className={styles.sidebarSearchArea}>
                <FontAwesomeIcon icon={faSearch} className={styles.sidebarSearchIcon}/>
                <input className={styles.sidebarSearchInput}
                    placeholder="Search all notes and tags"/>
            </div>


            <div className="sidebar__notes">

                <ul className={styles.listNotes}>
                    <li className={clsx(styles.sidebarNote)}> 
                        <div className={styles.sidebarNoteTitle}>
                            <strong>Note</strong>
                        </div>

                        <p className={styles.sidebarNotePreview}>Note preview</p>
                        
                        <small className={styles.sidebarNoteModified}>
                            Last modified [date]
                        </small>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar;