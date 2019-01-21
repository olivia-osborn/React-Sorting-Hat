import React from "react";

function ChallengePage(props) {
    return (
        <div>
            <p>Welcome to Hogwarts! Soon you will put on the sorting hat and placed into a Hogwarts House. Are you ready to be sorted?</p>
            <button onClick={() => props.toggleAccept()}>Let's do this!</button>
        </div>
    )
}

export default ChallengePage;