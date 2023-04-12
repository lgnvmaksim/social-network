import React, {useState} from "react";
import s from './Paginator.module.css'
import cn from 'classnames'

type PaginatorType = {
    totalUsersCount: number
    pageSize: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

export const Paginator = (props: PaginatorType) => {

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) { // если выведем pagesCount вместо 20, то будет более 20 тыс страниц
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize
    return <div className={s.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
        {pages
            .filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
            .map((el, index) => {
                    return <span key={index} onClick={(e) => {
                        props.onPageChanged(el)
                    }} className={cn({[s.selectedPage]: props.currentPage === el ? s.selectedPage : ''}, s.pageNumber)}>{el}</span>
                }
            )}
        {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
    </div>

}
