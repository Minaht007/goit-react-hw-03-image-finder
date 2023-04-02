import Style from '../Style/Style.module.css';
export default function Buttom({ click }) {
  return (
    <button
      className={(Style.SearchForm_button, Style.SearchForm_button_label)}
      type="button"
      onClick={() => click()}
    >
      loadmore
    </button>
  );
}
