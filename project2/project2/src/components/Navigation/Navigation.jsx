import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={`container ${styles.navigation}`}>
        <div style={{marginLeft:"40px"}}>
            <img src="/images/Frame.png" alt="" />
        </div>

        <ul>
            <li style={{cursor:"pointer"}}>Home</li>
            <li style={{cursor:"pointer"}}>About</li>
            <li style={{cursor:"pointer"}}>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation
