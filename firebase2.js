// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVSdyNBHGmY0hGUxVGIfiNLdGc8VEMUrI",
  authDomain: "pharmakinaweb.firebaseapp.com",
  projectId: "pharmakinaweb",
  storageBucket: "pharmakinaweb.firebasestorage.app",
  messagingSenderId: "827057061039",
  appId: "1:827057061039:web:66192d71be48a4db0ee85a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to fetch products from Firestore
async function afficherProduits() {
  const querySnapshot = await getDocs(collection(db, "produits"));
  const container = document.getElementById("liste-produits");

  querySnapshot.forEach((doc) => {
    const produit = doc.data();
    const div = document.createElement("div");
    // div.classList.add("produit");
    div.className =
      "product-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg";
    div.innerHTML = ` <div class="bg-teal-50 p-4 flex justify-center">
    <svg
      class="h-32 w-32 text-teal-500"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14zM6 10h2v7H6zm4-3h2v10h-2zm4 6h2v4h-2zm4-2h2v6h-2z"></path>
    </svg>
  </div>
<div class="p-4">
<h3 class="text-lg font-semibold text-gray-900">${produit.nom}</h3>
<p class="text-gray-600 text-sm mb-2">${produit.description || ""}</p>
<div class="flex justify-between items-center mt-4">
  <span class="text-teal-600 font-bold">${
    produit.prix ? produit.prix + " €" : ""
  }</span>
  <button class="bg-teal-500 text-white px-3 py-1 rounded-md text-sm hover:bg-teal-600 transition duration-300">
    Ajouter
  </button>
</div>
</div>`;
    container.appendChild(div);
  });
}

afficherProduits();

import { addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const form = document.getElementById("Conteneur-principal");
const sendButton = document.getElementById("save-product");
const message = document.getElementById("message-confirmation");

sendButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const nouveauProduit = {
    nom: document.getElementById("product-name").value,
    description: document.getElementById("product-description").value,
    prix: parseFloat(document.getElementById("product-price").value),
    stock: parseFloat(document.getElementById("product-stock").value),
    categorie: document.getElementById("product-category").value,
  };

  try {
    await addDoc(collection(db, "produits"), nouveauProduit, {
      dateAjout: new Date(),
    });
    message.textContent = "✅ Produit ajouté avec succès !";
    form.reset();
  } catch (error) {
    console.error("Erreur lors de l'ajout :", error);
    message.textContent = "❌ Échec de l’ajout.";
  }
});
