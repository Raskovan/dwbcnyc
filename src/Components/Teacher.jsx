import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Teachers.css'

function Teacher(props) {
  const { image, name, link, description, homepage } = props
  return (
    <div className="teacher">
      <div className="teacher_image_container">
        <img
          src={image}
          width="100%"
          alt={name}
          style={{ filter: 'grayscale(100%)' }}
        />
      </div>
      <div className="teacher_description_container">
        <div>
          <a href={link} target="_new" className="sub_sub_title">
            {name}
          </a>
          <p className="secondary_text teacher_description">{description}</p>
        </div>
        <div>
          {homepage && (
            <a href={homepage} target="_new" className="caption_text">
              Homepage of {name}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

Teacher.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  homepage: PropTypes.string,
}

export default Teacher
