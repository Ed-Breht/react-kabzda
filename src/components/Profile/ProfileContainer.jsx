import React from "react";
import Profile from "../Profile";
import {GetUserProfile} from "../../redux/Profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId =this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.GetUserProfile(userId)
    }

    render () {

        return (
            <div>
              <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default compose(connect(mapStateToProps, {GetUserProfile}),
    withRouter,
    WithAuthRedirect)(ProfileContainer)