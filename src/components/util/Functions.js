class Functions {
  static strReplaceNewline(textWithoutBreaks) {
    let textWithBreaks = textWithoutBreaks.split('<br/>').join('\n').split('<br />').join('\n');
    return textWithBreaks;
  }

  static arrReplaceNewline = (textWithoutBreaks) => {
    let textArray = '';

    if (textWithoutBreaks.indexOf('<br/>') !== -1) {
      textArray = textWithoutBreaks.split('<br/>');
    } else if (textWithoutBreaks.indexOf('<br />') !== -1) {
      textArray = textWithoutBreaks.split('<br />');
    } else if (textWithoutBreaks.indexOf('\n') !== -1) {
      textArray = textWithoutBreaks.split('\n');
    }

    return textArray;
  };
}
export default Functions;
