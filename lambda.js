exports.handler = (event, context, callback) => {

var userInput = event.messages;
    if(userInput == "hi" || userInput == "hey" || userInput == "hello"|| userInput == "Hi"|| userInput == "Hey"){
        callback(null, 'Hello User');
    }
    else if(userInput == "Weather"|| userInput == "what is the weather" ||userInput == "weather" ){
        callback(null, 'Its cold today');
    }
    else if(userInput == "school"|| userInput == "university"|| userInput == "University"|| userInput == "School"){
        callback(null, 'NYU Tandon');
    }
    else if(userInput == "course"|| userInput == "Course"){
        callback(null, 'Cloud Computing');
    }
    else if(userInput == "GPA"|| userInput == "gpa"){
        callback(null, 'Average');
    }
    else if(userInput == "bye"|| userInput == "Bye"){
        callback(null, 'Bye');
    }
    else{
        callback(null, 'I can only understand -\n1) hi, hey, hello\n2) weather\n3) school\n4) GPA\n5) course\n6) bye');
    }
};
