import { useState, useEffect } from "react"

const index = () => {
    const [health, setHealth] = useState([]);

    useEffect(() => {
        const getHealth = async () => {
            const response = await fetch('http://localhost:5000/health')
            const data = await response.json();
            setHealth(data);
        }
        getHealth();
    }, [])

    return (
        <div>
            {/* DAISY UI */}
            {health.map((item) => (
                <>
                    <div key={item.id} className="col-4 m-3 bg-white justify-center text-black shadow-md rounded-md">
                        <div className="col-3 text-center">
                            <div className="card p-2 w-100 bg-base-100 shadow-xl">
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                <div className="card-body text-center">
                                    <h4 className="card-title justify-center">{item.title}</h4>
                                    <p>{item.author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
            {/* {health.map((item) => (
                <ul key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <p>{item.author}</p>
                    <p>{item.date}</p>
                    <hr></hr>
                </ul>
            ))} */}
        </div>
    )
}

export default index