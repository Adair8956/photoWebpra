import React from 'react'

const Pictures = ({ data}) => {
  return (
    <div className="picture">
        <p>{data.photographer}</p>
        <div className="imageContainer">
            <img src={data.src.large} alt="" />
        </div>
        <p>
            <a traget="_blank" href={data.src.large}>Download</a>
        </p>
    </div>
  )
}

export default Pictures