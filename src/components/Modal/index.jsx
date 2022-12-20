import P from 'prop-types';
import ReactDOM from 'react-dom';
import { Container } from './styles';

export function Modal({ children, toggleShowModal, title }) {
  return typeof window !== 'undefined'
    ? ReactDOM.createPortal(
        <Container>
          <div id="fade" onClick={toggleShowModal}></div>
          <div id="modal">
            <div className="modal_header">
              <h3>{title}</h3>
              <button className="btn btn_close_modal" onClick={toggleShowModal}>
                Fechar
              </button>
            </div>
            <div className="modal_body">{children}</div>
          </div>
        </Container>,
        document.getElementById('portal-root'),
      )
    : null;
}

Modal.propTypes = {
  children: P.node.isRequired,
  toggleShowModal: P.func,
  title: P.string,
};
