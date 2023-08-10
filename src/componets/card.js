import React from "react";

const Card = () => {
    return (
        <div className={"col-6"}>
            <div>
                <h1>Always in style!</h1>
                <p>The standart chunk of Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quis reprehenderit tempore voluptatem? </p>
            </div>
            <div>
                <p className={"price"}>
                    $249.99/
                    <span>249.99</span>
                </p>
                <p>★★★★</p>
            </div>
        </div>
    )
}

export default Card