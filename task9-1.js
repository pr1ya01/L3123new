let task9 = () => {
    var intarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log(intarray.reduce((a,b) => a+b,0))
    console.log(intarray.reduce((a,b) => a*b,1))
}