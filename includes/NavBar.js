//navigation menu bar

export default function NavBar(){
    const currentPage = document.title;
    //console.log('ow:',window.outerWidth,' x oh: ',window.outerHeight);
    console.log('iw:',window.innerWidth,' x ih: ',window.innerHeight);

    const navigationMenu = `
        <div class="mobile-menu">
            <div class="subnav">
                <button class="subnavbtn"> [ Menu ] </button>
                <div class="subnav-content">
                    <a href='index.html'>Home</a>
                    <a href='favorites.html'>My Favorites</a>
                    <a href='developer.html'>Developer</a>
                    <a href='entrepreneur.html'>Entrepreneur</a>
                    <a href='employee.html'>Employee</a>
                    <a href='freelance.html'>Freelance</a>
                    <a href='build.html'>Carpenter</a>
                    <a href='photograph.html'>Photographer</a>
                    <a href='student.html'>Student</a>
                    <a href='contact.html'>Contact</a>
                </div>
            </div>
        </div>
        <div class="bar-menu">
            <a href='index.html'>Home</a>
            <a href='favorites.html'>My Favorites</a>
            <div class="subnav">
                <button class="subnavbtn">Professional</button>
                <div class="subnav-content">
                    <a href='developer.html'>Developer</a>
                    <a href='entrepreneur.html'>Entrepreneur</a>
                    <a href='employee.html'>Employee</a>
                    <a href='freelance.html'>Freelance</a>
                </div>
            </div> 
            <div class="subnav">
                <button class="subnavbtn">Personal</button>
                <div class="subnav-content">
                    <a href='build.html'>Carpenter</a>
                    <a href='photograph.html'>Photographer</a>
                    <a href='student.html'>Student</a>
                </div>
            </div>       
            <a href='contact.html'>Contact</a>
        </div>
    `;
    return navigationMenu;
} 