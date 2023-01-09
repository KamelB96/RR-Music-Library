<<<<<<< HEAD
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

function Gallery(props){
const data = useContext (DataContext)

    const display = data.map((item, index) => {
=======
import React from 'react'
import GalleryItem from './GalleryItem'

const Gallery = (props) => {
    const data = props.data.result.read()

    const display = data.map((item,index) => {
>>>>>>> with_suspense
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return(
    <div>
        {display}
    </div>
    )
}

export default Gallery