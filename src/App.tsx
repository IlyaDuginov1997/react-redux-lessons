import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './Components/Rating/Rating';
import {Accordion} from './Components/Accordion/Accordion';
import {UncontrolledRating} from './Components/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from './Components/UncontrolledOnOff/UncontrolledOnOff';
import {UnconrolledAccordion} from './Components/UncontroledAccordion/UnconroledAccordion';
import {OnOff} from './Components/OnOff/OnOff';
import {v1} from 'uuid';
import {Select} from './Components/Select/Select';
import {ReactMemoExample} from './Components/ReactMemoExample';


export type ItemsObjType = {
    id: string,
    title: string
}

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionValue, setAccordionValue] = useState<boolean>(true);
    let [onButton, setOnButton] = useState<boolean>(true);

    let [selected, setSelected] = useState<boolean>(false)
    let [titleForSelect, setTitleForSelect] = useState<string>('Cities')
    const items: Array<ItemsObjType> = [
        {id: v1(), title: 'Ilya'},
        {id: v1(), title: 'Gleb'},
        {id: v1(), title: 'Denis'},
        {id: v1(), title: 'Nastya'},
        {id: v1(), title: 'Kostya'},
        {id: v1(), title: 'Anton'},
    ]

    const selectItems: Array<ItemsObjType> = [
        {id: v1(), title: 'Minsk'},
        {id: v1(), title: 'Moscow'},
        {id: v1(), title: 'London'},
        {id: v1(), title: 'Kiev'},
    ]

    function clickOnButton(name: string) {
        alert(name)
    }

    function changeSelect(selected: boolean) {
        setSelected(selected)
    }

    function changeTitle(title: string) {
        setTitleForSelect(title)
        setSelected(!selected)
    }

    return (
        <div>
            {/*<PageTitle title={'This is my first component'}/>*/}
            {/*<PageTitle title={'Hello my friends'}/>*/}
            {/*<UnconroledAccordion title={'Menu'} collapsed={false}/>*/}
            {/*<UnconroledAccordion title={'Users'} collapsed={true}/>*/}

            {/*<UncontrolledRating value={1}/>*/}
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}

            <UncontrolledOnOff/>
            <UncontrolledOnOff/>
            +++++
            <OnOff setOnButton={setOnButton} onButton={onButton}/>
            <OnOff setOnButton={setOnButton} onButton={onButton}/>

            <UnconrolledAccordion title={'Menu'}/>

            {/*+++++*/}
            {/*<Accordion title={'Menu'}*/}
            {/*           collapsed={accordionValue}*/}
            {/*           onClick={() => {*/}
            {/*               setAccordionValue(!accordionValue)*/}
            {/*           }}*/}
            {/*           items={items}*/}
            {/*           onClickItem={clickOnButton}*/}
            {/*    // можно было так записать*/}
            {/*    // onClickItem={ (name) => alert(name) }*/}
            {/*/>*/}

            {/*<UncontrolledRating/>*/}
            {/*+++++*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*+++++*/}
            <Select selectItems={selectItems}
                    changeSelect={changeSelect}
                    selected={selected}
                    changeTitle={changeTitle}
                    title={titleForSelect}
            />
            <ReactMemoExample />

        </div>
    );
}

export default App;
