import { Header } from "./components/Header/Header"
import { Post } from "./Post"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar/Sidebar"

export function App() {
  return (
    <div>
        <Header />
      
        <div className={styles.wrapper}>
          <Sidebar />

          <main>
            <Post 
              author="Matheus Adriano Martins"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nihil dignissimos! Hic libero perferendis rem tempora asperiores vero odit."
            />

            <Post 
              author="Cristiana Mariano Elias"
              content="Um novo post legal"
            />
          </main>
        </div>
    </div>

  )
}