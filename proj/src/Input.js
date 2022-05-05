function Input(props) {
    return (
        <div>
            <form action={props.dst} method="post">
                rows:{" "}
                <input
                    type="number"
                    name="rows"
                    value=""
                    autofocus="autofocus"
                    required
                />
                <br/>
                cols:{" "}
                <input 
                    type="number" 
                    name="cols" 
                    value="" 
                    tabindex="0" 
                    required
                />
                <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default Input