import React from 'react';

const VisitManufacturerHouse = () => {
    const visits = [
        {
            "_id": 1,
            "img": "https://i.ibb.co/yy0n3db/img4.webp",
            "desc": "Female Carpenter Blowing Dust While Sanding Plank"
        },
        {
            "_id": 2,
            "img": "https://i.ibb.co/k8YshMy/img5.jpg",
            "desc": "Man work in home workshop garage with angle grinder, goggles and construction gloves, sanding metal makes sparks closeup, diy and craft concept "
        },
        {
            "_id": 3,
            "img": "https://i.ibb.co/BjvcqJW/img5.webp",
            "desc": "Manager supervisor and industrial worker in uniform walking in large metal factory hall and talking about increasing production"
        },
        {
            "_id": 4,
            "img": "https://i.ibb.co/rGZF0M6/img6.webp",
            "desc": "Young factory worker working with adept robotic arm"
        },
        {
            "_id": 5,
            "img": "https://i.ibb.co/c8CyMzR/img9.webp",
            "desc": "Interior view of a steel factor"
        },
        {
            "_id": 6,
            "img": "https://i.ibb.co/y8Vt97Y/Interior-view-of-a-steel-factor.webp",
            "desc": "Steel pipelines and cables in a plant"
        }
    ]
    // https://i.ibb.co/yy0n3db/img4.webp
    // 
    // 
    // 
    // 
    // 
    // https://i.ibb.co/9pWJpj7/Steel-pipelines-and-cables-in-a-plant.webp

    return (
        <div className=' bg-green-200 mt-10 py-10'>
            <h2 className="text-4xl py-8  text-bold">Visit Our Manufacturer House</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
                {
                    visits.map(visit =>
                        <div >

                            <div className="card  bg-base-200 shadow-2xl h-96">
                                <figure className='rounnded-lg'><img className='rounded-lg w-100 h-72 p-4' src={visit.img} alt="Album" /></figure>
                                <div className="text-justify pl-10">
                                    <h2 className="card-title">New album is released!</h2>
                                    <p>{visit.desc.slice(0, 35)}</p>

                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default VisitManufacturerHouse;