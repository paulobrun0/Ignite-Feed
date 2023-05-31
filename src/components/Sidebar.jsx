import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilSimpleLine } from "@phosphor-icons/react";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        alt=""
      />
      <div className={styles.profile}>
        <Avatar
          src="https://media.licdn.com/dms/image/D4D03AQECIbv9C8O4BQ/profile-displayphoto-shrink_200_200/0/1684936000531?e=1690416000&v=beta&t=2MAm6-6AcUALRkb19dCcLJJ4bshVdaqPlWOPEiWyiiA"
          alt=""
        />
        <strong>Paulo Bruno</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
