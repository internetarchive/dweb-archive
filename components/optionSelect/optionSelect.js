import React from 'react';
//import PropTypes from 'prop-types';

/**
 * Renders a selectable option.
 * TODO CRAWLSELECT I18N
 *
 * @param object props
 *   @param object option option object
 *   @param string selectedLanguage selected language value
 *   @param function onClick click handler from OptionSelect instance
 *
 * @returns component stateless
 */
const Option = ({ option, selectedOption, onClick }) => (
  <li className={selectedOption.value === option.value ? 'selected' : null}>
    <a onClick={onClick} data-value={option.value}>
      {option.text}
    </a>
  </li>
);


/**
 * Presentational component
 * A dropdown to select an option (e.g. a crawl). Clicking/tapping the dropdown trigger
 * opens a dropdown list of options.
 *
 * @param array options - map of options
 * input object example:
 * [ { text: "Download all", value: "all" } ]
 * @param function onSelect - event handler
 * @param string selectedValue - option that is selected
 * @param string selectedText - text to show (optional, if not will find based on selectedValue
 *
 * @returns component
 */
class OptionSelect extends React.Component {
  constructor(props) {
    const { options, selectedValue } = props;
    super(props);
    this.options = options; // TODO Not sure why split out ?
    this.state = {
      selectedValue,
      dropdownOpen: false,
    };
    // this.onSelect = onSelect;

    ['toggleDropdown', 'selectOption'].forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  toggleDropdown(e) {
    e.preventDefault();
    // eslint-disable-next-line react/no-access-state-in-setstate
    const isOpened = !this.state.dropdownOpen;
    this.setState({ dropdownOpen: isOpened });
  }

  selectOption(e) {
    e.preventDefault();
    const selectedValue = e.target.dataset.value;

    this.setState({
      dropdownOpen: false,
      selectedValue,
    });
    this.props.onSelect(selectedValue);
  }

  render() {
    const { dropdownOpen } = this.state;
    const selectedOption = this.options.find(co => (co.value === this.state.selectedValue)) || this.options[0];
    const selectedText = this.props.selectedText || selectedOption.text; // Allow override of selected text
    return (
      <div className="option_select">
        <a onClick={this.toggleDropdown}>
          {selectedText}
        </a>
        <ul className={dropdownOpen ? 'visible' : 'notvisible'}>
          {
            this.options.map(co => (
              <Option
                key={`option_${co.value}`} // Note also works if value = undefined
                option={co}
                selectedOption={selectedOption}
                onClick={this.selectOption}
              />))}
        </ul>
      </div>
    );
  }
}

/*
//TODO CRAWLSELECT rework
LanguageSelect.defaultProps = {
  selectedLanguage: '',
};

//TODO CRAWLSELECT rework
LanguageSelect.propTypes = {
  languages: PropTypes.objectOf(PropTypes.shape({
    inEnglish: PropTypes.string,
    inLocal: PropTypes.string,
    flag: PropTypes.string,
  })).isRequired,
  selectedLanguage: PropTypes.string,
  onSelect: PropTypes.func,
};
*/
export default OptionSelect;
