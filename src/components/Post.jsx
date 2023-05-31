import { format, formatDistanceToNow } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import ptBr from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([{ id: uuidv4(), content: "" }]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBr }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCreateNewComment(e) {
    e.preventDefault();
    const newComment = { id: uuidv4(), content: newCommentText };
    setComments([...comments, newComment]);
    setNewCommentText("");
  }

  const handleNewCommentChange = (e) => {
    e.target.setCustomValidity("");
    setNewCommentText(e.target.value);
  };

  const handleNewCommentInvalid = (e) => {
    e.target.setCustomValidity("Esse campo é obrigatório");
  };

  const deleteComment = (commentIdToDelete) => {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment.id !== commentIdToDelete
    );
    setComments(commentsWithoutDeletedOne);
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header className={styles.headerPost}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={uuidv4()}> {line.content}</p>;
          } else if (line.type === "Link") {
            return (
              <p key={uuidv4()}>
                <a href={line.content}>{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedbeck</strong>

        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        ></textarea>

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <div className={styles.commentList}>
          {comments.map(
            (comment) =>
              comment.content && (
                <Comment
                  key={comment.id}
                  id={comment.id}
                  content={comment.content}
                  onDeleteComment={deleteComment}
                />
              )
          )}
        </div>
      </div>
    </article>
  );
}
