import React from 'react'

function index() {
  return (
    <section className="tf-section tf-about style2">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="content-about" data-aos="fade-up" data-aos-duration="800">
                    <div className="tf-title">
                        {/* <p className="h8 sub-title"></p> */}
                        <h4 className="title">Skullverse Saga</h4>
                    </div>
                    
                    <p className='pd20'>
                        1000 years ago, the government of Callisto launched a programme to execute those who are infected by a virus which converted people into half dead skulls. 10000 thousands Skulls tried to revolt but they were later exiled to an island on Earth called Skullverse.
                    </p>

                    <p className='pd20'>
                     Skulls came to know they were not the only creature on Skullverse. Skullverse where they landed were inhabited by “Originals” since thousands of years ago.
                    </p>

                    <p className='pd20'>
                        Will they live together or fight back to survive?
                    </p>
                </div>
            </div>
            {/* <div className="col-md-12">
                <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                    {
                        data.map(item => (
                            <AboutItem key={item.id} item={item} />
                        ))
                    }
                </div>
            </div> */}

            <div className="col-md-12">
                <div className="btn-about" data-aos="fade-up" data-aos-duration="800">
                    {/* <Button title='get Nfts' path='#' /> */}
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default index