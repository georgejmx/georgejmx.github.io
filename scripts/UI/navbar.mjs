export function addNavbar() {
  const navbar = document.createElement('nav');
  navbar.id = 'navbar';
  navbar.innerHTML = `
    <div><img id="nav-img" src="images/profile.jpg" alt="profile img"/></div>
    <div class="dropdown">
      <button class="nav-btn"><a href="index.html">Home</a></button>
      <div class="dropdown-content">
        <a class="nav-link" href="index.html#home-section">Welcome</a>
        <a class="nav-link" href="index.html#education">Certificates</a>
        <a class="nav-link" href="index.html#web-projects">Websites</a>
        <a class="nav-link" href="index.html#contact">Contact</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="nav-btn"><a href="skills.html">Skills</a></button>
      <div class="dropdown-content">
        <a class="nav-link" href="skills.html#welcome-section">About</a>
        <a class="nav-link" href="skills.html#projects">Projects</a>
        <a class="nav-link" href="skills.html#skills">Key Skills</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="nav-btn"><a href="interests.html">Interests</a></button>
      <div class="dropdown-content">
        <a class="nav-link" href="interests.html#reviews-section">
        Media Reviews</a>
        <a class="nav-link" href="interests.html#sydneycoastline">Images</a>
        <a class="nav-link" href="interests.html#btn-section">More Images</a>
      </div>
    </div>
  `;
  document.getElementById('header').appendChild(navbar);
  return navbar;
}
