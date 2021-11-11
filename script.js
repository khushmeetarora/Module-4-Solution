
(function () {

    var names = ["Sanjay", "Jaspreet", "Joy", "Jack", "Neelu", "Aaiesha", "Khush", "Jaswinder", "Dilman", "Jimmy"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();
    
    