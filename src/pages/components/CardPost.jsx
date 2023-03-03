import React from "react";
import { Card } from "react-bootstrap";

const CardPost = ({ post }) => {
  return (
    <Card>
      <Card.Header className="fs-4 text-primary text-opacity-75">{post.title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{post.body}</p>
          <footer className="border-top my-3 pt-2 text-end">
            {post.tags.map((tag) => (
              <span className="mx-2" key={tag}>
                {tag}
              </span>
            ))}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default CardPost;
