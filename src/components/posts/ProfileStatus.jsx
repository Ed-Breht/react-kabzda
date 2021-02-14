import React, {useState} from 'react'

 const ProfileStatus = (props) => {


  const[editMode, setEditMode] = useState(false)


  // activeEditMode = ()  => {
  //     this.setState (
  //         {
  //             editMode: true
  //         }
  //     )
  // }
  //
  // deactivateEditMode = () => {
  //     this.setState (
  //         {
  //             editMode: false
  //         }
  //     )
  // }

    return (
      <div>
        {!editMode && (
          <div>
            <span onDoubleClick={() => setEditMode(!editMode)}>{props.status}</span>
          </div>
        )}
        {editMode && (
          <div>
            <input autoFocus={true} onBlur={() => setEditMode(!editMode)} value={props.status} />
          </div>
        )}
      </div>
    )

}
export default ProfileStatus
