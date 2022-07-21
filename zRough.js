// console.log(validator.isURL("www.google.com"))
// console.log(validator.isURL("https://www.google.com"))
// console.log(validator.isURL("functionup.org"))
// console.log(validator.isURL("functionup.orgi12345"))
// console.log(validator.isURL("123"))
// console.log(validator.isURL("https://www.amazon.com"))
// console.log(validator.isURL("https://www.amazon.commmmmmmmmmm"))
// console.log(validator.isURL("https://wwwwwwwwwwww.amazon.commmmmmmmmmm"))
// console.log(validator.isURL("https://xyz.amazon.commmmmmmmmmm"))

// console.log(validUrl.isUri("www.google.com"))
// console.log(validUrl.isUri("https://www.google.com"))
// console.log(validUrl.isUri("functionup.org"))
// console.log(validUrl.isUri("functionup.orgi12345"))
// console.log(validUrl.isUri("123"))

// let access = false; //verifying with axios call
// await axios.get(longUrl)
//             .then((response)=>{ if(response.status===200 || response.status===201) access = true;})
//             .catch((error)=> console.log(error));
// if(access === false) return res.status(400).send({status:false, message:`${longUrl} is not working currently`}) //allclear except for amazon type url.


// "redis": "^4.2.0",
//"^3.1.2", will work

/*
JSON vs JS Objects
JSON: 
        key must be in string && they must be withing double coarse not in single coarse,
        value can't be a function,
        if string value written then it should be also in double coarse not in single coarse.
JS Objects: key in string is optional, value can be a function;
*/
const JSON1 = {"a":1, "b":2};
const obj1 = {x:1, y:2};
//JSON.stringify(varname) converts object as well as JSON into string
// console.log(typeof JSON.stringify(JSON1));
// console.log(JSON.stringify(JSON1).split(""));

//JSON.parse(varname) to convert string into JSON, but not only proper formarts of strings are convertible into JSON.
const str1 = "{p:1, q:2, c:3}";     console.log(str1)
const str2 = '{"p":1, "q":2, "c":3}';     console.log(str2)
const str3 = "{'p':1, 'q':2, 'c':3}";     console.log(str3) //due to key name in single string unavle to covert it in json
// const j1 = JSON.parse(str1);        console.log(j1)
const j1 = JSON.parse(str2);        console.log(j1, typeof j1)