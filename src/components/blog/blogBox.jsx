import React from "react";

import "./blogBox.scss";

const blog = (props) => (
    <div className="blog__box">
      <div className="blog__image">
        <img src={props.article.image} alt="blog story" />
        <div className="blog__hover flex-center">
          <h4 className="font30 weight800">READ MORE</h4>
        </div>
      </div>
      <div className="blog__info">
        <h4 className="font15 weight800">{props.article.title}</h4>
        <p className="font12 weight500 padding10">{props.article.description}</p>
        <p className="font12 weight500">{props.article.date}</p>
      </div>
    </div>
  );

export default blog;
