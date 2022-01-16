import React from 'react'
import ReactPageScroller from 'react-page-scroller';
import { Content } from './Content';


export const ContentFull = () => {
    return (
        <ReactPageScroller
        animationTimer={550}
        >
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content /> 
        </ReactPageScroller>
    )
}
