import React from 'react';

const MyPortfolio = () => {
    return (
        <div className=' py-6 p-10'>
            <h1 className='my-5 text-2xl font-serif text-fuchsia-400 '>This is all about <span className='text-orange-500 font-bold'>My-self</span></h1>


            <div className='p-4 mx-auto text-center grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>

                <div className=''>
                    {/* <div className="indicator w-32">
                        <img src="https://i.ibb.co/jG50Bc6/portflio.jpg0" />
                    </div> */}

                    <div className="card text-justify w-100 bg-base-100 shadow-xl mx-auto  my-2">
                        <div className="card-body">
                            <h2 className="card-title">Name: <span className='text-purple-500'>ASADUZZAMAN</span></h2>
                            <h2>Email: <spna className='text-purple-500'>asadasad9282@gmail.com</spna></h2>
                            <h3>Educational Background:<br></br>
                                <span className='text-orange-600'>Studies at B.S.S </span></h3>
                            <p>List of Technology skills: <br></br>
                                <span className='text-purple-600 font-bold'>React.js Developer || JavaScript Developer && MERN Stack Web Developer</span></p>
                        </div>
                    </div>
                </div>
                <div className="p-2 mockup-code w-full mx-auto text-center">
                    <h2>My React project Link</h2>
                    <a href='https://dentist-web-997b3.firebaseapp.com' className="link ">https://dentist-web-997b3.firebaseapp.com/</a>
                    <br />
                    <a className="link ">https://warehouse-management-6236d.web.app/</a>
                    <br />
                    <a className="link ">https://genius-car-services-d0550.web.app/</a>

                </div>
            </div>
        </ div>
    );
};

export default MyPortfolio;