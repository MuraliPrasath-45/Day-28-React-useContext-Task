import { createContext ,useContext, useState} from "react";

export const Usercontext=createContext(null)

export const Usercontextprovider=({children})=>{
    const [count,setcount]=useState(0)

  const  data= [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 29990,
        "count":0,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            "https://picsum.photos/200/300?random=1",
            "https://picsum.photos/200/300?random=2"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 91900,
        "count":0,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
            "https://picsum.photos/200/300?random=1",
            "https://picsum.photos/200/300?random=2"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 15000,
        "count":0,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
            "https://picsum.photos/200/300?random=1",
            "https://picsum.photos/200/300?random=2"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 15990,
        "count":0,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
            "https://picsum.photos/200/300?random=1",
            "https://picsum.photos/200/300?random=2"
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 62290,
        "count": 0,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
            "https://picsum.photos/200/300?random=1",
            "https://picsum.photos/200/300?random=2"
        ]
    }
]
const[list,setlist]=useState(data)
    const title ="dsfdfs"
    return(
        <Usercontext.Provider value={{title,list,setlist,count,setcount}}>
            {children}
        </Usercontext.Provider>

    )
}

export const Useusercontect=()=>{
    const{title,list,count,setlist,setcount}=useContext(Usercontext)
    return{title,list,count,setlist,setcount}
}