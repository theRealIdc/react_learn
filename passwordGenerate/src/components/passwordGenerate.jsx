
import React, { useCallback, useEffect, useRef, useState } from 'react'

function PasswordGenerate() {
    const [length, setLength] = useState(0)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState('')

    const passwordRef = useRef(null)
    const generatePassword = useCallback(() => {
        let pass = ''
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*()_+"

        for (let i = 1; i < length; i++) {
            const char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)

    }, [length, charAllowed, numberAllowed, password])

    const onCopyPassword = () => {
        window.navigator.clipboard.writeText(password)
        passwordRef.current?.select()

    }

    useEffect(() => {
        generatePassword()
    }, [length, charAllowed, numberAllowed])

    return (
        <div className='container w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
            <h1 className='text-center text-3xl font-bold mb-2'>Password Generate</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input
                    value={password}
                    type="text"
                    ref={passwordRef}
                    className='w-full py-1 px-3 ounline-none'
                    readOnly
                />
                <button
                    onClick={onCopyPassword}
                    className='outline-none bg-blue-700 text-white px-3 py-1'
                >Copy</button>
            </div>
            <div className='flex flex-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                    <input
                        type="range"
                        min={8}
                        max={100}
                        value={length}
                        className='cursor-pointer'
                        onChange={(e) => setLength(e.target.value)}

                    />
                    <label htmlFor='length'>Lenght : {length}</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input
                        type="checkbox"
                        defaultChecked={numberAllowed}
                        className='cursor-pointer'
                        onChange={(prev) => setNumberAllowed(!prev)}
                    />
                    <span>Number</span>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input
                        type="checkbox"
                        defaultChecked={charAllowed}
                        className='cursor-pointer'
                        onChange={(prev) => setCharAllowed(!prev)}
                    />
                    <span>char</span>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerate