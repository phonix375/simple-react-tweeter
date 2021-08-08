import React, {useState} from "react"
import TweetList from "./components/TweetList"
import Tweet from "./components/Tweet"



function App() {
  const [tweets, setTweets]= useState([])
  return (
    <div className="App">
      <TweetList tweets={tweets} setTweets={setTweets}/>
      <div>
      {tweets.map(item => (
        <Tweet tweet={item} tweets={tweets}  setTweets={setTweets} key={item.id}/>
      ))}
    </div>
    </div>
  );
}

export default App;
