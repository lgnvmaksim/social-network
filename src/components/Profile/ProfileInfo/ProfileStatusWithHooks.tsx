import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {updateStatusTC} from "../../../redux/profile-reducer";

type ProfileStatusType = {
    status: string
    // updateStatusTC: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {


    const [edit, setEdit] = useState(false)
    const [status, setStatus] = useState(props.status)

    const dispatch=useDispatch()

    const activateMode = () => {
        setEdit(!edit)
       dispatch(updateStatusTC(status))
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    return <div>
        {!edit && <div>
            <span onClick={activateMode}>{props.status}</span>
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

