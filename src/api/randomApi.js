function randomApi(){

      //This url is for random API. api_key is development publick key from developer.giphy.com.
      let url = "https://api.giphy.com/v1/gifs/random?api_key=9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7";


      //Sending GET request and it response with url and title.
      const foo = async () => {
            let response = await fetch(url);
            let gifLink = await response.json();
            return ({url: gifLink.data.images.fixed_height.url, title: gifLink.data.title, realUrl:gifLink.data.url});
          }

      return foo()
}

export default randomApi;