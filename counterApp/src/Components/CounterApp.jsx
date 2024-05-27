import { useEffect, useState } from 'react'
import '../output.css'
function CounterApp() {
    const [countValue, setCountValue] = useState(0)

    useEffect(() => {
        console.log(countValue)

    }, [countValue])
    return (
        <div className='container h-screen w-full grid grid-cols-1 items-center bg-red-600'>
            <h1 className='text-black text-center mx-auto my-8 text-4xl'>Counter App</h1>
            <p className='text-black text-center mx-auto my-8 text-4xl'>Value : {countValue}</p>
            <div className='h-full mx-auto my-44 space-x-4'>
                <button onClick={() => setCountValue(countValue + 1)} className='bg-gray-500 py-2 px-4 rounded-2xl  hover:bg-sky-700 '>+</button>
                <button onClick={() => setCountValue(countValue - 1)} className='bg-gray-500 py-2 px-4 rounded-2xl  hover:bg-sky-700 '>-</button>
            </div>

        </div>
    )
}

export default CounterApp