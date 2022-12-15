import React, { useState } from 'react';

const ImageWithButtons = () => {
    const [isVisible, setVisible] = useState(false);
    const [imgSize, setImgSize] = useState(200);
    return (
        <>
        <Buttons setVisible={setVisible} setImgSize={setImgSize}></Buttons>
        {isVisible && <Image size={imgSize} />}
        </>
    );
};

const Image = ({ size }) => {
    return <img style={{ width: size + 'px', height: size + 'px' }} src='https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/d9/krakow.jpg' alt='img'/>;
};

const Buttons = ({ setVisible, setImgSize }) => {
    return (
        <div>
            <button onClick={() => setImgSize(prev => prev + 10)}>Збільшити</button>
            <button onClick={() => setImgSize(prev => prev - 10)}>Зменшити</button>
            <button onClick={() => setVisible(true)}>Додати</button>
            <button onClick={() => setVisible(false)}>Видалити</button>
        </div>
    );
};

export default ImageWithButtons;