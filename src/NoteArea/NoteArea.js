import ReactMarkdown from 'react-markdown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faOutdent, faList, faCircleInfo, faEllipsis, faSadTear} from '@fortawesome/free-solid-svg-icons'

import styles from './NoteArea.module.css'

// for the markup part
{/* <FontAwesomeIcon icon={faEye} className={styles.noteAreaIcon}/>
<FontAwesomeIcon icon={faEyeSlash} className={styles.noteAreaIcon}/> */}

function NoteArea({ activeNote, onUpdateNote }) {


    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now()
        })
    }

    if (!activeNote) return (
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


            <div className={styles.noNoteSelected}>
                <h2>No note selected</h2>
                <FontAwesomeIcon icon={faSadTear} className={styles.noteAreaCryingIcon}/>
            </div>
        </div>
    )


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
                <input 
                    type="text" 
                    placeholder="Add title..."
                    className={styles.noteWritingTitleArea}
                    value={activeNote.title}
                    onChange={(e) => onEditField("title", e.target.value)}
                    />

                <textarea 
                    className={styles.noteWritingContentArea}
                    placeholder="Write your note..."
                    value={activeNote.content}
                    onChange={(e) => onEditField("content", e.target.value)}
                    />

                <input 
                    type="text" 
                    placeholder="Add tag..."
                    className={styles.noteTagArea}/>
            </div>

            <div className={styles.notePreviewArea}>
                <h3 className={styles.notePreviewTitle}>
                    {activeNote.title}
                </h3>
                <ReactMarkdown className={styles.notePreviewContent}>
                    {activeNote.content}
                </ReactMarkdown>
            </div>

        </div>
    )
}

export default NoteArea;