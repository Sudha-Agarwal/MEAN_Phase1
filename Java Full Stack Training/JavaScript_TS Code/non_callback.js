
//without callback
function first(){
    setTimeout(function(){
        console.log(1);
    },1000);
}


function second(){
    console.log(2);
}


//first();
//second();


//with callback

function first_callback(callback1){
    //simulate code delay

    setTimeout(() => {
        console.log(1);
        callback1();
    }, 1000);

}
first_callback(() => console.log(2));