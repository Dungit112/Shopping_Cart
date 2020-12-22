 var initialState = 
[
    {
        id : 1,
        name : ' Iphone 7',
        image:"",
        description : ' San pham apple',
        price: 500,
        inventory: 10
    },
    {
        id : 2,
        name : ' Iphone 10',
        image:"",
        description : ' San pham apple',
        price: 5000,
        inventory: 4
    },
    {
        id : 3,
        name : ' Sam Sung',
        image:"",
        description : ' San pham sam sung',
        price: 800,
        inventory: 8
    },
];

const products = (state = initialState, action) =>{
    switch(action.type){
        default : return [...state];
    }
}

export default products;