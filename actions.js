let  count = 0;

export const increment = (value, el) => {
    count += value
    el.textContent = count
}

export const decrement = (value,el) =>{
    if (count <= 0){
        count = 0;
        el.textContent = count
    }else{
        count -=value
        el.textContent = count
    }
};

export const reset =(el) =>{
    count = 0
    el.textContent = count
}