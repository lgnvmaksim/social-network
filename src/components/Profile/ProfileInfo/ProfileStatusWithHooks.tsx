import React, {ChangeEvent, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatusTC: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [edit, setEdit] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateMode = () => {
        setEdit(!edit)
        props.updateStatusTC(status)
    }



    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }

    return <div>
        {!edit && <div>
            <span onClick={activateMode}>{status}</span>
        </div>
        }
        {edit &&
            <div>
                <input onChange={onStatusChange} autoFocus onBlur={activateMode}
                       value={status}/>
            </div>
        }
    </div>

}

