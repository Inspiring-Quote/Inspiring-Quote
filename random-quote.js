var pickRandomQoute = function(quote){
    return quote[Math.floor(Math.random()*quote.length)];
};

   
$(document).ready(function() {
    $("button").click(function(){ 


       $("#quoteq").click();

    });
       $("#quoteq").click(function(){ 
           var br='<br>';
        var quotes=[
        'Push yourself,'+br+'because no one else'+br+' is going to do it for you',
        'Don’t wait for opportunity.' +br+'Create it.',
        'The key to success ' +br+'is to focus on goals,' +br+' not obstacles.',
        'There will be changes'+br+' for the better.'+br+'Just wait for a while',
        'Take a small step today ' +br+'to succed tomorrow',
        'You\'re lucky to have' +br+'such good friends',
        'Wisdom is not ' +br+'a product of schooling,' +br+'but of the lifelong attempt ' +br+' to acquire it',
        'All the world is a laboratory ' +br+'to the inquiring mind. ' +br+'Explore it',
        'You don\'t have to' +br+' be brave to start,' +br+' but you have to start' +br+' to be great',
        'Smooth seas ' +br+'do not make skillful sailors',
        'Think of difficulties ' +br+'as new opportunities',
        'Chin up.' +br+' Get on with living and loving. ' +br+'You don\'t have forever.',
        'Try to do something new' +br+'to train your brain ' +br+'and break routines',
        'It\'s high time'+br+'to take up sports',
        'Love is a better teacher '+br+'than duty',
        'Anyone who stops learning '+br+' is old,  '+br+'whether at twenty or eighty',
        'Take a break '+br+'and treat yourself. '+br+'You\'ve deserved it',
        'You\'re awesome.' +br+'Just so you know',
        'Double struggle'+br+ '=' +br+ 'Double win',
        'Don\'t let you doubt' +br+ 'bring you down',
        'Keep on trying'+br+ 'And you\'ll see the result '+br+ 'soon',
        'Sometimes the best way'+br+ 'to solve the problem'+br+ 'is just to let it go',
        'Help others'+br+ 'It will come back to you'+br+ 'tenfold',
        'Learn new skills'+br+ 'to enrich your routine',
        'Decorate your room'+br+ 'It\'ll inspire you',
        'Call your old friend',
        'Make some time'+br+ 'for yourself',
        'Sometimes later'+br+ 'becomes never...',
        'To avoid procrastination'+br+ 'Just start small',
        'There\'s the light'+br+ 'at the end of the tunnel',
        'Wake up with determination.'+br+ ' Go to bed with satisfaction.',
        'Little things'+br+'make big days.'

        ];
           var randomQuote=pickRandomQoute(quotes);
           $("#quoteq").html(randomQuote);
           $('.quote').css('color', 'black');


       });
    });

//using timestr '10:33:21', could also be '10-33-21'
 timestr="22:54";


var dat = new Date(), time = timestr.split(/\:|\-/g);
dat.setHours(time[0]);
dat.setMinutes(time[1]);




