import React from "react";
import "./_courseVideo.scss";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";
import video from "./../../video/GONE.Fludd — TRAXXXMANIA.mp4"
const CourseVideo = () => {
  
  return (
    <div className="courseVideo">
      <div className="courseVideo__container">
        <h1 className="courseVideo__title">Парикмахер-стилист</h1>
        <h1 className="courseVideo__lesson-number">Урок 1</h1>
        <div className="courseVideo__video">
          <ShakaPlayer autoPlay src={video} />
        </div>
        <div className="courseVideo__description-block">
          <h2 className="courseVideo__description-title">
            Правильная и неправильная филировка волос
          </h2>
          <p className="courseVideo__description">
            В этом видео мы рассмотрим важный аспект ухода за волосами -
            филировку. Мы разберемся, что такое правильная и неправильная
            филировка и как они могут влиять на состояние и внешний вид
            Подробнее...
          </p>
        </div>
        <div className="courseVideo__button">
          Следующий урок
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;
