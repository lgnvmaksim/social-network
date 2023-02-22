import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileContainerType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

export const ProfileInfo = (props: ProfileContainerType) => {
    if(!props.profile){
        return <Preloader/>
    }
    return <div>
        {/*<img src="https://weblinks.ru/wp-content/uploads/2022/08/0d6de7af1701b7f6ff551d4474ced401-730x578.jpeg"*/}
        {/*     alt="background"/>*/}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt={'userPhoto'}/>
          <ProfileStatus status={props.status} updateStatusTC={props.updateStatusTC}/>
        </div>
    </div>
};