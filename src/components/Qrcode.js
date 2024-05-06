import React, { useState } from 'react'
import QRCode from "react-qr-code";

const Qrcode = () => {
    let [val, setval] = useState("")
    let [qr, setqr] = useState("")

    let handleclick = () => {
        setqr(val)
        setval("")

    }
    return (
        <div className="container w-full h-full ">

            <div className="ddd w-full h-full flex flex-col justify-center gap-3">
            <h1 className='w-full text-center text-4xl font-semibold mt-3'>QR code  Generator</h1>
                <div className="box w-full flex justify-center gap-2 ">
                    <input className='max-w-[180px] border-solid px-1' placeholder='Enter Hear ' onChange={(e) => setval(e.target.value)} value={val} type="text" name="" id="" />
                    <button type="submit" onClick={() => handleclick()}>Generate</button>
                </div>
                <QRCode value={qr} className='w-full mt-2' />
            </div>

        </div>
    )
}

export default Qrcode