function rectangle(values , x , y){

    let width = values.x - x
    let height = values.y - y

    return({x,y,width,height})
}

export default rectangle