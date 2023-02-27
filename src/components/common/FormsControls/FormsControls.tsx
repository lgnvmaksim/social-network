import s from './FormsControls.module.css'


export const Textarea = ({...props}) => {
    const hasError = props.meta.error && props.meta.touched
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <div>
            <textarea {...props.input} {...props} />
        </div>
        {hasError &&  <span className={s.error}>{props.meta.error}</span>}
    </div>
}

export const Input = ({...props}) => {
    const hasError = props.meta.error && props.meta.touched
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <div>
            <input {...props.input} {...props} />
        </div>
        {hasError &&  <span className={s.error}>{props.meta.error}</span>}
    </div>
}