import React from "react";
import '../styles/Tweet.scss'
import styled from 'styled-components'

const Tweet = ({tweet,tweets, setTweets}) => {
    function deleteHandeler(e){
        setTweets(tweets.filter(post => post.id !== tweet.id))
    }
    return (
        <TweetStyle>
            <h3>{tweet.title}</h3>
            <p>{tweet.message}</p>
            <button>Like</button>
            <button onClick={deleteHandeler}>delete</button>
        </TweetStyle>
    )
};

const TweetStyle = styled.div`
background-color: "red";
border-radius: 3px;
border: 2px solid red;
`

export default Tweet;