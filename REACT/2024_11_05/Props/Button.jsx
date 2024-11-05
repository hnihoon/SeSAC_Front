export default function Button(props){
    // const {color , text} = props.data
    const {data} = props
    
    return(
        <>
            <button style={{backgroundColor:data.color}}>{data.text}</button>
        </>
    )
}