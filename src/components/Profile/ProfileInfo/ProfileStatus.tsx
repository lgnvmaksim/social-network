import React from 'react';

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state={
        editMode: false
    }

    activateEditMode = ()=> {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = ()=> {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={this.deActivateEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
}

