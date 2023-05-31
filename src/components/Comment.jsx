import styles from "./comment.module.css";
import { Trash } from "@phosphor-icons/react";
import { ThumbsUp } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ id, content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleDeleteComment = () => {
    onDeleteComment(id);
  };

  const handleLikeComment = () => {
    if (!liked) {
      setLikeCount((state) => {
        return state + 1;
      });
      setLiked(true);
    } else {
      setLikeCount((state) => {
        return state - 1;
      });
      setLiked(false);
    }
  };

  const likeIcon = liked ? <ThumbsUp color="#00b37e" /> : <ThumbsUp />;
  const likeText = liked ? "Remover Like" : "Like";

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://media.licdn.com/dms/image/D4D03AQECIbv9C8O4BQ/profile-displayphoto-shrink_200_200/0/1684936000531?e=1690416000&v=beta&t=2MAm6-6AcUALRkb19dCcLJJ4bshVdaqPlWOPEiWyiiA"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Paulo Bruno</strong>
              <time title="11 de Maio às 11:13" dateTime="2023-05-23 09:00:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            {likeIcon}
            {likeText}
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
