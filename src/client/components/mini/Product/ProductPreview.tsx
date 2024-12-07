// @ts-nocheck

import React, { useState, useRef } from "react";
import { ProductTypes } from "../../../utils/OrderInterfaces";
import strings from "../../../data/strings.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./surya.css";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import ProductHero from "./../../../../client/components/mini/Product/ImageGallery/ProductHero";

const ProductPreview = ({ productListUpdated, ID, addCartHandler }: ProductTypes) => {
  const [popProductInCart, setpopProductInCart] = useState<boolean>(false);
  const countdownAllowed = true;
  const [loading, setLoading] = useState(false);

  const [uploadPopupOpen, setUploadPopupOpen] = useState<boolean>(false);
  const [myimages, setmyImages] = useState<{ name: string; url: string }[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const toggleUploadPopup = () => {
    setUploadPopupOpen(!uploadPopupOpen);
  };

  function selectFiles() {
    if (fileInputRef.current) {
      fileInputRef.current?.click();
    }
  }

  function onFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;

      if (!myimages.some(e => e.name === files[i].name)) {
        setmyImages(prevImages => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function deleteImage(index: number) {
    setmyImages(prevImages => prevImages.filter((_, i) => i !== index));
  }

  function onDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    event.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
  }

  function onDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!myimages.some(e => e.name === files[i].name)) {
        setmyImages((prevImages: any) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function storeImagesInLocalStorage() {
    const selectedImages = myimages.map((image: { url: string; name: string }) => ({
      url: image.url,
      name: image.name,
    }));
    localStorage.setItem("selectedImages", JSON.stringify(selectedImages));
  }

  const uploadminialbum = async () => {
    setLoading(true);
    storeImagesInLocalStorage();
    await new Promise(resolve => setTimeout(resolve, 2000));
    toggleUploadPopup();
    setLoading(false);
  };

  const addToCartEvent = () => {
    if (typeof addCartHandler === "function") {
      addCartHandler();
      setpopProductInCart(true);
    }
    sendTriggerEmail({ typeEvent: "ADD_TO_CART_EVENT", url: window.location.pathname });
  };

  const animEnded = () => {
    setpopProductInCart(false);
  };
  let dateToday = new Date();
  let dateTommorow = dateToday.getDate() + 1;

  return (
    <>
      <ProductHero
        productListUpdated={productListUpdated}
        ID={ID}
        addCartHandler={addCartHandler}
        countdownAllowed={countdownAllowed}
        dateToday={dateToday}
        popProductInCart={popProductInCart}
        setpopProductInCart={setpopProductInCart}
        animEnded={animEnded}
        toggleUploadPopup={toggleUploadPopup}
      />

      <Modal isOpen={uploadPopupOpen} toggle={toggleUploadPopup} centered className='modal-lg'>
        {/* <ModalHeader toggle={toggleUploadPopup}>Upload Images</ModalHeader> */}
        <ModalBody>
          <div className='card'>
            <div className='top'>
              <p>Alege-ti pozele pentru album</p>
            </div>
            <div className='drag-area' onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
              {isDragging ? (
                <span className='select'>Trage pozele aici</span>
              ) : (
                <>
                  <span className='select' role='button' onClick={selectFiles}>
                    Selecteaza din galerie
                  </span>
                </>
              )}
              <input
                name='file'
                type='file'
                className='file'
                multiple
                ref={fileInputRef}
                onChange={onFileSelect}
                style={{ display: "none" }}
              />
            </div>
            <div className='container'>
              {myimages.map((image, index) => (
                <div className='image' key={image.name || index}>
                  <span className='delete' onClick={() => deleteImage(index)}>
                    &times;
                  </span>
                  <img src={image.url} alt={image.name} />
                </div>
              ))}
            </div>
            {/* <div className="finalsub">
              <button type="button">Upload</button>
              </div>               */}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={toggleUploadPopup}>
            Close
          </Button>
          <Button className='minialbm-submit' onClick={uploadminialbum} disabled={loading}>
            {loading ? <span>Uploading...</span> : "Upload"}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ProductPreview;
