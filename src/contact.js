const contact = () => {
  const content = document.getElementById("content");

  content.innerHTML = `<h1>Contact</h1>
  <div id="card-container">
    <div class="card">
      <div class="card-title">Contact Us</div>
      <div class="card-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
          quaerat qui. Doloremque minima aspernatur saepe enim, totam velit
          perspiciatis modi aperiam consequatur id, reprehenderit harum vel eos!
          Placeat, possimus voluptates.</div>   
    </div>
  </div>`;
};

export { contact };
