import P from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { FaAngleDown, FaAngleLeft, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Container } from './styles';
import navLinks from './navLinks';

export function Navbar({ toggleTheme }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { title } = useTheme();
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      headerRef.current.classList.toggle('sticky', window.scrollY > 0);
    });
  }, []);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const { logo, links } = navLinks;

  return (
    <Container>
      <nav ref={headerRef}>
        <span className="logo">
          <a href="#">{logo.title}</a>
        </span>
        <ul className="menu">
          {links?.map((link) => {
            return (
              <li key={link.title}>
                <a className="btn" href={link.link}>
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
        <button className="btn_menu" onClick={handleOpenMenu}>
          {isOpenMenu ? <FaAngleDown /> : <FaAngleLeft />}
        </button>
        <button className="btn_theme" onClick={toggleTheme}>
          {title === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        {isOpenMenu && (
          <div className="menu--mobile">
            <ul>
              {links?.map((link) => {
                return (
                  <li key={link.title}>
                    <a className="btn" href={link.link}>
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </Container>
  );
}

Navbar.propTypes = {
  toggleTheme: P.func,
};
