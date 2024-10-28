const Actions = ({ role, onConfirm, onClose }) => {
    const getRoleAction = () => {
        console.log(role)
        switch (role) {
            case "asesino":
                return{
                    title:"Asesino - Accion: Matar",
                    description:"Eres un asesino asi que asesina",
                    action:"Matar",
                };
            case "medico":
                return{
                    title:"Medico - Accion: Proteger",
                    description:"Eres un medico, protege a quien creas conveniente",
                    action:"Proteger",
                };
            case "policia":
                return{
                    title:"Policia - Accion: Arrestar",
                    description:"Eres un policia, arresta a quien creas que es el asesino",
                    action:"Arrestar", 
                };
            case "ciudadano":
                default:
                return{
                    title:"Ciudadano - Accion: Normal",
                    description:"Eres un ciudadano, haz cosas normales",
                    action:"Observar"
                };
        }
    }

    const {title, description, action} = getRoleAction();
    return (
        <>
            <dialog open>
                <article>
                    <h2>{title}</h2>
                    <p>
                        {description}
                    </p>
                    <footer>
                        <button onClick={onClose} class="secondary">
                            Cancelar
                        </button>
                        <button onClick={onConfirm}>{action}</button>
                    </footer>
                </article>
            </dialog>
        </>
    )
}
export default Actions;