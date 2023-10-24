import React from "react";

const CourseProgressList = ({ object }) => {
  return (
    <li className="courseProgress__lessons-list-element">
      <p className="courseProgress__lessons-list-element-text">
        {object.name}
      </p>
      <a
        href={`/lesson/${object.id}`}
        className="courseProgress__lessons-list-element-link"
      >
        Пройти заново
      </a>
    </li>
  );
};

export default CourseProgressList;
