const getMeme = () => {
    const words = {
        animals: ['льва', 'тигра', 'заяца', 'медведя', 'акулы', 'свиньи', 'волка'],
        feature: ['слабее', 'сильнее', 'умнее', 'глупее', 'стрессоустройчивее'],
        place: ['цирке', 'офисе', 'дикси', 'мфц', 'поликлинике', 'украине'],
        verb: ['выступает', 'работает', 'покупает', 'дерется', 'скандалит']
    }

    getWord = (array) => {
        return array[Math.floor(Math.random() * (array.length))];
    }

    let animal1 = getWord(words.animals);

    let animal2 = getWord(words.animals);

    const feature = getWord(words.feature);

    const place = getWord(words.place);

    const verb = getWord(words.verb);

    while (animal1 === animal2) {
        animal2 = words.animals[Math.floor(Math.random() * (words.animals.length))];
    }

    console.log(`Волк ${feature} ${animal1} и ${animal2}, но в ${place} не ${verb}.`);
}

getMeme();