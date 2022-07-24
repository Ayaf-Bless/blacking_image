import Page from 'classes/Page';
// import emailjs from '@emailjs/browser';

export default class About extends Page {
  constructor() {
    super({
      id: 'contact',
    });
  }
}

// function getData(e) {
//   e.preventDefault();
//   if (typeof window === 'undefined') {
//     const form = new FormData(document.querySelector('form'));
//     console.log(form);
//   }
// }

// getData();

// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs
//     .sendForm(
//       "service_3pz7abp",
//       "template_jzk50dh",
//       form.current,
//       "ZWdlX-m5Px-VM3K3U"
//     )
//     .then(
//       (result) => {
//         console.log("votre message a été envoyé avec succès");
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
//   e.target.reset();
// };
