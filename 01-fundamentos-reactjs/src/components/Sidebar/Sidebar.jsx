import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1617452171749-fd6b723554bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className={styles.cover} />

            <div className={styles.profile}>
                <img 
                    src="https://avatars.githubusercontent.com/u/47431145?v=4" 
                    className={styles.avatar}
                    />


                <strong>Matheus Martins</strong>
                <span>Web Developer Jr.</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}