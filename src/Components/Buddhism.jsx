import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/Buddhism.css'
import ReactMarkdown from 'react-markdown'
import buddhismLink from '../mkd/buddhism.md'
const config = window.config

export default function Buddhism(props) {
  const vars = config ? config : process.env
  const { images, text } = props
  const imageWidth = Math.floor(
    window.innerWidth > window.innerHeight
      ? window.innerWidth / 3
      : window.innerHeight / 3
  )
  const [buddhismText, setText] = useState()
  useEffect(() => {
    fetch(buddhismLink, { mode: 'no-cors' })
      .then((res) => res.text())
      .then((parsed) => setText(parsed))
      .catch((err) => console.log(err))
  })
  const getLink = () => {
    const buddhismPublicId = images[0].public_id
    return `${vars.REACT_APP_IMAGE_BASE_URL}/w_${imageWidth},dpr_2.0/${buddhismPublicId}.png`
  }

  return (
    <div className="container buddhism">
      <div className="buddhism_text">
        {/* <p
          className="body_text"
          dangerouslySetInnerHTML={{ __html: text.fields.text }}
        /> */}
        <ReactMarkdown className="body_text" source={buddhismText} />
      </div>
      <div className="buddhism_img">
        <img
          src={getLink()}
          alt={images[0].context.custom.caption}
          width="100%"
        />
      </div>
    </div>
  )
}

Buddhism.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  text: PropTypes.object,
}
