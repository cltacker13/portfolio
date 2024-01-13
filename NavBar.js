//navigation menu bar
document.getElementById("navbar").innerHTML = `
    <a href='index.html'>Home</a>
    <a href='favorites.html'>My Favorites</a>
    <div class="subnav">
        <button class="subnavbtn">Professional</button>
        <div class="subnav-content">
            <a href='employee.html'>Employee</a>
            <a href='freelance.html'>Freelance</a>
            <a href='student.html'>Student</a>
        </div>
    </div> 
    <div class="subnav">
        <button class="subnavbtn">Personal</button>
        <div class="subnav-content">
            <a href='build.html'>Builder</a>
            <a href='photograph.html'>Photographer</a>
        </div>
    </div>       
    <a href='contact.html'>Contact</a>
`;