import React from "react";

function Footer() {
    return (
        <footer>
            <div className="row">
                <ul className="social-links">
                    {/*target = "_blank" will open link to new tab*/}
                    <li><a href="https://github.com/garcian5/ToDoList" rel="noopener noreferrer" target="_blank" title="Nheljee's Github"><ion-icon name="logo-github"></ion-icon></a></li>
                    <li><a href="https://www.linkedin.com/in/nheljee-rose-garcia/" rel="noopener noreferrer" target="_blank" title="Nheljee's LinkedIn"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                    <li><a href="https://nheljee-dice-game.netlify.app/" rel="noopener noreferrer" target="_blank" title="Other Websites"><ion-icon name="apps-outline"></ion-icon></a></li>
                </ul>
            </div>
            <div className="row">                
                <p>
                    Created by Nheljee Garcia.
                </p>
                <div className="credits">
                    Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai </a>
                    from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                </div>
            </div>
        </footer>        
    )
}

export default Footer;