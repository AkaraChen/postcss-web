import { useEffect, useState } from 'react'
import postcss from '../dist/index.js'
import './style.css'

const processor = postcss([])

export const App = () => {
    const [text, setText] = useState('')
    const [content, setContent] = useState('')
    useEffect(() => {
        processor.process(text, { from: undefined }).then(result => {
            setContent(result.css)
        })
    }, [text])

    return (
        <>
            <textarea
                value={text}
                onChange={e => setText(e.target.value)}
            >
            </textarea>
            <textarea value={content} disabled></textarea>
        </>
    )
}
