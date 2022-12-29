export default function Card({ title, description }) {
    return (
        <div
            className="card"
            onClick={() => {
                console.log(title)
            }}
        >
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
