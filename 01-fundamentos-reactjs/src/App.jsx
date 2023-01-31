import { Header } from "./components/Header/Header"
import { Post } from "./Post"
import './global.css'

export function App() {
  return (
    <div>
        <Header />
      
        <Post 
          author="Matheus Adriano Martins"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nihil dignissimos! Hic libero perferendis rem tempora asperiores vero odit."
        />

        <Post 
          author="Cristiana Mariano Elias"
          content="Um novo post legal"
        />
    </div>

  )
}