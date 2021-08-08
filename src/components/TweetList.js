import React, {useState} from "react"
const { v4: uuidv4 } = require('uuid');

const TweetList = ({setTweets, tweets}) => {
    const [formData, setFormData] = useState('')

    function changeHandler(e){
        setFormData(e.target.value);
    }
    function submitHandler(e){
        e.preventDefault();
        setTweets([...tweets, {message: formData, title: 'Alex Kotliar',id: uuidv4() }])
        setFormData('')


    } 
    return (
        <div>
            <form onSubmit={submitHandler}>
                <textarea value={formData} cols="30" rows="10" onChange={changeHandler}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TweetList;