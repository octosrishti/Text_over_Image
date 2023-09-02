import React, { useEffect, useState } from 'react'
import LayoverText from './LayoverText'
import { createApi } from 'unsplash-js';

const ImageContainer = () => {

    const [input, setInput] = useState('')
    const [customInputList, setCustomInputList] = useState([])
    const [url, setUrl] = useState('')
    const unsplash = createApi({
        accessKey: 'dfZMvXOHupeK2pg2CfK9190R5RrOOiSDR2b2dWe_VpQ',
    });

    
    
    const handleCustomInput = () => {
        if(input)setCustomInputList([...customInputList, input])
        setInput('')
    }
    const handleRandomImage = () => {
        unsplash.photos.getRandom()
        .then(res => {
            console.log(res)
            setUrl(res.response.urls.full)
        } )
    }
    
    useEffect(()=>{
        handleRandomImage()
    },[])

    return (
        <div className="img-container">
            {customInputList.map(customInput => {
                return (
                    <LayoverText customInput={customInput} />
                )
            })}
            {url && <img className="img" src={url} alt="" /> }

            <div className="input-container footer">
                <button className="custom-button-change" onClick={handleRandomImage}>Change Image</button>
                <input type="text" className="custom-input" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='custom input' />
                <button className="custom-button" onClick={handleCustomInput}>Add Input</button>
            </div>
        </div>
    )
}

export default ImageContainer