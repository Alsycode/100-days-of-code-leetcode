
var canPlaceFlowers = function(flowerbed, n) {
    let length = flowerbed.length;
    let count  = 0;
    let i = 0;
    while(i < length){
        if(flowerbed[i] === 0){
            const leftplot = (i === 0) || (flowerbed[i - 1] === 0);
            const rightplot = (i === (length-1)) || (flowerbed[i + 1] === 0)
            if(rightplot && leftplot){
                flowerbed[i] = 1;
                i++
                count++
            }
        }
        i++
    }
    return count >= n
};
