 var initialState = 
[
    {
        id : 1,
        name : ' Iphone 7',
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTBidf-M14v2iM-f_OfogeaxWEgctmUN8OSDongO6xZB4F-C5ymhei0jeW5ZbUr6Q&usqp=CAc",
        description : ' San pham apple',
        price: 500,
        inventory: 10,
        rating : 4
    },
    {
        id : 2,
        name : ' Iphone 10',
        image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRKijBCRKx5zuwzxYkDaHz338nDPb_zvDNxwfRGNJ4mwiytlx1qe7X1ue3EZGYUSUE7jOxqZoo-3LY&usqp=CAc",
        description : ' San pham apple',
        price: 5000,
        inventory: 4,
        rating : 3
    },
    {
        id : 3,
        name : ' Sam Sung',
        image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQJbiX73b-9VMUP20q2pxwxX1K9Tgbk69W69L7KfM7RxmS2jAK3kVE8eHBiNhPfxPKEj99EzGWloHw&usqp=CAc",
        description : ' San pham sam sung',
        price: 800,
        inventory: 8,
        rating :5
    },
];

const products = (state = initialState, action) =>{
    switch(action.type){
        default : return [...state];
    }
}

export default products;