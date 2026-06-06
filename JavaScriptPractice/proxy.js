let arr = [4,5,7,8,9,0,4,5]

// interviewer asked enable negative indexing in this array
// for enabling negative indexing we use proxy

function negativeIndex (arr){
    return new Proxy(arr,{
        get(target,prop){
            let index = Number(prop)
            if(index<0){
                return target[target.length + index]
            }
            return target[index]
            
        },
        set(target,prop,value){
            let index = Number(prop)
            if(index < 0){
                target[target.length + index ] = value
            }
            else{
                target[index] = value
            }
            return true
        }
    })
}

// console.log(negativeIndex(arr));
// let newArr = negativeIndex(arr)

// console.log(newArr[-5]=20);
// console.log(newArr);
// console.log(arr);


// password validation in this i want to create a proxy user but proxy user can not access the password field

let user = {
    name : " Anil Patel",
    age : 25,
    password : "@ap112001"
}


function proxyUser (user){
    return new Proxy(user,{
        get(target,prop){
            let stringProp = String(prop)
            let lowerCaseProp = stringProp.toLowerCase()
            if(lowerCaseProp === "password" ){
                throw new Error("Access Denied")
            }

            return target[lowerCaseProp]
        }
    })
}

console.log(proxyUser(user));
let newUser = proxyUser(user)
console.log(newUser.Name);

