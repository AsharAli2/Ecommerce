import * as React from 'react';
import { useState ,useEffect} from 'react';
import "./carousal.css"
import { Container, Stack } from '@mui/material';
const images1 = [
      'https://images.samsung.com/is/image/samsung/assets/pk/Lifestyle_448x330--crystal-uhd.jpg?$448_330_JPG$',
      'https://images.samsung.com/is/image/samsung/assets/pk/tvs/2023/Lifestyle_Tile1_448x330-2.jpg?$448_330_JPG$',
      'https://images.samsung.com/is/image/samsung/assets/pk/tvs/2023/Lifestyle_Tile1_448x330-1.jpg?$448_330_JPG$',
];
const images2 = [
    'https://images.priceoye.pk/xiaomi-redmi-note-12-pro-pakistan-priceoye-tod3i-270x270.webp',
    'https://images.priceoye.pk/realme-narzo-50-pakistan-priceoye-b0lic-270x270.webp',
    'https://images.priceoye.pk/dcode-cygnal-2-pakistan-priceoye-1lobc-270x270.webp',
];
const images3 = [
      'https://www.czone.com.pk/Images/Thumbnails/30-czone.com.pk-1540-14819-190623093745.jpg',
      'https://www.czone.com.pk/Images/Thumbnails/38-czone.com.pk-1540-15035-150823104217.jpg',
      'https://www.czone.com.pk/Images/Thumbnails/4-czone.com.pk-1540-15100-270823123504.jpg',
];
const images4 = [
      'https://images.philips.com/is/image/PhilipsConsumer/X3_00-IMS-en_PK?$jpgsmall$&wid=225&hei=225',
      'https://images.philips.com/is/image/PhilipsConsumer/TAH4205RD_00-IMS-en_PK?$jpgsmall$&wid=225&hei=225',
      'https://images.philips.com/is/image/PhilipsConsumer/PRO6305BK_00-IMS-en_PK?$jpgsmall$&wid=225&hei=225',
];
const images5 = [
      'https://fdn2.gsmarena.com/vv/bigpic/oppo-watch-se.jpg',
      'https://fdn2.gsmarena.com/vv/bigpic/oppo-watch4-pro-.jpg',
      'https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra.jpg',
];


function Carousal() {
    const [currentImage1, setCurrentImage1] = useState(['https://images.samsung.com/is/image/samsung/assets/pk/tvs/2023/Lifestyle_Tile4_448x330.jpg?$448_330_JPG$',]);
    const [currentImage2, setCurrentImage2] = useState(['https://images.priceoye.pk/tecno-spark-10c-pakistan-priceoye-8ln4o-270x270.webp',]);
    const [currentImage3, setCurrentImage3] = useState(['https://www.czone.com.pk/Images/Thumbnails/7-czone.com.pk-1540-11932-030422083914.jpg',]);
    const [currentImage4, setCurrentImage4] = useState(['https://images.philips.com/is/image/PhilipsConsumer/TAH5205WT_00-IMS-en_PK?&wid=254&hei=254&$jpglarge$',]);
    const [currentImage5, setCurrentImage5] = useState(['https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg',]);

    useEffect(() => {
        const intervalId1 = setInterval(() => {
            setCurrentImage1(images1[Math.floor(Math.random() * images1.length)]);
        }, 3000)

        const intervalId2 = setInterval(() => {
            setCurrentImage2(images2[Math.floor(Math.random() * images2.length)]);
        }, 5000)
        const intervalId3 = setInterval(() => {
            setCurrentImage3(images3[Math.floor(Math.random() * images3.length)]);
        }, 5000)
        const intervalId4 = setInterval(() => {
            setCurrentImage4(images4[Math.floor(Math.random() * images4.length)]);
        }, 5000)
        const intervalId5 = setInterval(() => {
            setCurrentImage5(images5[Math.floor(Math.random() * images5.length)]);
        }, 5000)
        
        return () => clearInterval(intervalId1,intervalId2,intervalId3,intervalId4,intervalId5);
    }, [])

    return (
        <>
        <Container style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"20px",marginTop:"10px"}}>
        <h1 style={{fontFamily:"sans-serif"}}>FEATURED PRODUCTS</h1>
        <Stack direction="row" spacing={{lg:5,md:1}} flexWrap="wrap" justifyContent="center">

        <div className='image'>
            <img src={currentImage1} style={{height:"420px",width:"470px"}} />
            <h2>Smart TV</h2>
        </div>
        <Stack direction="column" spacing={2} flexWrap="wrap">

        <div className='image' >
            <img src={currentImage2} style={{height:"200px",width:"300px"}} />
            <h2>Smart Phones</h2>
        </div>
        <div className='image' >
            <img src={currentImage3} style={{height:"200px",width:"300px"}} />
            <h2>Monitors</h2>
        </div>
        </Stack>
        <Stack direction="column" spacing={2} flexWrap="wrap">

        <div className='image' >
            <img src={currentImage4} style={{height:"200px",width:"300px"}} />
            <h2>Headphones</h2>
        </div>
        <div className='image' >
            <img src={currentImage5} style={{height:"200px",width:"300px"}} />
            <h2>Smart Watches</h2>
        </div>
        </Stack>
        </Stack>
        </Container>
        </>
    )

  }

export default Carousal;
