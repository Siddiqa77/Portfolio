
const cardsData = [
  {
    title: "Achievement",

    image: "images/Digital.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buyUrlUrl: "https://www.facebook.com/groups/819849932823705/permalink/986380156170681/"
  },
  {
    title: "Achievement",
    price: "$20",
    image: "images/khizar.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buyUrl: "#"
  },
  {
    title: "Achievement",
    price: "$15",
    image: "images/zainab.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buyUrl: "https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/441463939_7539370319453470_6292553841287790090_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=c0pQT54MepgQ7kNvgHF-Tug&_nc_ht=scontent.fkhi2-3.fna&oh=00_AYDolEC5UMpBi76fcvEnCm-fp9B792HjoqIhOxvLJkWcRg&oe=664AFCF7"
  },
  {
    title: "Achievement",
    price: "$15",
    image: "https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/436401676_7437513939639109_4101372668472348087_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=is6z3hXIfOoQ7kNvgEDCwEP&_nc_ht=scontent.fkhi2-3.fna&oh=00_AYAcOtBzqZmh4s-w9opnscli50ymGbMxSaPGb8vToKD_mQ&oe=664B0AE2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buyUrl: "https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/436401676_7437513939639109_4101372668472348087_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=is6z3hXIfOoQ7kNvgEDCwEP&_nc_ht=scontent.fkhi2-3.fna&oh=00_AYAcOtBzqZmh4s-w9opnscli50ymGbMxSaPGb8vToKD_mQ&oe=664B0AE2"
  },
];
// Function to generate cards dynamically
function generateCards() {
  const cardContainer = document.getElementById("cardContainer");

  cardsData.forEach((data) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const title = document.createElement("h2");
    title.textContent = data.title;

    const image = document.createElement("img");
    image.src = data.image;
    image.alt = data.title;



    const description = document.createElement("p");
    description.textContent = data.description;

    const buyButton = document.createElement("a");
    buyButton.href = data.buyUrl;
    buyButton.textContent = "See Now";
    buyButton.classList.add("buy-button");

    cardContent.appendChild(title);
    card.appendChild(image); // Image appended to the card

    cardContent.appendChild(description); // Price appended below the image
    cardContent.appendChild(buyButton);
    card.appendChild(cardContent);
    cardContainer.appendChild(card);
  });
}

// Call the function to generate cards when the page loads
window.onload = generateCards;


// -------------------------------------Contact us------------------------------------


document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById('contactForm');
  var messageDiv = document.getElementById('message');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    let message = document.getElementById('message').value;


    // Validate form fields
    if (name === '' || email === '' || message) {

      //show message in alert box
      messageDiv.textContent = '';

      alert('Form submitted successfully!');
      // Clear form fields after submission
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }
  });
});
