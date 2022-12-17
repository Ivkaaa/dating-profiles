const data = [
    {
        name: 'Ivan Jokic',
        age: 30,
        gender: 'male',
        lookingFor:'female',
        location: 'Belgrade',
        image:'https://randomuser.me/api/portraits/men/18.jpg'
    },
    {
        name: 'Ivana Karadzic',
        age: 25,
        gender: 'female',
        lookingFor:'male',
        location: 'Belgrade',
        image:'https://randomuser.me/api/portraits/women/18.jpg'
    },
    {
        name: 'Natasa Ilic',
        age: 34,
        gender: 'female',
        lookingFor:'male',
        location: 'Novi Sad',
        image:'https://randomuser.me/api/portraits/women/8.jpg'
    },
    {
        name: 'Nikola Misic',
        age: 34,
        gender: 'male',
        lookingFor:'male',
        location: 'Novi Sad',
        image:'https://randomuser.me/api/portraits/men/8.jpg'
    },
    {
        name: 'Aleks Krstic',
        age: 29,
        gender: 'male',
        lookingFor:'female',
        location: 'Nis',
        image:'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
        name: 'Aleksandra Malisic',
        age: 23,
        gender: 'female',
        lookingFor:'male',
        location: 'Nis',
        image:'https://randomuser.me/api/portraits/women/12.jpg'
    },
    {
        name: 'Alisa Peric',
        age: 38,
        gender: 'female',
        lookingFor:'male',
        location: 'Belgrade',
        image:'https://randomuser.me/api/portraits/women/28.jpg'
    },
    {
        name: 'Rade Jankovic',
        age: 34,
        gender: 'male',
        lookingFor:'female',
        location: 'Belgrade',
        image:'https://randomuser.me/api/portraits/men/28.jpg'
    },
];

const profiles = profileIterator(data);

// next profile
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(){
    const currentProfile = profiles.next().value

    if (currentProfile !== undefined) {
        //prikaz profila
        document.getElementById('profile-display').innerHTML = 
        `<ul class='list-group border border-info border-2 p-4 text-center'>
            <li class='list-group-item'>
                Hi, my name's <span class='fw-bold text-info'>${currentProfile.name}</span>.
            </li>
            <li class='list-group-item'>
                I'm <span class='fw-bold text-info'>${currentProfile.age}</span> years old.
            </li>

            <li class='list-group-item'>
                I'm <span class='fw-bold text-info'>${currentProfile.gender}</span>, and I'm looking for <span class='fw-bold text-info'>${currentProfile.lookingFor}</span>.
            </li>
            <li class='list-group-item'>
                Location: <span class='fw-bold text-info'>${currentProfile.location}</span>
        </li>
        </ul>`

        //prikaz fotografije profila
        document.getElementById('image-display').innerHTML = `
        <img class='' src = '${currentProfile.image}' alt = 'Image profile'>
        `
    } else {
        //window.location.reload()
        const note = document.getElementById('note');
        const div = document.createElement('div');
        div.className = 'note';
        div.innerHTML = `Sorry, we don't have more profiles!`;
        div.style.border = '2px solid red';
        div.style.padding = '5px';
        note.append(div)
    }

    
}

// pravim profile iterator
function profileIterator(profiles){
    let nextIndex = 0; //nas counter

    return {
        next: function(){
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false } :
            { done: true }
        }
    }
}

//kada kliknemo na dugme potrebno je da dobijemo novi profil, tj treba da se iterator promeni


