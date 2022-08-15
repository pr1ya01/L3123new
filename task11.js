var array = []
    
    function add_to_array() {
       array.push(document.getElementById("input").value)
       document.getElementById("input").value = ""
    }

    function display_array(){
        resStr = "<hr/>"
        for (i in array){
            resStr += `Element ${i} = ${array[i]} <br/>`
        }
        console.log(array)
        document.getElementById("result").innerHTML = resStr
    }