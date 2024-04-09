import React from "react";

const Profile = (props) => {

    const myFavouriteYoutubeChannel = ['thesuithistorian', 'webdevsimplified', 'callmeshazaam', 'gojicenter'];
    const myRenderList = myFavouriteYoutubeChannel.map((channel) => <p>{channel}</p>)
    const [channel1, channel2, channel3, channel4] = myFavouriteYoutubeChannel

    return (
        <>
            <h1>Hello world. My name is {props.name}</h1>
            {myRenderList}
            {channel1}
            {channel2}
            {channel3}
            {channel4}
        </>
    );
}
export default Profile