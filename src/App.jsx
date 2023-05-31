import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { v4 as uuidv4 } from "uuid";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: uuidv4(),
    author: {
      avatarUrl:
        "https://media.licdn.com/dms/image/D4D03AQECIbv9C8O4BQ/profile-displayphoto-shrink_200_200/0/1684936000531?e=1690416000&v=beta&t=2MAm6-6AcUALRkb19dCcLJJ4bshVdaqPlWOPEiWyiiA",
      name: "Paulo Bruno",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu GitHub. É um projeto que fiz no Ignite, curso da Rocketseat. O nome do projeto é Ignite Feed 🚀",
      },
      { type: "Link", content: "https://github.com/paulobrun0/Ignite-Feed" },
    ],
    publishedAt: new Date("2023-05-26 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
