// console.log(new XMLHttpRequest())

//method - open(for request initialize),
//         send(for send request), 
//         onload(for process data), 
//         onerror(for detect error)

//property - response(for showing server send response after getting request),


const makeRequest = (method,url) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method,url)
    xhr.onload = () => {
        const data = xhr.response;
        console.log(JSON.parse(data));
        document.querySelector('body').innerHTML= data;
    }

    xhr.onerror = (res) => {
        alert("Error is occurs on API URL");
        console.log("Error is occurs on API URL");
    }
        
    xhr.send();
}

const getData = () => {
   makeRequest("GET","https://jsonplaceholder.typicode.com/posts");
}

getData();