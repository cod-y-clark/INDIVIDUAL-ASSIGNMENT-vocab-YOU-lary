import renderToDom from '../../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="main-container">
    <div id="navbar"></div>
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
  </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
