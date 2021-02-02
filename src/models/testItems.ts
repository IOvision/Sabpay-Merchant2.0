import Item from './Item'

var a: Item[]
var json = [
    {
        "PK": "1",
        "SK": "1",
        "name": "Rich Tomato Ketchup",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": 150,
                "onDiscount": false,
                "discountPrice": 0
            },
            {
                "key": 1,
                "name": "500ml",
                "price": 300,
                "onDiscount": true,
                "discountPrice": 250
            }
        ]
    },
    {
        "PK": "2",
        "SK": "2",
        "name": "Rich Tomato Maggi 2",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup 2",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": 150
            },
            {
                "key": 1,
                "name": "500ml",
                "price": 300
            }
        ]
    },
    {
        "PK": "3",
        "SK": "3",
        "name": "Rich Tomato Maggi 3",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": 150
            },
            {
                "key": 1,
                "name": "500ml",
                "price": 300
            }
        ]
    },
    {
        "PK": "4",
        "SK": "4",
        "name": "Rich Tomato Maggi 4",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": 150
            },
            {
                "key": 1,
                "name": "500ml",
                "price": 300
            }
        ]
    },
    {
        "PK": "5",
        "SK": "5",
        "name": "Rich Tomato Maggi 5",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": 150
            },
            {
                "key": 1,
                "name": "500ml",
                "price": 300
            }
        ]
    },
    {
        "PK": "6",
        "SK": "6",
        "name": "Rich Tomato Maggi 6",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": 150
            },
            {
                "key": 1,
                "name": "500ml",
                "price": 300
            }
        ]
    },
    {
        "PK": "7",
        "SK": "7",
        "name": "Rich Tomato Maggi 7",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": 150
            },
            {
                "key": 1,
                "name": "500ml",
                "price": 300
            }
        ]
    },
    {
        "PK": "8",
        "SK": "8",
        "name": "Rich Tomato Maggi 8",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": 150
            },
            {
                "key": 1,
                "name": "500ml",
                "price": 300
            }
        ]
    },
    {
        "PK": "9",
        "SK": "9",
        "name": "Rich Tomato Maggi 9",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": 150
            },
            {
                "key": 1,
                "name": "500ml",
                "price": 300
            }
        ]
    },
    {
        "PK": "10",
        "SK": "10",
        "name": "Rich Tomato Maggi 10",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": 150
            },
            {
                "key": 1,
                "name": "500ml",
                "price": 300
            }
        ]
    }
]

a = Item.itemsFromList(json)

export default a