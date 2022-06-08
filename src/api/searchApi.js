function searchApi(props){

      //This url is for search API. api_key is development publick key from developer.giphy.com. and &q is searching tag. and &limit is count of response gif.
      let url = `https://api.giphy.com/v1/gifs/search?api_key=9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7&q=${props}&limit=21`;

      //Sending Get request. it returns gifs Array.
      const foo = async () => {
            let response = await fetch(url);
            let gifs = await response.json();

            return gifs;
          }
      return foo()
}

export default searchApi;