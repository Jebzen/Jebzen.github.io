function assignment(str){
    console.log();
    console.warn(str);
    console.log();
}

assignment("What is Asynchronous JavaScript?");


setTimeout(myFunction, 3000);

function myFunction() {
    console.warn("Delayed by 3 seconds")
}


assignment("What is a promise?");


const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
    
        request.addEventListener('readystatechange', () => {
    
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4){
                reject('could not fetch the data');
            }
        
        });
        
        request.open('GET', resource);
        request.send();
    });
  
};
  
getTodos('json/luigi.json')
    .then(data => {
        console.log('promise 1 resolved:', data);
        return getTodos('json/mario.json');
    })
    .then(data => {
        console.log('promise 2 resolved:', data);
        return getTodos('json/shaun.json');
    })
    .then(data => {
        console.log('promise 3 resolved:', data);
    })
    .catch(err => {
        console.log('promise rejected:', err);
    }
);


assignment("Show an example of a XMLHTTP Request and how to see the different states of the request?");

/*
0 	UNSENT 	
1 	OPENED 	
2 	HEADERS_RECEIVED 	
3 	LOADING 
4 	DONE


Informational responses (100–199)
Successful responses (200–299)
Redirection messages (300–399)
Client error responses (400–499)
Server error responses (500–599)
*/



const getTodos1 = (callback) => {

    const request = new XMLHttpRequest();
  
    request.addEventListener('readystatechange', () => {
        //console.log(request.readyState);
        //console.log(request.status);
  
        if(request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText);
        } else if (request.readyState === 4){
            callback('could not fetch the data', undefined);
        }

    });
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
  
};
  
console.log(1);
console.log(2);
  
getTodos1((err, data) => {
    console.log('callback function fired');
    if(err){
        console.log(err);
    } else {
        //console.log(data);
    }
});
  
console.log(3);
console.log(4);


assignment("What is the fetch API?");


fetch('json/luigi.json').then(response => {
    console.log(response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

const getTodos3 = async () => {

    let response = await fetch('json/luigi.json');
    let data = await response.json();
    return data;
  
};

getTodos3()
  .then(data => console.log('resolved:', data));

assignment("Demonstrate and discuss at least 2 different JS design patterns.");