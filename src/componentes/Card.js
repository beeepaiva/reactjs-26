import '../App.css';
export function Card({nome, desc}){
    return(
        <div className='item'>
            <h2>{nome}</h2>
            <h3>{desc}</h3>

        </div>
    )
}