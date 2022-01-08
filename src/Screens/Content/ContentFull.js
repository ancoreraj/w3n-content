import React from 'react'
import { FullPage, Slide } from 'react-full-page';
import { Content } from './Content';
export const ContentFull = () => {
    return (
        <FullPage
           duration={600}
        >
            <Slide>
                <Content />
            </Slide>
            <Slide>
                <Content />
            </Slide>
            <Slide>
                <Content />
            </Slide>
            <Slide>
                <Content />
            </Slide>
            <Slide>
                <Content />
            </Slide>
        </FullPage>
    )
}
