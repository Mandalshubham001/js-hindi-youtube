// reduce()............

let myNum = [1,2,3,4,5]

const newNum = myNum.reduce( (acc , curval) => (
   // console.log(`value in acc:- ${acc} and curval:- ${curval}`),
      acc + curval), 0)

//console.log(newNum);

//acc = accumulator , curval = currentvalue

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const shopingCart = [
    {
        item : "js course",
        itemPrice : 2000
    },
    {
        item : "python course",
        itemPrice : 200
    },
    {
        item : "dataScince course",
        itemPrice : 20000
    }
]

//console.log(shopingCart);

const totalPayamount = shopingCart.reduce( (acc , course) => (acc + course.itemPrice),0)

console.log(totalPayamount);
