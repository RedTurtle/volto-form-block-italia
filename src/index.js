
const applyConfig = (config) => {
  config.settings['volto-form-block-italia'] = {
    IconComponent: ({icon, style, title}) => <></>,
    FileWidgetComponent: ({ id, name,label,type,required,infoText,disabled, readOnly,invalid, onChange,onEdit,value })=><></>,
    TextEditorWidgetComponent: ({ value, selected, setSelected, placeholder, showToolbar, onChangeBlock }) => <></>,
    fromHtml: (value) => null,
  };
  return config;
};

export default applyConfig;
