"use strict";

const commentsContainer = document.querySelector(".comments-container");
const comment = document.querySelector(".comments");
const userImage = document.querySelector(".user-img");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const comments = [
  {
    name: "Sarah Doe",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio illum, eos vitae a fuga amet possimus hic odit autem iste enim nihil, facere sunt pariatur architecto nisi, alias ullam corrupti veritatis consequatur aperiam velit aspernatur. Asperiores iste autem ex quidem exercitationem, aperiam quas voluptates placeat officia fugiat dolorum ea.",
  },
  {
    name: "Roberta Nida",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/42.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio illum, eos vitae a fuga amet possimus hic odit autem iste enim nihil, facere sunt pariatur architecto nisi, alias ullam corrupti veritatis consequatur aperiam velit aspernatur. Asperiores iste autem ex quidem exercitationem, aperiam quas voluptates placeat officia fugiat dolorum ea.",
  },
  {
    name: "Rad Waslnik",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio illum, eos vitae a fuga amet possimus hic odit autem iste enim nihilweqwe  q     qqwq   ww w    eqweqw, facere sunt pariatur architecto nisi, alias ullam corrupti veritatis consequatur aperiam velit aspernatur. Asperiores iste autem ex quidem exercitationem, aperiam quas voluptates placeat officia fugiat dolorum ea.",
  },
  {
    name: "Cha Node",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio illum, eos vitae a fuga amet possimus hic odit autem iqw eqwe w eqwe     qw  este enim nihil, facere sunt pariatur architecto nisi, alias ullam corrupti veritatis consequatur aperqw eqw e w e iam velit aspernatur. Asperiores iste autem ex quidem exercitationem, aperiam quas voluptates placeafew fwe fwe eqweqweqw et officia fugiat dolorum ea.",
  },
  {
    name: "Radick Waslnik",
    position: "Nurse",
    photo: "https://randomuser.me/api/portraits/men/20.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio illum, eos vitae a fuga amet possimus hic odit autem iste dasda sad asda sdas das das daenim nihil, facere sunt pariatur architecto nisi, alias ullam corrupti veritatis consequatur aperiam velit aspernatur. Asperiores iste autem ex quidem exercitationem, aperiam quas voluptates placeat officia fugiat dolorum ea.",
  },
];

let idx = 1;

const updateComments = () => {
  const { name, position, photo, text } = comments[idx];

  comment.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > comments.length - 1) idx = 0;
};

setInterval(updateComments, 10000);
