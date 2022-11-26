export const Dropdown = ({ isDisplayed, searchTerm }) => {
    console.log(searchTerm)
    const secret = process.env.REACT_APP_REDDIT_SECRET
    let 
    CLIENT_ID = 'qjuHHDbFqllu2b76JMYmGQ',
    RESPONSE_TYPE = 'code', //code for implicit grant
    RANDOM_STRING,
    URI,
    DURATION,
    SCOPE_STRING
    const authEndpoint = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&
    state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`
    return (
        <div className="dropdown-content" style={{display: isDisplayed}}>
            <p>Hello World!
            </p>
        </div>
    )
}