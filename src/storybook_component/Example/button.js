import { Children } from "react";

function Button() {
    return (
        <div>
            {Children}
            <button className="pt-5 text-zinc-950 border rounded-md focus:outline-none" >Welcome</button>
        </div>
    )
}

export default Button;
