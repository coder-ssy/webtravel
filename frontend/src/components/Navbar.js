import React, { Component } from 'react';
import './NavbarStyles.css';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import SignUpModal from './SignUpModal'; // 모달 컴포넌트 임포트

class Navbar extends Component {
  state = {
    clicked: false,
    showModal: false, // 모달 상태 추가
  };

  handleClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">사랑愛에 더하다</h1>

        <div className="menu-icons" onClick={this.handleClicked}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button onClick={this.handleModal}>Sign Up</button>
        </ul>
        {this.state.showModal && <SignUpModal handleModal={this.handleModal} />}
      </nav>
    );
  }
}

export default Navbar;
