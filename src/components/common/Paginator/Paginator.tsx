import React from "react";
import s from './Paginator.module.css'

type PaginatorType = {
    totalUsersCount: number
    pageSize: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorType) => {

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) { // если выведем pagesCount вместо 20, то будет более 20 тыс страниц
        pages.push(i)
    }

    return <div>
            {pages.map((el, index) => {
                    return <span key={index} onClick={(e) => {
                        props.onPageChanged(el)
                    }} className={props.currentPage === el ? s.selectedPage : ''}>{el}</span>
                }
            )}
        </div>

}
