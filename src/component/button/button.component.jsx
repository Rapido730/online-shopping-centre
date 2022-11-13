import "./button.styles.scss"

const Button_classes = {
    google : 'google-sign-in',
    inverted : 'inverted'
}

const Button = ({children,button_type,...otherProps}) => {

    return (
        <button className= {`button-container ${Button_classes[button_type]}`}
        {...otherProps}
        >
        {children}
        </button>
    )
} 

export default Button