export const MovUrl='https://api.themoviedb.org/3/';
export const Lang='language=ru-RU';
export const apiKey='api_key=e517fdd963d18169b695e97d2c1e3ff2';
export const imageOriginal='https://image.tmdb.org/t/p/original/'
export const imageW500='https://image.tmdb.org/t/p/w500/'

export const handleGenerateApi=(endpoint)=>{
    return `${MovUrl}${endpoint}?${apiKey}&${Lang}`
}

export const handleShortList=(arr)=>{
    if(arr.length>10){
        return arr.slice(0,5)
    }else {
        return arr
    }
}