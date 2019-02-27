import React from 'react';
const Header = (props) => (
        <div className="header">
          <a href="https://www.mynewsdesk.com/se/stories">
            <img className="" src="https://d9qz450atvita.cloudfront.net/assets/logo-34ab5297328e3a5fbc693073e2e704dc3f4c3a6b5c8ab06823e44d8c2961bbba.svg" />
          </a>
          <h1 className="header_title">{props.title}</h1>
        </div>
    );
Header.defaultProps = {
    title: "River of News"
}

export default Header;

