import './textcamp.css'
const TextCamp = (props) => {
    
    const placeholderModificado = `${props.placeholder}...`
    return (
        <div className="text-camp">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
}
export default TextCamp