import React from 'react';
//import PropTypes from 'prop-types';

/**
 * Renders a selectable option.
 * TODO-CRAWLSELECT I18N
 *
 * @param object props
 *   @param object option option object
 *   @param boolean selected if should mark selected
 *   @param function onClick click handler from OptionSelect instance
 *
 * @returns component stateless
 */
class Option extends React.Component {
  constructor(props) {
    super(props);
    this.selectOption = this.selectOption.bind(this);
  }

  // This intermediate function is to grab the value since we cant store in 'data-value' if its a object
  selectOption(e) {
    e.preventDefault();
    this.props.onClick(this.props.option.value);
  }
  render() {
    return (
      <li className={this.props.selected ? 'selected' : null}>
        <a onClick={this.selectOption} data-value={this.props.option.value}>
          {this.props.option.text}
        </a>
      </li>
    );
  }
}

/**
 * Presentational component
 * A dropdown to select an option (e.g. a crawl). Clicking/tapping the dropdown trigger
 * opens a dropdown list of options.
 *
 * @param array options - map of options
 * input object example:
 * [ { text: "Download all", value: "all" } ]
 * @param function onSelect - event handler
 * @param string selectedValue - option that is selected - may be undefined, but only if selectedText provided
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
      selectedValue, // maybe undefined
      dropdownOpen: false,
    };
    // this.onSelect = onSelect;

    ['toggleDropdown', 'selectOption'].forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  toggleDropdown(e) {
    e.preventDefault();
    this.setState(state => ({ dropdownOpen: !state.dropdownOpen }));
  }

  selectOption(selectedValue) {
    this.setState({
      dropdownOpen: false,
      selectedValue,
    });
    this.props.onSelect(selectedValue);
  }

  render() {
    const { dropdownOpen } = this.state;
    const selectedOption = this.options.find(co => (co.value === this.state.selectedValue));
    const selectedText = this.props.selectedText || (selectedOption && selectedOption.text); // Allow override of selected text
    return (
      <div className="option_select">
        <a onClick={this.toggleDropdown}>
          {selectedText}
        </a>
        <ul className={dropdownOpen ? 'visible' : 'notvisible'}>
          {
            this.options.map(co => (
              <Option
                key={`option_${co.text}`} // Note also works if value = undefined
                option={co}
                selected={selectedOption && (selectedOption.value === co.value)}
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
