// Array of random celeb

const celebrities = ['Tom Cruise', 'David Beckham', 'Jennifer Aniston', 'Halle Berry', 'Rihanna', 'Jim Carey', 'Ryan Gosling', 'Mila Kunis', 'Leonardo DiCaprio', 'Cristiano Ronaldo', 'Scarlett Johansson', 'Dwayne Johnson'];

// Array of initial start to statements

const startList = ['decided to',
               'thought it would be a good idea to',
               'happened to',
               'seemed to think it would be cool to'];

// Array of random everyday activities

const everydayList = ['hoover their house',
                  'walk their dog',
                  'clean their car',
                  'cook some dinner',
                  'take a shower',
                  'brush their teeth',
                  'take the bins out'];

// Array of ridiculous actions

const ridiculousList = ['whilst playing the flute',
                    'whilst wearing a nappy on their head',
                    'whilst drizzing chocolate sauce over themself',
                    'whilst trying to balance a melon on their head',
                    'whilst wearing a morph suit',
                    'whilst blowing up balloons',
                    'whilst juggling some oranges'];

// start of the overall function to generate the random text

const celebState = () => {

    // Funcion to generate a random number using the array length

    const randNum = (array) => {
        return Math.floor(Math.random() * array.length);
    }

};