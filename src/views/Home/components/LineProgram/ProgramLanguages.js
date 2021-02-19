const ProgramLanguages = [
    {
        name:  "Python" ,
        level: 1,
        image: "https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png",
    },
    {
        name: "C#",
        level: 1,
        image: "https://www.freeiconspng.com/uploads/c-logo-icon-18.png",
    },
    {
        name: "Java",
        level: 1,
        image: "https://image.flaticon.com/icons/png/512/226/226777.png",
    },
    {
        name: "JavaScript",
        level: 3.5,
        image: "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png",
    },
    {
        name:"Node.js",
        level: 1,
        image: "https://img.icons8.com/color/452/nodejs.png",
    },
    {
        name:"Ruby",
        level:1,
        image: "https://images.vexels.com/media/users/3/166485/isolated/preview/d4061b653e6ba02ad0afdc79e0315a25-ruby-programming-language-icon-by-vexels.png",
    },
    {
        name:"Rails",
        level:1,
        image: "https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/ruby-on-rails/PWairgiOpneHvkGJri7RVbtORKI2",
    },
    {
        name:"React.js",
        level: 2.5,
        image: "https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png",
    },
    {
        name:"React Native",
        level: 2.5,
        image: "https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png",
    },
    {
        name:"Git && Git Flow",
        level: 2.5,
        image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
        name:"HTML 5",
        level: 3,
        image: "https://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png",
    },
    {
        name:"CSS3",
        level: 3,
        image: "data:image/png;base64,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",
    },
    {
        name:"Inglês",
        level: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    },
    {
        name:"C",
        level: 1,
        image: "https://cdn.iconscout.com/icon/free/png-512/c-programming-569564.png",

    }
]

export default ProgramLanguages;