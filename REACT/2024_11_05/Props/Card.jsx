export default function Card({card, size}){
    return(
        <>
        <h1>"title:"{card.title}</h1>
        <div>"content:"{card.content}</div>
        <div style={{width:size, height:size,backgroundColor:"red"}}></div>
        </>
    );
}