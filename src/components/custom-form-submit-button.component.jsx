export default function CustomFormSubmitButton({children, color, ...otherProps}) {
    return (
        <button className={`${color} px-6 text-sm py-2 rounded-md text-white`} {...otherProps}>{children}</button>
    )
}