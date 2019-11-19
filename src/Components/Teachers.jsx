import React from "react";
import Subtitle from "./Subtitle";
import Teacher from "./Teacher";
import "../styles/Teachers.css";

export default function Teachers(props) {
  const { images, text } = props;
  const imageWidth = Math.floor(
    window.innerWidth > window.innerHeight
      ? Math.floor((window.innerWidth * 15) / 100)
      : Math.floor((window.innerHeight * 15) / 100)
  );
  const getLink = name => {
    let teacherPublicId = images.filter(
      image => image.context.custom.caption === name
    )[0].public_id;
    return `${process.env.REACT_APP_IMAGE_BASE_URL}/w_${imageWidth},dpr_2.0/${teacherPublicId}.jpg`;
  };

  const compare = (a, b) => {
    if (a.fields.order > b.fields.order) return 1;
    if (a.fields.order < b.fields.order) return -1;
    return 0;
  };
  text.sort(compare);

  return (
    <>
      <Subtitle text={"DIAMOND WAY TEACHERS"} />
      <div className="teachers">
        {text.map((teacher, index) => (
          <Teacher
            key={index}
            name={teacher.fields.name}
            description={teacher.fields.description}
            image={getLink(teacher.fields.name)}
            homepage={teacher.fields.homepage}
            link={teacher.fields.link}
          />
        ))}
      </div>
    </>
  );
}
