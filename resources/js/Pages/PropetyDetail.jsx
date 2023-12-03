import {Avatar, Button} from "@material-tailwind/react";
import {AiOutlineWhatsApp} from "react-icons/ai";

export default function PropetyDetail({propeti}) {
    console.log(propeti)
    return (
        <div className={`p-3`}>
            <h1 className={`text-2xl mb-3 font-bold`}>{propeti.title}</h1>

            <div className={`grid grid-cols-3 grid-rows-2 gap-5 max-h-full h-[30rem] `}>
                {/* Gambar Pertama (ukuran paling besar) */}

                {
                    propeti?.images.map((image, index) => {
                        return <div
                            className={`${index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"} h-full w-full max-h-full overflow-hidden`}>
                            <img src={`/storage/${image.path}`} alt=""
                                 className={`h-full w-full object-cover rounded-md`}/>
                        </div>
                    })
                }


                {/*/!* Empat Gambar Lainnya (ukuran lebih kecil) *!/*/}
                {/*<div className={`col-span-1 h-full w-full max-h-full overflow-hidden`}>*/}
                {/*    <img src="/img/hero1.jpg" alt="" className={`h-full w-full object-cover rounded-md`}/>*/}
                {/*</div>*/}
                {/*<div className={`col-span-1 h-full w-full max-h-full overflow-hidden`}>*/}
                {/*    <img src="/img/hero1.jpg" alt="" className={`h-full w-full object-cover rounded-md`}/>*/}
                {/*</div>*/}
            </div>


            <div className={`mt-4`}>

                <div className={`flex space-x-4`}>
                    <div className={`border border-gray-300 p-3 shadow-sm basis-full`}>
                        <h2 className={`text-xl font-semibold`}>Tentang propeti ini</h2>
                        <div>
                            {propeti.description}
                        </div>
                    </div>
                    <div className={`border border-gray-300 p-3 shadow-sm basis-1/3`}>
                        <h3>Rp{propeti.price}</h3>
                        <div className={`flex items-center space-x-2`}>
                            <Avatar src={'/img/profile.jpg'}/>
                            <h3 className={`text-lg `}>{propeti.user.name}</h3>
                        </div>

                        <Button onClick={() => window.open(`https://wa.me/${propeti.phone}`, '_blank')}
                                variant={'outlined'} className={`flex justify-center items-center space-x-2 mt-2`}
                                fullWidth>
                            {/*generate warna logo whatsapp*/}
                            <AiOutlineWhatsApp size={20} color={'#25D366'}/>
                            <span>Whatsapp</span>
                        </Button>
                    </div>
                </div>

            </div>
        </div>


    )
}
