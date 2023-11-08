import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import './Gallery.css';
const Gallery=()=>{

    let dataPic=[
        {
            id:1,
            imgSrc:'data:image/jpeg;base64,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',
        },
        {
            id:2,
            imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3pQW94q6SGAplbmqJNpKXzsbHsw1xg6aRQ&usqp=CAU',
        },
        {
            id:3,
            imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYI5xxVmCd9kRMRbsCDHm_IzMVVckppaN1yw&usqp=CAU',
        },
        {
            id:4,
            imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALrk-fw7UFXcRmbWe6l8rppC2FPWtMs8YUg&usqp=CAU',
        },
        {
            id:5,
            imgSrc:'https://images.livemint.com/img/2021/10/05/1600x900/7eleven--621x414_1633432102459.jpg',
        },
        {
            id:6,
            imgSrc:'https://i0.wp.com/www.itvoice.in/wp-content/uploads/2022/05/7-Eleven-GSC-Launch-L-R-Jennifer-Goshcke-Siva-S-Sujeet-Bambawale-Nihal-Patel-Bobby-Schwerin-scaled.jpg?fit=2560%2C1707&ssl=1',
        },
        {
            id:7,
            imgSrc:'https://static2.gensler.com/uploads/hero_element/22816/thumb_mobile/thumbs/project-7eleven-bangalore-05-2000x1125_1696950733_508x286.jpg',
        },
        {
            id:8,
            imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbpqxsnyRxt-VsS8okGe6k--0Ow922X0zT_w&usqp=CAU',
        },
        {
            id:9,
            imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRe85PI7fFJfrLSsxQgr4LOo0qraDH4eBOpA&usqp=CAU',
        }
    ]
    const [model,setModel]=useState(false);
    const [tempimgsrc,settempsrc]=useState('');
    const getImg=(iSrc)=>{
            settempsrc(iSrc);
            setModel(true);
    }
    return(
       
        <div>
            <div className={model? "model open":"model"}>
                <img src={tempimgsrc}/>
                <p onClick={()=> setModel(false)}  className="svg" style={{fontSize:'50px',color:'green'}}>&gt;&gt;&gt;</p>
            </div>
            <Navigation/>
            
            <h1 style={{fontSize:'50px',alignItems:'center',color:'white',paddingLeft:'300px'}}>VIEW OF OUR VIBRANT OFFICE </h1>
            <div className="gallery">
                {dataPic.map((item,index)=>{
                    return(
                    <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width:'100%', margin:'10px'}}/>
                    </div>
                    )
                }
                )}
            </div>
        </div>
    );
}
export default Gallery;