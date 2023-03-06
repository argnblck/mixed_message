const getMeme = () => {
    const words = {
        animals: ['льва', 'тигра', 'заяца', 'медведя', 'акулы', 'свиньи', 'волка'],
        feature: ['слабее', 'сильнее', 'умнее', 'глупее', 'стрессоустройчивее'],
        place: ['цирке', 'офисе', 'дикси', 'мфц', 'поликлинике', 'украине'],
        verb: ['выступает', 'работает', 'покупает', 'дерется', 'скандалит']
    }

    let animal1 = words.animals[Math.floor(Math.random() * (words.animals.length))];

    let animal2 = words.animals[Math.floor(Math.random() * (words.animals.length))];

    const feature = words.feature[Math.floor(Math.random() * (words.feature.length))];

    const place = words.place[Math.floor(Math.random() * (words.place.length))];

    const verb = words.verb[Math.floor(Math.random() * (words.verb.length))];

    while (animal1 === animal2) {
        console.log(animal2);
        animal2 = words.animals[Math.floor(Math.random() * (words.animals.length))];
    }

    console.log(`Волк ${feature} ${animal1} и ${animal2}, но в ${place} не ${verb}.`);
}

getMeme();