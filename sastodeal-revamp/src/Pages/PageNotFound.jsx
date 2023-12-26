import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import PNF from "../Assests/404.png"
import Skeleton from '@mui/material/Skeleton';

const PageNotFound = () => {
    let [Loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false);
    }
        , [])

    return (
        <div className=' flex justify-center items-center flex-col mt-10'>
            {
                Loading ? (
                    <Skeleton variant="rectangular" width={800} height={400} />
                ) : (
                    <><img src={PNF} /></>

                )
            }
            <div className="flex justify-center items-center flex-col mt-7 text-center mb-8">
                {
                    Loading ? (
                        <>
                            <Skeleton variant="rectangular" width={250} height={20} />
                            <Skeleton variant="rectangular" width={300} height={10} sx={{ mt: 1 }} />
                        </>

                    ) : (
                        <>

                            <h1 className=" text-3xl font-extrabold">Oops! Page not found</h1>
                            <p className=' text-[#807D7E] w-[80%]'>The page you are looking for might have been removed or
                                temporarily unavailable.</p>
                        </>

                    )
                }
            </div>
            <Link to="/" onClick={() => { window.scrollTo(0, 0); }}>
                {
                    Loading ? (
                        <Skeleton variant="rectangular" width={300} height={20} sx={{ mt: 1 }} />

                    ) : (
                        <button className='bg-[#8A33FD] rounded-md p-3 text-center text-white w-52 mb-5 font-semibold'>Back to HomePage</button>
                    )
                }
            </Link>
        </div>
    )
}

export default PageNotFound;