import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faOutdent, faList, faCircleInfo, faEllipsis, faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons'

import styles from './NoteArea.module.css'

// for the markup part
{/* <FontAwesomeIcon icon={faEye} className={styles.noteAreaIcon}/>
<FontAwesomeIcon icon={faEyeSlash} className={styles.noteAreaIcon}/> */}

function NoteArea() {
    return (
        <div className={styles.noteArea}>

            <div className={styles.noteAreaHeader}>
                <div>
                    <FontAwesomeIcon icon={faOutdent} className={styles.noteAreaIcon}/>
                </div>

                <div className={styles.noteAreaHeaderRight}>
                    <FontAwesomeIcon icon={faList} className={styles.noteAreaIcon}/>
                    <FontAwesomeIcon icon={faCircleInfo} className={styles.noteAreaIcon}/>
                    <FontAwesomeIcon icon={faEllipsis} className={styles.noteAreaIcon}/>
                </div>   
            </div>

            <div className={styles.noteContentArea}>
                <textarea className={styles.noteWritingArea}/>
                <input type="text" 
                       placeholder="Add tag..."
                       className={styles.noteTagArea}/>
            </div>

            <div className={styles.notePreviewArea}>
                <h3 className={styles.notePreviewTitle}>TITLE</h3>
                <div className={styles.notePreviewContent}>
                    note preview
                </div>
            </div>

        </div>
    )
}

export default NoteArea;