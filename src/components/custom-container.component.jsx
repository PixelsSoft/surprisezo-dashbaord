export default function CustomContainer({children, otherStyles}) {
    return (
        <div className={`rounded-2xl px-3 py-6 ${otherStyles}`} style={{ boxShadow: '10px 20px 30px 20px rgba(0, 0, 0, 0.06)' }}>
            {children}
        </div>
    )
}