import React, { useState } from "react";
import styles from "../Contact/Contact.module.css";
import img1 from "../../assets/Images/poert1.png";
import img2 from "../../assets/Images/port2.png";
import img3 from "../../assets/Images/port3.png";
import master from "./Portfolio.module.css";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";

export default function Portfolio() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="p-3 sm:p-8 md:container mx-auto pt-12  mt-8 py-5">
      <div
        className={`mt-5 pt-3 ${styles.contactSec} text-center flex flex-col justify-center items-center`}
      >
        <h2 className={"text-main uppercase"}>portfolio component</h2>
        <div
          className={`starLine ${styles.starLineContact} text-main mb-5 flex justify-center items-center`}
        >
          <i className="fas fa-star flex justify-center items-center"></i>
        </div>

        <div className=" grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div
            onClick={() => {
              setSelectedImg(img1);
              setOpenModal(true);
            }}
            className={`${master.imgWrap} relative`}
          >
            <img className="w-full rounded-sm" src={img1} alt="home image" />
            <div
              className={`${master.layerImg} rounded-sm absolute w-full h-full top-0 `}
            >
              <i className="fas fa-plus fa-5x opacity-100 z-3 text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setSelectedImg(img2);
              setOpenModal(true);
            }}
            className={`${master.imgWrap} relative`}
          >
            <img className="w-full rounded-sm" src={img2} alt="home image" />
            <div
              className={`${master.layerImg} rounded-sm absolute w-full h-full top-0 `}
            >
              <i className="fas fa-plus fa-5x opacity-100 z-3 text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setSelectedImg(img3);
              setOpenModal(true);
            }}
            className={`${master.imgWrap} relative`}
          >
            <img className="w-full rounded-sm" src={img3} alt="home image" />
            <div
              className={`${master.layerImg} rounded-sm absolute w-full h-full top-0 `}
            >
              <i className="fas fa-plus fa-5x opacity-100 z-3 text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setSelectedImg(img1);
              setOpenModal(true);
            }}
            className={`${master.imgWrap} relative`}
          >
            <img className="w-full rounded-sm" src={img1} alt="home image" />
            <div
              className={`${master.layerImg} rounded-sm absolute w-full h-full top-0 `}
            >
              <i className="fas fa-plus fa-5x opacity-100 z-3 text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setSelectedImg(img2);
              setOpenModal(true);
            }}
            className={`${master.imgWrap} relative`}
          >
            <img className="w-full rounded-sm" src={img2} alt="home image" />
            <div
              className={`${master.layerImg} rounded-sm absolute w-full h-full top-0 `}
            >
              <i className="fas fa-plus fa-5x opacity-100 z-3 text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setSelectedImg(img3);
              setOpenModal(true);
            }}
            className={`${master.imgWrap} relative`}
          >
            <img className="w-full rounded-sm" src={img3} alt="home image" />
            <div
              className={`${master.layerImg} rounded-sm absolute w-full h-full top-0 `}
            >
              <i className="fas fa-plus fa-5x opacity-100 z-3 text-white"></i>
            </div>
          </div>



          {/* <ImgModal /> */}
          <Modal
            dismissible
            show={openModal}
            onClose={() => setOpenModal(false)}
          >
            <ModalHeader>Terms of Service</ModalHeader>
            <ModalBody className="border-0 outline-0 p-0 rounded-b-lg">
              <img src={selectedImg} className="rounded-b-sm" alt="" />
            </ModalBody>
            <ModalFooter className="p-0 border-0">
              {/* <Button onClick={() => setOpenModal(false)}>I accept</Button>
              <Button color="alternative" onClick={() => setOpenModal(false)}>
                Decline
              </Button> */}
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
}
