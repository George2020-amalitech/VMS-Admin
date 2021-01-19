import React from 'react';
import logo from './Logo.png';


const Dashboard  = ({handleLogOut}) => {
    return (
        <section className='dash'>
            <nav>
                <img src={logo} alt="Logo" />
                <h2>Welcome to Admin DashBorad</h2>
                <button onClick={handleLogOut}>Log Out</button>
            </nav>
            <div class="container">
            <nav class="navbar">
                <div class="navbar__left">
                <a href="#">Visitors</a>
                </div>
            </nav>

            <main>
                
            </main>

            <div id="sidebar">
                <div class="sidebar__menu">
                <div class="sidebar__link active_menu_link">
                    <i class="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <div class="sidebar__link">
                    <i class="fa fa-user-secret" aria-hidden="true"></i>
                    <a href="#">Visitor</a>
                </div>
                <div class="sidebar__link">
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <a href="#">Employees</a>
                </div>
                <div class="sidebar__link">
                    <i class="fa fa-wrench"></i>
                    <a href="#">Admin</a>
                </div>
                <div class="sidebar__link">
                    <i class="fa fa-archive"></i>
                    <a href="#">Contacts</a>
                </div>
                <div class="sidebar__logout" onClick={handleLogOut}>
                    <i class="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
                </div>
            </div>
            </div>
        </section>





      );
};
 
export default Dashboard ;