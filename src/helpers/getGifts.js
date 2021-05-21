


const giftGenerate=async(categorias)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorias)}&api_key=bq67XqAqjmmU8ut92eY8VZXN9TapR6aj&limit=10`;
    const res= await fetch(url);
    const {data}=await res.json();
    const gifs=data.map(img=>{
       return {
          id:img.id,
          title:img.title,
          url:img.images.downsized_large.url
       } 
    })
    console.log(gifs);
    
    return gifs;
}

export default giftGenerate;