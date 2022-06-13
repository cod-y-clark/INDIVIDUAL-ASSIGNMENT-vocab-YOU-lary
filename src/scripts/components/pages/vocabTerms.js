import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const showCards = (array) => {
  clearDom();

  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Tech category: ${item.language_tech}</h6>
          <p class="card-text">${item.definition}</p>
          <i id="edit-card-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-card-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>
      `;
    });
    renderToDom('#store', domString);
  }
};

export default showCards;
