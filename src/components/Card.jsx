function Card({ title, description, price, image}) {
    return (
        <div className="bg-slate-300 rounded-lg shadow-lg p-6 w-72 hover:scale-105 transition-transform duration-300">
            {image && <img src={image} alt={title} className="rounded-xl mb-4" />}
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-500">{description}</p>
            <p className="text-black">{price}</p>
        </div>
    );
}

export default Card;