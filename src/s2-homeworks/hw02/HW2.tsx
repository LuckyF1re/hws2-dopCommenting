import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType                                       *ГОТОВО*
* 2 - указать нужный тип для defaultAffairs                                             *ГОТОВО*
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами               *ГОТОВО*
* 4 - выполнить пункт 3 для функции deleteAffair
* 5 - указать нужный тип в useState с affairs
* 6 - дописать тип и логику функции deleteAffairCallback
* 7 - в файле Affairs.tsx дописать типизацию пропсов
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* 9 - в файле Affair.tsx дописать типизацию пропсов
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
* 11 - в файле Affair.tsx отобразить приходящие данные
* */

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'  // need to fix any
export type AffairType = {
    _id: number // need to fix any
    name: string // need to fix any
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): any => { // need to fix any
    //если пришел фильтр "all"...может нам вообще не фильтровать, а вернуть все?
    //а вот если пришло другое значение...
    if (filter === 'high') {
            return affairs.filter(af => af.priority === 'high')
    }
    if (filter === 'middle') {
        return affairs.filter(af  => af.priority === 'middle')
    }
    if (filter === 'low') {
        return affairs.filter(af => af.priority === 'low')
    }

    return affairs // need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): any => { // need to fix any
    // need to fix
    // отбрасывай при помощи метода filter лишних affairs
    return affairs.filter(af => af._id !== _id )
}

function HW2() {
    const [affairs, setAffairs] = useState<any>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    //const deleteAffairCallback = (_id: number) => { // need to fix any
    const deleteAffairCallback = (_id: number) => { // need to fix any
        // need to fix
        // это просто функция стрелочник-она засетает, то что сделает deleteAffair
        // setAffairs(вызываю функцию(передаю аргументы))
        setAffairs(() => deleteAffair(affairs, _id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    filter={filter}          // ого useState передаем!
                    setFilter={setFilter}    // ого useState передаем!
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
        </div>
    )
}

export default HW2
