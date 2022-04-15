var links = {
    setColor: function(color) {
        // var links = document.querySelectorAll('a:not(#specification)');
        // var i = 0;
        // while(i < links.length) {
        //     links[i].style.color = color; // 오타: white->'white'
        //     i++;
        // }
        $('a:not(#specification)').css('color', color);
    }
};
var body = {
    setColor: function(color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor: function(color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
};
function darkMode(self) {
    var target = document.querySelector('body')
    if(self.value === 'dark') {
        body.setBackgroundColor('black');
        body.setColor('white');
        self.value = 'light';
        links.setColor('white');
    } else {
        body.setBackgroundColor('white');
        body.setColor('black');
        self.value = 'dark';
        links.setColor('black');
    }
}