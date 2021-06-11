import React from 'react';

export type PageTitlePropsType = {
    title: string
}

export function PageTitle(props: PageTitlePropsType) {
    return (
        <div> {props.title} </div>
    )
}
