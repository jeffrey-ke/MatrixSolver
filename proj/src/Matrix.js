function Matrix(props){

    function generateMatrix(){
        const m = []
        for (let i = 0; i < props.rows; i++) {
            for (let j = 0; j < props.cols; j++){
                m.push(<input type="number" name="cell"/>)
            }
            m.push(<br/>)
        }
        return m
    }

    return (
        <div>
            {generateMatrix()}
        </div>
    )
}
export default Matrix