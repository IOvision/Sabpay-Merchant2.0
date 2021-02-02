import Merchant from './Merchant'

var testInventory: Merchant[]
var json = [
    {
        "PK": "",
        "SK": "",
        "name": "Merchant 1",
        "address": "Merchant 1 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 1,
        "latitude": 26.847170,
        "longitude": 80.943422,
        "tags": [ "Dairy", "Salt and Sugar"],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [
            {
                "key": "0",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                "title": "Dry Fruits Diwali1",
                "price": "Rs. 1000"
            },
            {
                "key": "2",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                "title": "Dry Fruits Diwali1",
                "price": "Rs. 1000"
            }
        ]
    },
    {
        "PK": "",
        "SK": "",
        "name": "Merchant 2",
        "address": "Merchant 2 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 2,
        "latitude": 28.737674,
        "longitude": 77.281759,
        "tags": [
            {
                "title": "Groceries & Staples",
                "image": "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg",
                "tag": "grocery"
            }
        ],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [
            {
                "key": "0",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                "title": "Dry Fruits Diwali2",
                "price": "Rs. 1000"
            },
            {
                "key": "2",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                "title": "Dry Fruits Diwali2",
                "price": "Rs. 1000"
            }
        ]
    },
    {
        "PK": "",
        "SK": "",
        "name": "Merchant 3",
        "address": "Merchant 3 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 3,
        "latitude": 28.364720,
        "longitude": 77.539512,
        "tags": [
            {
                "title": "Groceries & Staples",
                "image": "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg",
                "tag": "grocery"
            }
        ],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [
            {
                "key": "0",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                "title": "Dry Fruits Diwali3",
                "price": "Rs. 1000"
            },
            {
                "key": "2",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                "title": "Dry Fruits Diwali3",
                "price": "Rs. 1000"
            }
        ]
    },
    {
        "PK": "",
        "SK": "",
        "name": "Merchant 4",
        "address": "Merchant 4 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 4,
        "latitude": 26.913572,
        "longitude": 75.790567,
        "tags": [
            {
                "title": "Groceries & Staples",
                "image": "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg",
                "tag": "grocery"
            }
        ],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [
            {
                "key": "0",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                "title": "Dry Fruits Diwali4",
                "price": "Rs. 1000"
            },
            {
                "key": "2",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                "title": "Dry Fruits Diwali4",
                "price": "Rs. 1000"
            }
        ]
    },
    {
        "PK": "",
        "SK": "",
        "name": "Merchant 5",
        "address": "Merchant 5 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 5,
        "latitude": 25.599778,
        "longitude": 85.134688,
        "tags": [
            {
                "title": "Groceries & Staples",
                "image": "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg",
                "tag": "grocery"
            }
        ],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [
            {
                "key": "0",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                "title": "Dry Fruits Diwali5",
                "price": "Rs. 1000"
            },
            {
                "key": "2",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                "title": "Dry Fruits Diwali5",
                "price": "Rs. 1000"
            }
        ]
    }
]

testInventory = Merchant.itemsFromList(json)

export default testInventory