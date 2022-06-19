// Create the footer elements

import * as menu from "./desktop-menu";


// Create footer navigation items
menu.menuArray.map(page => {
    return (
        <li>
            <a href={`./${page.name}`}></a>
        </li>
    )
})
