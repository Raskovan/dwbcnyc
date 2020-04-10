import React from 'react'
import PropTypes from 'prop-types'
import Subtitle from './Subtitle'
import '../styles/Teachings.css'

const config = window.config

export default function Center(props) {
  const vars = config ? config : process.env
  const { images, text } = props
  const imageWidth = Math.floor(
    window.innerWidth > window.innerHeight
      ? window.innerWidth
      : window.innerWidth * 2
  )
  const imageHeight = Math.floor(imageWidth / 2.93)

  const getLink = () => {
    const teachingsPublicId = images[0].public_id
    return `${vars.REACT_APP_IMAGE_BASE_URL}/w_${imageWidth},dpr_2.0/${teachingsPublicId}.jpg`
  }

  return (
    <>
      <Subtitle text={text.fields.title} />
      <div
        className="section_img teachings_image"
        style={{ height: `${imageHeight}px` }}
      >
        <img src={getLink()} width="100%" alt="NYC Center" />
      </div>
      <div className="container">
        <p
          className="body_text"
          dangerouslySetInnerHTML={{ __html: text.fields.text }}
        />
      </div>
    </>
  )
}

Center.propTypes = {
  images: PropTypes.array,
  text: PropTypes.object,
}
