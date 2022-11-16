import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SliderItem from '../slider-item';
import { Link } from 'react-router-dom';
import { Modal } from "react-bootstrap";
// import skull from './images/logo/skull'
import skull from '../../assets/images/logo/skull.png'
import './styles.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import ModalVideo from 'react-modal-video';
Slider.propTypes = {
    data : PropTypes.array,
};

function Slider({data}) {
    // const {data} = props;
    console.log(data)
    const [isOpen, setOpen] = useState(false);
    const [modalShow, setModalShow] = useState(false)
    return (
        <section className="slider">
            <div className={`box-slider ${data[0].classAction}`}>
            {/* {data[0].bgImg} */}
            <img className='bg-slider' src={data[0].bgImg} alt="cybox" />
            <div className="box-slider__main">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="">
                                <h1 className="title">{data[0].title}</h1>
                                <p className="sub-title">{data[0].desc}</p>
                                <div className='row d-flex align-items-center'>
                                    <div className='col-xl-11'>
                                        {/* <form action="#" className="newlletter-form" id="subscribe-form">
                                            <span></span>
                                            <input type="number" placeholder="1" required=""  />
                                            <div className="btn-pst">
                                                <button className="tf-button-st2 btn-effect" type="submit" id="subscribe-button"> <span className="effect">Mint</span></button>
                                            </div>
                                        </form> */}
                                        <div className="btn-pst mb-5">
                                        <button className="tf-button-st2 btn-effect" type="submit" id="subscribe-button" onClick={() => {
                                            console.log('kkkkkkk')
                                            setModalShow(true)
                                        }}> <span className="effect">Whitelist Yourself</span></button>
                                    </div>
                                    </div>
                               
                                </div>
                               
                               
                            </div>
                        </div>
                        {/* <img src={skull} alt="" /> */}
                        <div className="col-xl-6 col-md-12">
                            <div className='homePage_image'>
                                <img src="" alt="" />
                                {/* <img src={skull} alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="i7EMACWuErA" onClose={() => setOpen(false)} />

            <Modal
                show={modalShow}
                centered
                className="modalClass"
                // onHide={setModalShow}
            >
            <Modal.Header closeButton onClick={() =>{
                setModalShow(false)
            }}>
                Get Whitelisted
            </Modal.Header>

                <div className="modal-body center">
                    <div className="box-wallet-inner">
                        <div className='row' style={{width:'100%'}}>
                            <div className='col-xl-12'>
                            <div className="">
                            <div className='row'>
                                <div className='col-xl-12'>
                                    <form action="#" className="newlletter-form mb-4" id="subscribe-form">
                                
                                    <input type="text" placeholder="Enter your Wallet address" required="" style={{width:'100%'}}  />
                                    
                                    </form>
                                </div>
                            </div>
                             
                            <div className='row'>
                                <div className='col-xl-12'>
                                    <form action="#" className="newlletter-form mb-4" id="subscribe-form">
                                    
                                    <input type="text" placeholder="Enter your Discord Id" required="" style={{width:'100%'}}  />
                                    
                                    </form>
                                </div>
                            </div>
                            <div className='row text-left'>
                                <div className='col-xl-2'>
                                <button className="tf-button-st2 btn-effect" type="submit" id="subscribe-button">
                                     <span className="effect" style={{color:'#c8fa00 !important'}}>Submit</span></button>
                                </div>
                               
                            </div>
                        </div>
                            </div>
                        </div>
                       
                        
                        
                    </div>  
                </div>
            </Modal>

        </div>
        </section>
    );
}

export default Slider;